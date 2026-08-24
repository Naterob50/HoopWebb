import Link from "next/link";

export const revalidate = 0;

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white relative court-grid p-4 sm:p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-16">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-neutral-800 pb-6 gap-4">
          <div>
            <h1 className="text-4xl sm:text-6xl font-black text-orange-500 tracking-wider uppercase">
              HOOPWEBB
            </h1>
            <p className="text-xs sm:text-sm font-mono text-neutral-400 mt-1">
              GAMES / TOOLS / RESOURCES
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs font-mono text-neutral-300">
              7 GAMES LIVE
            </span>
          </div>
        </header>

        {/* Featured Section */}
        <section className="bg-neutral-950 border border-orange-500/30 rounded-2xl p-6 sm:p-10 relative overflow-hidden shadow-[0_0_40px_rgba(249,115,22,0.1)]">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-500 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-widest mb-4">
              Featured Release
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              SHOT CLOCK SURVIVOR
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-6 font-sans">
              Test your NBA trivia knowledge against a shrinking shot clock. Answer fast to earn speed bonuses across 430+ questions, survive levels, and keep your 3 lives intact.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/games/shot-clock-survivor"
                className="bg-orange-500 hover:bg-orange-600 text-black font-extrabold px-6 py-3 rounded-lg text-sm tracking-wider transition-all duration-200 shadow-lg shadow-orange-500/20"
              >
                PLAY NOW →
              </Link>
              <Link
                href="/games"
                className="bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-300 font-bold px-6 py-3 rounded-lg text-sm tracking-wider transition-colors"
              >
                VIEW ALL 7 GAMES
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
