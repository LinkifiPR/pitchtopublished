"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Clock } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const MODULES = [
  {
    n: "01",
    title: "Foundations: How the Modern Newsroom Actually Works",
    duration: "1h 40m",
    bullets: [
      "Inside the journalist's day: the 9-minute pitch window that decides your fate",
      "Beat mapping: how to find the 5 reporters who will actually write about you",
      "Editorial calendars, news cycles, and the 'media weather' framework",
    ],
  },
  {
    n: "02",
    title: "Story Engineering: Find the Angle Reporters Can't Refuse",
    duration: "2h 10m",
    bullets: [
      "The 7 newsworthy angles every business has (most never use 4 of them)",
      "Trend-jacking, news-jacking, and data-jacking — without sounding desperate",
      "How to manufacture proprietary data that gets cited as a primary source",
    ],
  },
  {
    n: "03",
    title: "The Pitch: Subject Lines, Hooks & The 9-Line Formula",
    duration: "1h 55m",
    bullets: [
      "Subject lines that hit a 60%+ open rate — with annotated swipe file",
      "The 9-line pitch structure used by Linkifi to land 1000s of features",
      "Follow-ups that don't burn bridges (and a script for the second nudge)",
    ],
  },
  {
    n: "04",
    title: "Building Your Press Asset Stack",
    duration: "1h 25m",
    bullets: [
      "The 'journalist-ready' bio, headshot, and one-sheet (templates included)",
      "Quotable quotes: how to write yourself into being eminently quotable",
      "Source pages, expert profiles, and HARO/Qwoted positioning",
    ],
  },
  {
    n: "05",
    title: "Media Lists, Outreach Cadence & CRM",
    duration: "2h",
    bullets: [
      "Build a 500-contact tier-one media list — without paying $9k for Cision",
      "Multi-channel outreach: email, X DMs, LinkedIn — when to use which",
      "The Linkifi cadence: 7 touches across 14 days that 3× reply rate",
    ],
  },
  {
    n: "06",
    title: "Closing the Loop: Interviews, Embargoes & Coverage Multipliers",
    duration: "1h 30m",
    bullets: [
      "How to nail the journalist call (and make them want to write about you again)",
      "Embargoes, exclusives, and tiered launches — when and how to use each",
      "Coverage flywheel: turn one feature into 10 with strategic syndication",
    ],
  },
  {
    n: "07",
    title: "Crisis, Critique & Defensive PR",
    duration: "55m",
    bullets: [
      "The 24-hour crisis playbook (what to say, what to never say)",
      "Handling negative coverage without making it worse",
      "Reputation insurance: building goodwill before you need it",
    ],
  },
  {
    n: "08",
    title: "Scaling: Systems, AI Tooling & The 90-Day Plan",
    duration: "1h 15m",
    bullets: [
      "AI-assisted pitch personalization at scale (without the slop)",
      "Hiring an in-house PR person vs. agency — exact ROI math",
      "Your 90-day rollout: week-by-week milestones to your first 10 features",
    ],
  },
];

export default function Curriculum() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="curriculum" className="relative bg-ink-900/30 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="The curriculum"
          title={
            <>
              8 modules. <span className="italic text-accent">12+ hours</span>.<br /> One repeatable system.
            </>
          }
          intro="Every lesson is paired with a swipe file, template, or worksheet. No fluff, no theory — only what we use on real client engagements."
        />

        <div className="mt-16 grid gap-3">
          {MODULES.map((m, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={m.n} delay={i * 0.04}>
                <div
                  className={`grain-card overflow-hidden rounded-2xl transition-all ${
                    isOpen ? "border-accent/40 bg-paper/[0.04]" : ""
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center gap-6 p-6 text-left md:p-8"
                  >
                    <span className="font-mono text-sm text-accent md:text-base">{m.n}</span>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl text-paper md:text-2xl">{m.title}</h3>
                    </div>
                    <span className="hidden items-center gap-1.5 text-xs text-paper/50 md:flex">
                      <Clock className="h-3.5 w-3.5" /> {m.duration}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-paper/20 transition ${
                        isOpen ? "rotate-180 border-accent bg-accent text-ink-950" : "text-paper/70"
                      }`}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-paper/10 px-6 pb-8 pt-6 md:px-8">
                          <ul className="grid gap-3 md:grid-cols-1">
                            {m.bullets.map((b, j) => (
                              <li key={j} className="flex gap-3 text-paper/75">
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                                <span className="text-pretty">{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
