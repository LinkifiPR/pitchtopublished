"use client";
import { Check, ArrowRight, Lock } from "lucide-react";
import Reveal from "./Reveal";

const INCLUDES = [
  "8 modules · 12+ hours of HD video lessons",
  "Lifetime access — including all future updates",
  "All swipe files, templates, and frameworks",
  "$1,054 in bonuses (cheat sheets, GPTs, kits)",
  "Private founder Slack + monthly office hours",
  "Real journalist contact list (1,200+ names)",
  "30-day, 10× win-rate money-back guarantee",
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[120px]"
        style={{ background: "radial-gradient(ellipse, #75C4E5 0%, transparent 70%)" }}
      />

      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo/40 bg-indigo/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-indigo">
              <span className="h-2 w-2 rounded-full bg-indigo live-dot" />
              Limited launch pricing
            </div>
            <h2 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl text-balance">
              One enrollment. <span className="italic text-indigo">Everything you need.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="ink-card relative mt-14 overflow-hidden rounded-3xl p-8 md:p-12">
            <div
              aria-hidden
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-30 blur-3xl"
              style={{ background: "radial-gradient(ellipse, #75C4E5 0%, transparent 70%)" }}
            />

            <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-12">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-sky">
                  Pitch to Published — Cohort 01
                </div>
                <h3 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
                  The PR launchpad for serious founders.
                </h3>

                <div className="mt-8 flex items-baseline gap-4">
                  <div className="font-serif text-6xl text-canvas md:text-7xl">$499</div>
                  <div className="text-canvas/60 line-through">$999</div>
                  <div className="rounded-full bg-sky px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-ink">
                    Save $500
                  </div>
                </div>
                <div className="mt-2 text-sm text-canvas/65">
                  One-time payment. Or 3× $179 at checkout.
                </div>

                <a
                  href="#enroll"
                  className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-sky px-8 py-4 text-base font-semibold text-ink transition hover:bg-canvas"
                >
                  Enroll now — secure my spot
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>

                <div className="mt-4 flex items-center gap-2 text-xs text-canvas/55">
                  <Lock className="h-3.5 w-3.5" />
                  Secure checkout · 30-day guarantee · Lifetime access
                </div>
              </div>

              <div className="relative rounded-2xl border border-sky/25 bg-canvas/5 p-7">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-sky">
                  What's included
                </div>
                <ul className="mt-5 space-y-3">
                  {INCLUDES.map((item) => (
                    <li key={item} className="flex gap-3 text-canvas/90">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-sky" />
                      <span className="text-sm leading-snug text-pretty">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-sm text-ink/60">
            <span className="text-ink/80">Heads up:</span> price returns to $999 the moment Cohort 01 closes. We won't run this discount again.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
