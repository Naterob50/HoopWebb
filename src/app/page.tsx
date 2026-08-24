import Link from "next/link";

export const revalidate = 0;

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
  return (
    <main className="min-h-screen bg-black text-white relative court-grid p-4 sm:p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Main Hero Header */}
        <section className="text-center pt-8 pb-4 space-y-6">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight uppercase">
            HOOPWEBB <span className="text-orange-500">ARCADE</span>
          </h1>

          <p className="max-w-2xl mx-auto text-neutral-400 text-sm sm:text-base leading-relaxed font-sans">
            The free, open basketball gaming hub. Games, interactive experiences, and custom fan builds—no paywalls, no fluff, strictly basketball.
          </p>

          <div className="flex items-center justify-center gap-4 pt-2">
            <Link
              href="/games"
              className="bg-orange-500 hover:bg-orange-600 text-black font-extrabold px-6 py-3 rounded-lg text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg shadow-orange-500/20"
            >
              BROWSE ALL GAMES →
            </Link>
            <Link
              href="/about"
              className="bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 font-bold px-6 py-3 rounded-lg text-xs sm:text-sm tracking-wider uppercase transition-colors"
            >
              OUR STORY
            </Link>
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

        {/* 5 Arcade Cards Grid */}
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
      </div>
    </main>
  );
}
