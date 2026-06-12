"use client";
import Image from "next/image";
import Reveal from "./Reveal";

export default function FounderLetter() {
  return (
    <section className="relative py-32">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(ellipse, #F0D5EB 0%, transparent 70%)" }}
      />
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <article className="grain-card relative rounded-[2rem] p-8 md:p-14">
            <div className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-blush-pop">
              A letter from your instructors
            </div>

            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-ink md:text-4xl text-balance">
              Why we finally put the playbook on paper.
            </h2>

            <div className="mt-8 space-y-5 font-serif text-lg leading-relaxed text-ink/85 md:text-xl">
              <p>Dear founder,</p>
              <p>
                Between us, we've spent the last decade on opposite sides of the same broken
                transaction.
              </p>
              <p>
                Chris has been inside the agency engine — watching brilliant founders pay
                $7,500 a month for placements they could win themselves in an afternoon, if
                anyone had simply shown them how the machine works.
              </p>
              <p>
                Sakshi has been on the receiving end: 400 pitches a week landing in her inbox
                at Business Insider, Investopedia, NBC. She replies to maybe twelve. Not
                because the other 388 founders weren't interesting — but because their
                pitches buried the story so deep no journalist on deadline could find it.
              </p>
              <p>
                That's the entire problem. And it has a <em>teachable</em> fix: the angle,
                the subject line, the nine lines that follow, the follow-up that doesn't
                beg, the relationship that outlasts the campaign.
              </p>
              <p>
                We built Pitch to Published as the course we wish we could hand every founder
                who's ever asked us "how do I get press?" — every framework, every template,
                every uncomfortable insider truth, with nothing held back for the upsell.
                There is no upsell. This is everything.
              </p>
              <p>
                We capped Cohort 01 at 100 founders because we personally review pitches in
                office hours, and we won't let that promise get diluted. When the seats are
                gone, they're gone.
              </p>
              <p>We hope you take one of them.</p>
            </div>

            {/* Signatures */}
            <div className="mt-10 flex flex-col gap-6 border-t border-ink/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-blush-pop">
                  <Image src="/chris.jpg" alt="Chris Panteli" fill sizes="56px" className="object-cover object-top" />
                </div>
                <div>
                  <div className="font-serif text-xl italic text-ink">Chris Panteli</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55">
                    Co-founder, Linkifi
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-sky">
                  <Image src="/sakshi.jpg" alt="Sakshi Udavant" fill sizes="56px" className="object-cover object-top" />
                </div>
                <div>
                  <div className="font-serif text-xl italic text-ink">Sakshi Udavant</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55">
                    Tier-one journalist
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-8 rounded-2xl bg-blush/50 p-5 text-ink/80 text-pretty">
              <strong className="text-ink">P.S.</strong> — The $499 launch price and all three
              bonuses retire the moment the countdown above hits zero or the last seat fills,
              whichever comes first. We don't re-run launch pricing. If you're reading this,
              the best deal this course will ever be is the one on your screen right now.
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
