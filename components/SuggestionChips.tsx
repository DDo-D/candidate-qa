interface Chip {
  id: string;
  label: string;
  question: string;
}

interface Props {
  chips: Chip[];
  onChipSelect: (id: string, question: string) => void;
  selectedChipId?: string;
}

export default function SuggestionChips({
  chips,
  onChipSelect,
  selectedChipId,
}: Props) {
  return (
    <div className="px-6 py-4 flex flex-wrap gap-2">
      {chips.map((chip) => (
        <button
          key={chip.id}
          onClick={() => onChipSelect(chip.id, chip.question)}
          className={`rounded-full border px-3 py-1.5 text-sm transition-colors cursor-pointer ${
            selectedChipId === chip.id
              ? "border-zinc-400 bg-zinc-100 text-zinc-700"
              : "border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50"
          }`}
        >
          {chip.label}
        </button>
      ))}
    </div>
  );
}
