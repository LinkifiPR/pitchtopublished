"use client";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { Check, X } from "lucide-react";

const FOR = [
  "Bootstrapped founders ready to take PR seriously",
  "Funded startups about to launch a product or raise",
  "Agency owners adding PR to their stack",
  "Personal brand operators chasing authority",
  "Service businesses tired of relying only on paid ads",
  "Anyone fired by a PR agency that didn't deliver",
];

const NOT_FOR = [
  "People who want PR without actually pitching",
  "Founders looking for a get-quoted-tomorrow hack",
  "Anyone unwilling to send 50 pitches in 30 days",
  "Brands with nothing newsworthy to say (yet)",
];

export default function ForWho() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Is this for you?"
          title={
            <>
              We are <span className="italic text-indigo">unapologetically picky</span> about who this is for.
            </>
          }
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="grain-card h-full rounded-2xl p-8">
              <div className="flex items-center gap-3 border-b border-blush-dark/15 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo text-canvas">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-2xl text-ink">Built for</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {FOR.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-ink/85">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-indigo" />
                    <span className="text-pretty">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grain-card h-full rounded-2xl p-8">
              <div className="flex items-center gap-3 border-b border-blush-dark/15 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blush-pop text-canvas">
                  <X className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-2xl text-ink">Not for</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {NOT_FOR.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-ink/65">
                    <X className="mt-1 h-4 w-4 shrink-0 text-blush-pop" />
                    <span className="text-pretty">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
