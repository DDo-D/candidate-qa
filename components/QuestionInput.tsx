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
    <div className="px-6 py-4 flex flex-col gap-2">
      <textarea
        className="w-full resize-none rounded-lg border border-zinc-200 px-3 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400 disabled:bg-zinc-50 disabled:text-zinc-400"
        rows={3}
        placeholder="후보자에 대해 궁금한 점을 입력하세요."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        maxLength={MAX_LENGTH}
        disabled={isLoading}
      />
      <div className="flex items-start justify-between gap-4">
        <p className="text-xs text-zinc-400 leading-relaxed">
          후보자의 경험, 관점, 프로젝트에 대한 질문을 입력할 수 있습니다.
          <span className="block mt-0.5">
            예: &ldquo;Scout형 심사역이란 무엇인가요?&rdquo; &nbsp;·&nbsp;
            &ldquo;AI 도구를 실제로 만들어본 적 있나요?&rdquo;
          </span>
        </p>
        {showCounter && (
          <span className="text-xs text-zinc-400 shrink-0">
            {value.length} / {MAX_LENGTH}
          </span>
        )}
      </div>
      <div className="flex justify-end">
        <button
          onClick={onSubmit}
          disabled={!canSubmit}
          className="rounded-md bg-zinc-800 px-4 py-2 text-sm text-white hover:bg-zinc-700 disabled:bg-zinc-200 disabled:text-zinc-400 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-zinc-400 border-t-transparent" />
              처리 중
            </span>
          ) : (
            "질문하기 →"
          )}
        </button>
      </div>
    </div>
  );
}
