import type { FAQEntry } from "@/types/candidate";

export const CHIP_IDS = ["faq_001", "faq_002", "faq_003", "faq_005", "faq_008"] as const;

export const mockFAQs: FAQEntry[] = [
  {
    id: "faq_001",
    chip_label: "지원 동기",
    question: "VC를 지원하는 이유가 무엇인가요?",
    answer_type: "grounded_full",
    confidence: "high",
    answer:
      "AI 시대에 심사역의 역할이 바뀌어야 한다고 보고 있으며, 그 변화를 직접 실험하고 싶어서 지원하였습니다. 구체적으로는 딜 소싱이 인바운드 중심에서 현장 기반 아웃바운드로 확장되어야 한다는 가설을 갖고 있고, 해커톤·개발 커뮤니티·GitHub에서 먼저 신호를 포착하는 Scout형 접근을 인턴십에서 검증해보려 합니다.",
    sources: [
      {
        source_file: "philosophy.md",
        section: "지원 동기",
        chunk_id: "philosophy.motivation.vc_entry",
        supporting_snippet:
          "딜 소싱이 인바운드 중심에서 현장 기반 아웃바운드로 확장되어야 한다는 가설. 해커톤·개발 커뮤니티·GitHub에서 먼저 신호를 포착하는 Scout형 접근을 검증하고자 함.",
        verifiable: false,
      },
    ],
  },
  {
    id: "faq_002",
    chip_label: "기술 구현 수준",
    question: "AI를 직접 구현한 사례가 있나요?",
    answer_type: "grounded_full",
    confidence: "high",
    answer:
      "두 가지 도구를 직접 설계하고 구현하였습니다. 첫째, 이 Candidate Q&A 인터페이스입니다. Next.js 16 + TypeScript + Tailwind CSS 기반이며, 4-state 답변 분류기, 근거 출처 렌더링, 가드레일 정책을 포함합니다. 둘째, Google Apps Script 기반의 IPO 레이더로, 공모주 데이터 자동 수집, 동적 앵커 평가 엔진, 신호등 시각화 시스템을 구현하였습니다.",
    sources: [
      {
        source_file: "portfolio.md",
        section: "프로젝트 — Candidate Q&A Interface",
        chunk_id: "portfolio.projects.candidate_qa",
        supporting_snippet:
          "Next.js 16 + TypeScript + Tailwind CSS. 4-state 답변 분류기(grounded_full, grounded_partial, restricted, no_data), 근거 출처 렌더링, 가드레일 정책 포함.",
        verifiable: true,
      },
      {
        source_file: "portfolio.md",
        section: "프로젝트 — IPO 레이더",
        chunk_id: "portfolio.projects.ipo_radar",
        supporting_snippet:
          "Google Apps Script 기반. 공모주 데이터 자동 수집, 동적 앵커 평가 엔진, 신호등 시각화 시스템.",
        verifiable: true,
      },
    ],
  },
  {
    id: "faq_003",
    chip_label: "Scout형 접근이란",
    question: "Scout형 심사역이란 무엇인가요?",
    answer_type: "grounded_full",
    confidence: "high",
    answer:
      "투자 대상이 IR 자료를 들고 찾아오기 전에, 해커톤·개발 커뮤니티·오픈소스·GitHub 트렌드에서 초기 팀이나 기술 신호를 먼저 포착하는 역할을 가리킵니다. 기존의 인바운드 딜 플로우를 보완하는 아웃바운드 접근이며, 기술 도메인에 대한 이해와 현장 접근성을 전제로 합니다.",
    sources: [
      {
        source_file: "philosophy.md",
        section: "Scout형 심사역 정의",
        chunk_id: "philosophy.scout.definition",
        supporting_snippet:
          "IR 자료 수신 전에 해커톤·개발 커뮤니티·오픈소스·GitHub 트렌드에서 초기 팀/기술 신호를 먼저 포착하는 역할. 인바운드 딜 플로우를 보완하는 아웃바운드 접근.",
        verifiable: false,
      },
    ],
  },
  {
    id: "faq_004",
    chip_label: "Scout 실제 사례",
    question: "Scout형 심사역 접근의 구체적인 사례가 있나요?",
    answer_type: "grounded_partial",
    confidence: "medium",
    answer:
      "해커톤 현장에서 초기 팀을 관찰하고 접촉한 경험과, 온라인 개발 커뮤니티에서 오픈소스 프로젝트 기반으로 잠재적 창업 팀을 식별한 사례가 있습니다. 다만 접촉한 팀 수, 이후 창업 전환 여부, 투자 연결 사례 등 정량적 성과는 현재 자료에 포함되어 있지 않습니다.",
    disclaimer:
      "접촉 팀 수, 창업 전환 여부, 투자 연결 사례 등 정량적 성과는 미포함.",
    sources: [
      {
        source_file: "portfolio.md",
        section: "커뮤니티 활동",
        chunk_id: "portfolio.community.scout_activity",
        supporting_snippet:
          "해커톤 현장에서 초기 팀 관찰 및 접촉. 온라인 개발 커뮤니티에서 오픈소스 프로젝트 기반 잠재적 창업 팀 식별.",
        verifiable: false,
      },
    ],
  },
  {
    id: "faq_005",
    chip_label: "KAVA 선택 이유",
    question: "왜 KAVA에 지원하나요?",
    answer_type: "grounded_full",
    confidence: "high",
    answer:
      "KAVA가 초기 단계 스타트업에 집중하는 하우스이기 때문입니다. Scout형 접근은 레이터 스테이지보다 초기 투자 환경에서 실험 가능성이 높고, KAVA의 인턴십이 심사역 실무를 체계적으로 경험할 수 있는 구조를 갖추고 있다고 판단하여 지원하였습니다.",
    sources: [
      {
        source_file: "philosophy.md",
        section: "KAVA 선택 이유",
        chunk_id: "philosophy.motivation.why_kava",
        supporting_snippet:
          "초기 단계 스타트업 집중 하우스. Scout형 접근의 실험 가능성이 레이터 대비 높음. 인턴십에서 심사역 실무를 체계적으로 경험할 수 있는 구조.",
        verifiable: false,
      },
    ],
  },
  {
    id: "faq_006",
    chip_label: "기술 역량",
    question: "기술 역량 수준은 어느 정도인가요?",
    answer_type: "grounded_full",
    confidence: "high",
    answer:
      "TypeScript, React, Next.js로 웹 애플리케이션을 독립적으로 구현할 수 있습니다. Tailwind CSS로 UI를 직접 설계하고, Google Apps Script로 스프레드시트 기반 업무 자동화 도구를 제작한 경험이 있습니다. AI SDK 연동 및 구조화된 프롬프트 설계 경험도 포함됩니다. 전문 소프트웨어 엔지니어 수준이 아니라, 아이디어를 동작하는 프로토타입으로 빠르게 만들 수 있는 수준입니다.",
    sources: [
      {
        source_file: "resume.md",
        section: "기술 스택",
        chunk_id: "resume.skills.tech_stack",
        supporting_snippet:
          "TypeScript, React, Next.js — 웹 애플리케이션 독립 구현. Tailwind CSS — UI 직접 설계. Google Apps Script — 업무 자동화. AI SDK 연동, 프롬프트 설계.",
        verifiable: true,
      },
    ],
  },
  {
    id: "faq_007",
    chip_label: "해커톤 경험",
    question: "해커톤 참여 경험이 있나요?",
    answer_type: "grounded_partial",
    confidence: "medium",
    answer:
      "사우나 해커톤에 참여한 이력이 있습니다. 해커톤을 결과물 제출 목적이 아닌, 초기 팀 관찰과 기술 트렌드 파악의 현장으로 활용하였습니다. 참여 횟수, 수상 이력, 제출 결과물의 상세는 현재 자료에 포함되어 있지 않습니다.",
    disclaimer:
      "참여 횟수, 수상 이력, 제출 결과물 상세는 미포함.",
    sources: [
      {
        source_file: "portfolio.md",
        section: "해커톤",
        chunk_id: "portfolio.hackathon.sauna",
        supporting_snippet:
          "사우나 해커톤 참여. 결과물 제출 목적이 아닌, 초기 팀 관찰과 기술 트렌드 파악의 현장으로 활용.",
        verifiable: false,
      },
    ],
  },
  {
    id: "faq_008",
    chip_label: "이 제품을 만든 이유",
    question: "이 Q&A 인터페이스는 왜 만들었나요?",
    answer_type: "grounded_full",
    confidence: "high",
    answer:
      "VC 심사역이 후보자 자료를 검토할 때 생기는 즉각적 질문을 빠르게 확인할 수 있도록 설계한 검토 보조 도구입니다. 일반 챗봇이 아니라 근거 기반 제한형 Q&A 시스템으로, 세 가지 제약을 하드코딩하였습니다. 후보자 제공 자료에 근거가 없으면 답변하지 않음, 답변마다 근거 수준을 상태 배지로 표시, 모든 정보가 후보자 제공이라는 구조적 한계를 상단 고지문으로 명시.",
    sources: [
      {
        source_file: "portfolio.md",
        section: "프로젝트 — Candidate Q&A Interface 설계",
        chunk_id: "portfolio.projects.candidate_qa.design",
        supporting_snippet:
          "세 가지 제약 하드코딩: (1) 근거 없으면 답변 불가, (2) 답변마다 근거 수준 배지 표시, (3) 후보자 제공 한계를 상단 고지문으로 명시.",
        verifiable: true,
      },
    ],
  },
  {
    id: "faq_009",
    chip_label: "관심 투자 섹터",
    question: "관심 있는 투자 섹터나 산업은 무엇인가요?",
    answer_type: "grounded_partial",
    confidence: "medium",
    answer:
      "AI 인프라, 개발자 도구, 업무 자동화 영역에 관심이 있습니다. 직접 도구를 설계하고 사용한 경험에서 비롯된 관심입니다. 특정 기업에 대한 투자 의견이나 섹터별 시장 분석은 현재 자료에 포함되어 있지 않습니다.",
    disclaimer:
      "특정 기업 투자 의견, 섹터별 시장 분석은 미포함.",
    sources: [
      {
        source_file: "philosophy.md",
        section: "관심 섹터",
        chunk_id: "philosophy.sectors.interest",
        supporting_snippet:
          "관심 영역: AI 인프라, 개발자 도구, 업무 자동화. 직접 도구를 설계하고 사용한 경험에서 비롯.",
        verifiable: false,
      },
    ],
  },
  {
    id: "faq_010",
    chip_label: "인턴십 이후 계획",
    question: "인턴십 이후 어떤 방향을 계획하고 있나요?",
    answer_type: "grounded_full",
    confidence: "high",
    answer:
      "인턴십에서 심사역 실무의 기본기를 습득하고, Scout형 접근이 실제 VC 환경에서 작동하는지 검증하는 것이 1차 목표입니다. 장기적으로는 기술 도메인 이해를 기반으로 초기 스타트업 투자에서 역할을 하고 싶습니다. 현재 시점의 방향성이며, 인턴십 경험에 따라 조정될 수 있습니다.",
    sources: [
      {
        source_file: "philosophy.md",
        section: "커리어 방향",
        chunk_id: "philosophy.career.long_term",
        supporting_snippet:
          "1차 목표: 심사역 실무 기본기 습득, Scout형 접근의 실제 환경 검증. 장기: 기술 도메인 이해 기반 초기 스타트업 투자 역할.",
        verifiable: false,
      },
    ],
  },
  {
    id: "faq_011",
    chip_label: "이전 투자 성과",
    question: "이전 투자 성과나 포트폴리오가 있나요?",
    answer_type: "no_data",
    confidence: "none",
    answer: "",
    sources: [],
    refusal_reason:
      "현재 제공된 자료에 투자 성과 또는 투자 포트폴리오 관련 정보가 포함되어 있지 않습니다.",
  },
  {
    id: "faq_012",
    chip_label: "창업 경험",
    question: "창업 경험이 있나요?",
    answer_type: "no_data",
    confidence: "none",
    answer: "",
    sources: [],
    refusal_reason:
      "현재 제공된 자료에 창업 경험 관련 정보가 포함되어 있지 않습니다.",
  },
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
  {
    id: "faq_014",
    chip_label: "추천인/레퍼런스",
    question: "추천인이나 레퍼런스가 있나요?",
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

const KEYWORD_MAP: Record<string, string> = {
  "vc": "faq_001", "지원 이유": "faq_001", "동기": "faq_001", "왜 vc": "faq_001",
  "ai 구현": "faq_002", "ai 사례": "faq_002", "자동화": "faq_002", "도구": "faq_002", "ipo": "faq_002",
  "scout": "faq_003", "스카우트": "faq_003", "scout형": "faq_003",
  "scout 사례": "faq_004", "발굴": "faq_004", "커뮤니티 활동": "faq_004",
  "kava": "faq_005", "카바": "faq_005", "왜 kava": "faq_005",
  "기술": "faq_006", "스택": "faq_006", "프로그래밍": "faq_006", "코딩": "faq_006", "개발 역량": "faq_006",
  "해커톤": "faq_007", "hackathon": "faq_007", "사우나": "faq_007",
  "인터페이스": "faq_008", "이 제품": "faq_008", "q&a": "faq_008", "왜 만들": "faq_008", "설계 의도": "faq_008",
  "섹터": "faq_009", "투자 분야": "faq_009", "관심 분야": "faq_009", "산업": "faq_009",
  "이후": "faq_010", "계획": "faq_010", "향후": "faq_010", "목표": "faq_010", "커리어": "faq_010",
  "투자 성과": "faq_011", "포트폴리오": "faq_011", "실적": "faq_011",
  "창업": "faq_012", "스타트업 경험": "faq_012",
  "연봉": "faq_013", "급여": "faq_013", "보상": "faq_013",
  "추천인": "faq_014", "레퍼런스": "faq_014", "reference": "faq_014",
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
