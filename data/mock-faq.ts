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
      "직접 창업을 하고 초기 스타트업 현장을 가까이에서 경험하면서, AI가 창업의 문법 자체를 빠르게 바꾸고 있음을 체감했습니다. 혼자서 팀의 몫을 해내고 며칠 걸리던 작업을 짧은 시간 안에 끝내는 창업가들을 보며, 기업의 성패를 가르는 기준이 자본과 규모에서 실행의 속도와 밀도로 이동하고 있다고 느꼈습니다. 시장의 룰이 바뀌면 자본의 역할도 달라져야 한다고 생각하고, 그 변화의 최전선에서 창업가의 언어와 실행을 먼저 이해하고 새로운 가능성을 투자 판단으로 연결할 수 있는 벤처캐피탈리스트로 성장하고 싶어 지원하였습니다.",
    sources: [
      {
        source_file: "philosophy.md",
        section: "지원 동기",
        chunk_id: "philosophy.motivation.vc_entry",
        supporting_snippet:
          "AI가 창업의 문법 자체를 바꾸고 있음을 체감. 실행의 속도와 밀도로 기준 이동. 변화의 최전선에서 창업가의 언어를 투자 판단으로 연결하는 VC로 성장하고자 함.",
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
      "개인 투자에 활용하는 용도로 빌드한 비공개 프로젝트를 포함하면 20개 이상이지만, GitHub에 공개된 5개를 기준으로 설명하겠습니다. 지금 보고 있는 이 Candidate Q&A Interface는 Next.js 16과 TypeScript로 만든 근거 제한형 Q&A 시스템이고, Dynamic CIDS IPO Radar는 Google Apps Script 기반으로 공모주 데이터를 자동 수집해 동적 앵커 평가와 신호등 시각화를 수행하는 도구입니다. Swim Dashboard는 AR 수영 고글 앱 Form의 데이터를 API로 수집하여 전체 수영 페이스와 개선점을 한눈에 볼 수 있도록 만든 TypeScript 웹 대시보드이며, Metaprompt Design Engine은 사용자의 막연한 요청을 고해상도 프롬프트 시스템으로 재설계하는 프레임워크입니다. Performance Formula는 JavaScript 기반의 정량 성과 분석 도구입니다. 전체 소스 코드는 GitHub에서 확인할 수 있습니다.",
    links: [
      { label: "GitHub 프로필", url: "https://github.com/berkshirehathaways" },
    ],
    sources: [
      {
        source_file: "portfolio.md",
        section: "프로젝트 목록",
        chunk_id: "portfolio.projects.overview",
        supporting_snippet:
          "공개 5개 프로젝트: Candidate Q&A(Next.js/TS), IPO Radar(GAS), Swim Dashboard(TS), Metaprompt Design Engine(Shell), Performance Formula(JS).",
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
      "유망한 팀이 정제된 피치덱을 들고 찾아오기를 기다리는 것이 아니라, 해커톤이나 개발 커뮤니티, 오픈소스 프로젝트, GitHub 트렌드 같은 현장에서 초기 팀이나 기술 신호를 먼저 포착하는 역할을 뜻합니다. 기존 인바운드 딜 플로우를 보완하는 아웃바운드 접근이며, 팀의 학습 속도와 실행 밀도가 가장 날것으로 드러나는 최전선에서 가능성을 읽어내는 것이 핵심입니다.",
    sources: [
      {
        source_file: "philosophy.md",
        section: "Scout형 심사역 정의",
        chunk_id: "philosophy.scout.definition",
        supporting_snippet:
          "피치덱 수신 전에 해커톤·개발 커뮤니티·오픈소스·GitHub 트렌드에서 초기 팀/기술 신호를 먼저 포착. 인바운드 딜 플로우를 보완하는 아웃바운드 접근.",
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
      "Cursor 해커톤에 직접 참여해 글로벌 AI 생태계 관계자들과 접점을 만들었고, 현재 OpenAI Codex, NC AI 등과 해커톤 협업을 논의하고 있습니다. ETHCon Seoul 이후에도 여러 해커톤과 커뮤니티 행사에서 빌더들과 접점을 넓혀왔으며, KBW 당시에는 커뮤니티 행사 예산 0원 상태에서 글로벌 기업에 피칭해 1.5만 달러의 후원을 조달한 경험도 있습니다. 다만 접촉한 팀의 이후 창업 전환 여부나 투자 연결 사례 등 정량적 성과는 아직 자료에 포함되어 있지 않습니다.",
    disclaimer:
      "접촉 팀의 창업 전환 여부, 투자 연결 사례 등 정량적 성과는 미포함.",
    sources: [
      {
        source_file: "portfolio.md",
        section: "커뮤니티 활동 및 소싱",
        chunk_id: "portfolio.community.scout_activity",
        supporting_snippet:
          "Cursor 해커톤 참여, Codex·NC AI 협업 논의. ETHCon Seoul 이후 해커톤·커뮤니티 행사 다수. KBW 예산 0원에서 1.5만 달러 후원 조달.",
        verifiable: false,
      },
    ],
  },
  {
    id: "faq_005",
    chip_label: "KAVA 선택 이유",
    question: "왜 KAVA 과정에 지원했나요?",
    answer_type: "grounded_full",
    confidence: "high",
    answer:
      "2010년대부터 창업과 스타트업 업계에서 활동하며 창업투자에 자연스럽게 관심을 갖게 되었습니다. 초기 기업 투자 참여와 멘토 활동을 통해 창업가의 성장 과정을 가까이서 지켜보았고, 장기적 관점에서 기업의 성장을 함께 책임지는 투자자 역할에 의미를 느껴 벤처캐피탈리스트로의 방향을 확정하였습니다. 이후 국민대학교 글로벌 벤처창업대학원에 진학해 벤처투자에 대한 학습을 시작하였으며, 현장의 감각을 하우스의 공식적인 자본의 문법으로 체계화하려면 실무 중심의 체계적 교육이 필요하다고 판단하여 KAVA 과정에 지원하게 되었습니다.",
    sources: [
      {
        source_file: "philosophy.md",
        section: "KAVA 지원 배경",
        chunk_id: "philosophy.motivation.why_kava",
        supporting_snippet:
          "2010년대부터 창업/스타트업 업계 활동. 초기 기업 투자 참여, 멘토 활동. 국민대 글로벌 벤처창업대학원 진학. 현장 감각을 자본의 문법으로 체계화하기 위해 KAVA 지원.",
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
      "전문 소프트웨어 엔지니어는 아니지만, AI 도구를 활용해 아이디어를 동작하는 프로토타입으로 빠르게 만들 수 있는 수준입니다. TypeScript와 React, Next.js로 웹 애플리케이션을 독립적으로 구현할 수 있고, Tailwind CSS로 UI를 직접 설계합니다. Google Apps Script로 스프레드시트 기반 업무 자동화 도구를 제작한 경험이 있으며, AI SDK 연동과 구조화된 프롬프트 설계를 통해 Cursor, Codex, Claude Code 같은 AI 스택을 실무에 활용하고 있습니다.",
    sources: [
      {
        source_file: "resume.md",
        section: "기술 스택",
        chunk_id: "resume.skills.tech_stack",
        supporting_snippet:
          "TypeScript, React, Next.js 웹앱 독립 구현. Tailwind CSS UI 설계. GAS 업무 자동화. AI SDK 연동, 프롬프트 설계. Cursor, Codex, Claude Code 활용.",
        verifiable: true,
      },
    ],
  },
  {
    id: "faq_007",
    chip_label: "해커톤 경험",
    question: "해커톤 참여 경험이 있나요?",
    answer_type: "grounded_full",
    confidence: "high",
    answer:
      "Cursor 사우나 해커톤에 참여하였고, ETHCon Seoul을 비롯한 여러 해커톤과 커뮤니티 행사에도 참석해왔습니다. 해커톤을 단순히 결과물을 제출하는 경연이 아니라, 초기 팀의 실행력과 기술 트렌드를 현장에서 직접 관찰하는 Scout 활동의 무대로 활용하고 있습니다. 인턴 기간 동안 해커톤과 커뮤니티 행사에 6회 이상 직접 참여하는 것을 목표로 하고 있습니다.",
    sources: [
      {
        source_file: "portfolio.md",
        section: "해커톤",
        chunk_id: "portfolio.hackathon.overview",
        supporting_snippet:
          "Cursor 사우나 해커톤 참여, ETHCon Seoul 등 다수 행사 참석. 해커톤을 Scout 활동의 현장으로 활용. 인턴 기간 6회 이상 참여 목표.",
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
      "비개발자이지만 다양한 AI 도구를 활용해 가시적인 결과물을 만들어낼 수 있다는 점을 보여주기 위해 제작하였습니다. 예비 VC로서 코드를 직접 작성하는 것이 아니라 AI를 도구로 활용해 실제 동작하는 제품을 설계하고 구현할 수 있는 AI Native라는 점이 이 인터페이스의 핵심 메시지입니다. 기획부터 설계, 프롬프트 엔지니어링, 구현, 배포까지 전 과정을 AI 도구와 함께 수행하였습니다. 그리고 — 멋지잖아요?",
    sources: [
      {
        source_file: "portfolio.md",
        section: "프로젝트 — Candidate Q&A Interface 제작 동기",
        chunk_id: "portfolio.projects.candidate_qa.motivation",
        supporting_snippet:
          "비개발자가 AI 도구를 활용해 가시적 결과물을 만들어내는 AI Native임을 증명. 기획부터 배포까지 전 과정을 AI 도구와 함께 수행.",
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
      "AI 인프라와 개발자 도구, 업무 자동화 영역에 관심이 있습니다. 직접 도구를 설계하고 사용해오면서 이 분야의 실제 워크플로우와 페인포인트를 체감한 경험에서 비롯된 관심입니다. 다만 특정 기업에 대한 투자 의견이나 섹터별 시장 분석까지는 현재 자료에 포함되어 있지 않습니다.",
    disclaimer:
      "특정 기업 투자 의견, 섹터별 시장 분석은 미포함.",
    sources: [
      {
        source_file: "philosophy.md",
        section: "관심 섹터",
        chunk_id: "philosophy.sectors.interest",
        supporting_snippet:
          "관심 영역: AI 인프라, 개발자 도구, 업무 자동화. 직접 도구를 설계·사용한 경험에서 비롯된 관심.",
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
      "인턴 기간 동안 해커톤과 커뮤니티 행사에 6회 이상 직접 참여하며 현장에서 빌더를 가장 가까이서 읽는 것이 첫 번째 목표입니다. 나아가 하우스가 직접 여는 해커톤을 기획하고, 현장에서 포착한 팀을 논리와 수치를 갖춘 투자심사보고서로 구조화해 소싱에서 투자 판단까지의 전 과정을 인턴 기간 내에 한 번 완수하고 싶습니다. 장기적으로는 AI 생태계의 원석을 가장 먼저 포착하고 그 가치를 자본의 언어로 완성해오는 심사역으로 성장하는 것을 목표로 하고 있습니다.",
    sources: [
      {
        source_file: "philosophy.md",
        section: "입사 후 포부",
        chunk_id: "philosophy.career.goals",
        supporting_snippet:
          "해커톤·커뮤니티 6회 이상 참여, 하우스 주최 해커톤 기획, 소싱→투자심사보고서 1건 완수. 장기: AI 생태계 원석을 자본의 언어로 완성하는 심사역.",
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
    id: "faq_015",
    chip_label: "취미",
    question: "취미가 뭐예요?",
    answer_type: "grounded_full",
    confidence: "high",
    answer:
      "책 보는 걸 좋아합니다. 투자 서적, 소설, 에세이 등 가리지 않고 두루두루 보는 편인데, 매년 초 이상문학상 수상집을 읽는 게 루틴이라면 루틴입니다. 그리고 수영을 주 3회 이상 하고 있어서, 수영 퍼포먼스를 실시간으로 추적하는 AR 수영 고글을 쓰고 있고, 그 데이터를 한눈에 보기 위해 직접 Swim Dashboard도 만들었습니다.",
    sources: [
      {
        source_file: "personal.md",
        section: "취미 및 일상",
        chunk_id: "personal.hobbies",
        supporting_snippet:
          "독서: 투자 서적, 소설, 에세이 전방위. 매년 이상문학상 수상집 루틴. 수영 주 3회+, AR 고글 착용, Swim Dashboard 직접 제작.",
        verifiable: false,
      },
    ],
  },
  {
    id: "faq_016",
    chip_label: "MBTI",
    question: "MBTI가 뭐예요?",
    answer_type: "grounded_full",
    confidence: "high",
    answer:
      "ENTP입니다. 주변에서도 그럴 거 같다고 하더라고요.",
    sources: [
      {
        source_file: "personal.md",
        section: "성격",
        chunk_id: "personal.mbti",
        supporting_snippet: "MBTI: ENTP.",
        verifiable: false,
      },
    ],
  },
  {
    id: "faq_017",
    chip_label: "좋아하는 책",
    question: "좋아하는 책이나 영향받은 책이 있나요?",
    answer_type: "grounded_full",
    confidence: "high",
    answer:
      "사업과 투자하는 방법을 수십 년에 걸쳐 보여주는 버크셔 해서웨이 주주서한 모음집을 가장 좋아합니다. 그리고 매년 나오는 이상문학상 수상집도 빠지지 않고 읽습니다. 단편의 맛을 보여준다고 할까요.",
    sources: [
      {
        source_file: "personal.md",
        section: "독서",
        chunk_id: "personal.books",
        supporting_snippet:
          "버크셔 해서웨이 주주서한 모음집(가장 좋아하는 책). 이상문학상 수상집(매년 루틴).",
        verifiable: false,
      },
    ],
  },
  {
    id: "faq_018",
    chip_label: "운동",
    question: "운동 하세요?",
    answer_type: "grounded_full",
    confidence: "high",
    answer:
      "수영을 주 3회 이상 합니다. AR 수영 고글을 착용해서 수영 퍼포먼스를 실시간으로 추적하고 있고, 그 데이터를 API로 수집해 전체 페이스와 개선점을 한눈에 볼 수 있는 Swim Dashboard를 직접 만들어 쓰고 있습니다.",
    sources: [
      {
        source_file: "personal.md",
        section: "운동",
        chunk_id: "personal.exercise",
        supporting_snippet:
          "수영 주 3회+. AR 수영 고글 착용, 퍼포먼스 실시간 추적. Swim Dashboard 직접 제작(TypeScript).",
        verifiable: false,
      },
    ],
  },
  {
    id: "faq_019",
    chip_label: "요즘 관심사",
    question: "요즘 빠져 있는 게 뭐예요?",
    answer_type: "grounded_full",
    confidence: "high",
    answer:
      "요즘은 AI가 일으킬 임팩트, AGI와 ASI 이후의 인간의 삶, 보편소득과 보편고소득 같은 주제에 대해 20년, 30년 뒤의 미래를 공상해보는 데 빠져 있습니다.",
    sources: [
      {
        source_file: "personal.md",
        section: "관심사",
        chunk_id: "personal.interests.current",
        supporting_snippet:
          "AI 임팩트, AGI/ASI 이후 인간의 삶, 보편소득·보편고소득 등 장기 미래 공상.",
        verifiable: false,
      },
    ],
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
  "ai 구현": "faq_002", "ai 사례": "faq_002", "ai 사용": "faq_002", "ai 경험": "faq_002", "자동화": "faq_002", "도구": "faq_002", "ipo": "faq_002", "깃허브": "faq_002", "github": "faq_002", "프로젝트": "faq_002",
  "scout": "faq_003", "스카우트": "faq_003", "scout형": "faq_003",
  "scout 사례": "faq_004", "발굴": "faq_004", "커뮤니티 활동": "faq_004", "소싱": "faq_004",
  "kava": "faq_005", "카바": "faq_005", "왜 kava": "faq_005",
  "기술": "faq_006", "스택": "faq_006", "프로그래밍": "faq_006", "코딩": "faq_006", "개발 역량": "faq_006",
  "해커톤": "faq_007", "hackathon": "faq_007", "사우나": "faq_007",
  "인터페이스": "faq_008", "이 제품": "faq_008", "q&a": "faq_008", "왜 만들": "faq_008", "설계 의도": "faq_008",
  "섹터": "faq_009", "투자 분야": "faq_009", "관심 분야": "faq_009", "산업": "faq_009",
  "이후": "faq_010", "계획": "faq_010", "향후": "faq_010", "목표": "faq_010", "커리어": "faq_010", "포부": "faq_010",
  "투자 성과": "faq_011", "포트폴리오": "faq_011", "실적": "faq_011",
  "창업": "faq_012", "스타트업 경험": "faq_012",
  "연봉": "faq_013", "급여": "faq_013", "보상": "faq_013",
  "취미": "faq_015", "여가": "faq_015", "쉴 때": "faq_015",
  "mbti": "faq_016", "성격": "faq_016", "entp": "faq_016",
  "책": "faq_017", "독서": "faq_017", "추천 도서": "faq_017", "버크셔": "faq_017", "이상문학": "faq_017",
  "운동": "faq_018", "수영": "faq_018", "헬스": "faq_018",
  "요즘": "faq_019", "관심사": "faq_019", "빠져": "faq_019", "agi": "faq_019", "asi": "faq_019",
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
