"use client";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { Zap, FileText, Send, MessageSquare, Repeat, Crown } from "lucide-react";

const STEPS = [
  {
    icon: Zap,
    when: "Day 1",
    title: "You're in. Everything unlocks at once.",
    body: "Full curriculum, all swipe files, the PR Request Blacklist, the Journo Bio Builder GPT, and the SEO Estonia vault — no drip-feed. Watch Module 1 tonight and you'll already pitch differently tomorrow.",
  },
  {
    icon: FileText,
    when: "Day 7",
    title: "Your story bank exists.",
    body: "Using the Story Engineering frameworks, you'll have 7 newsworthy angles extracted from your business — including 3 you didn't know you had — plus a journalist-ready bio and press kit.",
  },
  {
    icon: Send,
    when: "Day 14",
    title: "First pitches are in real inboxes.",
    body: "Your 500-name tier-one media list is built (without paying $9k for Cision), and your first 10 surgically-targeted pitches are out using the 9-line formula.",
  },
  {
    icon: MessageSquare,
    when: "Day 30",
    title: "Replies. Actual replies.",
    body: "This is the guarantee checkpoint: 50 pitches sent. If your reply rate hasn't 10×'d, you get every cent back. Most students have their first journalist call booked by now.",
  },
  {
    icon: Repeat,
    when: "Day 60",
    title: "The machine runs without you pushing it.",
    body: "Your outreach cadence is on rails — 7 touches across 14 days, multi-channel. First features are going live, and you're recycling every placement into syndicated coverage.",
  },
  {
    icon: Crown,
    when: "Day 90",
    title: "You're the source they call.",
    body: "A win rate 10× where you started, journalist relationships that compound, stacked authority links — and reporters in your category who reach out to you when news breaks.",
  },
];

export default function Journey() {
  return (
    <section className="relative bg-blush/30 py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="Your first 90 days"
          title={
            <>
              Here's exactly what happens <span className="italic text-indigo">after you enroll</span>.
            </>
          }
          intro="No vague promises. This is the week-by-week reality reported by the founders who've already been through it."
        />

        <div className="relative mt-16">
          {/* timeline spine */}
          <div
            aria-hidden
            className="absolute bottom-8 left-[27px] top-8 w-px bg-gradient-to-b from-blush-pop via-indigo to-sky md:left-1/2"
          />

          <div className="space-y-8">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              const leftSide = i % 2 === 0;
              return (
                <Reveal key={s.when} delay={i * 0.06}>
                  <div
                    className={`relative flex items-start gap-6 md:w-1/2 ${
                      leftSide
                        ? "md:ml-0 md:flex-row-reverse md:pr-10 md:text-right"
                        : "md:ml-auto md:pl-10"
                    }`}
                  >
                    {/* node */}
                    <div
                      className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-canvas bg-indigo text-canvas shadow-lg md:absolute md:top-0 ${
                        leftSide ? "md:-right-7" : "md:-left-7"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="grain-card flex-1 rounded-2xl p-6 md:p-7">
                      <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-blush-pop">
                        {s.when}
                      </div>
                      <h3 className="mt-2 font-serif text-xl text-ink md:text-2xl">{s.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-ink/70 md:text-base text-pretty">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
