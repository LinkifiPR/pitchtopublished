"use client";
import Reveal from "./Reveal";
import { TrendingDown, Inbox, ListX, Hourglass } from "lucide-react";

const SHIFTS = [
  {
    icon: Inbox,
    stat: "1,000+",
    label: "AI pitches per day",
    body: "AI tools now let anyone blast a thousand pitches a day. Journalist inboxes are drowning — and generic pitches get auto-filtered before a human ever reads them.",
  },
  {
    icon: TrendingDown,
    stat: "<2%",
    label: "Average cold reply rate",
    body: "Cold-pitch reply rates have collapsed below 2% and they're still falling. The founders still winning coverage are the ones pitching like insiders — because they learned from one.",
  },
  {
    icon: ListX,
    stat: "Now",
    label: "Trust lists are forming",
    body: "Burned by the spam flood, journalists are retreating to private shortlists of proven, reliable sources. Get on those lists now — or spend years pitching against them.",
  },
];

const WAITING_COSTS = [
  "Your competitor banks 2–3 tier-one features and the authority backlinks that come with them",
  "Their domain authority compounds in Google — rankings you will have to outspend later",
  "The journalists covering your category lock in their go-to sources. Without you.",
  "The story angles that are fresh today get written — by someone else's name",
];

export default function WhyNow() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="ink-card relative overflow-hidden rounded-[2.5rem] p-8 md:p-16">
            <div
              aria-hidden
              className="absolute -right-24 -top-24 h-96 w-96 rounded-full opacity-25 blur-3xl"
              style={{ background: "radial-gradient(ellipse, #E91E80 0%, transparent 70%)" }}
            />
            <div
              aria-hidden
              className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full opacity-20 blur-3xl"
              style={{ background: "radial-gradient(ellipse, #75C4E5 0%, transparent 70%)" }}
            />

            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-blush-pop" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-blush-pop">
                  Why right now
                </span>
              </div>

              <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.02] tracking-tight text-canvas md:text-6xl text-balance">
                The inbox window is <span className="italic text-sky">closing</span>.
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-canvas/75 text-pretty">
                PR didn't get harder gradually — it broke in the last 18 months. Three shifts are
                deciding which founders own the media for the next decade, and which ones get
                filtered out with the spam.
              </p>

              <div className="mt-12 grid gap-5 md:grid-cols-3">
                {SHIFTS.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <Reveal key={s.label} delay={i * 0.08}>
                      <div className="flex h-full flex-col rounded-2xl border border-canvas/10 bg-canvas/5 p-7 backdrop-blur">
                        <div className="flex items-center justify-between">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blush-pop/20 text-blush">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="font-serif text-4xl text-sky">{s.stat}</div>
                        </div>
                        <h3 className="mt-5 font-serif text-xl text-canvas">{s.label}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-canvas/70 text-pretty">{s.body}</p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              {/* Cost of waiting */}
              <Reveal delay={0.15}>
                <div className="mt-12 rounded-2xl border border-blush-pop/30 bg-blush-pop/10 p-7 md:p-9">
                  <div className="flex items-center gap-3">
                    <Hourglass className="h-5 w-5 text-blush" />
                    <h3 className="font-serif text-2xl text-canvas md:text-3xl">
                      What every month of waiting actually costs you
                    </h3>
                  </div>
                  <ul className="mt-6 grid gap-3 md:grid-cols-2">
                    {WAITING_COSTS.map((c) => (
                      <li key={c} className="flex items-start gap-3 text-canvas/85">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blush-pop" />
                        <span className="text-pretty">{c}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-7 border-t border-canvas/15 pt-6 font-serif text-xl italic text-canvas md:text-2xl text-pretty">
                    PR compounds. A journalist relationship can't be backdated — the founders who
                    build them this quarter are the ones getting quoted for the next five years.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
