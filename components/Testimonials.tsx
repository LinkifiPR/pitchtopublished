"use client";
import { Star } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const TESTIMONIALS = [
  {
    quote:
      "Three weeks in, I landed a feature in Forbes and an interview on a Bloomberg podcast. I'd been pitching for a year with nothing. The 9-line formula alone was worth 10× the price.",
    name: "Maya Chen",
    role: "Founder, Loop Health",
    placement: "Featured in Forbes, Bloomberg",
  },
  {
    quote:
      "I came in expecting another generic course. What I got was the actual playbook a top agency uses on paying clients. My reply rate went from 2% to 34% in six weeks.",
    name: "Daniel Okafor",
    role: "CEO, Stratafund",
    placement: "Featured in TechCrunch, Inc.",
  },
  {
    quote:
      "Sakshi's section on what journalists actually want is gold. I rewrote my pitch using her framework and got covered in Business Insider on the first send.",
    name: "Priya Raman",
    role: "Founder, Tessera AI",
    placement: "Featured in Business Insider",
  },
  {
    quote:
      "The bonuses alone are worth it. The headline cheat sheet has saved me 5 hours a week and dramatically increased my open rate. I now use the journo bio GPT every Monday morning.",
    name: "Marcus Bell",
    role: "Founder, Northwind",
    placement: "Featured in Fast Company, Entrepreneur",
  },
  {
    quote:
      "I spent $36k on an agency last year for two placements. Pitch to Published got me four placements in 60 days, and I now own the system. Best investment of my Q1.",
    name: "Eliza Thornberg",
    role: "Co-founder, Halcyon Labs",
    placement: "Featured in WSJ, Forbes, Inc.",
  },
  {
    quote:
      "Chris and Sakshi don't hold back. The crisis playbook saved us when a competitor tried to slander us on Twitter. We turned a near-disaster into a TechCrunch feature.",
    name: "Rohan Vellore",
    role: "Founder, Switchboard",
    placement: "Featured in TechCrunch",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-blush/40 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Founder reviews"
          title={
            <>
              From <span className="italic text-indigo">unread</span> to <span className="editorial-underline">unmissable</span>.
            </>
          }
          intro="Real founders. Real placements. Real reply-rate numbers — verified by Linkifi's own outreach desk."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08}>
              <figure className="grain-card flex h-full flex-col gap-5 rounded-2xl p-7 md:p-8">
                <div className="flex gap-0.5 text-indigo">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-indigo" />
                  ))}
                </div>
                <blockquote className="font-serif text-lg leading-snug text-ink text-pretty">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-auto border-t border-ink/10 pt-4">
                  <div className="font-semibold text-ink">{t.name}</div>
                  <div className="text-sm text-ink/60">{t.role}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-indigo">
                    {t.placement}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
