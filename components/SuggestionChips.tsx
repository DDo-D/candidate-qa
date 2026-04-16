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
    <div className="px-5 py-2 flex gap-2 font-mono overflow-x-auto md:flex-wrap md:overflow-x-visible scrollbar-none">
      {chips.map((chip) => (
        <button
          key={chip.id}
          onClick={() => onChipSelect(chip.id, chip.question)}
          className={`shrink-0 rounded border px-2.5 py-1 text-xs transition-colors cursor-pointer ${
            selectedChipId === chip.id
              ? "border-emerald-600 bg-emerald-950 text-emerald-300"
              : "border-zinc-600 bg-zinc-900 text-zinc-300 hover:border-zinc-400 hover:text-zinc-100"
          }`}
        >
          $ {chip.label}
        </button>
      ))}
    </div>
  );
}
