type EasterEgg = {
  output: string;
  displayCommand?: string;
};

// ── 터미널 이스터에그 응답 ──────────────────────────────────────────
// 본인 정보에 맞게 수정하세요!
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
    output: `visitor@your-ama.vercel.app
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
-rw-r--r--  .secret_ambitions    (permission denied)`,
  },
  "cat resume": {
    // ✏️ 본인 정보로 수정하세요
    output: `홍길동 | KAVA 12기

학력: OO대학교 OO학과
지원: KAVA 12기 심사역 트랙
스택: 본인의 기술 스택
특기: 한 줄 어필
깃허브: github.com/YOUR_USERNAME

EOF`,
  },
  pwd: {
    output: `/home/visitor/candidate-qa

당신은 후보자의 AMA 봇 안에 있습니다.`,
  },
  ping: {
    output: `PING your-ama.vercel.app (76.76.21.21): 56 data bytes
64 bytes: icmp_seq=0 ttl=57 time=0.42ms
64 bytes: icmp_seq=1 ttl=57 time=0.38ms
64 bytes: icmp_seq=2 ttl=57 time=0.41ms

--- your-ama.vercel.app ping statistics ---
3 packets transmitted, 3 received, 0% packet loss
round-trip min/avg/max = 0.38/0.40/0.42 ms

응답 속도: 항상 빠름 ⚡`,
  },
  neofetch: {
    // ✏️ 본인 정보로 수정하세요
    output: `       ████████           visitor@candidate-qa
      ██      ██          ─────────────────
     ██  ▓▓▓▓  ██         OS: AMA Bot v1.0
     ██  ▓▓▓▓  ██         Host: Vercel Edge Network
      ██      ██          Kernel: Next.js 16
       ████████           Shell: vibecoding --with-ai
      ██████████          DE: Terminal Dark Mode
     ██ ██  ██ ██         Theme: zinc-950 [dark]
    ██  ██  ██  ██        Icons: Geist Mono
   ██   ██  ██   ██       CPU: AI 코딩 에이전트
                          Memory: FAQ loaded
                          Uptime: since 2026-04-XX`,
  },
  "git log": {
    displayCommand: "git log --oneline -5",
    output: `a1b2c3d (HEAD -> main) feat: add terminal easter eggs
f4e5d6c feat: OG image + meta tags
7a8b9c0 feat: mobile responsive layout
d1e2f3a feat: dark terminal theme
4b5c6d7 init: candidate Q&A first slice

바이브코딩이라 셀 수 없음 🎸`,
  },
  sudo: {
    displayCommand: "sudo su",
    output: `[sudo] password for visitor: ********

Permission denied.
후보자만 관리자 권한을 가지고 있습니다.
대신 질문을 통해 정보를 얻을 수 있습니다.`,
  },
  "rm -rf": {
    displayCommand: "rm -rf /",
    output: `🚨 ACCESS DENIED 🚨

이 봇은 삭제할 수 없습니다.
후보자의 의지는 rm -rf로 지울 수 없습니다.`,
  },
  exit: {
    output: `logout

...라고 하고 싶지만, 아직 질문 안 하셨잖아요.
후보자에 대해 물어볼 거 없으세요?

Connection to candidate-qa closed.
(그냥 농담입니다. 계속 물어보세요.)`,
  },
  coffee: {
    displayCommand: "brew install coffee",
    output: `☕ Brewing coffee...

==> Pouring coffee-2026.04.16
🍵 Coffee is ready!

VC 심사는 커피 한 잔과 함께.`,
  },
  "": {
    output: "",
  },
};

const ALIAS_MAP: Record<string, string> = {
  "ls -la": "ls", "ls -al": "ls", "ls -l": "ls", dir: "ls",
  "cat resume.md": "cat resume", "cat ./resume.md": "cat resume", "cat ./resume": "cat resume",
  "git log --oneline": "git log", "git log -5": "git log",
  "rm -rf /": "rm -rf", "rm -rf .": "rm -rf", "rm -rf *": "rm -rf", "sudo rm -rf /": "rm -rf",
  "sudo su": "sudo", "sudo -i": "sudo",
  brew: "coffee", "brew install coffee": "coffee", "make coffee": "coffee",
  quit: "exit", logout: "exit",
  "?": "help", "--help": "help", "-h": "help", man: "help",
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
