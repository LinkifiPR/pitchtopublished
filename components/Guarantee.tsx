"use client";
import { ShieldCheck, Check } from "lucide-react";
import Reveal from "./Reveal";

const TERMS = [
  "Full refund — no forms, no friction, no \"exit interview\"",
  "We personally review your pitches first to help you debug",
  "You keep all three bonuses even if you refund",
];

export default function Guarantee() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="grain-card relative overflow-hidden rounded-3xl p-10 md:p-14">
            <div
              aria-hidden
              className="absolute -right-12 -top-12 h-48 w-48 rounded-full opacity-30 blur-3xl"
              style={{ background: "radial-gradient(ellipse, #75C4E5 0%, transparent 70%)" }}
            />
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-start">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-indigo text-canvas">
                <ShieldCheck className="h-10 w-10" />
              </div>
              <div>
                <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-blush-pop">
                  The 10× Guarantee — we take the risk, not you
                </div>
                <h3 className="mt-2 font-serif text-3xl leading-tight text-ink md:text-4xl">
                  Send 50 pitches using our system in 30 days. If your reply rate doesn't 10× — full refund.
                </h3>
                <p className="mt-4 text-ink/70 text-pretty">
                  We can stand behind this because the system has been pressure-tested across
                  thousands of live campaigns. Either it works for you, or you don't pay.
                  The only way to lose money on this page is to do nothing.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {TERMS.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-ink/85">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-indigo" />
                      <span className="text-pretty">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
