"use client";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { Check, X } from "lucide-react";

const ROWS = [
  ["Costs you", "$5–10k / month", "$0 (and 200+ hours)", "$499 once"],
  ["Time to first placement", "60–120 days", "6–12 months (if ever)", "21–45 days"],
  ["Own the system after", "No — you rent it", "Sort of", "Yes — forever"],
  ["Journalist relationships", "Agency keeps them", "You build very slowly", "You build, you keep"],
  ["Pitch quality control", "Variable", "Trial & error", "Reviewed by tier-1 journo"],
  ["Reply-rate uplift", "Marginal", "Marginal", "10×+ on average"],
  ["Includes journalist contact list", "Sometimes", "No", "Yes — 1,200+ verified"],
  ["Money-back guarantee", "Almost never", "n/a", "30-day, no questions"],
];

export default function Comparison() {
  return (
    <section className="relative bg-blush/30 py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="The math"
          title={
            <>
              Agency vs. DIY vs. <span className="italic text-indigo">Pitch to Published</span>.
            </>
          }
          intro="What you actually pay — in money, time, and ownership — over a 12-month horizon."
        />

        <Reveal delay={0.1}>
          <div className="mt-14 overflow-hidden rounded-3xl border border-blush-dark/20 bg-canvas/90 backdrop-blur">
            <div className="grid grid-cols-4 border-b border-blush-dark/15 bg-blush/50">
              <div className="px-5 py-5 text-left font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55">
                Dimension
              </div>
              <div className="px-5 py-5 text-center font-serif text-lg text-ink/70">Hire an agency</div>
              <div className="px-5 py-5 text-center font-serif text-lg text-ink/70">DIY alone</div>
              <div className="bg-indigo px-5 py-5 text-center font-serif text-lg text-canvas">
                Pitch to Published
              </div>
            </div>
            {ROWS.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-4 items-stretch border-b border-blush-dark/10 ${
                  i % 2 ? "bg-canvas" : "bg-blush/15"
                }`}
              >
                <div className="px-5 py-4 text-sm font-medium text-ink/85">{row[0]}</div>
                <div className="border-l border-blush-dark/10 px-5 py-4 text-center text-sm text-ink/70">
                  {row[1]}
                </div>
                <div className="border-l border-blush-dark/10 px-5 py-4 text-center text-sm text-ink/70">
                  {row[2]}
                </div>
                <div className="border-l border-indigo/30 bg-indigo/[0.04] px-5 py-4 text-center text-sm font-semibold text-indigo">
                  {row[3]}
                </div>
              </div>
            ))}
            <div className="grid grid-cols-4 bg-canvas">
              <div className="px-5 py-5 font-serif text-sm uppercase tracking-wider text-ink/50">Verdict</div>
              <div className="border-l border-blush-dark/10 px-5 py-5 text-center text-ink/50">
                <X className="mx-auto h-5 w-5" />
              </div>
              <div className="border-l border-blush-dark/10 px-5 py-5 text-center text-ink/50">
                <X className="mx-auto h-5 w-5" />
              </div>
              <div className="border-l border-indigo/30 bg-indigo px-5 py-5 text-center">
                <Check className="mx-auto h-5 w-5 text-canvas" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
