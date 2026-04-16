export type AnswerType =
  | "grounded_full"
  | "grounded_partial"
  | "restricted"
  | "no_data";

export type Confidence = "high" | "medium" | "low" | "none";

export interface SourceRef {
  source_file: string;
  section: string;
  chunk_id: string;
  supporting_snippet: string;
  verifiable: boolean;
}

export interface FAQEntry {
  id: string;
  chip_label: string;
  question: string;
  answer_type: AnswerType;
  confidence: Confidence;
  answer: string;
  sources: SourceRef[];
  disclaimer?: string;
  refusal_reason?: string;
}

export interface CandidateProfile {
  name: string;
  position: string;
  tagline: string;
  keywords: string[];
  lastUpdated: string;
}
