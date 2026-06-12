"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { Ban, Bot, Mic2, Sparkles, ArrowRight } from "lucide-react";

const BONUSES = [
  {
    icon: Ban,
    name: "The PR Request Blacklist",
    tag: "Bonus 01",
    value: 199,
    headline: "Stop wasting pitches on dead ends.",
    desc:
      "The exact blacklist Linkifi uses internally — every HARO/Qwoted request type, journalist behavior pattern, and outlet category that quietly burns your time and reputation. Skip them. Pitch only what converts.",
    bullets: [
      "Outlet blacklist: 60+ sites you should never pitch",
      "Request type filters: the 11 traps inside HARO/Qwoted",
      "Red-flag journalist patterns to walk away from",
      "Updated quarterly — for life",
    ],
    accent: "indigo",
  },
  {
    icon: Bot,
    name: "Journo Bio Builder GPT",
    tag: "Bonus 02",
    value: 89,
    headline: "Personalize 50 pitches in 10 minutes.",
    desc:
      "Custom GPT trained on Sakshi's editorial frameworks. Paste a journalist's name + outlet — it returns a personalized, byline-aware bio hook in under 30 seconds. Used by Linkifi's outreach desk daily.",
    bullets: [
      "Pre-loaded with 800+ tier-one journalist patterns",
      "Outputs a hook + opener + flattering reference",
      "Subject-line variant generator built in",
      "Lifetime access, no GPT subscription required",
    ],
    accent: "blush",
  },
  {
    icon: Mic2,
    name: "SEO Estonia Conference Vault",
    tag: "Bonus 03 · Headline bonus",
    value: 399,
    headline: "Exclusive, never-shared-anywhere PR + SEO playbook.",
    desc:
      "Chris's full SEO Estonia 2026 conference presentation — the one attendees paid €1,400+ to fly in for. Never published online. Includes the digital PR → SEO authority stack that's behind Linkifi's biggest case studies.",
    bullets: [
      "Full 65-minute talk + slides (1080p)",
      "Annotated transcript with timestamps",
      "The 4-stage PR → SEO authority funnel diagram",
      "Companion workbook with the exact prompts used",
    ],
    accent: "sky",
    featured: true,
  },
];

const TOTAL = BONUSES.reduce((s, b) => s + b.value, 0);

export default function Bonuses() {
  return (
    <section id="bonuses" className="relative py-32">
      <div className="absolute inset-0 -z-10 bg-blush/40" />
      <div aria-hidden className="absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full opacity-50 blur-[100px]" style={{ background: "radial-gradient(ellipse, #E0A8D2 0%, transparent 70%)" }} />
      <div aria-hidden className="absolute -right-20 bottom-10 -z-10 h-72 w-72 rounded-full opacity-40 blur-[100px]" style={{ background: "radial-gradient(ellipse, #75C4E5 0%, transparent 70%)" }} />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={`+ $${TOTAL} in free bonuses`}
          title={
            <>
              Three bonuses worth more than the <span className="italic text-indigo">course itself</span>.
            </>
          }
          intro="No filler. No fluff. Each one is a tool Chris and Sakshi actively use on paid client work, every single week."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {BONUSES.map((b, i) => {
            const Icon = b.icon;
            const isFeatured = b.featured;
            return (
              <Reveal key={b.name} delay={i * 0.1}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl p-8 md:p-9 ${
                    isFeatured
                      ? "ink-card lg:scale-[1.03]"
                      : "grain-card"
                  }`}
                >
                  {isFeatured && (
                    <div className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-blush px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-indigo-deep">
                      <Sparkles className="h-3 w-3" /> Headline bonus
                    </div>
                  )}

                  {/* Icon block */}
                  <div className="mb-7 flex items-center justify-between">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
                        isFeatured
                          ? "bg-sky text-ink-50"
                          : b.accent === "indigo"
                          ? "bg-indigo text-canvas"
                          : "bg-blush-dark text-canvas"
                      }`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="text-right">
                      <div className={`font-mono text-[10px] uppercase tracking-[0.2em] ${isFeatured ? "text-blush" : "text-ink/45"}`}>
                        Value
                      </div>
                      <div className={`font-serif text-3xl ${isFeatured ? "text-blush" : "text-indigo"}`}>
                        ${b.value}
                      </div>
                    </div>
                  </div>

                  <div className={`font-mono text-[10px] uppercase tracking-[0.25em] ${isFeatured ? "text-sky" : "text-blush-dark"}`}>
                    {b.tag}
                  </div>
                  <h3 className={`mt-2 font-serif text-2xl leading-tight md:text-3xl ${isFeatured ? "text-canvas" : "text-ink"}`}>
                    {b.name}
                  </h3>
                  <p className={`mt-3 font-serif italic text-lg ${isFeatured ? "text-blush" : "text-indigo"}`}>
                    {b.headline}
                  </p>
                  <p className={`mt-4 text-pretty ${isFeatured ? "text-canvas/80" : "text-ink/70"}`}>
                    {b.desc}
                  </p>

                  <ul className={`mt-6 space-y-2.5 ${isFeatured ? "text-canvas/85" : "text-ink/75"}`}>
                    {b.bullets.map((bl) => (
                      <li key={bl} className="flex items-start gap-3 text-sm">
                        <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${isFeatured ? "bg-sky" : "bg-blush-dark"}`} />
                        <span>{bl}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`mt-8 flex items-center justify-between border-t pt-5 text-sm ${isFeatured ? "border-blush/20 text-blush" : "border-ink/10 text-indigo"}`}>
                    <span>Included free with enrollment</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-col items-center gap-2 text-center">
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-blush-dark">Total bonus stack</div>
            <div className="font-serif text-5xl text-indigo md:text-6xl">${TOTAL} <span className="text-ink/40 line-through text-2xl align-middle">retail</span></div>
            <div className="mt-1 max-w-md text-pretty text-ink/65">
              Yours when you enroll during Cohort 01 — never bundled together again at this price.
            </div>
            <a href="#pricing" className="mt-6 inline-flex items-center gap-2 rounded-full bg-indigo px-6 py-3 text-sm font-semibold text-canvas transition hover:bg-indigo-deep">
              Claim all three bonuses
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
