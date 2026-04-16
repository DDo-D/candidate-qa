import type { CandidateProfile } from "@/types/candidate";

interface Props {
  profile: CandidateProfile;
}

export default function CandidateHeader({ profile }: Props) {
  return (
    <div className="px-6 py-3 border-b border-zinc-200 flex flex-col gap-1.5">
      <div className="flex items-baseline gap-2 flex-wrap">
        <h1 className="text-base font-semibold text-zinc-900">{profile.name}</h1>
        <span className="text-zinc-300">·</span>
        <span className="text-sm text-zinc-500">{profile.position}</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {profile.keywords.map((kw) => (
          <span
            key={kw}
            className="bg-zinc-100 text-zinc-500 text-xs rounded px-1.5 py-0.5"
          >
            {kw}
          </span>
        ))}
      </div>
    </div>
  );
}
