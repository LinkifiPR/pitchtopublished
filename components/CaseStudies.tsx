"use client";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { TrendingUp } from "lucide-react";

const CASES = [
  {
    company: "Series-A SaaS",
    sector: "B2B fintech",
    headline: "From zero press to 14 tier-one features in 90 days",
    metric: "14 features",
    delta: "+0 → 14",
    body:
      "A two-year-old fintech with no PR footprint applied the framework to a Q2 launch. Results: features in WSJ, Bloomberg, Inc., and TechCrunch — plus a Forbes contributor invite.",
  },
  {
    company: "Solo Operator",
    sector: "Creator economy",
    headline: "30% reply rate from a 200-name list, built from scratch",
    metric: "30% reply rate",
    delta: "+1500%",
    body:
      "A creator built her media list using the beat-mapping system, sent 50 surgical pitches, and converted 15 into interviews. Featured in The Independent and Reader's Digest within 6 weeks.",
  },
  {
    company: "DTC Brand",
    sector: "Wellness",
    headline: "Featured in Forbes, Fast Company, and a Today Show segment",
    metric: "$2.1M earned media",
    delta: "+$2.1M",
    body:
      "A bootstrapped wellness brand used the trend-jacking module during a viral health story. The result: three top-tier features and a national TV segment, all from one well-timed pitch.",
  },
];

export default function CaseStudies() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Receipts"
          title={
            <>
              Real students. <span className="italic text-indigo">Real placements.</span>
            </>
          }
          intro="Anonymized for privacy where requested. Full case files and exact pitches included inside the course."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {CASES.map((c, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <article className="grain-card group relative flex h-full flex-col overflow-hidden rounded-3xl p-8">
                <div className="flex items-center justify-between">
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-indigo">
                    {c.sector}
                  </div>
                  <div className="rounded-full bg-sky/30 px-3 py-1 text-xs text-ink">
                    {c.company}
                  </div>
                </div>

                <h3 className="mt-6 font-serif text-2xl leading-snug text-ink text-pretty">
                  {c.headline}
                </h3>

                <p className="mt-4 text-ink/65 text-pretty">{c.body}</p>

                <div className="mt-8 flex items-end justify-between border-t border-ink/10 pt-5">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                      Result
                    </div>
                    <div className="font-serif text-3xl text-indigo">{c.metric}</div>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-medium text-indigo">
                    <TrendingUp className="h-4 w-4" /> {c.delta}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
