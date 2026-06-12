"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, PlayCircle, Star, CheckCircle2, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

const PROOF_PILLS = [
  "As taught inside Linkifi (top-50 PR agency)",
  "Co-built with a Business Insider journalist",
  "1,200+ live journalist contacts included",
];

function PortraitFrame({
  src,
  name,
  role,
  side,
  delay = 0,
  bgGradient,
  fit = "cover",
}: {
  src: string;
  name: string;
  role: string;
  side: "left" | "right";
  delay?: number;
  bgGradient: string;
  fit?: "cover" | "contain";
}) {
  const tilt = side === "left" ? "-rotate-3" : "rotate-3";
  const align = side === "left" ? "items-start text-left" : "items-end text-right";
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex flex-col gap-3 ${align}`}
    >
      <div className={`group relative ${tilt} w-full max-w-[18rem] transition-transform duration-500 hover:rotate-0`}>
        <div
          aria-hidden
          className="absolute -inset-6 -z-10 rounded-[2rem] opacity-70 blur-2xl"
          style={{
            background:
              side === "left"
                ? "radial-gradient(ellipse, #E91E80 0%, transparent 70%)"
                : "radial-gradient(ellipse, #75C4E5 0%, transparent 70%)",
          }}
        />
        <div
          className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.5rem] border-[3px] border-canvas shadow-[0_30px_60px_-15px_rgba(0,0,0,0.35)] md:rounded-[1.75rem]"
          style={{ background: bgGradient }}
        >
          <Image
            src={src}
            alt={name}
            fill
            sizes="(min-width: 768px) 18rem, 50vw"
            className={fit === "contain" ? "object-contain object-bottom" : "object-cover object-top"}
            priority
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-1/2"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.55) 100%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 p-3 text-canvas md:p-4">
            <div className="font-serif text-base leading-tight md:text-2xl">{name}</div>
            <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-canvas/85">
              {role}
            </div>
          </div>
        </div>
        <div
          className={`absolute -top-2 ${
            side === "left" ? "-right-2 rotate-6 md:-right-3" : "-left-2 -rotate-6 md:-left-3"
          } whitespace-nowrap rounded-full ${side === "left" ? "bg-blush-pop" : "bg-sky"} px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-canvas shadow-xl md:-top-3 md:px-4 md:py-2 md:text-xs`}
        >
          {side === "left" ? "The Operator" : "The Insider"}
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="noise-bg relative isolate overflow-hidden pb-16 pt-10 md:pb-20 md:pt-14">
      <div aria-hidden className="hero-grid-bg absolute inset-0 -z-10 opacity-40" style={{ maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)" }} />
      <div aria-hidden className="absolute left-1/2 top-1/3 -z-10 h-[640px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-[120px]" style={{ background: "radial-gradient(ellipse, #F0D5EB 0%, transparent 70%)" }} />
      <div aria-hidden className="absolute right-0 top-1/4 -z-10 h-[420px] w-[420px] rounded-full opacity-50 blur-[100px]" style={{ background: "radial-gradient(ellipse, #75C4E5 0%, transparent 70%)" }} />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div variants={fadeUp} custom={0} initial="hidden" animate="show" className="mb-6 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-blush-dark/40 bg-blush/70 px-4 py-2 text-center font-mono text-xs font-semibold uppercase tracking-[0.18em] text-indigo md:text-[13px]">
            <span className="flex h-2 w-2 shrink-0 rounded-full bg-blush-pop live-dot" />
            <span>Cohort 01 open · 47 of 100 seats taken</span>
          </span>
        </motion.div>

        {/* Portraits + headline */}
        <div className="grid items-center gap-6 md:grid-cols-[auto_1fr_auto] md:gap-10">
          <div className="hidden md:flex md:justify-start">
            <PortraitFrame
              src="/chris.jpg"
              name="Chris Panteli"
              role="Co-founder · Linkifi"
              side="left"
              delay={0.15}
              bgGradient="linear-gradient(160deg, #F0D5EB 0%, #E91E80 100%)"
              fit="cover"
            />
          </div>

          <div className="text-center">
            <motion.h1
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate="show"
              className="font-serif text-5xl leading-[0.95] tracking-tight text-ink text-balance md:text-6xl lg:text-7xl"
            >
              From <span className="italic text-indigo">Pitch</span> to{" "}
              <span className="relative">
                <span className="scribble">Published.</span>
              </span>
              <br />
              <span className="gradient-text">10× your media wins</span> in 90 days.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate="show"
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink/75 md:text-lg text-pretty"
            >
              The only PR program co-taught by the founder of a <strong className="text-ink">top-50 digital PR agency</strong> and a <strong className="text-ink">tier-one journalist</strong> with bylines in Business Insider, NBC, Investopedia &amp; PayPal.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate="show"
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <a
                href="#pricing"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-indigo px-7 py-3.5 text-base font-semibold text-canvas shadow-[0_20px_60px_-15px_rgba(55,59,153,0.55)] transition hover:bg-indigo-deep"
              >
                <span className="relative z-10">Enroll for $499</span>
                <span className="relative z-10 rounded-full bg-canvas/15 px-2 py-0.5 text-xs">
                  Save $500
                </span>
                <ArrowRight className="relative z-10 h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#curriculum"
                className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-canvas/60 px-5 py-3.5 text-base text-ink/80 backdrop-blur transition hover:border-ink/40 hover:text-ink"
              >
                <PlayCircle className="h-5 w-5" />
                See curriculum
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={4}
              initial="hidden"
              animate="show"
              className="mt-5 flex flex-col items-center justify-center gap-2 text-sm text-ink/65 md:flex-row md:gap-5"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-indigo text-indigo" />
                  ))}
                </div>
                <span><strong className="text-ink">4.9/5</strong> from 312 founders</span>
              </div>
              <span className="hidden h-1 w-1 rounded-full bg-ink/30 md:inline-block" />
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-indigo" /> 30-day 10× guarantee
              </div>
            </motion.div>
          </div>

          <div className="hidden md:flex md:justify-end">
            <PortraitFrame
              src="/sakshi.jpg"
              name="Sakshi Udavant"
              role="Tier-1 Journalist"
              side="right"
              delay={0.25}
              bgGradient="linear-gradient(160deg, #75C4E5 0%, #373B99 100%)"
              fit="cover"
            />
          </div>
        </div>

        {/* Mobile portraits row */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:hidden">
          <PortraitFrame src="/chris.jpg" name="Chris Panteli" role="Linkifi" side="left" delay={0.1} bgGradient="linear-gradient(160deg, #F0D5EB 0%, #E91E80 100%)" fit="cover" />
          <PortraitFrame src="/sakshi.jpg" name="Sakshi Udavant" role="Journalist" side="right" delay={0.15} bgGradient="linear-gradient(160deg, #75C4E5 0%, #373B99 100%)" fit="cover" />
        </div>

        {/* Proof pills */}
        <motion.div variants={fadeUp} custom={5} initial="hidden" animate="show" className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {PROOF_PILLS.map((p) => (
            <span key={p} className="tag-pill inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs">
              <Sparkles className="h-3 w-3" /> {p}
            </span>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} custom={6} initial="hidden" animate="show" className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-blush-dark/20 bg-blush-dark/20 md:grid-cols-4">
          {[
            { k: "10×", v: "Avg. pitch reply uplift" },
            { k: "90", v: "Day PR transformation" },
            { k: "1,200+", v: "Tier-one journo contacts" },
            { k: "$687", v: "In bonuses, free" },
          ].map((s) => (
            <div key={s.k} className="bg-canvas/95 px-6 py-7 backdrop-blur">
              <div className="font-serif text-4xl tracking-tight text-indigo">{s.k}</div>
              <div className="mt-1 text-sm text-ink/60">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
