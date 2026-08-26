"use client";

import { useState } from "react";
import Link from "next/link";

const GAMES = [
  {
    slug: "shot-clock-survivor",
    title: "Shot Clock Survivor",
    category: "NBA TRIVIA",
    description: "Answer rapid-fire trivia questions before the clock hits zero. 3 lives, leveling shot clocks, no mercy.",
    status: "NEW",
  },
  {
    slug: "stat-line-swivel",
    title: "Stat Line Swivel",
    category: "DAILY BOX SCORE",
    description: "Guess the mystery player behind iconic NBA stat lines. Reveal clues as you make your guesses.",
    status: "NEW",
  },
  {
    slug: "draft-duel",
    title: "Draft Duel",
    category: "NBA TRIVIA",
    description: "Test your draft knowledge. Guess which NBA player was selected higher in the draft.",
    status: "Live",
  },
  {
    slug: "nba-connections",
    title: "NBA Connections",
    category: "PUZZLE",
    description: "Group NBA players, teams, and historic moments by their hidden common trait.",
    status: "Live",
  },
  {
    slug: "the-tape",
    title: "The Tape",
    category: "SCOUTING REPORT",
    description: "Decode scouting reports, career clues, and player traits to identify the mystery player.",
    status: "Live",
  },
];

export default function HomePage() {
  const [submissionType, setSubmissionType] = useState("idea");

  return (
    <main className="min-h-screen bg-black text-white relative court-grid p-4 sm:p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Top Bar Navigation */}
        <nav className="flex justify-between items-center border-b border-neutral-800 pb-4">
          <div className="text-xs font-mono text-neutral-400">
            HOOPWEBB HUB
          </div>
          <div className="flex items-center gap-4 text-xs font-mono">
            <a href="#feedback" className="text-orange-500 hover:text-orange-400 font-bold uppercase tracking-wider">
              + SUBMIT FEEDBACK / IDEAS
            </a>
            <span className="text-neutral-700">|</span>
            <Link href="/about" className="text-neutral-400 hover:text-white uppercase tracking-wider">
              OUR STORY
            </Link>
          </div>
        </nav>

        {/* Main Hero Header */}
        <section className="text-center pt-4 pb-4 space-y-6">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight uppercase">
            HOOPWEBB <span className="text-orange-500">ARCADE</span>
          </h1>

          <p className="max-w-2xl mx-auto text-neutral-400 text-sm sm:text-base leading-relaxed font-sans">
            The free, open basketball gaming hub. Games, interactive experiences, and custom fan builds—no paywalls, no fluff, strictly basketball.
          </p>

          {/* Hero Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <Link
              href="/games"
              className="bg-orange-500 hover:bg-orange-600 text-black font-extrabold px-6 py-3 rounded-lg text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg shadow-orange-500/20"
            >
              BROWSE ALL GAMES →
            </Link>
            <Link
              href="/odds-board"
              className="bg-neutral-900 hover:bg-neutral-800 border border-orange-500/40 text-orange-400 hover:text-orange-300 font-bold px-6 py-3 rounded-lg text-xs sm:text-sm tracking-wider uppercase transition-colors"
            >
              ODDS BOARD
            </Link>
            <a
              href="#feedback"
              className="bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 hover:text-white font-bold px-6 py-3 rounded-lg text-xs sm:text-sm tracking-wider uppercase transition-colors"
            >
              SUBMIT FEEDBACK
            </a>
          </div>

          {/* Stats Bar */}
          <div className="pt-8 flex items-center justify-center gap-8 sm:gap-16">
            <div className="text-center">
              <span className="block text-2xl sm:text-3xl font-black text-orange-500">7</span>
              <span className="text-[10px] sm:text-xs font-mono text-neutral-400 uppercase tracking-widest">
                TITLES LIVE
              </span>
            </div>
            <div className="h-8 w-px bg-neutral-800" />
            <div className="text-center">
              <span className="block text-2xl sm:text-3xl font-black text-white">100%</span>
              <span className="text-[10px] sm:text-xs font-mono text-neutral-400 uppercase tracking-widest">
                FREE ACCESS
              </span>
            </div>
            <div className="h-8 w-px bg-neutral-800" />
            <div className="text-center">
              <span className="block text-2xl sm:text-3xl font-black text-orange-500">24/7</span>
              <span className="text-[10px] sm:text-xs font-mono text-neutral-400 uppercase tracking-widest">
                OPEN HUB
              </span>
            </div>
          </div>
        </section>

        {/* Arcade Cards Grid */}
        <section className="space-y-6">
          <div className="flex justify-between items-center border-b border-neutral-800 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase">
              FEATURED ARCADE
            </h2>
            <Link href="/games" className="text-xs font-mono text-orange-500 hover:underline">
              BROWSE ALL 7 →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {GAMES.map((game) => (
              <Link
                key={game.slug}
                href={`/games/${game.slug}`}
                className="group relative block p-5 sm:p-6 bg-neutral-950/80 backdrop-blur-md border border-neutral-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-orange-500 hover:shadow-[0_0_25px_rgba(249,115,22,0.25)] hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center text-xs mb-3 gap-2">
                    <span className="font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded text-[11px] truncate">
                      {game.category}
                    </span>
                    <span className="text-orange-500 font-mono text-[11px] flex items-center gap-1.5 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                      {game.status}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-orange-500 transition-colors mb-2 break-words">
                    {game.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans mb-5 line-clamp-3">
                    {game.description}
                  </p>
                </div>
                <div className="w-full bg-neutral-900 group-hover:bg-orange-500 text-neutral-300 group-hover:text-black py-2.5 rounded-lg text-center font-bold text-xs tracking-wider transition-colors mt-auto uppercase">
                  PLAY NOW →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Updated Community Feedback & Ideas Form */}
        <section id="feedback" className="pt-8 scroll-mt-6">
          <div className="bg-neutral-950/90 border border-neutral-800 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl mb-8">
              <span className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-500 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-widest mb-3">
                COMMUNITY HUB
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mb-2">
                IDEAS, BUGS & FEEDBACK
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                Have a concept for a new mini-game, ran into a bug, or have ideas to improve HOOPWEBB? Drop it below. <strong className="text-orange-400 font-medium">If we build your game idea, we will credit you directly on the launch page!</strong>
              </p>
            </div>

            <form className="space-y-4 max-w-2xl" onSubmit={(e) => e.preventDefault()}>
              {/* Submission Type Selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-neutral-400 uppercase">Topic Type</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setSubmissionType("idea")}
                    className={`py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider border transition-colors ${
                      submissionType === "idea"
                        ? "bg-orange-500 text-black border-orange-500"
                        : "bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white"
                    }`}
                  >
                    💡 Game Idea
                  </button>
                  <button
                    type="button"
                    onClick={() => setSubmissionType("bug")}
                    className={`py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider border transition-colors ${
                      submissionType === "bug"
                        ? "bg-orange-500 text-black border-orange-500"
                        : "bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white"
                    }`}
                  >
                    🐛 Report Bug
                  </button>
                  <button
                    type="button"
                    onClick={() => setSubmissionType("feedback")}
                    className={`py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider border transition-colors ${
                      submissionType === "feedback"
                        ? "bg-orange-500 text-black border-orange-500"
                        : "bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white"
                    }`}
                  >
                    💬 Feedback
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-neutral-400 uppercase">
                    Your Handle / Name {submissionType === "idea" && "(For Credit)"}
                  </label>
                  <input
                    type="text"
                    placeholder={submissionType === "idea" ? "e.g. @hoopsfan99 or Alex" : "Optional"}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-neutral-400 uppercase">Contact Email (Optional)</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-neutral-400 uppercase">
                  {submissionType === "idea" && "Game Title or Concept Name"}
                  {submissionType === "bug" && "Which Game or Page Has the Bug?"}
                  {submissionType === "feedback" && "Subject / Topic"}
                </label>
                <input
                  type="text"
                  placeholder={
                    submissionType === "idea"
                      ? "e.g. 90s Franchise Salary Cap Simulator"
                      : submissionType === "bug"
                      ? "e.g. Stat Line Swivel timer freezes on iOS"
                      : "e.g. Navigation feedback"
                  }
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-neutral-400 uppercase">
                  {submissionType === "idea" && "How Does the Game Work?"}
                  {submissionType === "bug" && "What Happened & How to Recreate It"}
                  {submissionType === "feedback" && "Your Feedback"}
                </label>
                <textarea
                  rows={4}
                  placeholder={
                    submissionType === "idea"
                      ? "Explain rules, scoring, or how basketball fans will interact with it..."
                      : submissionType === "bug"
                      ? "Describe what broke, what device/browser you used, or steps to trigger the bug..."
                      : "Tell us what you like or what could be better..."
                  }
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-black font-extrabold px-8 py-3.5 rounded-lg text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg shadow-orange-500/20"
              >
                {submissionType === "idea" ? "SUBMIT GAME IDEA →" : submissionType === "bug" ? "SUBMIT BUG REPORT →" : "SEND FEEDBACK →"}
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
