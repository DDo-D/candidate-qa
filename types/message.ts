import type { FAQEntry } from "./candidate";

interface BaseMessage {
  id: string;
  timestamp: number;
}

export interface IntroMessage extends BaseMessage {
  type: "intro";
}

export interface UserMessage extends BaseMessage {
  type: "user_question";
  text: string;
}

export interface AnswerMessage extends BaseMessage {
  type: "answer";
  entry: FAQEntry;
}

export interface LoadingMessage extends BaseMessage {
  type: "loading";
}

export type Message =
  | IntroMessage
  | UserMessage
  | AnswerMessage
  | LoadingMessage;
