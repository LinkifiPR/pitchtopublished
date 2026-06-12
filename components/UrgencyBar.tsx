"use client";
import { useEffect, useState } from "react";
import { Flame } from "lucide-react";

function getTarget() {
  const now = new Date();
  const target = new Date(now);
  target.setDate(now.getDate() + 4);
  target.setHours(23, 59, 59, 0);
  return target;
}

export default function UrgencyBar() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const target = getTarget().getTime();
    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      const d = Math.floor(diff / 86_400_000);
      const h = Math.floor((diff % 86_400_000) / 3_600_000);
      const m = Math.floor((diff % 3_600_000) / 60_000);
      const s = Math.floor((diff % 60_000) / 1000);
      setTime({ d, h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="urgency-bar sticky top-0 z-[60] flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-3 text-center font-mono text-sm uppercase tracking-[0.18em] md:py-3.5 md:text-base">
      <Flame className="h-4 w-4 md:h-5 md:w-5" />
      <span className="hidden sm:inline">Launch pricing ends in</span>
      <span className="inline sm:hidden">Ends in</span>
      <span className="flex items-center gap-1.5 font-bold">
        <span className="rounded bg-black/30 px-2 py-1 text-base md:text-lg">{pad(time.d)}d</span>
        <span>:</span>
        <span className="rounded bg-black/30 px-2 py-1 text-base md:text-lg">{pad(time.h)}h</span>
        <span>:</span>
        <span className="rounded bg-black/30 px-2 py-1 text-base md:text-lg">{pad(time.m)}m</span>
        <span>:</span>
        <span className="rounded bg-black/30 px-2 py-1 text-base md:text-lg">{pad(time.s)}s</span>
      </span>
      <span className="hidden md:inline">· save $500 + 3 free bonuses</span>
    </div>
  );
}
