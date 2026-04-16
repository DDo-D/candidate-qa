interface Props {
  text: string;
}

export default function UserMessage({ text }: Props) {
  return (
    <div className="px-4 flex justify-end">
      <div className="max-w-[75%] rounded-lg bg-zinc-800 border border-zinc-700 px-3 py-2">
        <p className="text-[15px] text-zinc-100 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
