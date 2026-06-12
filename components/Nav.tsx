"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-[34px] z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink/10 bg-canvas/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-indigo font-serif text-lg font-black text-canvas">
            P
          </div>
          <span className="font-serif text-lg tracking-tight text-ink">
            Pitch <span className="text-blush-pop">to</span> Published
          </span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-ink/70 md:flex">
          <a href="#curriculum" className="transition hover:text-ink">Curriculum</a>
          <a href="#instructors" className="transition hover:text-ink">Instructors</a>
          <a href="#bonuses" className="transition hover:text-ink">Bonuses</a>
          <a href="#pricing" className="transition hover:text-ink">Pricing</a>
          <a href="#faq" className="transition hover:text-ink">FAQ</a>
        </div>
        <a
          href="#pricing"
          className="group relative inline-flex items-center gap-2 rounded-full bg-indigo px-5 py-2 text-sm font-semibold text-canvas transition hover:bg-indigo-deep"
        >
          Enroll — $499
          <span className="text-canvas/60 line-through">$999</span>
        </a>
      </div>
    </motion.nav>
  );
}
