import type { CandidateProfile } from "@/types/candidate";

interface Props {
  profile: CandidateProfile;
}

export default function CandidateHeader({ profile }: Props) {
  return (
    <div className="bg-zinc-950 font-mono text-sm border-b border-zinc-800">
      <div className="flex items-center gap-1.5 px-4 py-2 border-b border-zinc-800">
        <span className="size-2.5 rounded-full bg-red-400" />
        <span className="size-2.5 rounded-full bg-amber-400" />
        <span className="size-2.5 rounded-full bg-emerald-400" />
        <span className="ml-3 text-xs text-zinc-500">~/candidate-qa</span>
      </div>
      <div className="px-4 py-3 flex flex-col gap-1">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="text-emerald-400 select-none">$</span>
          <span className="text-zinc-100">{profile.name}</span>
          <span className="text-zinc-600">/</span>
          {/* ✏️ 본인 직함으로 수정하세요 */}
          <span className="text-zinc-400 text-xs">AI Native VC</span>
        </div>
        {/* ✏️ 본인 소개 문구로 수정하세요 */}
        <p className="text-sm text-zinc-300 pl-4">
          KAVA 12기 {profile.name}이 제작한 AMA 봇입니다. AI 코딩 에이전트(Cursor, Codex, Claude Code)와 함께 바이브코딩 했습니다.
        </p>
        <div className="flex flex-wrap gap-x-2 gap-y-0.5 pl-4">
          {profile.keywords.map((kw) => (
            <span key={kw} className="text-zinc-400 text-xs">
              --{kw.replace(/\s/g, "-")}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
