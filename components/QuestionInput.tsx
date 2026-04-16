"use client";

const MAX_LENGTH = 500;

interface Props {
  value: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export default function QuestionInput({
  value,
  onChange,
  onSubmit,
  isLoading,
}: Props) {
  const showCounter = value.length >= 400;
  const canSubmit = value.trim().length > 0 && !isLoading;

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey) && canSubmit) {
      onSubmit();
    }
  }

  return (
    <div className="px-4 py-2 md:px-5 md:py-4 flex flex-col gap-1.5 md:gap-2">
      <textarea
        className="w-full resize-none rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 md:py-2.5 text-[15px] text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 disabled:bg-zinc-900/50 disabled:text-zinc-600 font-mono"
        rows={2}
        placeholder="$ 무엇이든 물어보세요..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        maxLength={MAX_LENGTH}
        disabled={isLoading}
      />
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-xs text-zinc-500 leading-relaxed truncate">
          경험, 관점, 프로젝트에 대해 질문할 수 있습니다.
        </p>
        <div className="flex items-center gap-2 shrink-0">
          {showCounter && (
            <span className="font-mono text-xs text-zinc-600">
              {value.length}/{MAX_LENGTH}
            </span>
          )}
          <button
            onClick={onSubmit}
            disabled={!canSubmit}
            className="font-mono rounded-md bg-emerald-600 px-3 py-1.5 md:px-4 md:py-2 text-sm text-white hover:bg-emerald-500 disabled:bg-zinc-800 disabled:text-zinc-600 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-zinc-400 border-t-transparent" />
              </span>
            ) : (
              "실행 →"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
