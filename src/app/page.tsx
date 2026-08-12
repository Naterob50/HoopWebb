import Link from "next/link";

export const revalidate = 0;

const GameCard = ({ href, title, description, category, status }: any) => (
  <Link
    href={href}
    className="group relative block p-5 sm:p-6 bg-neutral-950/80 backdrop-blur-md border border-neutral-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-orange-500 hover:shadow-[0_0_25px_rgba(249,115,22,0.25)] hover:-translate-y-1 flex flex-col justify-between"
  >
    <div>
      <div className="flex justify-between items-center text-xs mb-3 gap-2">
        <span className="font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded text-[11px] truncate">
          {category}
        </span>
        {status && (
          <span className="text-orange-500 font-mono text-[11px] flex items-center gap-1.5 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            {status}
          </span>
        )}
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-orange-500 transition-colors mb-2 break-words">
        {title}
      </h3>

      {description && (
        <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans mb-5 line-clamp-3">
          {description}
        </p>
      )}
    </div>

    <div className="w-full bg-neutral-900 group-hover:bg-orange-500 text-neutral-300 group-hover:text-black py-2.5 rounded-lg text-center font-bold text-xs tracking-wider transition-colors mt-auto">
      PLAY NOW →
    </div>
  </Link>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative court-grid p-4 sm:p-6 md:p-12 flex flex-col justify-center items-center">
      <div className="max-w-6xl w-full space-y-10 sm:space-y-16">
        
        {/* Hero Header Section */}
        <section className="text-center space-y-4 sm:space-y-6 pt-4 sm:pt-8">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight uppercase leading-none">
            HOOPWEBB <span className="text-orange-500">ARCADE</span>
          </h1>

          <p className="max-w-2xl mx-auto text-neutral-400 text-xs sm:text-base md:text-lg leading-relaxed font-sans px-2">
            The free, open basketball gaming hub. Games, interactive
            experiences, and custom fan builds—no paywalls, no fluff, strictly
            basketball.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2 px-2">
            <Link
              href="/games"
              className="bg-orange-500 hover:bg-orange-600 text-black font-extrabold text-xs sm:text-sm px-6 py-3.5 sm:py-4 rounded-lg shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-all flex items-center justify-center gap-2 uppercase tracking-wider text-center"
            >
              BROWSE ALL GAMES →
            </Link>
            <Link
              href="/odds-board"
              className="bg-neutral-900 hover:bg-neutral-800 border border-orange-500/50 hover:border-orange-500 text-orange-400 font-bold text-xs sm:text-sm px-6 py-3.5 sm:py-4 rounded-lg transition-all uppercase tracking-wider flex items-center justify-center gap-2 text-center"
            >
              📊 THE ODDS BOARD
            </Link>
            <Link
              href="/story"
              className="bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white font-bold text-xs sm:text-sm px-6 py-3.5 sm:py-4 rounded-lg transition-all uppercase tracking-wider text-center"
            >
              OUR STORY
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 max-w-md mx-auto pt-6 sm:pt-8 border-t border-neutral-900 text-center px-2">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-orange-500">5</div>
              <div className="text-[9px] sm:text-[10px] font-mono text-neutral-500 tracking-wider mt-1">TITLES LIVE</div>
            </div>
            <div className="border-x border-neutral-900">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
              <div className="text-[9px] sm:text-[10px] font-mono text-neutral-500 tracking-wider mt-1">FREE ACCESS</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-orange-500">24/7</div>
              <div className="text-[9px] sm:text-[10px] font-mono text-neutral-500 tracking-wider mt-1">OPEN HUB</div>
            </div>
          </div>
        </section>

        {/* Featured Games Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-2">
          <GameCard
            href="/games/draft-duel"
            title="Draft Duel"
            category="NBA TRIVIA"
            description="Test your draft knowledge. Guess which NBA player was selected higher in the draft."
            status="Live"
          />

          <GameCard
            href="/games/nba-connections"
            title="NBA Connections"
            category="PUZZLE"
            description="Group NBA players, teams, and historic moments by their hidden common trait."
            status="Live"
          />

          <GameCard
            href="/games/nba-scramble"
            title="NBA Scramble"
            category="WORD GAME"
            description="Unscramble NBA player names, franchises, and iconic basketball terms before time runs out."
            status="Live"
          />

          <GameCard
            href="/games/the-tape"
            title="The Tape"
            category="SCOUTING REPORT"
            description="Decode scouting reports, career clues, and player traits to identify the mystery player."
            status="Live"
          />

          <GameCard
            href="/games/swish-match"
            title="Swish Match"
            category="MATCH-3"
            description="Swap basketball gear to create 3-in-a-row combos and complete objectives."
            status="Live"
          />
        </section>

      </div>
    </main>
  );
}
