"use client";
import Reveal from "./Reveal";

const STATS = [
  { k: "312", v: "Founders trained" },
  { k: "4.9/5", v: "Avg. student rating" },
  { k: "1,400+", v: "Placements landed" },
  { k: "$11.6M", v: "Earned media generated" },
  { k: "32%", v: "Avg. reply rate" },
  { k: "21 days", v: "Avg. time to first feature" },
];

export default function ResultsBanner() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="ink-card relative overflow-hidden rounded-3xl px-8 py-10 md:px-12">
            <div aria-hidden className="absolute -left-20 -top-20 h-72 w-72 rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(ellipse, #F0D5EB 0%, transparent 70%)" }} />
            <div className="grid grid-cols-2 gap-y-8 md:grid-cols-6">
              {STATS.map((s) => (
                <div key={s.k} className="text-center md:border-l md:border-blush/15 first:border-l-0">
                  <div className="font-serif text-3xl text-blush md:text-4xl">{s.k}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-canvas/65 md:text-sm">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
