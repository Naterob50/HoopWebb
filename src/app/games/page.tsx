import Link from "next/link";

export const revalidate = 0;

const ALL_GAMES = [
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
    slug: "nba-scramble",
    title: "NBA Scramble",
    category: "WORD GAME",
    description: "Unscramble NBA player names, franchises, and iconic basketball terms before time runs out.",
    status: "Live",
  },
  {
    slug: "the-tape",
    title: "The Tape",
    category: "SCOUTING REPORT",
    description: "Decode scouting reports, career clues, and player traits to identify the mystery player.",
    status: "Live",
  },
  {
    slug: "swish-match",
    title: "Swish Match",
    category: "MATCH-3",
    description: "Swap basketball gear to create 3-in-a-row combos and complete objectives.",
    status: "Live",
  },
];

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-black text-white relative court-grid p-4 sm:p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        <header className="flex justify-between items-center border-b border-neutral-800 pb-4 sm:pb-6">
          <div>
            <Link href="/" className="text-xs font-mono text-neutral-400 hover:text-orange-500 transition mb-2 block">
              ← BACK TO HOME
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-orange-500 tracking-wider uppercase">
              ALL GAMES
            </h1>
          </div>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {ALL_GAMES.map((game) => (
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
        </section>
      </div>
    </main>
  );
}
