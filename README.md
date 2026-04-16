# Candidate Q&A Interface

VC 심사역이 후보자 자료를 검토하는 중 생기는 즉각적 질문에 대해,
근거 있는 답변을 빠르게 반환하는 **문서 기반 제한형 Q&A 인터페이스**.

> 챗봇이 아니다. 후보자를 대신하는 봇도 아니다.
> PPT나 이력서를 읽다가 생기는 질문을 바로 던질 수 있게 해주는 **검토 보조 레이어**다.

## Product Identity

| 항목 | 내용 |
|------|------|
| 제품 유형 | Due Diligence Friction Reducer |
| 핵심 가치 | 검토 속도 향상 + 신뢰 보존 |
| 사용자 | VC 하우스 담당자 / 심사역 |
| 후보자 | 신종목 (KAVA 인턴십 · 심사역 트랙) |
| 신뢰 공식 | 신뢰 = 답변 속도 × 근거 명확성 × 한계의 솔직함 |

## Tech Stack

| 구분 | 선택 |
|------|------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Runtime | React 19 |
| Deployment | Vercel (예정) |

## Quick Start

```bash
cd candidate-qa
npm install
npm run dev
# → http://localhost:3000
```

## Architecture

### Phase 1 (현재) — FAQ-first + Structured Data

```
[User Input]
     │
     ▼
[StickyInputBar] ← chips (5개 FAQ) + textarea
     │
     ▼
[Mock Lookup] ← chip ID 직접 매핑 / includes 기반 텍스트 매칭
     │
     ├─ match found → FAQ 직접 반환
     ├─ match miss → no_data fallback
     │
     ▼
[AnswerCard] ← 4-state: grounded_full | grounded_partial | restricted | no_data
     │
     ▼
[SourceInfo] ← file + section 상시 노출 + snippet 토글
```

### Phase 2 (미구현) — Lightweight Retrieval 추가

FAQ/structured data miss 시 evidence 문서에서 벡터 검색 fallback.

## Answer State Model

| State | Badge | 조건 |
|-------|-------|------|
| `grounded_full` | ● 근거 있음 | 질문이 제공 데이터와 명확히 매핑됨 |
| `grounded_partial` | ◐ 부분 확인 | 관련 데이터 존재하나 불완전 |
| `restricted` | ○ 공개 제한 | 후보자가 공개 범위 명시적 제한 |
| `no_data` | — 정보 없음 | 데이터 자체가 없음 |

향후 추가 예정: `adversarial` (프롬프트 인젝션), `irrelevant` (무관 질문)

## Guardrail Policy

1. 제공된 문서에 근거가 없는 내용은 절대 답변하지 않는다.
2. 추측, 추론, 미래 예측은 "문서에 없음"으로 처리한다.
3. 긍정적 포장 언어(brilliant, exceptional 등)는 사용하지 않는다.
4. 후보자의 인성, 적합성, 고용 가능성에 대한 평가는 하지 않는다.
5. 출처를 반드시 명시한다. 출처 없는 답변은 허용하지 않는다.
6. `verifiable: false` 항목은 "[후보자 진술 기반 — 외부 검증 없음]" 태그 자동 삽입.

## File Structure

```
candidate-qa/
├── app/
│   ├── layout.tsx              # DisclosureBanner 마운트, flex column layout
│   ├── page.tsx                # 전체 조립: Header + ChatThread + StickyInputBar
│   └── globals.css             # Tailwind base + thread scroll
│
├── components/
│   ├── DisclosureBanner.tsx    # amber banner, sticky top (닫기 없음)
│   ├── CandidateHeader.tsx     # compact 2행: 이름·포지션 + 키워드 태그
│   ├── ChatThread.tsx          # messages[] 렌더, overflow-y-auto, UserMessage 기준 scroll
│   ├── IntroMessage.tsx        # thread 첫 시스템 카드
│   ├── UserMessage.tsx         # 우측 bubble (zinc-800)
│   ├── AnswerCard.tsx          # ★ 4-state card (변경 금지)
│   ├── SourceInfo.tsx          # ★ file+section 상시 노출 + snippet 토글 (변경 금지)
│   ├── SuggestionChips.tsx     # 5개 chip, 클릭 시 textarea 채우기만
│   ├── QuestionInput.tsx       # textarea + helper text + submit
│   └── StickyInputBar.tsx      # chips + input 래퍼, shrink-0
│
├── data/
│   ├── mock-profile.ts         # CandidateProfile (신종목)
│   └── mock-faq.ts             # FAQ 5개 + findFAQById/findFAQByText
│
├── types/
│   ├── candidate.ts            # ★ AnswerType, Confidence, SourceRef, FAQEntry, CandidateProfile
│   └── message.ts              # IntroMessage, UserMessage, AnswerMessage, LoadingMessage
│
├── AGENTS.md                   # AI 에이전트 핸드오프 컨텍스트
├── STATUS.md                   # 현재 구현 상태 + 남은 작업
└── README.md                   # 이 파일
```

## Design Decisions

### UI: Chat-like 컨테이너, Structured Q&A 본체

- 겉은 chat thread (질문-답변 쌍 누적)
- 속은 state-aware answer card (자유 텍스트 bubble 아님)
- user_question만 bubble, answer는 항상 full-width card

### Trust: Self-serving bias를 숨기지 않고 드러냄

- Persistent Disclosure Banner: "후보자 제공 자료 기반 · 외부 미검증"
- Per-answer state badge (●/◐/○/—)
- SourceInfo 기본 노출 (file + section)
- `verifiable: false` 태그 자동 삽입

### Color: 극도의 절제

- 기본: zinc 계열 전용
- amber: DisclosureBanner + grounded_partial만
- emerald, blue, red: 사용 금지
- grounded_full: 별도 강조색 없음 (정상 카드 = 신뢰 신호)

## Scripts

```bash
npm run dev      # 개발 서버 (Turbopack)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버
npm run lint     # ESLint
```
