import Link from 'next/link';

export default function Home() {
  const games = [
    {
      id: 'draft-duel',
      title: 'Draft Duel',
      category: 'NBA Trivia',
      description: 'Test your draft knowledge. Guess which NBA player was selected higher in the draft.',
      status: 'Live',
      link: '/games/draft-duel/index.html',
    },
    {
      id: 'nba-connections',
      title: 'NBA Connections',
      category: 'Puzzle',
      description: 'Group NBA players, teams, and historic moments by their hidden common trait.',
      status: 'Live',
      link: '/games/nba-connections/index.html',
    },
    {
      id: 'nba-scramble',
      title: 'NBA Scramble',
      category: 'Word Game',
      description: 'Unscramble NBA player names, franchises, and iconic basketball terms before time runs out.',
      status: 'Live',
      link: '/games/nba-scramble/index.html',
    },
   {
  id: "the-tape",
  title: "The Tape",
  category: "TRIVIA / CLUES", // or "SCOUTING REPORT"
  description: "Analyze step-by-step scouting clues and stats to identify the mystery player.",
  status: 'Live',
  link: '/games/the-tape/index.html',
},
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-between p-6 sm:p-12 relative overflow-hidden bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:24px_24px]">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#FF5500]/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Top Header */}
      <header className="w-full max-w-6xl flex justify-between items-center z-10 py-4 border-b border-zinc-900">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#FF5500] rounded-full animate-pulse" />
          <span className="font-extrabold tracking-widest text-sm uppercase text-zinc-400">
            HOOPWEBB <span className="text-[#FF5500]">SYSTEMS</span>
          </span>
        </div>
        <Link 
          href="/admin/submissions" 
          className="text-xs uppercase font-mono tracking-wider text-zinc-400 hover:text-[#FF5500] transition-colors"
        >
          Submit Game &rarr;
        </Link>
      </header>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center space-y-8 z-10 my-12">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-[#FF5500] font-mono tracking-wide">
          <span>●</span> OPEN SPORTS ARCADE
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight uppercase leading-none">
          HOOPWEBB <span className="text-[#FF5500] drop-shadow-[0_0_25px_rgba(255,85,0,0.35)]">ARCADE</span>
        </h1>

        {/* Subtitle */}
        <p className="text-zinc-400 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
          The free, open basketball gaming hub. Games, interactive experiences, and custom fan builds—no paywalls, no fluff, strictly basketball.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="/games"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#FF5500] text-black font-extrabold text-sm uppercase rounded-lg shadow-[0_0_25px_rgba(255,85,0,0.4)] hover:bg-[#ff6a1a] transition-all duration-200 text-center"
          >
            BROWSE ALL GAMES &rarr;
          </a>
          
          <Link
            href="/story"
            className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900 border border-zinc-800 text-zinc-200 font-bold text-sm uppercase rounded-lg hover:bg-zinc-800 transition-all duration-200 text-center"
          >
            OUR STORY
          </Link>

          <Link
            href="/admin/submissions"
            className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900 border border-[#FF5500]/40 text-[#FF5500] font-bold text-sm uppercase rounded-lg hover:bg-[#FF5500]/10 transition-all duration-200 text-center"
          >
            SUBMISSIONS
          </Link>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-6 pt-10 max-w-lg mx-auto border-t border-zinc-900">
          <div className="flex flex-col items-center border-r border-zinc-900 pr-4">
            <span className="text-3xl font-black text-[#FF5500]">4</span>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1 font-mono">TITLES LIVE</span>
          </div>
          <div className="flex flex-col items-center border-r border-zinc-900 px-4">
            <span className="text-3xl font-black text-white">100%</span>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1 font-mono">FREE ACCESS</span>
          </div>
          <div className="flex flex-col items-center pl-4">
            <span className="text-3xl font-black text-[#FF5500]">24/7</span>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1 font-mono">OPEN ARCADE</span>
          </div>
        </div>

      </div>

      {/* Featured Games Section */}
      <section id="featured-games" className="w-full max-w-6xl my-12 z-10 scroll-mt-6">
        <div className="flex items-center justify-between mb-6 border-b border-zinc-900 pb-4">
          <h2 className="text-xl font-extrabold uppercase tracking-wider text-white flex items-center gap-2">
            <span className="w-2 h-2 bg-[#FF5500] rounded-full" />
            Featured Games
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <div 
              key={game.id} 
              className="bg-zinc-950/80 border border-zinc-900 rounded-xl p-5 flex flex-col justify-between hover:border-[#FF5500]/50 hover:shadow-[0_0_20px_rgba(255,85,0,0.15)] transition-all duration-300 group"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                    {game.category}
                  </span>
                  <span className="text-[10px] font-mono text-[#FF5500] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500] inline-block animate-ping" />
                    {game.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#FF5500] transition-colors mb-2">
                  {game.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {game.description}
                </p>
              </div>

              <a
                href={game.link}
                className="w-full py-2.5 bg-zinc-900 border border-zinc-800 group-hover:bg-[#FF5500] group-hover:text-black group-hover:border-[#FF5500] text-zinc-300 font-bold text-xs uppercase tracking-wider rounded-lg text-center transition-all duration-200 block"
              >
                Play Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-6xl flex justify-between items-center text-xs text-zinc-600 font-mono z-10 border-t border-zinc-900 pt-6 mt-6">
        <span>&copy; {new Date().getFullYear()} HoopWebb Arcade</span>
        <span>Built for Hoopers &amp; Creators</span>
      </footer>

    </main>
  );
}
