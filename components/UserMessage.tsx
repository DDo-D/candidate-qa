interface Props {
  text: string;
}

export default function UserMessage({ text }: Props) {
  return (
    <div className="px-6 flex justify-end">
      <div className="max-w-[75%] rounded-lg bg-zinc-800 px-3 py-2">
        <p className="text-sm text-white leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
