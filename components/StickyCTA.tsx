"use client";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-indigo/20 bg-canvas/90 px-4 py-3 backdrop-blur-xl transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-2xl text-ink">$499</span>
            <span className="text-sm text-ink/45 line-through">$999</span>
          </div>
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-blush-pop">
            53 seats left at this price
          </div>
        </div>
        <a
          href="#pricing"
          className="group inline-flex items-center gap-2 rounded-full bg-indigo px-6 py-3 text-sm font-bold text-canvas transition hover:bg-indigo-deep"
        >
          Enroll now
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}
