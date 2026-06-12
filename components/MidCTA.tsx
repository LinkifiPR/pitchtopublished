"use client";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function MidCTA({
  headline,
  sub,
  cta = "Enroll now — $499",
}: {
  headline: string;
  sub: string;
  cta?: string;
}) {
  return (
    <section className="relative py-10">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="urgency-bar relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl px-8 py-10 md:flex-row md:px-12">
            <div className="relative max-w-2xl text-center md:text-left">
              <h3 className="font-serif text-2xl leading-tight md:text-3xl text-balance">{headline}</h3>
              <p className="mt-2 text-sm text-canvas/85 md:text-base text-pretty">{sub}</p>
            </div>
            <a
              href="#pricing"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-canvas px-7 py-4 text-base font-bold text-indigo shadow-xl transition hover:bg-blush"
            >
              {cta}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
