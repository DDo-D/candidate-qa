import type { FAQEntry } from "@/types/candidate";
import SourceInfo from "./SourceInfo";

interface Props {
  entry: FAQEntry;
}

const BADGE = {
  grounded_full: {
    indicator: "●",
    label: "근거 있음",
    indicatorClass: "text-zinc-600",
    labelClass: "text-zinc-600",
    wrapperClass: "bg-white border-zinc-200",
  },
  grounded_partial: {
    indicator: "◐",
    label: "부분 확인",
    indicatorClass: "text-amber-600",
    labelClass: "text-amber-600",
    wrapperClass: "bg-white border-amber-200",
  },
  restricted: {
    indicator: "○",
    label: "공개 제한",
    indicatorClass: "text-zinc-400",
    labelClass: "text-zinc-400",
    wrapperClass: "bg-zinc-50 border-zinc-200",
  },
  no_data: {
    indicator: "—",
    label: "정보 없음",
    indicatorClass: "text-zinc-400",
    labelClass: "text-zinc-400",
    wrapperClass: "bg-zinc-50 border-zinc-200",
  },
} as const;

export default function AnswerCard({ entry }: Props) {
  const badge = BADGE[entry.answer_type];
  const isGrounded =
    entry.answer_type === "grounded_full" ||
    entry.answer_type === "grounded_partial";

  return (
    <div
      className={`mx-6 rounded-lg border px-4 py-4 flex flex-col gap-3 ${badge.wrapperClass}`}
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
        <p className="text-sm text-zinc-800 leading-relaxed">{entry.answer}</p>
      )}

      {/* Disclaimer box — partial only */}
      {entry.answer_type === "grounded_partial" && entry.disclaimer && (
        <div className="rounded border border-amber-100 bg-amber-50 px-3 py-2">
          <p className="text-xs text-amber-700 leading-relaxed">
            확인되지 않은 범위: {entry.disclaimer}
          </p>
        </div>
      )}

      {/* Empty state message — restricted / no_data */}
      {!isGrounded && (
        <p className="text-sm text-zinc-400">
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
