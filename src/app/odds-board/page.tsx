"use client";

import Link from "next/link";

export default function OddsBoardPage() {
  return (
    <main className="min-h-screen bg-black text-white relative flex flex-col items-center p-3 md:p-6 space-y-4">
      <div className="w-full max-w-[1400px] flex justify-between items-center py-3 border-b border-neutral-800">
        <Link
          href="/"
          className="text-neutral-400 hover:text-orange-500 font-bold text-xs md:text-sm transition flex items-center gap-2 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span>BACK TO ARCADE</span>
        </Link>

        <div className="flex items-center gap-3">
          <span className="text-[10px] md:text-xs font-mono text-neutral-500">// BETTING ODDS VIEWER</span>
          <h1 className="text-base md:text-xl font-bold text-orange-500 tracking-wider">THE ODDS BOARD</h1>
        </div>
      </div>

      <div className="w-full max-w-[1400px] h-[88vh] bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(249,115,22,0.15)] relative">
        <iframe
          src="/odds-board/index.html"
          title="The Odds Board"
          className="w-full h-full border-0"
          allow="fullscreen"
        />
      </div>
    </main>
  );
}
