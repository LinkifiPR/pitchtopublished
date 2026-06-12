"use client";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const OBJECTIONS = [
  {
    thought: "“I don't have time for a course right now.”",
    answer:
      "The system runs on 20 minutes a day. Lessons are cut into 8–15 minute segments, and every one ends with a do-this-now action. Busy is exactly why you need a repeatable system instead of ad-hoc pitching at midnight.",
  },
  {
    thought: "“My business isn't newsworthy.”",
    answer:
      "No business is newsworthy — stories are. Module 2 exists precisely to manufacture angles: the 7 frames that make any company quotable, plus the data-jacking method that turns your internal numbers into headlines.",
  },
  {
    thought: "“I've tried PR before. It didn't work.”",
    answer:
      "You tried PR without a tier-one journalist showing you what the inbox looks like from her side. That's like learning poker without ever seeing the dealer's cards. This time you're playing with the deck face-up.",
  },
  {
    thought: "“$499 is a lot for a course.”",
    answer:
      "It's 5% of one month of a mid-tier PR agency retainer — and the agency keeps the system when you leave. Here you keep everything forever, and the 30-day guarantee means the real risk is zero.",
  },
  {
    thought: "“Can't AI just do this for me?”",
    answer:
      "AI blasting is exactly what's destroying reply rates industry-wide — journalists smell it in one line. We do teach AI-assisted personalization (Module 8), but as a precision tool inside a human system. That combination is the edge.",
  },
  {
    thought: "“I'll join the next cohort.”",
    answer:
      "There may not be a next cohort at this price — $499 is launch-only, and the bonus stack retires with it. Meanwhile your competitors' coverage compounds for six more months. Waiting is the most expensive option on this page.",
  },
];

export default function Objections() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Still on the fence?"
          title={
            <>
              Every reason you're about to close this tab — <span className="italic text-indigo">handled</span>.
            </>
          }
          intro="We've sold this to 312 founders. These are the six hesitations we hear, answered with the same honesty we teach."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {OBJECTIONS.map((o, i) => (
            <Reveal key={i} delay={(i % 2) * 0.08}>
              <div className="grain-card h-full rounded-2xl p-7 md:p-8">
                <h3 className="font-serif text-xl italic text-blush-pop md:text-2xl text-pretty">
                  {o.thought}
                </h3>
                <p className="mt-4 leading-relaxed text-ink/75 text-pretty">{o.answer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
