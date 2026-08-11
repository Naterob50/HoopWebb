import Link from 'next/link';

const GameCard = ({ href, title, description, badge, category, status }: any) => (
  <Link 
    href={href} 
    className="group relative block p-8 bg-neutral-950/80 backdrop-blur-md border-2 border-neutral-800/80 rounded-xl overflow-hidden transition-all duration-300 hover:border-orange-500 hover:shadow-[0_0_35px_rgba(249,115,22,0.35)] hover:-translate-y-1.5"
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 opacity-60 group-hover:opacity-100 transition-opacity" />

    <div className="relative z-10 space-y-5">
      <div className="flex justify-between items-center text-xs">
        <span className="font-arcade text-orange-500 tracking-wider">
          // {category}
        </span>
        {badge && (
          <span className="bg-orange-500/10 text-orange-400 font-bold px-2.5 py-0.5 rounded border border-orange-500/30 group-hover:bg-orange-500 group-hover:text-black transition-colors">
            {badge}
          </span>
        )}
      </div>
      
      <h3 className="text-3xl font-arcade text-white tracking-tight group-hover:text-orange-500 transition-colors flex items-center justify-between">
        <span>{title}</span>
        <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-orange-500">→</span>
      </h3>
      
      <p className="text-neutral-400 text-sm leading-relaxed font-medium">
        {description}
      </p>
      
      <div className="pt-4 border-t border-neutral-900/80 flex justify-between items-center">
        <span className="text-xs text-neutral-500 font-mono flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          STATUS: <span className="text-emerald-400 font-bold">{status || "READY"}</span>
        </span>
        <div className="text-xs font-arcade font-bold text-orange-500 group-hover:underline">
          PLAY NOW
        </div>
      </div>
    </div>
  </Link>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative court-grid overflow-hidden">
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/15 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-2/3 right-10 w-[400px] h-[250px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="bg-orange-600 text-black text-xs font-arcade py-1.5 px-4 font-bold tracking-widest text-center border-b border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.5)]">
        ⚡ HOOPWEBB ARCADE • DAILY HIGH SCORES RESET AT MIDNIGHT • PLAY FREE ⚡
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-16 relative z-10">
        
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center pb-4 border-b border-neutral-900">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
            </span>
            <span className="text-xs font-arcade text-orange-500 tracking-wider">// HOOPWEBB HUB</span>
          </div>

          <div className="flex gap-6 text-xs font-mono">
            <Link href="/all-games" className="text-neutral-400 hover:text-orange-500 transition">ALL GAMES</Link>
            <Link href="/submit" className="text-orange-400 hover:text-orange-500 font-bold transition">⚡ SUBMIT GAME</Link>
            <Link href="/about" className="text-neutral-400 hover:text-orange-500 transition">ABOUT US</Link>
          </div>
        </nav>

        {/* Hero Header Section */}
        <header className="text-center space-y-8 pt-4 relative">
          
          <div className="inline-flex items-center gap-2 bg-neutral-900/90 border border-neutral-800 text-neutral-300 text-xs font-mono px-4 py-1.5 rounded-full shadow-inner">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            SYSTEM STATUS: <span className="text-orange-500 font-bold">ALL SYSTEMS GO</span>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-9xl font-arcade tracking-tighter text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.1)]">
            HOOPWEBB <span className="text-orange-500 drop-shadow-[0_0_40px_rgba(249,115,22,0.4)]">ARCADE</span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 font-medium max-w-2xl mx-auto leading-relaxed">
            The free, open basketball gaming hub. Games, interactive experiences, and custom fan builds—no paywalls, no fluff, strictly basketball.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <Link 
              href="/all-games" 
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-black font-arcade font-bold px-8 py-3.5 rounded-xl transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(249,115,22,0.5)] flex items-center justify-center gap-2"
            >
              <span>BROWSE ALL GAMES</span>
              <span>→</span>
            </Link>
            <Link 
              href="/about" 
              className="w-full sm:w-auto bg-neutral-950/80 hover:bg-neutral-900 text-neutral-300 font-arcade border border-neutral-800 hover:border-neutral-700 px-8 py-3.5 rounded-xl transition-all"
            >
              OUR STORY
            </Link>
          </div>

          <div className="pt-8">
            <div className="inline-flex justify-center items-center gap-8 md:gap-16 px-8 py-4 bg-neutral-950/60 border border-neutral-900 rounded-2xl backdrop-blur-sm">
              <div>
                <div className="text-2xl md:text-3xl font-arcade text-orange-500">4</div>
                <div className="text-[10px] md:text-xs text-neutral-500 font-mono tracking-widest mt-1">TITLES LIVE</div>
              </div>
              <div className="w-px h-10 bg-neutral-800" />
              <div>
                <div className="text-2xl md:text-3xl font-arcade text-white">100%</div>
                <div className="text-[10px] md:text-xs text-neutral-500 font-mono tracking-widest mt-1">FREE ACCESS</div>
              </div>
              <div className="w-px h-10 bg-neutral-800" />
              <div>
                <div className="text-2xl md:text-3xl font-arcade text-orange-500">24/7</div>
                <div className="text-[10px] md:text-xs text-neutral-500 font-mono tracking-widest mt-1">OPEN HUB</div>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Header */}
        <div className="flex justify-between items-end border-b border-neutral-900 pb-4">
          <div>
            <h2 className="text-2xl font-arcade text-white flex items-center gap-2">
              <span>FEATURED GAMES</span>
            </h2>
            <p className="text-xs text-neutral-500 font-mono">HANDPICKED HIGHLIGHTS</p>
          </div>
          <Link href="/all-games" className="text-xs font-mono text-orange-500 hover:underline flex items-center gap-1">
            <span>VIEW CATALOG</span>
            <span>→</span>
          </Link>
        </div>

        {/* Featured Game Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GameCard 
            href="/all-games/draft-duel" 
            title="DRAFT DUEL" 
            category="TRIVIA MATCHUP"
            description="Head-to-head draft position battles. Compare two NBA players and call who went higher on draft night." 
            badge="POPULAR"
            status="ONLINE"
          />
          
          <GameCard 
            href="/all-games/nba-connections" 
            title="NBA CONNECTIONS" 
            category="GRID PUZZLE"
            description="The ultimate basketball grid. Sort 16 player tiles into 4 secret underlying categories before running out of guesses." 
            badge="DAILY"
            status="ONLINE"
          />

          <GameCard 
            href="/all-games/nba-scramble" 
            title="NBA SCRAMBLE" 
            category="SPEED CHALLENGE"
            description="Decipher jumbled letters into star NBA player names against a rapid countdown timer." 
            badge="TIMED"
            status="ONLINE"
          />

          <GameCard 
            href="/all-games/the-tape" 
            title="THE TAPE" 
            category="SCOUTING REPORT"
            description="Connect the clues. Uncover career stats, accolades, and hints to name the mystery player." 
            badge="FEATURED"
            status="ONLINE"
          />

 <GameCard 
            href="/all-games/swish-match" 
            title="Swish Match" 
            category="Puzzle"
            description="Swap Basketball gear to create 3 in a row combo." 
            badge="FEATURED"
            status="ONLINE"
        />
        </section>

        {/* Footer */}
        <footer className="text-center pt-16 border-t border-neutral-900 space-y-4">
          <p className="text-xs font-mono text-neutral-600 tracking-widest">
            HOOPWEBB DIGITAL ENGINE • BUILT FOR HOOPHEADS
          </p>
        </footer>

      </div>
    </main>
  );
}
