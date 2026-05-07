import Reveal from "./Reveal";
import { ReactNode } from "react";

export default function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Reveal>
        <div className={`inline-flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-accent" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">{eyebrow}</span>
          <span className="h-px w-8 bg-accent" />
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl text-balance">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.2}>
          <p className="mt-6 text-lg text-paper/70 md:text-xl text-pretty">{intro}</p>
        </Reveal>
      )}
    </div>
  );
}
