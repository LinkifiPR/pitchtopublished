"use client";

const PUBLICATIONS = [
  "Business Insider",
  "Investopedia",
  "PayPal",
  "NBC Universal",
  "Reader's Digest",
  "Chicago Tribune",
  "The Independent",
  "Forbes",
  "TechCrunch",
  "Entrepreneur",
  "Fast Company",
  "The Wall Street Journal",
  "Inc.",
  "Bloomberg",
];

function Row({ reverse = false }: { reverse?: boolean }) {
  const items = [...PUBLICATIONS, ...PUBLICATIONS];
  return (
    <div className="marquee-mask flex w-full overflow-hidden">
      <div className={`flex shrink-0 gap-12 px-6 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {items.map((p, i) => (
          <div key={i} className="flex shrink-0 items-center">
            <span className="whitespace-nowrap font-serif text-2xl text-paper/50 md:text-3xl">
              {p}
            </span>
            <span className="ml-12 h-1.5 w-1.5 rounded-full bg-paper/20" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LogosMarquee() {
  return (
    <section className="relative border-y border-paper/10 bg-ink-900/50 py-12">
      <div className="mx-auto mb-8 max-w-7xl px-6">
        <p className="text-center font-mono text-xs uppercase tracking-[0.25em] text-paper/50">
          Where our students &amp; instructors have been featured
        </p>
      </div>
      <div className="space-y-4">
        <Row />
      </div>
    </section>
  );
}
