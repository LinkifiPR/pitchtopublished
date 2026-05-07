"use client";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

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
              style={{ background: "radial-gradient(ellipse, #F0D5EB 0%, transparent 70%)" }}
            />

            <div className="relative">
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-sky">
                Final word
              </div>
              <h2 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl text-balance">
                90 days from now, you'll either be in <span className="italic">the headlines</span> — or wishing you were.
              </h2>
              <p className="mt-8 max-w-2xl text-lg text-canvas/75 text-pretty">
                The window for Cohort 01 pricing closes soon. After that, $499 returns to $999 and the bonus stack rotates out. If you've been waiting for the moment to take PR seriously — this is it.
              </p>

              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 rounded-full bg-sky px-8 py-4 text-base font-semibold text-ink transition hover:bg-canvas"
                >
                  Enroll now — $499
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <div className="text-sm text-canvas/60">
                  3-pay option at checkout · 30-day guarantee · Lifetime access
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
