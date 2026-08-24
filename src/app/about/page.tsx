import Link from "next/link";

export const revalidate = 0;

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white relative court-grid p-4 sm:p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12">
        {/* Navigation Header */}
        <header className="flex justify-between items-center border-b border-neutral-800 pb-6">
          <Link
            href="/"
            className="text-xs font-mono text-neutral-400 hover:text-orange-500 transition-colors uppercase tracking-wider"
          >
            ← BACK TO ARCADE
          </Link>
          <span className="text-xs font-mono text-orange-500 uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full">
            OUR STORY
          </span>
        </header>

        {/* Hero Section */}
        <section className="space-y-4">
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            THE STORY BEHIND <span className="text-orange-500">HOOPWEBB</span>
          </h1>
          <p className="text-sm font-mono text-neutral-400 uppercase tracking-widest">
            BUILT BY A BASKETBALL FAN FOR BASKETBALL FANS
          </p>
        </section>

        {/* Story Body Content */}
        <section className="bg-neutral-950/80 backdrop-blur-md border border-neutral-800 rounded-2xl p-6 sm:p-10 space-y-6 text-neutral-300 text-sm sm:text-base leading-relaxed font-sans shadow-xl">
          <p className="text-base sm:text-lg text-white font-medium">
            HOOPWEBB started with one person, one computer, and a pretty simple question: why isn’t there one place where basketball fans can do all the things they already love doing?
          </p>

          <p>
            I built HOOPWEBB because I wanted it for myself.
          </p>

          <p>
            Basketball fans shouldn’t have to open a bunch of different sites to compare players, build trades, check odds, test their knowledge, and keep up with the game. I wanted to put all of that under one roof and make it feel less like a collection of tools and more like a place you actually want to spend time.
          </p>

          <p>
            There’s no big team behind HOOPWEBB. No massive company, no media network, and no room full of people deciding what the next feature should be. It’s one developer building, fixing, testing, and adding to it piece by piece.
          </p>

          <p className="text-orange-400 font-semibold text-base sm:text-lg border-l-2 border-orange-500 pl-4 py-1 my-2">
            That’s what makes HOOPWEBB different.
          </p>

          <p>
            It’s built by a basketball fan for basketball fans—with the goal of creating a place where you can mess around with the game, dive into the numbers, compete with friends, and just enjoy being a hoops nerd.
          </p>

          <p>
            It’s a work in progress, and there’s a lot more to come. But every part of HOOPWEBB is being built with the same idea it started with: make basketball more fun to explore.
          </p>

          {/* Ko-fi Support Box */}
          <div className="pt-6 border-t border-neutral-800 mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-bold text-sm uppercase">Enjoying HOOPWEBB?</h3>
              <p className="text-xs text-neutral-400 font-sans">Support server costs and new feature development on Ko-fi.</p>
            </div>
            <a
              href="https://ko-fi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-5 py-2.5 rounded-lg text-xs tracking-wider uppercase transition-colors shrink-0 flex items-center gap-2"
            >
              ☕ SUPPORT ON KO-FI
            </a>
          </div>
        </section>

        {/* Action Footer */}
        <div className="pt-4 flex justify-center gap-4">
          <Link
            href="/games"
            className="bg-orange-500 hover:bg-orange-600 text-black font-extrabold px-8 py-3.5 rounded-xl text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg shadow-orange-500/20"
          >
            EXPLORE THE ARCADE →
          </Link>
        </div>
      </div>
    </main>
  );
}
