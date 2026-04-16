interface Props {
  command: string;
  output: string;
}

export default function TerminalOutput({ command, output }: Props) {
  return (
    <div className="mx-4 rounded-lg border border-zinc-800 bg-zinc-950 font-mono text-sm overflow-hidden">
      <div className="px-4 py-2 border-b border-zinc-800 flex items-center gap-2">
        <span className="text-emerald-400 select-none">$</span>
        <span className="text-zinc-300">{command}</span>
      </div>
      <pre className="px-4 py-3 text-zinc-400 whitespace-pre-wrap leading-relaxed text-xs">
        {output}
      </pre>
    </div>
  );
}
