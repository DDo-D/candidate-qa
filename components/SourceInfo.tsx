"use client";

import { useState } from "react";
import type { SourceRef } from "@/types/candidate";

interface Props {
  sources: SourceRef[];
}

export default function SourceInfo({ sources }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!sources.length) return null;

  return (
    <div className="border-t border-zinc-800 pt-3 flex flex-col gap-2">
      {sources.map((src, i) => (
        <div key={src.chunk_id} className="flex flex-col gap-1">
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-xs text-zinc-400 truncate">
              출처 · {src.source_file} › {src.section}
            </span>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="font-mono text-xs text-zinc-400 hover:text-zinc-200 transition-colors shrink-0"
            >
              {openIndex === i ? "닫기 ▲" : "원문 ▼"}
            </button>
          </div>
          {openIndex === i && (
            <div className="border-l-2 border-zinc-700 pl-3 py-2 bg-zinc-800/50 rounded-r-sm">
              <p className="text-xs text-zinc-400 italic leading-relaxed">
                &ldquo;{src.supporting_snippet}&rdquo;
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
