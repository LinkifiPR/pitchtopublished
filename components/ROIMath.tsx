"use client";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { ArrowRight } from "lucide-react";

const CARDS = [
  {
    figure: "$3,000–$10,000",
    label: "What agencies charge for a single tier-one placement",
    note: "Per placement. Every placement. Forever.",
    tone: "muted",
  },
  {
    figure: "$499",
    label: "What the entire system costs you — once",
    note: "Lifetime access. Every placement after this is free.",
    tone: "hero",
  },
  {
    figure: "6–20×",
    label: "Your return if this lands you just one feature",
    note: "Most students land their first in 21–45 days. Now do the math on ten.",
    tone: "muted",
  },
];

export default function ROIMath() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Do the math"
          title={
            <>
              What is <span className="italic text-indigo">one feature</span> actually worth?
            </>
          }
          intro="Forget 'investing in yourself.' Run this like the founder you are — as a straight cost-per-placement calculation."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.figure} delay={i * 0.08}>
              <div
                className={`flex h-full flex-col rounded-3xl p-8 text-center ${
                  c.tone === "hero"
                    ? "ink-card md:scale-105"
                    : "grain-card"
                }`}
              >
                <div
                  className={`font-serif text-4xl tracking-tight md:text-5xl ${
                    c.tone === "hero" ? "text-sky" : "text-indigo"
                  }`}
                >
                  {c.figure}
                </div>
                <div
                  className={`mt-4 font-medium ${
                    c.tone === "hero" ? "text-canvas" : "text-ink/85"
                  } text-pretty`}
                >
                  {c.label}
                </div>
                <div
                  className={`mt-3 text-sm ${
                    c.tone === "hero" ? "text-canvas/65" : "text-ink/55"
                  } text-pretty`}
                >
                  {c.note}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-12 max-w-3xl text-center">
            <p className="font-serif text-2xl italic leading-snug text-ink md:text-3xl text-balance">
              One feature pays for the course six times over. Everything after that —
              every placement, every backlink, every "as seen in" badge — is pure margin.
            </p>
            <a
              href="#pricing"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-indigo px-7 py-3.5 text-base font-semibold text-canvas transition hover:bg-indigo-deep"
            >
              Make the $499 trade
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
