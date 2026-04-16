import SuggestionChips from "./SuggestionChips";
import QuestionInput from "./QuestionInput";

interface Chip {
  id: string;
  label: string;
  question: string;
}

interface Props {
  chips: Chip[];
  inputValue: string;
  onInputChange: (v: string) => void;
  onChipSelect: (id: string, question: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
  selectedChipId?: string;
}

export default function StickyInputBar({
  chips,
  inputValue,
  onInputChange,
  onChipSelect,
  onSubmit,
  isLoading,
  selectedChipId,
}: Props) {
  return (
    <div className="shrink-0 z-40 bg-white border-t border-zinc-200">
      <div className="px-0 pt-2 pb-4">
        <SuggestionChips
          chips={chips}
          onChipSelect={onChipSelect}
          selectedChipId={selectedChipId}
        />
        <QuestionInput
          value={inputValue}
          onChange={onInputChange}
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
