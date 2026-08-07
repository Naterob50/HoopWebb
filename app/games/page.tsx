import Link from 'next/link';

export default function AllGames() {
  // Add or remove games in this array independently from the home page
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
      id: 'the-tape',
      title: 'The Tape',
      category: 'Video / Film',
      description: 'Analyze film clips and test your eye for basketball film, play-calling, and player traits.',
      status: 'Live',
      link: '/games/the-tape/index.html',
    },
    // Future games can easily be appended here:
    // {
    //   id: 'new-game',
    //   title: 'New Arcade Title',
    //   category: 'Arcade',
    //   description: 'Description for the new upcoming game.',
    //   status: 'Live',
    //   link: '/games/new-game/index.html',
    // },
  ];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-between p-6 sm:p-12 relative overflow-hidden bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:24px_24px]">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#FF5500]/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Top Header / Navigation */}
      <header className="w-full max-w-6xl flex justify-between items-center z-10 py-4 border-b border-zinc-900">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-3 h-3 bg-[#FF5500] rounded-full animate-pulse" />
          <span className="font-extrabold tracking-widest text-sm uppercase text-zinc-400 group-hover:text-white transition-colors">
            HOOPWEBB <span className="text-[#FF5500]">ARCADE</span>
          </span>
        </Link>

        <div className="flex items-center gap-6 text-xs font-mono">
          <Link href="/" className="text-zinc-400 hover:text-white uppercase transition-colors">
            &larr; Home
          </Link>
          <Link 
            href="/admin/submissions" 
            className="uppercase tracking-wider text-[#FF5500] hover:underline"
          >
            Submit Game
          </Link>
        </div>
      </header>

      {/* Hero Header for All Games */}
      <div className="w-full max-w-6xl z-10 my-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-zinc-900 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-[#FF5500] font-mono tracking-wide mb-3">
              <span>●</span> FULL CATALOG
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight uppercase">
              ALL <span className="text-[#FF5500]">GAMES</span>
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              Explore the entire roster of basketball trivia, puzzles, arcade games, and custom fan builds.
            </p>
          </div>

          <div className="text-xs font-mono text-zinc-500">
            SHOWING <span className="text-white font-bold">{games.length}</span> TITLES
          </div>
        </div>
      </div>

      {/* Games Catalog Grid */}
      <section className="w-full max-w-6xl my-4 z-10 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <div 
              key={game.id} 
              className="bg-zinc-950/80 border border-zinc-900 rounded-xl p-6 flex flex-col justify-between hover:border-[#FF5500]/50 hover:shadow-[0_0_20px_rgba(255,85,0,0.15)] transition-all duration-300 group"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                    {game.category}
                  </span>
                  <span className="text-[10px] font-mono text-[#FF5500] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500] inline-block animate-ping" />
                    {game.status}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-white group-hover:text-[#FF5500] transition-colors mb-2">
                  {game.title}
                </h2>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {game.description}
                </p>
              </div>

              <a
                href={game.link}
                className="w-full py-3 bg-zinc-900 border border-zinc-800 group-hover:bg-[#FF5500] group-hover:text-black group-hover:border-[#FF5500] text-zinc-300 font-bold text-xs uppercase tracking-wider rounded-lg text-center transition-all duration-200 block"
              >
                Play Now &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-6xl flex justify-between items-center text-xs text-zinc-600 font-mono z-10 border-t border-zinc-900 pt-6 mt-12">
        <span>&copy; {new Date().getFullYear()} HoopWebb Arcade</span>
        <span>Built for Hoopers &amp; Creators</span>
      </footer>

    </main>
  );
}
