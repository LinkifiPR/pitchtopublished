"use client";
import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { Quote } from "lucide-react";

const INSTRUCTORS = [
  {
    name: "Chris Panteli",
    role: "Co-founder, Linkifi",
    badge: "The Agency Operator",
    photo: "/chris.jpg",
    bio: "Chris has built Linkifi into one of the world's leading digital PR agencies, securing thousands of placements across tier-one media for funded startups, public companies, and category-defining brands.",
    quote:
      "Most founders think PR is a black box. It's not — it's a system. I'll show you the exact one that gets our clients into Forbes every week.",
    pubs: ["Linkifi clients featured in", "Forbes", "Bloomberg", "TechCrunch", "Inc.", "Entrepreneur", "Fast Company"],
    accent: "indigo",
  },
  {
    name: "Sakshi Udavant",
    role: "Tier-One Journalist",
    badge: "The Insider",
    photo: "/sakshi.jpg",
    bio: "Sakshi has bylines in Business Insider, NBC Universal, Investopedia, Reader's Digest, the Chicago Tribune, the Independent, and PayPal — exactly the inboxes you're trying to land in.",
    quote:
      "I read 400 pitches a week. I'll show you the 9 lines that make me stop scrolling — and the ones that get auto-deleted.",
    pubs: ["Bylines in", "Business Insider", "NBC", "Investopedia", "Reader's Digest", "Chicago Tribune", "The Independent", "PayPal"],
    accent: "sky",
  },
];

export default function Instructors() {
  return (
    <section id="instructors" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Your instructors"
          title={
            <>
              Both sides of the <span className="italic text-indigo">inbox</span>.
            </>
          }
          intro="For the first time, the agency operator who books the placements and the journalist who decides what runs are teaching the playbook together."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {INSTRUCTORS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.12}>
              <article className="grain-card group relative h-full overflow-hidden rounded-3xl p-8 md:p-10">
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-25 blur-3xl transition-opacity group-hover:opacity-50"
                  style={{ background: p.accent === "sky" ? "#75C4E5" : "#E91E80" }}
                />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* Circular avatar */}
                    <div
                      className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 shadow-lg"
                      style={{ borderColor: p.accent === "sky" ? "#75C4E5" : "#E91E80" }}
                    >
                      <Image
                        src={p.photo}
                        alt={p.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-mono text-xs uppercase tracking-[0.2em] text-ink/50">
                        {p.badge}
                      </div>
                      <h3 className="mt-1 font-serif text-3xl tracking-tight text-ink md:text-4xl">{p.name}</h3>
                      <div className="mt-1 text-ink/60">{p.role}</div>
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-ink/75 text-pretty">{p.bio}</p>

                <div className="mt-8 rounded-2xl border-l-2 border-indigo bg-blush/30 p-5">
                  <Quote className="mb-2 h-4 w-4 text-indigo/70" />
                  <p className="font-serif text-lg italic leading-snug text-ink/90 text-pretty">
                    {p.quote}
                  </p>
                </div>

                <div className="mt-8">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/45">
                    {p.pubs[0]}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.pubs.slice(1).map((pub) => (
                      <span
                        key={pub}
                        className="rounded-full border border-ink/15 bg-canvas/60 px-3 py-1 font-serif text-sm text-ink/85"
                      >
                        {pub}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
