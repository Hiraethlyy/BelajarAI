import type { ReactNode } from "react";

type SectionLabelProps = {
  index: string;
  children: ReactNode;
};

export function SectionLabel({ index, children }: SectionLabelProps) {
  return (
    <div className="mb-10 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
      <span className="text-accent">{index}</span>
      <span aria-hidden className="h-px w-8 bg-line" />
      <span>{children}</span>
    </div>
  );
}
