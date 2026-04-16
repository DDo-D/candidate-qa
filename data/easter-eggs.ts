type EasterEgg = {
  output: string;
  /** If set, use this as the displayed command instead of raw input */
  displayCommand?: string;
};

const EGGS: Record<string, EasterEgg> = {
  help: {
    output: `사용 가능한 명령어:

  help          이 도움말을 표시합니다
  whoami        현재 접속자 정보
  ls            후보자 파일 목록
  cat resume    이력 요약
  pwd           현재 위치
  ping          연결 확인
  neofetch      시스템 정보
  git log       커밋 이력
  sudo          관리자 권한
  clear         대화 초기화
  exit          세션 종료
  rm -rf        위험한 명령
  coffee        ☕`,
  },
  whoami: {
    output: `visitor@kava-ama.vercel.app
role: VC 심사역 (추정)
status: 후보자를 평가하는 중
tip: 질문을 던져보세요. AI가 대신 대답해드립니다.`,
  },
  ls: {
    output: `drwxr-xr-x  resume.md
drwxr-xr-x  philosophy.md
drwxr-xr-x  portfolio.md
-rw-r--r--  cover_letter.md
-rw-r--r--  github_projects/
-rw-r--r--  hackathon_log.md
-rw-r--r--  .secret_ambitions    (permission denied)`,
  },
  "cat resume": {
    output: `신종목 | AI Native VC

학력: 한국항공대 경영학 학사, 국민대 글로벌벤처창업대학원 (휴학중)
지원: KAVA 12기 심사역 트랙
스택: Cursor, Codex, Claude Code, TypeScript, Next.js
특기: 비개발자인데 AI로 프로덕트를 만듦
깃허브: github.com/berkshirehathaways

EOF`,
  },
  pwd: {
    output: `/home/visitor/kava-ama/candidate-qa

당신은 신종목의 AMA 봇 안에 있습니다.`,
  },
  ping: {
    output: `PING kava-ama.vercel.app (76.76.21.21): 56 data bytes
64 bytes: icmp_seq=0 ttl=57 time=0.42ms
64 bytes: icmp_seq=1 ttl=57 time=0.38ms
64 bytes: icmp_seq=2 ttl=57 time=0.41ms

--- kava-ama.vercel.app ping statistics ---
3 packets transmitted, 3 received, 0% packet loss
round-trip min/avg/max = 0.38/0.40/0.42 ms

신종목의 응답 속도: 항상 빠름 ⚡`,
  },
  neofetch: {
    output: `       ████████           visitor@kava-ama
      ██      ██          ─────────────────
     ██  ▓▓▓▓  ██         OS: AMA Bot v1.0
     ██  ▓▓▓▓  ██         Host: Vercel Edge Network
      ██      ██          Kernel: Next.js 16
       ████████           Shell: vibecoding --with-ai
      ██████████          DE: Terminal Dark Mode
     ██ ██  ██ ██         Theme: zinc-950 [dark]
    ██  ██  ██  ██        Icons: Geist Mono
   ██   ██  ██   ██       CPU: Claude Code + Cursor + Codex
                          Memory: 14 FAQs loaded
                          Uptime: since 2026-04-16`,
  },
  "git log": {
    displayCommand: "git log --oneline -5",
    output: `a1b2c3d (HEAD -> main) feat: add terminal easter eggs
f4e5d6c feat: OG image + meta tags
7a8b9c0 feat: mobile responsive compact layout
d1e2f3a feat: dark terminal theme + vibecoding aesthetic
4b5c6d7 init: candidate Q&A first slice

총 커밋: 바이브코딩이라 셀 수 없음 🎸`,
  },
  sudo: {
    displayCommand: "sudo su",
    output: `[sudo] password for visitor: ********

Permission denied.
신종목만 관리자 권한을 가지고 있습니다.
대신 질문을 통해 정보를 얻을 수 있습니다.`,
  },
  "rm -rf": {
    displayCommand: "rm -rf /",
    output: `🚨 ACCESS DENIED 🚨

이 봇은 삭제할 수 없습니다.
신종목의 의지는 rm -rf로 지울 수 없습니다.

(진짜로 이거 치셨어요? VC 심사역 맞으시죠?)`,
  },
  exit: {
    output: `logout

...라고 하고 싶지만, 아직 질문 안 하셨잖아요.
신종목에 대해 물어볼 거 없으세요?

Connection to kava-ama.vercel.app closed.
(그냥 농담입니다. 계속 물어보세요.)`,
  },
  coffee: {
    displayCommand: "brew install coffee",
    output: `☕ Brewing coffee...

==> Pouring coffee-2026.04.16
🍵 Coffee is ready!

VC 심사는 커피 한 잔과 함께.
신종목도 커피 좋아합니다.`,
  },
  "": {
    output: "",
  },
};

const ALIAS_MAP: Record<string, string> = {
  "ls -la": "ls",
  "ls -al": "ls",
  "ls -l": "ls",
  dir: "ls",
  "cat resume.md": "cat resume",
  "cat ./resume.md": "cat resume",
  "cat ./resume": "cat resume",
  "git log --oneline": "git log",
  "git log -5": "git log",
  "rm -rf /": "rm -rf",
  "rm -rf .": "rm -rf",
  "rm -rf *": "rm -rf",
  "sudo rm -rf /": "rm -rf",
  "sudo su": "sudo",
  "sudo -i": "sudo",
  brew: "coffee",
  "brew install coffee": "coffee",
  "make coffee": "coffee",
  quit: "exit",
  logout: "exit",
  "?": "help",
  "--help": "help",
  "-h": "help",
  man: "help",
};

export function checkEasterEgg(
  input: string
): { command: string; output: string } | null {
  const trimmed = input.trim().toLowerCase();
  if (!trimmed) return null;

  const directKey = EGGS[trimmed];
  if (directKey) {
    return {
      command: directKey.displayCommand ?? trimmed,
      output: directKey.output,
    };
  }

  const aliasKey = ALIAS_MAP[trimmed];
  if (aliasKey && EGGS[aliasKey]) {
    const egg = EGGS[aliasKey];
    return {
      command: egg.displayCommand ?? trimmed,
      output: egg.output,
    };
  }

  return null;
}
