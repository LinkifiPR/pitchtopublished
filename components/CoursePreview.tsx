"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

type Shot = {
  src: string;
  caption: string;
  span: "lg" | "md" | "sm";
  tilt: string;
};

const SHOTS: Shot[] = [
  {
    src: "/course-1.png",
    caption: "Sakshi walking through the seven story angles every business has.",
    span: "lg",
    tilt: "-rotate-1",
  },
  {
    src: "/course-2.png",
    caption: "Chris dissecting a real Forbes-winning pitch, line by line.",
    span: "md",
    tilt: "rotate-2",
  },
  {
    src: "/course-3.png",
    caption: "Building a 500-name tier-1 media list from scratch.",
    span: "md",
    tilt: "-rotate-2",
  },
  {
    src: "/course-4.png",
    caption: "The interview playbook — what to say when the journalist calls back.",
    span: "md",
    tilt: "rotate-1",
  },
  {
    src: "/course-5.png",
    caption: "Crisis-response — the first hour, the first email, the first call.",
    span: "md",
    tilt: "-rotate-1",
  },
  {
    src: "/course-6.png",
    caption: "AI-assisted personalization without sounding like AI.",
    span: "lg",
    tilt: "rotate-1",
  },
];

const SPAN_CLASS: Record<Shot["span"], string> = {
  lg: "md:col-span-2",
  md: "md:col-span-1",
  sm: "md:col-span-1",
};

export default function CoursePreview() {
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
          eyebrow="Inside the room"
          title={
            <>
              Real people. Real <span className="italic text-indigo">teaching</span>. Caught mid-sentence.
            </>
          }
          intro="Snapshots from the recording sessions — so you know exactly who's on the other side of the camera before you enrol."
        />

        {/* Masonry mosaic */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SHOTS.map((shot, i) => (
            <Reveal key={shot.src} delay={(i % 3) * 0.08}>
              <motion.figure
                whileHover={{ y: -4, rotate: 0 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className={`group relative ${SPAN_CLASS[shot.span]} ${shot.tilt} transition-transform`}
              >
                {/* Polaroid frame */}
                <div className="relative overflow-hidden rounded-[1.25rem] bg-canvas p-3 shadow-[0_18px_45px_-20px_rgba(0,0,0,0.35)] ring-1 ring-ink/5">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[0.85rem]">
                    <Image
                      src={shot.src}
                      alt={shot.caption}
                      fill
                      sizes="(min-width: 768px) 45vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="px-2 pb-1 pt-4">
                    <p className="font-serif text-base italic leading-snug text-ink/85 md:text-lg text-pretty">
                      {shot.caption}
                    </p>
                  </figcaption>
                </div>

                {/* Soft halo behind on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-3 -z-10 rounded-[1.6rem] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
                  style={{
                    background:
                      i % 2 === 0
                        ? "radial-gradient(ellipse, #E91E80 0%, transparent 70%)"
                        : "radial-gradient(ellipse, #75C4E5 0%, transparent 70%)",
                  }}
                />
              </motion.figure>
            </Reveal>
          ))}
        </div>

        {/* Footer line */}
        <Reveal delay={0.2}>
          <div className="mt-14 border-t border-ink/10 pt-10">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <p className="max-w-xl font-serif text-xl text-ink md:text-2xl text-pretty">
                <span className="italic text-indigo">No actors. No stock footage.</span> Just the
                two people who've been doing this for a decade, on camera.
              </p>
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
