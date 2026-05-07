"use client";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="noise-bg relative isolate min-h-[100svh] overflow-hidden pb-24 pt-32">
      {/* Grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      {/* Glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/3 -z-10 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(ellipse, #75C4E5 0%, transparent 70%)" }}
      />

      <div className="mx-auto max-w-6xl px-6">
        {/* Editorial dateline */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate="show"
          className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-paper/60"
        >
          <span className="flex h-2 w-2 rounded-full bg-accent live-dot" />
          <span>Cohort opens</span>
          <span className="h-px w-12 bg-paper/30" />
          <span>Limited to 100 Founders</span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="show"
          className="font-serif text-5xl leading-[0.95] tracking-tight text-balance md:text-7xl lg:text-[88px]"
        >
          From <span className="italic text-accent">Pitch</span>
          <br className="hidden md:block" />{" "}
          to <span className="gradient-text">Published.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="show"
          className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/75 md:text-xl"
        >
          The only PR program co-taught by a <span className="text-paper">tier-one journalist</span> and a{" "}
          <span className="text-paper">top digital PR agency founder</span>. Engage the media, win coverage, and{" "}
          <span className="text-accent-warm">10× your win rate in 90 days</span> — or your money back.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        >
          <a
            href="#pricing"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-indigo px-7 py-4 text-base font-semibold text-canvas shadow-[0_20px_60px_-15px_rgba(55,59,153,0.5)] transition hover:bg-indigo-deep"
          >
            <span className="relative z-10">Enroll for $499</span>
            <ArrowRight className="relative z-10 h-4 w-4 transition group-hover:translate-x-1" />
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition group-hover:translate-x-full" />
          </a>
          <a
            href="#curriculum"
            className="group inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-4 text-base text-ink/80 transition hover:border-indigo hover:text-indigo"
          >
            <PlayCircle className="h-5 w-5" />
            See what you'll learn
          </a>
          <div className="ml-2 flex items-center gap-2 text-sm text-ink/60">
            <span className="text-ink line-through opacity-50">$999</span>
            <span className="rounded-full bg-indigo/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-indigo">
              50% off — ends soon
            </span>
          </div>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate="show"
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/5 md:grid-cols-4"
        >
          {[
            { k: "10×", v: "Avg. pitch win rate uplift" },
            { k: "90", v: "Day media transformation" },
            { k: "1,200+", v: "Live journalist contacts" },
            { k: "8-Fig", v: "Brands trained" },
          ].map((s) => (
            <div key={s.k} className="bg-ink-950 px-6 py-7">
              <div className="font-serif text-4xl tracking-tight text-paper">{s.k}</div>
              <div className="mt-1 text-sm text-paper/55">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
