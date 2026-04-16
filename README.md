# 🤖 Candidate Q&A — 나만의 AMA 봇 만들기

KAVA 12기 동기들을 위한 **Ask Me Anything 봇** 템플릿입니다.
포크해서 본인 정보만 채우면 나만의 AMA 봇을 바로 배포할 수 있습니다.

> AI 코딩 에이전트(Cursor, Codex, Claude Code)와 함께 바이브코딩으로 만들었습니다.

**데모**: 직접 배포해서 확인해보세요!

---

## 주요 기능

- 🖥️ 터미널 테마 다크 UI
- 💬 FAQ 기반 Q&A (근거 표시, 출처 인용, 신뢰도 뱃지)
- 🏷️ 제안 칩 (자주 묻는 질문 바로가기)
- 🥚 터미널 이스터에그 (`help`, `whoami`, `ls`, `neofetch` 등)
- 🖼️ OG 이미지 + 소셜 미리보기
- 📱 모바일 반응형

---

## 빠른 시작 (10분이면 됩니다)

### 1단계: 포크 & 설치

GitHub에서 **Fork** 버튼을 누르고:

```bash
git clone https://github.com/내아이디/candidate-qa.git
cd candidate-qa
npm install
```

### 2단계: 내 정보 입력

아래 5개 파일만 수정하면 됩니다. 파일마다 `✏️` 주석이 달린 곳을 찾아 바꾸세요.

#### 📄 `data/mock-profile.ts` — 기본 프로필

```typescript
export const mockProfile: CandidateProfile = {
  name: "내이름",                              // ← 본인 이름
  position: "KAVA 인턴십 지원 · 심사역 트랙",    // ← 직함
  tagline: "한 줄 소개",                        // ← 한 줄 어필
  keywords: ["키워드1", "키워드2", "키워드3"],    // ← 터미널 --플래그로 표시됨
  lastUpdated: "2026-04-16",
};
```

#### 📄 `data/mock-faq.ts` — FAQ 질문과 답변 (핵심!)

예시 FAQ 3개가 들어있습니다. 본인 답변으로 바꾸고, 더 추가하세요:

```typescript
{
  id: "faq_001",
  chip_label: "지원 동기",              // 칩 버튼에 표시되는 라벨
  question: "VC를 지원하는 이유가 무엇인가요?",
  answer_type: "grounded_full",        // 아래 '답변 유형' 참조
  confidence: "high",
  answer: "여기에 자연스러운 문장으로 답변 작성",
  sources: [{
    source_file: "파일명.md",
    section: "섹션명",
    chunk_id: "고유ID",
    supporting_snippet: "출처 요약",
    verifiable: false,
  }],
},
```

**칩으로 노출**하려면 `CHIP_IDS` 배열에 ID 추가 (최대 5개 권장):
```typescript
export const CHIP_IDS = ["faq_001", "faq_002", "faq_003"] as const;
```

**키워드 검색**을 위해 `KEYWORD_MAP`에 매핑 추가:
```typescript
const KEYWORD_MAP: Record<string, string> = {
  "vc": "faq_001", "동기": "faq_001",
  // ...
};
```

#### 📄 `data/easter-eggs.ts` — 터미널 이스터에그

`cat resume`, `neofetch` 등의 응답에 본인 정보를 넣으세요. `✏️` 주석을 찾으면 됩니다.

#### 📄 `components/IntroMessage.tsx` — 인트로 카드

봇 이름, 소개 문구, 블로그 링크를 수정하세요.

#### 📄 `components/CandidateHeader.tsx` — 상단 헤더

헤더 설명 문구를 수정하세요.

### 3단계: 이미지 넣기

| 파일 | 설명 | 사이즈 |
|------|------|--------|
| `public/avatar.png` | 프로필 사진 | 정사각형 (224x224 이상 권장) |
| `public/og.png` | 링크 공유 시 미리보기 이미지 | 1200x630 |

이미지가 없어도 동작합니다 (아바타는 monogram fallback이 있음).

### 4단계: 로컬에서 확인

```bash
npm run dev
# → http://localhost:3000 에서 확인
```

### 5단계: Vercel 배포

```bash
npx vercel --prod
```

또는 GitHub에 푸시하면 Vercel이 자동 배포합니다.

배포 후 `app/layout.tsx`에서 `SITE_URL`을 본인 Vercel 도메인으로 바꿔주세요:
```typescript
const SITE_URL = "https://내이름-ama.vercel.app";
```

---

## 답변 유형 가이드

| answer_type | 뱃지 | 언제 사용 |
|-------------|------|-----------|
| `grounded_full` | 🟢 근거 있음 | 자료에 명확한 근거가 있을 때 |
| `grounded_partial` | 🟡 일부 근거 | 부분적 근거만 있을 때 (disclaimer 추가) |
| `no_data` | ⚫ 정보 없음 | 자료에 해당 정보가 없을 때 |
| `restricted` | 🔴 공개 제외 | 공개하고 싶지 않은 항목 |

---

## 이스터에그

입력창에 터미널 명령어를 치면 숨겨진 반응이 나옵니다:

```
help · whoami · ls · cat resume · pwd · ping
neofetch · git log · sudo · rm -rf · exit · coffee · clear
```

`data/easter-eggs.ts`에서 응답을 본인 것으로 커스터마이징하세요.

---

## 기술 스택

| 구분 | 선택 |
|------|------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Runtime | React 19 |
| Deployment | Vercel |

---

## 수정할 파일 요약

| 파일 | 뭘 바꾸나 |
|------|-----------|
| `data/mock-profile.ts` | 이름, 직함, 키워드 |
| `data/mock-faq.ts` | FAQ 질문과 답변 **(가장 중요!)** |
| `data/easter-eggs.ts` | 이스터에그 응답 |
| `components/IntroMessage.tsx` | 봇 이름, 소개, 블로그 링크 |
| `components/CandidateHeader.tsx` | 헤더 설명 문구 |
| `app/layout.tsx` | Vercel 도메인 (SITE_URL) |
| `public/avatar.png` | 프로필 사진 |
| `public/og.png` | OG 미리보기 이미지 |

---

## 원본

KAVA 12기 동기가 제작한 템플릿입니다.
