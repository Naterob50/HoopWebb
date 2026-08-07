"use client";

import Link from "next/link";

export default function NBAConnectionsPage() {
  return (
    <main className="min-h-screen bg-black text-white relative court-grid flex flex-col items-center p-4 md:p-6">
      {/* Navigation Header */}
      <div className="w-full max-w-5xl flex justify-between items-center py-4 mb-4 border-b border-neutral-800">
        <Link 
          href="/" 
          className="text-neutral-400 hover:text-orange-500 font-bold text-sm transition flex items-center gap-2 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span>ARCADE HOME</span>
        </Link>
        
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-neutral-500">// GRID PUZZLE</span>
          <h1 className="text-xl font-arcade text-orange-500">NBA CONNECTIONS</h1>
        </div>
      </div>

      {/* Embedded Game Window Container */}
      <div className="w-full max-w-5xl h-[750px] bg-neutral-950 border-2 border-neutral-800 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(249,115,22,0.15)] relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600" />
        <iframe
          src="/games/nba-connections/index.html"
          title="NBA Connections Game"
          className="w-full h-full border-0"
          allow="fullscreen"
        />
      </div>
    </main>
  );
}
