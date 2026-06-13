"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Maximize2, Volume2, Clock } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const LESSONS = [
  {
    src: "/course-1.png",
    module: "Module 02",
    title: "The 7 Newsworthy Angles Every Business Has",
    duration: "14:22",
    caption:
      "Sakshi breaks down the only seven story frames journalists at tier-one outlets actually publish — and which ones your business already has hiding in plain sight.",
  },
  {
    src: "/course-2.png",
    module: "Module 03",
    title: "The 9-Line Pitch Formula, Annotated Live",
    duration: "18:47",
    caption:
      "Chris dissects a real pitch that landed a Forbes feature for a Linkifi client — line by line. You'll never write a generic email subject again.",
  },
  {
    src: "/course-3.png",
    module: "Module 05",
    title: "Building Your 500-Name Tier-1 Media List",
    duration: "22:10",
    caption:
      "The exact build process — including the three free tools that replace a $9k Cision subscription and how to verify every email before you send.",
  },
  {
    src: "/course-4.png",
    module: "Module 06",
    title: "Closing the Loop: The Interview Playbook",
    duration: "16:35",
    caption:
      "How to nail the journalist call so they want to write about you again — including the 4 questions to ask that turn a one-off feature into a recurring source relationship.",
  },
  {
    src: "/course-5.png",
    module: "Module 07",
    title: "The 24-Hour Crisis Response Playbook",
    duration: "12:08",
    caption:
      "What to say in the first hour, what to never put in writing, and how to use a critical news cycle to actually strengthen your brand authority.",
  },
  {
    src: "/course-6.png",
    module: "Module 08",
    title: "AI-Assisted Pitch Personalization at Scale",
    duration: "20:54",
    caption:
      "How to use AI without sounding like AI — the prompt stack we use at Linkifi to personalize 50 pitches in the time it used to take to write 3.",
  },
];

export default function CoursePreview() {
  const [active, setActive] = useState(0);
  const current = LESSONS[active];

  return (
    <section className="relative overflow-hidden bg-blush/30 py-32">
      <div
        aria-hidden
        className="absolute -left-32 top-32 -z-10 h-96 w-96 rounded-full opacity-50 blur-[120px]"
        style={{ background: "radial-gradient(ellipse, #E91E80 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute -right-32 bottom-32 -z-10 h-96 w-96 rounded-full opacity-50 blur-[120px]"
        style={{ background: "radial-gradient(ellipse, #75C4E5 0%, transparent 70%)" }}
      />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Inside the course"
          title={
            <>
              A look at what you'll actually <span className="italic text-indigo">watch</span>.
            </>
          }
          intro="No stock-footage marketing. Real lessons, real frameworks, real screen-shares from the actual recordings."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          {/* Featured player */}
          <Reveal>
            <div className="group relative">
              {/* halo */}
              <div
                aria-hidden
                className="absolute -inset-4 -z-10 rounded-[2rem] opacity-50 blur-2xl transition-opacity group-hover:opacity-80"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(55,59,153,0.5) 0%, transparent 70%)",
                }}
              />

              <div className="overflow-hidden rounded-[1.75rem] border border-ink/10 bg-ink-50 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.45)]">
                {/* Browser / player chrome */}
                <div className="flex items-center justify-between border-b border-canvas/10 bg-ink-50 px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                    <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                    <span className="h-3 w-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="hidden items-center gap-2 rounded-full bg-canvas/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-canvas/80 sm:flex">
                    <span className="h-1.5 w-1.5 rounded-full bg-blush-pop live-dot" />
                    Now playing · {current.module}
                  </div>
                  <Maximize2 className="h-3.5 w-3.5 text-canvas/50" />
                </div>

                {/* Video frame */}
                <div className="relative aspect-[16/10] w-full bg-ink-50">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.src}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={current.src}
                        alt={current.title}
                        fill
                        sizes="(min-width: 1024px) 60vw, 100vw"
                        className="object-cover"
                        priority={active === 0}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Play button overlay */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-canvas/90 shadow-2xl backdrop-blur-md transition group-hover:scale-110 md:h-20 md:w-20">
                      <Play className="ml-1 h-6 w-6 fill-indigo text-indigo md:h-7 md:w-7" />
                    </div>
                  </div>

                  {/* Bottom controls */}
                  <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-black/80 to-transparent px-5 py-4 text-canvas">
                    <Play className="h-4 w-4 fill-canvas" />
                    <div className="h-1 flex-1 overflow-hidden rounded-full bg-canvas/25">
                      <div className="h-full w-1/3 rounded-full bg-blush-pop" />
                    </div>
                    <span className="font-mono text-[11px] tabular-nums">
                      <Clock className="mr-1 inline h-3 w-3" />
                      {current.duration}
                    </span>
                    <Volume2 className="h-4 w-4 text-canvas/80" />
                  </div>
                </div>
              </div>

              {/* Caption under player */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="mt-6"
                >
                  <div className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-blush-pop">
                    {current.module} · {current.duration}
                  </div>
                  <h3 className="mt-2 font-serif text-2xl leading-tight text-ink md:text-3xl text-balance">
                    {current.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-ink/70 text-pretty">{current.caption}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>

          {/* Thumbnail rail */}
          <Reveal delay={0.15}>
            <div className="flex flex-col gap-3">
              <div className="mb-1 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-blush-pop">
                Six lessons · pick one to preview
              </div>
              {LESSONS.map((l, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={l.src}
                    onClick={() => setActive(i)}
                    className={`group flex items-center gap-4 rounded-2xl border p-2.5 text-left transition ${
                      isActive
                        ? "border-indigo/50 bg-canvas/95 shadow-[0_12px_30px_-12px_rgba(55,59,153,0.45)]"
                        : "border-ink/10 bg-canvas/50 hover:border-indigo/30 hover:bg-canvas/80"
                    }`}
                  >
                    <div
                      className={`relative aspect-[16/10] w-28 shrink-0 overflow-hidden rounded-lg sm:w-32 ${
                        isActive ? "ring-2 ring-blush-pop ring-offset-2 ring-offset-canvas" : ""
                      }`}
                    >
                      <Image
                        src={l.src}
                        alt={l.title}
                        fill
                        sizes="160px"
                        className="object-cover transition group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-canvas/90">
                          <Play className="ml-0.5 h-3 w-3 fill-indigo text-indigo" />
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-blush-pop">
                        {l.module}
                        <span className="text-ink/30">·</span>
                        <span className="text-ink/55">{l.duration}</span>
                      </div>
                      <div
                        className={`mt-1 line-clamp-2 text-sm font-medium leading-snug ${
                          isActive ? "text-indigo" : "text-ink/85"
                        }`}
                      >
                        {l.title}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Bottom mini-mosaic for "more inside" */}
        <Reveal delay={0.25}>
          <div className="mt-16 border-t border-ink/10 pt-10">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <div className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-blush-pop">
                  + 47 more lessons inside
                </div>
                <p className="mt-2 max-w-xl font-serif text-xl text-ink md:text-2xl text-pretty">
                  Plus swipe files, templates, and live office hours.{" "}
                  <span className="italic text-indigo">Every minute is do-this-now, not theory.</span>
                </p>
              </div>
              <a
                href="#pricing"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-indigo px-6 py-3 text-sm font-semibold text-canvas transition hover:bg-indigo-deep"
              >
                Get instant access — $499
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
