import type { FAQEntry } from "@/types/candidate";

// ── 칩으로 노출할 FAQ ID 목록 (최대 5개 권장) ──────────────────────────
export const CHIP_IDS = ["faq_001", "faq_002", "faq_003"] as const;

// ── FAQ 데이터 ──────────────────────────────────────────────────────────
// answer_type: "grounded_full" | "grounded_partial" | "no_data" | "restricted"
// confidence: "high" | "medium" | "none"
export const mockFAQs: FAQEntry[] = [
  {
    id: "faq_001",
    chip_label: "지원 동기",
    question: "VC를 지원하는 이유가 무엇인가요?",
    answer_type: "grounded_full",
    confidence: "high",
    answer:
      "여기에 지원 동기를 자연스러운 문장으로 작성하세요. 단답형이 아닌, 맥락과 스토리가 이어지는 형태가 좋습니다.",
    sources: [
      {
        source_file: "philosophy.md",
        section: "지원 동기",
        chunk_id: "philosophy.motivation",
        supporting_snippet: "출처 요약을 간단히 적어주세요.",
        verifiable: false,
      },
    ],
  },
  {
    id: "faq_002",
    chip_label: "기술 역량",
    question: "본인의 기술 역량은 어느 정도인가요?",
    answer_type: "grounded_full",
    confidence: "high",
    answer:
      "여기에 기술 역량을 작성하세요. 사용 가능한 도구, 만든 프로젝트, 숙련도 등을 포함하면 좋습니다.",
    links: [
      { label: "GitHub 프로필", url: "https://github.com/YOUR_USERNAME" },
    ],
    sources: [
      {
        source_file: "resume.md",
        section: "기술 스택",
        chunk_id: "resume.skills",
        supporting_snippet: "출처 요약을 간단히 적어주세요.",
        verifiable: true,
      },
    ],
  },
  {
    id: "faq_003",
    chip_label: "이 제품을 만든 이유",
    question: "이 Q&A 인터페이스는 왜 만들었나요?",
    answer_type: "grounded_full",
    confidence: "high",
    answer:
      "이 인터페이스를 만든 이유를 작성하세요. 바이브코딩 역량을 보여주기 위해서, 등 자신만의 이유를 담아주세요.",
    sources: [
      {
        source_file: "portfolio.md",
        section: "제작 동기",
        chunk_id: "portfolio.motivation",
        supporting_snippet: "출처 요약을 간단히 적어주세요.",
        verifiable: true,
      },
    ],
  },
  // ── 더 추가하려면 아래에 복붙하세요 ──────────────────────────────────
  // {
  //   id: "faq_004",
  //   chip_label: "칩 라벨",
  //   question: "질문?",
  //   answer_type: "grounded_full",
  //   confidence: "high",
  //   answer: "답변 내용",
  //   sources: [{ source_file: "파일명", section: "섹션", chunk_id: "id", supporting_snippet: "요약", verifiable: false }],
  // },

  // ── 정보 없음 예시 ─────────────────────────────────────────────────
  {
    id: "faq_011",
    chip_label: "이전 투자 성과",
    question: "이전 투자 성과나 포트폴리오가 있나요?",
    answer_type: "no_data",
    confidence: "none",
    answer: "",
    sources: [],
    refusal_reason:
      "현재 제공된 자료에 해당 정보가 포함되어 있지 않습니다.",
  },
  // ── 공개 제외 예시 ─────────────────────────────────────────────────
  {
    id: "faq_013",
    chip_label: "연봉 기대치",
    question: "연봉 기대치는 어떻게 되나요?",
    answer_type: "restricted",
    confidence: "none",
    answer: "",
    sources: [],
    refusal_reason:
      "해당 항목은 후보자가 이 인터페이스의 공개 범위에서 제외하였습니다.",
  },
];

// ── 검색 함수 (수정 불필요) ─────────────────────────────────────────
export function findFAQById(id: string): FAQEntry | undefined {
  return mockFAQs.find((f) => f.id === id);
}

// ── 키워드 → FAQ 매핑 (질문과 연결되는 키워드 추가) ─────────────────
const KEYWORD_MAP: Record<string, string> = {
  "vc": "faq_001", "지원 이유": "faq_001", "동기": "faq_001",
  "기술": "faq_002", "스택": "faq_002", "코딩": "faq_002", "깃허브": "faq_002", "github": "faq_002",
  "인터페이스": "faq_003", "이 제품": "faq_003", "왜 만들": "faq_003",
  "투자 성과": "faq_011", "포트폴리오": "faq_011",
  "연봉": "faq_013", "급여": "faq_013",
};

export function findFAQByText(input: string): FAQEntry | undefined {
  const normalized = input.toLowerCase().trim();
  if (!normalized) return undefined;

  const exactMatch = mockFAQs.find(
    (faq) =>
      faq.question.toLowerCase().includes(normalized) ||
      normalized.includes(faq.question.toLowerCase()) ||
      faq.chip_label.toLowerCase().includes(normalized) ||
      normalized.includes(faq.chip_label.toLowerCase())
  );
  if (exactMatch) return exactMatch;

  for (const [keyword, faqId] of Object.entries(KEYWORD_MAP)) {
    if (normalized.includes(keyword)) {
      return mockFAQs.find((f) => f.id === faqId);
    }
  }

  return undefined;
}
