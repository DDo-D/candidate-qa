interface Props {
  lastUpdated: string;
}

export default function DisclosureBanner({ lastUpdated }: Props) {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950 px-5 py-2 flex items-center justify-between gap-4 font-mono">
      <p className="text-xs text-zinc-400">
        KAVA 12기 신종목이 제작한 무엇이든 물어보세요 봇입니다. AI 스택(Cursor, Codex, Claude Code)을 기본으로 바이브코딩하였습니다.
      </p>
      <p className="text-xs text-zinc-600 shrink-0">
        {lastUpdated}
      </p>
    </div>
  );
}
