"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { FileText, Mail, Bot, UserSquare2, Calendar, Users } from "lucide-react";

const BONUSES = [
  {
    icon: FileText,
    name: "Headline Cheat Sheet",
    value: "$149",
    desc: "47 plug-and-play headline formulas reverse-engineered from the most-clicked Forbes, BI and TechCrunch features of the last 12 months.",
  },
  {
    icon: Mail,
    name: "Subject Line Vault",
    value: "$129",
    desc: "120+ subject lines tested across 18,000+ live pitches at Linkifi — sorted by reply rate, with annotations on why each one works.",
  },
  {
    icon: Bot,
    name: "Journo Bio Builder GPT",
    value: "$199",
    desc: "Custom GPT trained on Sakshi's journalism style. Paste a reporter's bylines; it returns a personalized cold-pitch hook in 30 seconds.",
  },
  {
    icon: UserSquare2,
    name: "Press-Ready Founder Kit",
    value: "$179",
    desc: "Boilerplate, fact sheet, founder bio, and headshot brief templates — the exact press kit Linkifi sets up for every new client.",
  },
  {
    icon: Calendar,
    name: "12-Month Newsjacking Calendar",
    value: "$99",
    desc: "Every awareness day, holiday, fiscal milestone and major industry conference, paired with a pre-written angle for each.",
  },
  {
    icon: Users,
    name: "Private Founder Community",
    value: "$299",
    desc: "Lifetime access to the Pitch to Published Slack, plus monthly office hours with Chris and Sakshi. Share wins, get pitch feedback live.",
  },
];

const totalValue = BONUSES.reduce((s, b) => s + parseInt(b.value.replace(/\D/g, "")), 0);

export default function Bonuses() {
  return (
    <section id="bonuses" className="relative bg-blush/40 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={`+ $${totalValue} in bonuses`}
          title={
            <>
              Six bonuses. <span className="italic text-indigo">Yours, free.</span>
            </>
          }
          intro="Every bonus is something Chris or Sakshi uses every single week. None of it is filler."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BONUSES.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.name} delay={(i % 3) * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="grain-card group relative flex h-full flex-col overflow-hidden rounded-2xl p-7"
                >
                  <div className="absolute right-5 top-5 font-mono text-xs text-indigo">
                    {b.value} value
                  </div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo text-canvas transition group-hover:bg-sky group-hover:text-ink">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                    Bonus {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-2 font-serif text-2xl leading-tight text-ink">{b.name}</h3>
                  <p className="mt-3 text-ink/65 text-pretty">{b.desc}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-center gap-2 text-center">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-ink/50">Total bonus stack</div>
            <div className="font-serif text-4xl text-indigo">${totalValue}+ in extras</div>
            <div className="text-ink/60">Included with every enrollment, while doors are open.</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
