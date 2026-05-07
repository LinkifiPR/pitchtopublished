"use client";
import { ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

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
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-indigo text-canvas">
                <ShieldCheck className="h-10 w-10" />
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-indigo">
                  The 10× Guarantee
                </div>
                <h3 className="mt-2 font-serif text-3xl leading-tight text-ink md:text-4xl">
                  Send 50 pitches using our system in 30 days. If your reply rate doesn't 10× — full refund.
                </h3>
                <p className="mt-4 text-ink/70 text-pretty">
                  We'll even review your pitches personally before refunding. We can stand behind this because the system has been pressure-tested across thousands of campaigns. Either it works for you, or you don't pay. That's it.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
