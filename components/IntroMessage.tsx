import CandidateAvatar from "./CandidateAvatar";

export default function IntroMessage() {
  return (
    <div className="mx-4 rounded-lg border border-zinc-800 bg-zinc-950 overflow-hidden">
      <div className="px-4 py-3 flex items-center gap-4">
        <CandidateAvatar />
        <div className="flex flex-col gap-1 font-mono">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 text-xs select-none">&gt;</span>
            {/* ✏️ 봇 이름을 수정하세요 */}
            <span className="text-base font-medium text-zinc-100">홍길동 AMA 봇</span>
          </div>
          <p className="text-sm text-zinc-400 pl-4 leading-relaxed">
            {/* ✏️ 소개 문구를 수정하세요 */}
            홍길동에 대해 물어보세요.<br />
            홍길동의 사고를 복제한 AI가 대신 대답해드립니다.
          </p>
          <a
            href="https://your-blog.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-emerald-400 transition-colors pl-4 mt-0.5"
          >
            {/* ✏️ 블로그 URL을 수정하세요 */}
            → blog
          </a>
        </div>
      </div>
    </div>
  );
}
