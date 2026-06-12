"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const FAQS = [
  {
    q: "Who is this for?",
    a: "Founders, business owners, and brand operators who want to win earned media at tier-one publications. If you're trying to be the person reporters quote, the company TechCrunch covers, or the brand that shows up first in Google for category searches — this is built for you.",
  },
  {
    q: "Do I need an existing audience or PR experience?",
    a: "No. We start from zero. Module 1 assumes you've never sent a single pitch. By Module 5 you'll have built a 500-name media list and your first 10 pitches will be in inboxes.",
  },
  {
    q: "How much time does this take each week?",
    a: "About 20 minutes a day, or two focused hours a week. Lessons are cut into 8–15 minute segments, each ending with one concrete action. The 90-day plan in Module 8 maps it out day by day, so you never have to wonder what to do next.",
  },
  {
    q: "I'm pre-launch / very early stage. Is it too soon?",
    a: "Early is actually an advantage — 'unknown founder building X in public' is one of the most pitchable angles in journalism. You'll build your press assets, story bank, and journalist relationships before launch, so that when you do launch, the coverage is already lined up.",
  },
  {
    q: "How long do I have access?",
    a: "Lifetime — including every future update. The PR landscape evolves; the course evolves with it. New modules and case studies are added quarterly at no extra cost.",
  },
  {
    q: "How is this different from hiring an agency?",
    a: "An agency rents you placements at $5–10k/mo. We give you the system. After 90 days, you own a repeatable PR engine that compounds for years. Plenty of our students reduce or fire their agency after the program.",
  },
  {
    q: "What if it doesn't work for me?",
    a: "Send 50 pitches using our system within 30 days. If your reply rate doesn't 10×, we refund every cent — no forms, no friction. We'll even review your pitches first to help you debug.",
  },
  {
    q: "Will I really get covered in tier-one media?",
    a: "We can't guarantee a specific outlet — no honest operator can. What we can guarantee is the system: a higher reply rate, better journalist relationships, and a steady cadence of features. Most students land their first tier-one feature within 60–90 days.",
  },
  {
    q: "Is there a payment plan?",
    a: "Yes. You can split it into 3 monthly payments of $179 at checkout. Total is the same — no fees, no interest.",
  },
  {
    q: "What exactly happens when Cohort 01 closes?",
    a: "Three things, immediately: the price returns to $999 permanently, the $687 bonus stack (PR Request Blacklist, Journo Bio Builder GPT, SEO Estonia vault) retires from the offer, and enrollment locks until we decide on a second cohort. If you're reading this while the timer is running, you're seeing the best version of this offer that will ever exist.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative bg-blush/40 py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader
          eyebrow="Questions"
          title={
            <>
              Things founders ask <span className="italic text-indigo">before enrolling</span>.
            </>
          }
        />

        <div className="mt-14 grid gap-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.04}>
                <div className={`grain-card overflow-hidden rounded-2xl ${isOpen ? "border-indigo/40" : ""}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center gap-6 p-6 text-left"
                  >
                    <h3 className="flex-1 font-serif text-lg text-ink md:text-xl">{f.q}</h3>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                        isOpen ? "rotate-45 bg-indigo text-canvas" : "border border-ink/15 text-ink/60"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-ink/10 px-6 pb-6 pt-5 text-ink/75 text-pretty">
                          {f.a}
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
