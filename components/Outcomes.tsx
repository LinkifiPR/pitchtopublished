"use client";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { Newspaper, TrendingUp, Network, Target, Shield, Megaphone, Mail, Search } from "lucide-react";

const OUTCOMES = [
  { icon: Newspaper, t: "Land tier-1 features", d: "Forbes, BI, TechCrunch, WSJ, Inc., Bloomberg — predictably, repeatedly." },
  { icon: TrendingUp, t: "10× your reply rate", d: "From 2% inbox graveyard to 30%+ replies using the 9-line formula." },
  { icon: Network, t: "Own journalist relationships", d: "Build a contact graph that pays off for years, not just one campaign." },
  { icon: Target, t: "Pitch with surgical precision", d: "Beat-mapping + trend-jacking so every send is high-probability." },
  { icon: Mail, t: "Subject lines that get opened", d: "60%+ open rates from a vault of 120+ battle-tested lines." },
  { icon: Search, t: "Stack SEO authority links", d: "Turn each placement into a compounding ranking moat." },
  { icon: Megaphone, t: "Become a go-to source", d: "The founder reporters call when news breaks in your category." },
  { icon: Shield, t: "Survive a PR crisis", d: "24-hour playbook so a critical news cycle doesn't blow up your brand." },
];

export default function Outcomes() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="By the end of 90 days"
          title={
            <>
              You will be able to <span className="italic text-blush-dark">do all of this</span>.
            </>
          }
          intro="Not theory. Not generalizations. Concrete, measurable capabilities you'll walk away with."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {OUTCOMES.map((o, i) => {
            const Icon = o.icon;
            return (
              <Reveal key={o.t} delay={(i % 4) * 0.06}>
                <div className="grain-card group flex h-full flex-col gap-3 rounded-2xl p-6 transition hover:-translate-y-1">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo text-canvas transition group-hover:bg-blush-dark">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg text-ink">{o.t}</h3>
                  <p className="text-sm text-ink/65 text-pretty">{o.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
