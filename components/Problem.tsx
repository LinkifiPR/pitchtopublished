"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { X, Check } from "lucide-react";

const BAD = [
  "Mass-blasting 200 journalists with the same generic pitch",
  "Pitching the wrong person at the wrong publication, at the wrong time",
  "Sending press releases that read like marketing copy",
  "Burning $5K/mo on agencies who can't get you a single feature",
  "Watching competitors get the headlines you should be in",
];
const GOOD = [
  "Land features in tier-one publications in under 30 days",
  "Build journalist relationships that pay off for years",
  "Pitch with surgical precision — and a 30%+ reply rate",
  "Own your category in Google with stacked authority links",
  "Become the founder reporters call when news breaks",
];

export default function Problem() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="The truth about PR"
          title={
            <>
              Why <span className="italic text-indigo">99% of pitches</span>
              <br /> get ignored.
            </>
          }
          intro="The media gatekeeper game has changed. Most founders are still playing by 2015 rules — and getting buried in the inbox graveyard."
        />

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="grain-card relative h-full overflow-hidden rounded-2xl p-8 md:p-10">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red-500/10 blur-3xl" />
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/15 text-red-400">
                  <X className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-2xl">The old way</h3>
              </div>
              <ul className="space-y-4">
                {BAD.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex gap-3 text-paper/70"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-red-400/60" />
                    <span className="text-pretty">{b}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glow-border relative h-full overflow-hidden rounded-2xl p-8 md:p-10">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-indigo">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-2xl">The Pitch to Published way</h3>
              </div>
              <ul className="space-y-4">
                {GOOD.map((g, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex gap-3 text-paper"
                  >
                    <Check className="mt-1 h-4 w-4 shrink-0 text-indigo" />
                    <span className="text-pretty">{g}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
