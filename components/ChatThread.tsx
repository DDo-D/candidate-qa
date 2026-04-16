"use client";

import { useEffect, useRef, useCallback, type ReactNode } from "react";
import type { Message } from "@/types/message";
import IntroMessage from "./IntroMessage";
import UserMessage from "./UserMessage";
import AnswerCard from "./AnswerCard";
import TerminalOutput from "./TerminalOutput";

interface Props {
  messages: Message[];
  header?: ReactNode;
}

export default function ChatThread({ messages, header }: Props) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const latestUserMsgRef = useRef<HTMLDivElement>(null);

  const scrollToTarget = useCallback(() => {
    if (latestUserMsgRef.current && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const target = latestUserMsgRef.current;
      const targetTop = target.offsetTop - container.offsetTop;
      container.scrollTo({ top: targetTop - 16, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    scrollToTarget();
  }, [messages.length, scrollToTarget]);

  const lastUserIdx = (() => {
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].type === "user_question") return i;
    }
    return -1;
  })();

  return (
    <div
      ref={scrollContainerRef}
      className="thread-scroll flex-1 overflow-y-auto"
    >
      {header}
      <div className="flex flex-col gap-4 py-4 pb-6">
        {messages.map((msg, idx) => {
          const isLatestUser = idx === lastUserIdx;
          switch (msg.type) {
            case "intro":
              return <IntroMessage key={msg.id} />;
            case "user_question":
              return (
                <div key={msg.id} ref={isLatestUser ? latestUserMsgRef : undefined}>
                  <UserMessage text={msg.text} />
                </div>
              );
            case "answer":
              return <AnswerCard key={msg.id} entry={msg.entry} />;
            case "easter_egg":
              return (
                <TerminalOutput
                  key={msg.id}
                  command={msg.command}
                  output={msg.output}
                />
              );
            case "loading":
              return (
                <div
                  key={msg.id}
                  className="mx-4 h-20 animate-pulse rounded-lg border border-zinc-800 bg-zinc-900"
                />
              );
          }
        })}
      </div>
    </div>
  );
}
