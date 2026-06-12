"use client";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { CheckCircle2, ArrowRight } from "lucide-react";

const STACK = [
  { label: "Pitch to Published — Core Curriculum (8 modules, 12+ hrs)", value: 999 },
  { label: "Tier-1 Journalist Contact List (1,200+ verified contacts)", value: 449 },
  { label: "Bonus 01 — The PR Request Blacklist", value: 199 },
  { label: "Bonus 02 — Journo Bio Builder GPT", value: 89 },
  { label: "Bonus 03 — SEO Estonia Conference Vault", value: 399 },
  { label: "Private Founder Slack + Monthly Office Hours", value: 299 },
  { label: "Lifetime Access + All Future Updates", value: 199 },
];

const TOTAL = STACK.reduce((s, x) => s + x.value, 0);
const PRICE = 499;

export default function ValueStack() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="The full stack"
          title={
            <>
              What you actually get, <span className="italic text-blush-dark">line by line</span>.
            </>
          }
          intro="Most courses hand you 4 hours of videos and call it done. This is the full operating system Linkifi uses on $10k/mo client work."
        />

        <Reveal delay={0.1}>
          <div className="grain-card mt-14 overflow-hidden rounded-3xl">
            <ul className="divide-y divide-blush-dark/15">
              {STACK.map((row, i) => (
                <li key={row.label} className="flex items-center gap-4 px-6 py-5 md:px-8">
                  <span className="font-mono text-xs text-blush-dark">{String(i + 1).padStart(2, "0")}</span>
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-indigo" />
                  <span className="flex-1 text-pretty text-ink/90">{row.label}</span>
                  <span className="font-serif text-xl text-ink">${row.value}</span>
                </li>
              ))}
              <li className="flex items-center justify-between bg-blush/60 px-6 py-5 md:px-8">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-blush-dark">Total stack value</span>
                <span className="font-serif text-3xl text-indigo">${TOTAL.toLocaleString()}</span>
              </li>
              <li className="flex items-center justify-between bg-indigo px-6 py-6 text-canvas md:px-8">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-blush">Your price today</div>
                  <div className="mt-1 font-serif text-4xl md:text-5xl">${PRICE}</div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-blush">You save</div>
                  <div className="mt-1 font-serif text-3xl text-sky">${(TOTAL - PRICE).toLocaleString()}</div>
                </div>
              </li>
            </ul>
            <div className="flex items-center justify-center bg-canvas/80 px-6 py-6">
              <a
                href="#pricing"
                className="group inline-flex items-center gap-2 rounded-full bg-indigo px-7 py-3.5 text-sm font-semibold text-canvas transition hover:bg-indigo-deep"
              >
                Lock in the launch price — $499
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
