# Implementation Status

> 최종 업데이트: 2026-04-16
> 빌드 상태: ✅ passing (Next.js 16.2.4, TypeScript clean)

---

## 완료된 작업

### Phase 0: 기반
- [x] Next.js 16 + Tailwind 4 + TypeScript 프로젝트 초기화
- [x] `types/candidate.ts` — 타입 단일 진실 소스
- [x] `types/message.ts` — Message union type
- [x] `data/mock-profile.ts` — 후보자 프로필
- [x] `data/mock-faq.ts` — FAQ 5개 + lookup 함수

### Phase 1: 정적 컴포넌트
- [x] DisclosureBanner — amber, sticky top, 닫기 없음
- [x] CandidateHeader — compact 2행 (이름·포지션 + 키워드)
- [x] SuggestionChips — 5개 chip, 클릭 시 textarea 채우기만
- [x] QuestionInput — textarea + helper text + submit + char counter
- [x] SourceInfo — file/section 상시 노출, snippet 토글, verifiable 태그
- [x] AnswerCard — 4 state variant (grounded_full, grounded_partial, restricted, no_data)
- [x] IntroMessage — thread 첫 시스템 카드
- [x] UserMessage — 우측 bubble

### Phase 2: 인터랙션 + Chat-like UI
- [x] messages: Message[] 상태 관리 (currentAnswer → messages[] 교체)
- [x] ChatThread — type-switch 렌더, 메시지 누적
- [x] StickyInputBar — chips + input 래퍼
- [x] submit → UserMessage + Loading → AnswerMessage 흐름
- [x] chip 클릭 → textarea 채우기 (자동 제출 없음)
- [x] mock lookup: chip ID 직접 / includes 텍스트 매칭 / no_data fallback

### Phase 2.5: Scroll Hardening
- [x] ChatThread: overflow-y-auto container + flex-1
- [x] Scroll target: bottomRef → latest UserMessage 기준
- [x] StickyInputBar: fixed → shrink-0 (flex layout 내 자연 배치)
- [x] body/main/page flex column chain (dvh 기반)
- [x] overscroll-behavior-y: contain

---

## 미완료 작업

### 즉시 가능 (코드만 추가하면 됨)

- [ ] FAQ 항목 추가 (현재 5개 → 10~15개로 확장, 후보자 본인이 내용 작성)
- [ ] structured_profile.json 실제 데이터 작성 (현재 mock-profile만 있음)
- [ ] evidence 문서 작성 (`data/evidence/*.md`)

### 다음 패치 (설계 합의 완료, 미구현)

- [ ] adversarial state 처리 (프롬프트 인젝션 감지 → 차단)
- [ ] irrelevant state 처리 (후보자 무관 질문 → 범위 외 안내)
- [ ] input sanitizer (XSS strip, length 검증, encoding 정규화)
- [ ] 6-state classifier 전체 구현 (현재 4-state만)

### Phase 2 확장 (Lightweight Retrieval)

- [ ] Document chunker (`data/evidence/*.md` 청크 분할)
- [ ] Embedding index (Voyage AI 또는 OpenAI text-embedding-3-small)
- [ ] Top-K retrieval (cosine similarity, K=3)
- [ ] FAQ miss + structured data miss → retrieval fallback

### 백엔드 연동

- [ ] `app/api/ask/route.ts` — RAG + LLM 처리 엔드포인트
- [ ] System prompt 하드코딩 (guardrail policy)
- [ ] LLM client (Claude Sonnet via AI SDK + AI Gateway)
- [ ] Response validator (sources[] 존재 확인, answer_type 일관성)

### 배포

- [ ] Vercel 프로젝트 연결 (`vercel link`)
- [ ] 환경변수 설정 (AI Gateway OIDC)
- [ ] `robots.txt` — noindex (공개하되 검색엔진 미노출)
- [ ] OG 메타태그 (공유 시 미리보기)

---

## 설계 문서 위치

이 프로젝트의 상세 설계는 아래 대화에서 합의됨:
- Product Reframe + Core Risks + MVP Scope
- 6-State Decision Policy (allowed / partial / restricted / unsupported / adversarial / irrelevant)
- Answer State Model + Evidence Contract
- UI Disclosure and Trust Policy
- First Slice UX Contract + Component Contract

해당 설계 내용은 `AGENTS.md`와 `README.md`에 핵심만 요약되어 있음.
전체 원문은 Claude Code 대화 히스토리에 존재.

---

## 작업 이어받기

```
"AGENTS.md와 STATUS.md를 읽고,
미완료 항목 중 가장 우선순위 높은 것부터 이어서 작업해 줘."
```
