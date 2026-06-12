"use client";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { Check, X, ArrowRight } from "lucide-react";

const PATH_A = [
  "Still pitching from guesswork — or not pitching at all",
  "Competitors' logos stacking up on the features you wanted",
  "Getting quoted $5–10k/month by agencies, again",
  "The same invisibility in Google your category has today",
  "Reading this page again at $999 — if doors reopen at all",
];

const PATH_B = [
  "Your first tier-one feature live, framed, and converting",
  "A 30%+ reply rate and journalists answering you by name",
  "A 500-contact media list and a cadence that runs itself",
  "Authority backlinks compounding your rankings every month",
  "$499 — once — and you own the system forever",
];

export default function TwoPaths() {
  return (
    <section className="relative bg-blush/30 py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="90 days from today"
          title={
            <>
              Two versions of you read this page. <span className="italic text-indigo">Only one enrolls.</span>
            </>
          }
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="grain-card flex h-full flex-col rounded-3xl p-8 opacity-80 md:p-10">
              <div className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-ink/45">
                Path one
              </div>
              <h3 className="mt-3 font-serif text-2xl text-ink/70 md:text-3xl">
                Close the tab.
              </h3>
              <ul className="mt-7 flex-1 space-y-4">
                {PATH_A.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-ink/60">
                    <X className="mt-1 h-4 w-4 shrink-0 text-ink/35" />
                    <span className="text-pretty">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-ink/10 pt-5 font-serif text-lg italic text-ink/50">
                Cost: $0 today. Everything, later.
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glow-border relative flex h-full flex-col overflow-hidden rounded-3xl p-8 md:p-10">
              <div
                aria-hidden
                className="absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-30 blur-3xl"
                style={{ background: "radial-gradient(ellipse, #E91E80 0%, transparent 70%)" }}
              />
              <div className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-blush-pop">
                Path two
              </div>
              <h3 className="mt-3 font-serif text-2xl text-ink md:text-3xl">
                Enroll tonight. Pitch by Friday.
              </h3>
              <ul className="mt-7 flex-1 space-y-4">
                {PATH_B.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-ink/85">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-indigo" />
                    <span className="text-pretty">{p}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#pricing"
                className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-indigo px-7 py-4 text-base font-semibold text-canvas transition hover:bg-indigo-deep"
              >
                Choose path two — $499
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
