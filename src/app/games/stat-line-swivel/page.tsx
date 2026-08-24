"use client";

import Link from "next/link";

export default function StatLineSwivelPage() {
  return (
    <main className="min-h-screen bg-black text-white court-grid flex flex-col items-center p-3 sm:p-6 pb-12">
      <div className="w-full max-w-5xl flex flex-wrap justify-between items-center py-3 mb-3 border-b border-neutral-800 gap-2">
        <Link
          href="/games"
          className="text-neutral-400 hover:text-orange-500 font-bold text-xs sm:text-sm transition flex items-center gap-1.5 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span>BACK TO GAMES</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-[10px] sm:text-xs font-mono text-neutral-500">// DAILY BOX SCORE PUZZLE</span>
          <h1 className="text-sm sm:text-lg font-bold text-orange-500 tracking-wider">STAT LINE SWIVEL</h1>
        </div>
      </div>

      <div className="w-full max-w-5xl h-[80vh] min-h-[550px] sm:h-[85vh] bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(249,115,22,0.15)] relative">
        <iframe
          src="/games/stat-line-swivel/index.html"
          title="Stat Line Swivel Game"
          className="w-full h-full border-0"
          allow="fullscreen"
        />
      </div>
    </main>
  );
}
