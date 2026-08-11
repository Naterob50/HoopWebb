import Link from "next/link";

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-black text-white relative court-grid p-6 md:p-12 flex flex-col items-center">
      <div className="max-w-3xl w-full space-y-10 pt-8">
        <Link
          href="/"
          className="text-xs font-mono text-neutral-400 hover:text-orange-500 transition block mb-4"
        >
          ← BACK TO ARCADE
        </Link>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-orange-500">
          OUR STORY
        </h1>

        <div className="space-y-6 text-neutral-300 leading-relaxed font-sans text-base md:text-lg border-l-2 border-orange-500 pl-6">
          <p>
            HoopWebb was created with a single vision: build an open, free-to-play digital arcade strictly dedicated to basketball fans.
          </p>
          <p>
            No aggressive monetization, no bloated paywalls, and no corporate fluff. Just clean, fast, and addictive basketball trivia, puzzles, and interactive challenges designed by hoopheads, for hoopheads.
          </p>
        </div>

        {/* Support the Developer Section */}
        <div className="pt-6 border-t border-neutral-900 space-y-4">
          <h2 className="text-xl font-bold text-white tracking-wide">
            SUPPORT THE DEVELOPER
          </h2>
          <p className="text-sm text-neutral-400 font-sans">
            If you enjoy playing the games and want to help keep the site 100% free and ad-free, consider supporting the project on Ko-fi!
          </p>
          <a
            href="https://ko-fi.com/hoopwebb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-extrabold text-sm px-6 py-3.5 rounded-lg shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all uppercase tracking-wider"
          >
            ☕ Buy Me a Coffee on Ko-fi →
          </a>
        </div>
      </div>
    </main>
  );
}
