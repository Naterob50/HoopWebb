import Link from 'next/link';

// Master List of Games (Add new games here anytime!)
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
    description: "Connect the clues. Uncover career stats, accolades, and hints to name the mystery player.",
    badge: "FEATURED",
    status: "ONLINE",
  },
  {
    slug: "swish-match",
    title: "Swish Match",
    category: "Puzzle",
    description: "Swap basketball gear  to line up 3 in a row combo",
    badge: "NEW",
    status: "ONLINE",
  },
  
];

export default function AllGamesPage() {
  return (
    <main className="min-h-screen bg-black text-white relative court-grid p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Navigation Bar */}
        <div className="flex justify-between items-center pb-6 border-b border-neutral-800">
          <Link 
            href="/" 
            className="text-neutral-400 hover:text-orange-500 font-bold text-sm transition flex items-center gap-2 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>BACK TO HOME</span>
          </Link>

          <span className="text-xs font-mono text-orange-500">
            TOTAL TITLES: {ALL_GAMES.length}
          </span>
        </div>

        {/* Page Title */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-arcade text-white tracking-tight">
            ALL <span className="text-orange-500">GAMES</span>
          </h1>
          <p className="text-neutral-400 text-sm md:text-base">
            Browse the complete Hoopwebb Arcade collection.
          </p>
        </div>

        {/* Full Game Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {ALL_GAMES.map((game) => (
            <Link 
              key={game.slug}
              href={`/all-games/${game.slug}`} 
              className="group relative block p-6 bg-neutral-950 border-2 border-neutral-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-orange-500 hover:shadow-[0_0_25px_rgba(249,115,22,0.25)] hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-arcade text-orange-500 tracking-wider">
                    // {game.category}
                  </span>
                  {game.badge && (
                    <span className="bg-orange-500/10 text-orange-400 font-bold px-2 py-0.5 rounded border border-orange-500/30">
                      {game.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-arcade text-white tracking-tight group-hover:text-orange-500 transition-colors">
                  {game.title}
                </h3>

                <p className="text-neutral-400 text-xs leading-relaxed">
                  {game.description}
                </p>

                <div className="pt-3 border-t border-neutral-900 flex justify-between items-center text-xs">
                  <span className="font-mono text-neutral-500">
                    STATUS: <span className="text-emerald-400">{game.status}</span>
                  </span>
                  <div className="flex items-center gap-1 text-orange-500 font-bold group-hover:translate-x-1 transition-transform">
                    <span>PLAY</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>

      </div>
    </main>
  );
}
