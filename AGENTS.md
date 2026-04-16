<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Candidate Q&A — Agent Handoff Context

## 프로젝트 정체성

이 프로젝트는 **블로그가 아니다**. 개인 쇼케이스도 아니다.
VC 심사역이 후보자(신종목)에 대해 궁금한 점을 빠르게 확인하는
**문서 기반 제한형 Q&A 인터페이스**다.

과거 대화에서 블로그/콘텐츠 사이트로 추정하는 실수가 반복되었다.
이 repo에는 posts, articles, blog, mdx content 관련 코드가 없다.

## 필수 규칙: STATUS.md 업데이트

**모든 작업 턴이 끝나면 반드시 `STATUS.md`를 업데이트하라.** 이것은 선택이 아니다.

- 완료한 항목: `[ ]` → `[x]`로 변경
- 새로 발견된 작업: 적절한 섹션에 `[ ]`로 추가
- 최종 업데이트 날짜: 파일 상단의 날짜를 현재 날짜로 갱신
- 빌드 상태: 빌드를 돌렸으면 결과 반영 (✅ passing / ❌ failing)

STATUS.md가 최신이 아니면 다음 세션의 에이전트가 잘못된 상태에서 출발한다.
작업 완료 보고 전에 STATUS.md 업데이트가 되었는지 스스로 확인하라.

## 컨텍스트 복구 순서

1. 이 파일 (`AGENTS.md`) 읽기
2. `STATUS.md` 읽기 — 현재 구현 상태 + 남은 작업 목록
3. `README.md` 읽기 — 아키텍처, 타입, 가드레일 정책
4. 필요 시 `types/candidate.ts` → `data/mock-faq.ts` → `app/page.tsx` 순서로 코드 확인

## 변경 금지 파일 (Locked)

아래 파일은 설계 합의 완료. 구조 변경 금지. 내용 추가만 가능.

| 파일 | 이유 |
|------|------|
| `types/candidate.ts` | 타입 단일 진실 소스. FAQEntry, SourceRef 등 |
| `components/AnswerCard.tsx` | 4-state card. UI spec lock |
| `components/SourceInfo.tsx` | 출처 상시 노출 + snippet 토글. trust 구조 |
| `data/mock-profile.ts` | 후보자 정보. 후보자 본인이 수정 |
| `data/mock-faq.ts` | FAQ 5개. 내용 추가 가능, 구조 변경 금지 |

## 절대 하면 안 되는 것

1. AnswerCard를 chat bubble로 바꾸기
2. SourceInfo를 기본 접힘으로 바꾸기
3. DisclosureBanner에 닫기 버튼 추가하기
4. 긍정적 포장 언어 사용 (brilliant, exceptional, outstanding 등)
5. 후보자 평가/추천 문구 생성
6. 프로필 사진, 이모지 장식 추가 (CandidateAvatar는 승인됨 — IntroMessage 내 identity anchor)
7. 블로그 기능 (posts, tags, RSS) 추가 시도

## 색상 정책

- 기본: zinc 계열만
- amber: DisclosureBanner + grounded_partial 전용
- emerald, blue, red, green: 사용 금지
- grounded_full에 별도 강조색 없음

## 레이아웃 구조

```
body (h-dvh, flex col, overflow-hidden)
├── DisclosureBanner (sticky top, z-50)
└── main (flex-1, min-h-0)
    └── page (flex col, flex-1, min-h-0)
        ├── CandidateHeader (shrink-0)
        ├── ChatThread (flex-1, overflow-y-auto)
        └── StickyInputBar (shrink-0)
            ├── SuggestionChips
            └── QuestionInput
```

## 타입 시스템

```
types/candidate.ts (단일 진실 소스)
├── AnswerType: "grounded_full" | "grounded_partial" | "restricted" | "no_data"
├── Confidence: "high" | "medium" | "low" | "none"
├── SourceRef: { source_file, section, chunk_id, supporting_snippet, verifiable }
├── FAQEntry: { id, chip_label, question, answer_type, confidence, answer, sources[], disclaimer?, refusal_reason? }
└── CandidateProfile: { name, position, tagline, keywords[], lastUpdated }

types/message.ts
├── IntroMessage: { type: "intro" }
├── UserMessage: { type: "user_question", text }
├── AnswerMessage: { type: "answer", entry: FAQEntry }
├── LoadingMessage: { type: "loading" }
└── Message = union of above
```

## 현재 mock lookup 로직

- chip 클릭: FAQ id 직접 연결 (`findFAQById`)
- 자유 입력: `includes` 기반 양방향 매칭 (`findFAQByText`)
- 매칭 실패: `no_data` fallback (hardcoded FAQEntry)
- 500ms setTimeout으로 loading 시뮬레이션
