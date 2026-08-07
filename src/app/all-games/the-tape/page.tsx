"use client";

import Link from "next/link";

export default function TheTapePage() {
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
          <span className="text-xs font-mono text-neutral-500">// SCOUTING REPORT</span>
          <h1 className="text-xl font-arcade text-orange-500">THE TAPE</h1>
        </div>
      </div>

      {/* Embedded Game Window Container */}
      <div className="w-full max-w-5xl h-[750px] bg-neutral-950 border-2 border-neutral-800 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(249,115,22,0.15)] relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600" />
        <iframe
          src="/games/the-tape/index.html"
          title="The Tape Game"
          className="w-full h-full border-0"
          allow="fullscreen"
        />
      </div>
    </main>
  );
}

import { useState } from 'react';
import Link from 'next/link';
import Leaderboard from '@/components/Leaderboard';

export default function GamePage() {
  const [score, setScore] = useState<number | null>(null);

  // Example game over function
  const handleGameOver = (finalScore: number) => {
    setScore(finalScore);
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-12 space-y-8">
      <Link href="/all-games" className="text-neutral-400 hover:text-orange-500 text-xs font-mono">
        ← BACK TO CATALOG
      </Link>

      <div className="max-w-2xl mx-auto space-y-8 text-center">
        <h1 className="text-4xl font-arcade text-white">DRAFT DUEL</h1>

        {/* Your Game logic UI here */}
        <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-xl">
          <p className="text-neutral-400 text-sm mb-4">Game interface playing here...</p>
          <button 
            onClick={() => handleGameOver(1200)} 
            className="bg-orange-500 text-black font-arcade font-bold px-4 py-2 rounded"
          >
            SIMULATE GAME OVER (1200 PTS)
          </button>
        </div>

        {/* Daily Top 5 Leaderboard */}
        <Leaderboard gameId="draft-duel" currentScore={score} />
      </div>
    </main>
  );
}