import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white relative court-grid p-6 md:p-12 overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        
        {/* Top Navigation */}
        <div className="flex justify-between items-center pb-6 border-b border-neutral-800">
          <Link 
            href="/" 
            className="text-neutral-400 hover:text-orange-500 font-bold text-sm transition flex items-center gap-2 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>BACK TO HOME</span>
          </Link>

          <span className="text-xs font-mono text-orange-500">
            SYSTEM // MISSION BRIEF
          </span>
        </div>

        {/* Page Header */}
        <div className="space-y-3 text-center md:text-left">
          <div className="inline-block bg-orange-500/10 text-orange-400 font-bold px-3 py-1 rounded text-xs border border-orange-500/30">
            INDEPENDENT SPORTS ARCADE
          </div>
          <h1 className="text-5xl md:text-7xl font-arcade text-white tracking-tight">
            ABOUT <span className="text-orange-500">HOOPWEBB</span>
          </h1>
        </div>

        {/* Section 1: Our Story */}
        <section className="bg-neutral-950 border-2 border-neutral-800 rounded-xl p-8 space-y-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600" />
          <h2 className="text-2xl font-arcade text-orange-500">OUR STORY</h2>
          <div className="space-y-4 text-neutral-300 leading-relaxed text-sm md:text-base font-medium">
            <p>
              HOOPWEBB wasn’t born in a corporate boardroom or backed by massive media conglomerates. It was built from scratch by a single founder with a clear vision: to create the ultimate digital arcade for the modern, analytical basketball enthusiast.
            </p>
            <p>
              We grew tired of jumping between five different tabs just to mock a trade, check betting lines, rank players, and play daily hoops trivia. So, we did what any passionate fan would do—we built a centralized network to house it all in one seamless experience.
            </p>
          </div>
        </section>

        {/* Section 2: The Manifesto */}
        <section className="bg-neutral-950 border-2 border-neutral-800 rounded-xl p-8 space-y-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-600" />
          <h2 className="text-2xl font-arcade text-white">THE MANIFESTO</h2>
          <div className="space-y-4 text-neutral-300 leading-relaxed text-sm md:text-base font-medium">
            <p>
              We believe that basketball entertainment should be interactive, incredibly accurate, and completely free.
            </p>
            <p>
              Whether you live in the salary cap sheets, track the daily betting lines, or spend your mornings debating basketball history, HOOPWEBB is built specifically for you.
            </p>
          </div>
        </section>

        {/* Section 3: Driven by the Community */}
        <section className="bg-neutral-950 border-2 border-orange-500/40 rounded-xl p-8 space-y-6 relative overflow-hidden shadow-[0_0_30px_rgba(249,115,22,0.15)]">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600" />
          
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-arcade text-orange-500">DRIVEN BY THE COMMUNITY</h2>
            <span className="text-xs font-mono text-emerald-400">100% INDEPENDENT</span>
          </div>

          <div className="space-y-4 text-neutral-300 leading-relaxed text-sm md:text-base font-medium">
            <p>
              HOOPWEBB operates on an independent, "Support the Developer" model. We don't lock our tools behind expensive premium paywalls or clutter your screen with aggressive corporate advertising.
            </p>
            <p>
              Everything you play on this network is completely free to access. If our Trade Generator helped you architect a blockbuster dynasty, or you beat the daily clock on NBA Scramble, consider throwing a few bucks into the platform’s tip jar. Your voluntary support directly funds real-time data updates, server costs, and the development of future basketball tools.
            </p>
          </div>

          {/* Tip Jar Callout */}
          <div className="pt-4 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-neutral-400">
              SUPPORT THE ARCADE DEVELOPMENT
            </span>
            <a 
              href="https://ko-fi.com/hoopwebb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center bg-orange-500 hover:bg-orange-600 text-black font-arcade font-bold px-6 py-2.5 rounded transition-transform hover:scale-105 shadow-[0_0_15px_rgba(249,115,22,0.4)]"
            >
              ☕ TIP JAR / KO-FI →
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-neutral-900">
          <p className="text-xs font-mono text-neutral-600 tracking-widest">
            HOOPWEBB DIGITAL ENGINE • BUILT FOR HOOPHEADS
          </p>
        </footer>

      </div>
    </main>
  );
}
