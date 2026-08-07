import Link from 'next/link';

export default function OurStory() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-between p-6 sm:p-12 relative overflow-hidden bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:24px_24px]">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FF5500]/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Header Navigation */}
      <header className="w-full max-w-4xl flex justify-between items-center z-10 py-4 border-b border-zinc-900">
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
          <Link href="/games" className="text-zinc-400 hover:text-white uppercase transition-colors">
            All Games
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <article className="w-full max-w-3xl z-10 my-12 space-y-12">
        
        {/* Title Section */}
        <div className="space-y-4 text-center sm:text-left border-b border-zinc-900 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-[#FF5500] font-mono tracking-wide">
            <span>●</span> ORIGIN &amp; MISSION
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight uppercase leading-none">
            OUR <span className="text-[#FF5500]">STORY</span>
          </h1>
          <p className="text-zinc-400 text-lg sm:text-xl leading-relaxed font-light">
            Built from scratch for the modern, analytical basketball enthusiast.
          </p>
        </div>

        {/* Narrative Section */}
        <section className="space-y-6 text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
          <p>
            HOOPWEBB wasn’t born in a corporate boardroom or backed by massive media conglomerates. It was built from scratch by a single founder with a clear vision: to create the ultimate digital arcade for fans who love the game deeper than the box score.
          </p>
          <p>
            We grew tired of jumping between five different tabs just to mock a trade, check betting lines, rank players, and play daily hoops trivia. So, we did what any passionate fan would do—we built a centralized network to house it all in one seamless, high-performance experience.
          </p>
        </section>

        {/* Manifesto Blockquote Card */}
        <section className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#FF5500]" />
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#FF5500] mb-3">
            THE MANIFESTO
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-4">
            "We believe basketball entertainment should be interactive, incredibly accurate, and completely free."
          </p>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Whether you live in the salary cap sheets, track daily line movements, or spend your mornings debating basketball history, HOOPWEBB is built specifically for you.
          </p>
        </section>

        {/* Driven by Community & Ko-Fi Section */}
        <section className="space-y-6 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#FF5500] rounded-full" />
            <h2 className="text-lg font-extrabold uppercase tracking-wider text-white">
              Driven by the Community
            </h2>
          </div>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            HOOPWEBB operates on an independent, <strong>"Support the Developer"</strong> model. We don't lock our tools behind expensive paywalls or clutter your screen with aggressive corporate advertising.
          </p>

          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
            Everything you play on this network is completely free to access. If our tools helped you architect a blockbuster dynasty or you beat the daily clock on NBA Scramble, consider throwing a few bucks into the platform’s tip jar. Your voluntary support directly funds real-time data updates, server costs, and future arcade developments.
          </p>

          {/* Ko-Fi Support CTA Button */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-800/60">
            <div className="text-xs text-zinc-400 font-mono text-center sm:text-left">
              Directly support independent basketball app development.
            </div>

            <a
              href="https://ko-fi.com/hoopwebb"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-[#FF5500] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(255,85,0,0.35)] hover:bg-[#ff6a1a] transition-all duration-200 text-center flex items-center justify-center gap-2"
            >
              <svg 
                className="w-4 h-4 fill-current" 
                viewBox="0 0 24 24"
              >
                <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.426-.679.426s-.084 12.233 0 13.911c.084 1.678 1.582 2.682 2.308 2.682h12.755c2.25 0 3.737-1.391 4.26-2.515 1.866.21 4.505-.84 4.514-9.911zm-5.83 5.378c-.371.797-1.39 1.378-2.678 1.378H3.398c-.282 0-.411-.137-.411-.411V7.123c0-.274.129-.411.411-.411h14.073c.282 0 .411.137.411.411v7.203zm2.593-2.918c-.01 2.378-.456 3.69-1.222 4.148V8.65c.789.282 1.232 1.156 1.222 2.76z" />
              </svg>
              Support on Ko-fi
            </a>
          </div>
        </section>

      </article>

      {/* Footer */}
      <footer className="w-full max-w-4xl flex justify-between items-center text-xs text-zinc-600 font-mono z-10 border-t border-zinc-900 pt-6 mt-6">
        <span>&copy; {new Date().getFullYear()} HoopWebb Arcade</span>
        <span>Built for Hoopers &amp; Creators</span>
      </footer>

    </main>
  );
}
