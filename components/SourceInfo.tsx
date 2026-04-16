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
    <div className="border-t border-zinc-100 pt-3 flex flex-col gap-2">
      {sources.map((src, i) => (
        <div key={src.chunk_id} className="flex flex-col gap-1">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs text-zinc-400 truncate">
              출처 · {src.source_file} › {src.section}
            </span>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="text-xs text-zinc-400 hover:text-zinc-600 transition-colors shrink-0"
            >
              {openIndex === i ? "닫기 ▲" : "원문 보기 ▼"}
            </button>
          </div>
          {openIndex === i && (
            <div className="border-l-2 border-zinc-200 pl-3 py-2 bg-zinc-50 rounded-r-sm">
              <p className="text-xs text-zinc-500 italic leading-relaxed">
                &ldquo;{src.supporting_snippet}&rdquo;
              </p>
              {!src.verifiable && (
                <p className="text-xs text-zinc-400 mt-1.5">
                  [후보자 진술 기반 — 외부 검증 없음]
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
