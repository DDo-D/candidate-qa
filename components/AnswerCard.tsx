import type { FAQEntry } from "@/types/candidate";
import SourceInfo from "./SourceInfo";

interface Props {
  entry: FAQEntry;
}

const BADGE = {
  grounded_full: {
    indicator: "●",
    label: "근거 있음",
    indicatorClass: "text-emerald-400",
    labelClass: "text-emerald-400",
    wrapperClass: "bg-zinc-900 border-zinc-800",
  },
  grounded_partial: {
    indicator: "◐",
    label: "부분 확인",
    indicatorClass: "text-amber-400",
    labelClass: "text-amber-400",
    wrapperClass: "bg-zinc-900 border-amber-900/50",
  },
  restricted: {
    indicator: "○",
    label: "공개 제한",
    indicatorClass: "text-zinc-500",
    labelClass: "text-zinc-500",
    wrapperClass: "bg-zinc-900/50 border-zinc-800",
  },
  no_data: {
    indicator: "—",
    label: "정보 없음",
    indicatorClass: "text-zinc-500",
    labelClass: "text-zinc-500",
    wrapperClass: "bg-zinc-900/50 border-zinc-800",
  },
} as const;

export default function AnswerCard({ entry }: Props) {
  const badge = BADGE[entry.answer_type];
  const isGrounded =
    entry.answer_type === "grounded_full" ||
    entry.answer_type === "grounded_partial";

  return (
    <div
      className={`mx-4 rounded-lg border px-4 py-4 flex flex-col gap-3 ${badge.wrapperClass}`}
    >
      {/* State badge */}
      <div className="flex items-center gap-1.5">
        <span className={`text-xs leading-none ${badge.indicatorClass}`}>
          {badge.indicator}
        </span>
        <span className={`text-xs ${badge.labelClass}`}>{badge.label}</span>
      </div>

      {/* Answer body — grounded states only */}
      {isGrounded && entry.answer && (
        <p className="text-[15px] text-zinc-200 leading-relaxed">{entry.answer}</p>
      )}

      {/* External links */}
      {isGrounded && entry.links && entry.links.length > 0 && (
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {entry.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-sm text-emerald-400 underline underline-offset-2 decoration-emerald-800 hover:text-emerald-300 hover:decoration-emerald-600 transition-colors"
            >
              <span aria-hidden>→</span>
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* Disclaimer box — partial only */}
      {entry.answer_type === "grounded_partial" && entry.disclaimer && (
        <div className="rounded border border-amber-900/50 bg-amber-950/30 px-3 py-2">
          <p className="text-xs text-amber-400/80 leading-relaxed">
            확인되지 않은 범위: {entry.disclaimer}
          </p>
        </div>
      )}

      {/* Empty state message — restricted / no_data */}
      {!isGrounded && (
        <p className="text-[15px] text-zinc-400">
          {entry.refusal_reason ??
            (entry.answer_type === "restricted"
              ? "이 항목은 후보자가 공개 범위에서 제외하였습니다."
              : "현재 제공된 자료에 해당 정보가 포함되어 있지 않습니다.")}
        </p>
      )}

      {/* Source info — grounded states only */}
      {isGrounded && entry.sources.length > 0 && (
        <SourceInfo sources={entry.sources} />
      )}
    </div>
  );
}
