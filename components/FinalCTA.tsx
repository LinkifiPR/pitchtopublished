"use client";
import { ArrowRight, Flame, X } from "lucide-react";
import Reveal from "./Reveal";

const WHEN_DOORS_CLOSE = [
  "The price returns to $999 — permanently",
  "The $687 bonus stack retires from the offer",
  "Enrollment locks and you join the waitlist behind 100 founders",
];

export default function FinalCTA() {
  return (
    <section id="enroll" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="ink-card relative overflow-hidden rounded-[36px] p-10 md:p-16">
            <div
              aria-hidden
              className="absolute -left-20 -top-20 h-72 w-72 rounded-full opacity-40 blur-3xl"
              style={{ background: "radial-gradient(ellipse, #75C4E5 0%, transparent 70%)" }}
            />
            <div
              aria-hidden
              className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full opacity-30 blur-3xl"
              style={{ background: "radial-gradient(ellipse, #E91E80 0%, transparent 70%)" }}
            />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-blush-pop/40 bg-blush-pop/15 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-blush">
                <Flame className="h-3.5 w-3.5" />
                53 seats left · launch pricing only
              </div>

              <h2 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl text-balance">
                90 days from now, you'll either be in <span className="italic">the headlines</span> — or wishing you were.
              </h2>

              <p className="mt-8 max-w-2xl text-lg text-canvas/75 text-pretty">
                You've seen the system, the instructors, the math, and the guarantee. The only
                variable left is whether you act before Cohort 01 fills. When it does:
              </p>

              <ul className="mt-6 space-y-3">
                {WHEN_DOORS_CLOSE.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-canvas/85">
                    <X className="mt-1 h-4 w-4 shrink-0 text-blush-pop" />
                    <span className="text-pretty">{w}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  href="#pricing"
                  className="group inline-flex items-center gap-2 rounded-full bg-sky px-8 py-4 text-base font-bold text-ink transition hover:bg-canvas"
                >
                  Enroll now — $499
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <div className="text-sm text-canvas/60">
                  3-pay option at checkout · 30-day 10× guarantee · Lifetime access
                </div>
              </div>

              <p className="mt-8 border-t border-canvas/10 pt-6 font-serif text-lg italic text-canvas/70 text-pretty">
                The founders quoted in next quarter's headlines are enrolling this week.
                The only question is whether your name is on that list — or your competitor's.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
