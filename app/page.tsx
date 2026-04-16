"use client";

import { useState } from "react";
import CandidateHeader from "@/components/CandidateHeader";
import ChatThread from "@/components/ChatThread";
import StickyInputBar from "@/components/StickyInputBar";
import { mockProfile } from "@/data/mock-profile";
import { mockFAQs, CHIP_IDS, findFAQById, findFAQByText } from "@/data/mock-faq";
import { checkEasterEgg } from "@/data/easter-eggs";
import type { Message, AnswerMessage, LoadingMessage, EasterEggMessage } from "@/types/message";
import type { FAQEntry } from "@/types/candidate";

const chips = mockFAQs
  .filter((f) => (CHIP_IDS as readonly string[]).includes(f.id))
  .map((f) => ({
    id: f.id,
    label: f.chip_label,
    question: f.question,
  }));

const NO_DATA_FALLBACK: FAQEntry = {
  id: "_fallback",
  chip_label: "",
  question: "",
  answer_type: "no_data",
  confidence: "none",
  answer: "",
  sources: [],
  refusal_reason: "현재 제공된 자료에 해당 정보가 포함되어 있지 않습니다.",
};

const LOADING_ID = "_loading";

const INITIAL_MESSAGES: Message[] = [
  { id: "intro", type: "intro", timestamp: 0 },
];

export default function Page() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [selectedChipId, setSelectedChipId] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  function handleChipSelect(id: string, question: string) {
    setSelectedChipId(id);
    setInputValue(question);
  }

  function handleInputChange(value: string) {
    setInputValue(value);
    if (selectedChipId) setSelectedChipId(undefined);
  }

  function handleSubmit() {
    if (!inputValue.trim() || isLoading) return;

    const queryText = inputValue;
    setInputValue("");
    setSelectedChipId(undefined);

    if (queryText.trim().toLowerCase() === "clear") {
      setMessages(INITIAL_MESSAGES);
      return;
    }

    const egg = selectedChipId ? null : checkEasterEgg(queryText);

    const userMsgId = `user_${Date.now()}`;

    if (egg) {
      const eggMsg: EasterEggMessage = {
        id: `egg_${Date.now()}`,
        type: "easter_egg",
        command: egg.command,
        output: egg.output,
        timestamp: Date.now(),
      };
      setMessages((prev) => [
        ...prev,
        { id: userMsgId, type: "user_question", text: queryText, timestamp: Date.now() },
        eggMsg,
      ]);
      return;
    }

    const queryChipId = selectedChipId;
    const answerMsgId = `answer_${Date.now()}`;

    const loadingMsg: LoadingMessage = {
      id: LOADING_ID,
      type: "loading",
      timestamp: Date.now(),
    };

    setMessages((prev) => [
      ...prev,
      { id: userMsgId, type: "user_question", text: queryText, timestamp: Date.now() },
      loadingMsg,
    ]);
    setIsLoading(true);

    setTimeout(() => {
      let result: FAQEntry | undefined;
      if (queryChipId) result = findFAQById(queryChipId);
      if (!result) result = findFAQByText(queryText);

      const answerMsg: AnswerMessage = {
        id: answerMsgId,
        type: "answer",
        entry: result ?? NO_DATA_FALLBACK,
        timestamp: Date.now(),
      };

      setMessages((prev) =>
        prev.filter((m) => m.id !== LOADING_ID).concat(answerMsg)
      );
      setIsLoading(false);
    }, 500);
  }

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <ChatThread messages={messages} header={<CandidateHeader profile={mockProfile} />} />
      <StickyInputBar
        chips={chips}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onChipSelect={handleChipSelect}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        selectedChipId={selectedChipId}
      />
    </div>
  );
}
