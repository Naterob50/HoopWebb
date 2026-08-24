import Link from "next/link";

export const revalidate = 0;

const FEATURED_GAMES = [
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
  return (
    <main className="min-h-screen bg-black text-white relative court-grid p-4 sm:p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-16">
        {/* Header */}
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
            <span className="text-xs font-mono text-neutral-300 tracking-wide">
              7 GAMES LIVE
            </span>
          </div>
        </header>

        {/* Hero / Featured Game */}
        <section className="bg-neutral-950 border border-orange-500/30 rounded-2xl p-6 sm:p-10 relative overflow-hidden shadow-[0_0_40px_rgba(249,115,22,0.1)]">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-500 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-widest mb-4">
              FEATURED RELEASE
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

        {/* Top 5 Games Grid */}
        <section className="space-y-6">
          <div className="flex justify-between items-center border-b border-neutral-800 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase">
              ARCADE HIGHLIGHTS
            </h2>
            <Link href="/games" className="text-xs font-mono text-orange-500 hover:underline">
              BROWSE ALL 7 →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {FEATURED_GAMES.map((game) => (
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
                <div className="w-full bg-neutral-900 group-hover:bg-orange-500 text-neutral-300 group-hover:text-black py-2.5 rounded-lg text-center font-bold text-xs tracking-wider transition-colors mt-auto">
                  PLAY NOW →
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
