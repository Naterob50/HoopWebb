import Link from 'next/link';

export const revalidate = 0;

// Master List of Games
const ALL_GAMES = [
  {
    slug: "draft-duel",
    title: "DRAFT DUEL",
    category: "TRIVIA MATCHUP",
    description: "Head-to-head draft position battles. Compare two NBA players and call who went higher on draft night.",
    badge: "POPULAR",
    status: "ONLINE",
  },
  {
    slug: "nba-connections",
    title: "NBA CONNECTIONS",
    category: "GRID PUZZLE",
    description: "The ultimate basketball grid. Sort 16 player tiles into 4 secret underlying categories before running out of guesses.",
    badge: "DAILY",
    status: "ONLINE",
  },
  {
    slug: "nba-scramble",
    title: "NBA SCRAMBLE",
    category: "SPEED CHALLENGE",
    description: "Decipher jumbled letters into star NBA player names against a rapid countdown timer.",
    badge: "TIMED",
    status: "ONLINE",
  },
  {
    slug: "the-tape",
    title: "THE TAPE",
    category: "SCOUTING REPORT",
    description: "Decode scouting reports, career clues, and player traits to guess the mystery player.",
    badge: "FEATURED",
    status: "ONLINE",
  },
  {
    slug: "swish-match",
    title: "SWISH MATCH",
    category: "MATCH-3 / PUZZLE",
    description: "Swap adjacent basketball gear to line up 3-in-a-row combos, unlock power-ups, and clear 150 levels.",
    badge: "NEW",
    status: "ONLINE",
  },
];

export default function AllGamesPage() {
  return (
    <main className="min-h-screen bg-black text-white relative court-grid p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="flex justify-between items-center border-b border-neutral-800 pb-6">
          <div>
            <Link href="/" className="text-xs font-mono text-neutral-400 hover:text-orange-500 transition mb-2 block">
              ← BACK TO HOME
            </Link>
            <h1 className="text-4xl md:text-5xl font-arcade text-orange-500 tracking-wider">
              ALL GAMES
            </h1>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ALL_GAMES.map((game) => (
            <Link
              key={game.slug}
              href={`/all-games/${game.slug}`}
              className="group relative block p-8 bg-neutral-950/80 backdrop-blur-md border-2 border-neutral-800/80 rounded-xl overflow-hidden transition-all duration-300 hover:border-orange-500 hover:shadow-[0_0_35px_rgba(249,115,22,0.35)] hover:-translate-y-1.5"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 space-y-5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-arcade text-orange-500 tracking-wider">
                    // {game.category}
                  </span>
                  <span className="bg-orange-500/10 text-orange-400 font-bold px-2.5 py-0.5 rounded border border-orange-500/30 group-hover:bg-orange-500 group-hover:text-black transition-colors">
                    {game.badge}
                  </span>
                </div>
                <h3 className="text-3xl font-arcade text-white tracking-tight group-hover:text-orange-500 transition-colors flex items-center justify-between">
                  <span>{game.title}</span>
                  <span>→</span>
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                  {game.description}
                </p>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
