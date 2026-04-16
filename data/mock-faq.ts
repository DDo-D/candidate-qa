import type { FAQEntry } from "@/types/candidate";

export const mockFAQs: FAQEntry[] = [
  {
    id: "faq_001",
    chip_label: "VC 지원 이유",
    question: "VC를 지원하는 이유가 무엇인가요?",
    answer_type: "grounded_full",
    confidence: "high",
    answer:
      "단순히 VC 업계에 진입하려는 것이 아니라, AI 시대에 맞는 심사역의 역할을 재정의하고자 합니다. 기존 심사역이 창업가를 기다리는 구조라면, 지향하는 방향은 현장과 커뮤니티, 해커톤, 깃허브에서 먼저 신호를 포착하는 Scout형 접근입니다. 창업가가 찾아오기를 기다리는 것이 아니라, 신호가 약할 때 먼저 발견하는 역할을 하고 싶습니다.",
    sources: [
      {
        source_file: "faq_bank.json",
        section: "지원 동기",
        chunk_id: "faq.motivation.vc_entry",
        supporting_snippet:
          "AI 시대에 맞는 심사역의 역할을 재정의하고자 합니다. 현장과 커뮤니티, 해커톤, 깃허브에서 먼저 신호를 포착하는 Scout형 접근.",
        verifiable: false,
      },
    ],
  },
  {
    id: "faq_002",
    chip_label: "AI 구현 사례",
    question: "AI를 직접 구현한 사례가 있나요?",
    answer_type: "grounded_full",
    confidence: "high",
    answer:
      "업무형 인터페이스와 자동화 도구를 직접 설계하고 구현한 경험이 있습니다. 이 Q&A 인터페이스 자체가 그 중 하나입니다. 구조화된 데이터 기반의 6-state 분류기, 가드레일 정책, 근거 중심 답변 렌더링을 직접 설계하고 구현하였습니다. AI를 말로 아는 것이 아니라 실제 제품 구조로 다룰 수 있는 수준입니다.",
    sources: [
      {
        source_file: "portfolio.md",
        section: "AI 구현 프로젝트",
        chunk_id: "portfolio.projects.ai_interface",
        supporting_snippet:
          "구조화된 데이터 기반의 6-state 분류기, 가드레일 정책, 근거 중심 답변 렌더링을 직접 설계하고 구현.",
        verifiable: true,
      },
    ],
  },
  {
    id: "faq_003",
    chip_label: "Scout 접근 사례",
    question: "Scout형 심사역 접근의 구체적인 사례가 있나요?",
    answer_type: "grounded_partial",
    confidence: "medium",
    answer:
      "해커톤 및 개발 커뮤니티 현장에서 초기 팀을 직접 발굴하고 연결한 경험이 있습니다. 온라인 개발자 커뮤니티와 오픈소스 프로젝트에서 잠재력 있는 팀을 관찰하고 접촉한 사례도 포함됩니다. 다만 해당 활동의 구체적 성과 수치와 연결된 팀의 이후 현황은 이 자료에 포함되어 있지 않습니다.",
    disclaimer:
      "활동의 정량적 성과 및 연결된 팀의 현황은 현재 제공된 자료에 포함되어 있지 않습니다.",
    sources: [
      {
        source_file: "portfolio.md",
        section: "커뮤니티 활동",
        chunk_id: "portfolio.community.scout_activity",
        supporting_snippet:
          "해커톤 및 개발 커뮤니티 현장에서 초기 팀을 직접 발굴하고 연결한 경험. 온라인 개발자 커뮤니티와 오픈소스 프로젝트에서 잠재력 있는 팀 관찰 및 접촉.",
        verifiable: false,
      },
    ],
  },
  {
    id: "faq_004",
    chip_label: "이전 투자 성과",
    question: "이전 투자 성과나 포트폴리오가 있나요?",
    answer_type: "no_data",
    confidence: "none",
    answer: "",
    sources: [],
    refusal_reason:
      "현재 제공된 자료에 투자 성과 또는 포트폴리오 관련 정보가 포함되어 있지 않습니다.",
  },
  {
    id: "faq_005",
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

export function findFAQById(id: string): FAQEntry | undefined {
  return mockFAQs.find((f) => f.id === id);
}

export function findFAQByText(input: string): FAQEntry | undefined {
  const normalized = input.toLowerCase().trim();
  if (!normalized) return undefined;

  return mockFAQs.find(
    (faq) =>
      faq.question.toLowerCase().includes(normalized) ||
      normalized.includes(faq.question.toLowerCase()) ||
      faq.chip_label.toLowerCase().includes(normalized) ||
      normalized.includes(faq.chip_label.toLowerCase())
  );
}
