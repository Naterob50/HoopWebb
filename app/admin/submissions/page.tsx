'use client';

import { useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function SubmissionsPage() {
  const [submissionType, setSubmissionType] = useState<'game' | 'suggestion' | 'question'>('game');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    const formData = new FormData(e.currentTarget);

    // Build submission record payload
    const payload = {
      type: submissionType,
      author_name: formData.get('author_name'),
      email: formData.get('email'),
      game_title: submissionType === 'game' ? formData.get('game_title') : null,
      game_url: submissionType === 'game' ? formData.get('game_url') : null,
      message: formData.get('message'),
      created_at: new Date().toISOString(),
    };

    try {
      const { error } = await supabase.from('submissions').insert([payload]);

      if (error) {
        throw error;
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error('Supabase submission error:', err);
      setErrorMsg(err.message || 'Something went wrong saving your submission. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-between p-6 sm:p-12 relative overflow-hidden bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:24px_24px]">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#FF5500]/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Navigation Header */}
      <header className="w-full max-w-3xl flex justify-between items-center z-10 py-4 border-b border-zinc-900">
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

      {/* Main Content Form */}
      <div className="w-full max-w-2xl z-10 my-10 space-y-8">
        
        {/* Title */}
        <div className="text-center sm:text-left space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-[#FF5500] font-mono tracking-wide">
            <span>●</span> CREATOR &amp; COMMUNITY HUB
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight uppercase">
            SUBMIT &amp; <span className="text-[#FF5500]">CONNECT</span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base">
            Have a custom basketball web game to host? Got a feature suggestion or question? Drop it below.
          </p>
        </div>

        {submitted ? (
          /* Confirmation Message */
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 text-center space-y-4">
            <div className="w-12 h-12 bg-[#FF5500]/20 text-[#FF5500] border border-[#FF5500]/40 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
              ✓
            </div>
            <h2 className="text-2xl font-black uppercase text-white">SUBMISSION RECEIVED!</h2>
            <p className="text-zinc-400 text-sm max-w-md mx-auto">
              Your message has been logged directly into the HoopWebb system. We'll review your submission shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 px-6 py-2.5 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white text-xs font-mono uppercase rounded-lg transition-colors"
            >
              Send Another Submission
            </button>
          </div>
        ) : (
          /* Submission Form */
          <form onSubmit={handleSubmit} className="bg-zinc-950/90 border border-zinc-900 rounded-2xl p-6 sm:p-8 space-y-6">
            
            {errorMsg && (
              <div className="p-3 bg-red-950/60 border border-red-800/80 rounded-lg text-xs text-red-300 font-mono">
                Error: {errorMsg}
              </div>
            )}

            {/* Category Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400">
                1. Select Submission Type
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setSubmissionType('game')}
                  className={`py-2.5 px-3 rounded-lg text-xs font-bold uppercase transition-all border ${
                    submissionType === 'game'
                      ? 'bg-[#FF5500] text-black border-[#FF5500]'
                      : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  Featured Game
                </button>
                <button
                  type="button"
                  onClick={() => setSubmissionType('suggestion')}
                  className={`py-2.5 px-3 rounded-lg text-xs font-bold uppercase transition-all border ${
                    submissionType === 'suggestion'
                      ? 'bg-[#FF5500] text-black border-[#FF5500]'
                      : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  Suggestion
                </button>
                <button
                  type="button"
                  onClick={() => setSubmissionType('question')}
                  className={`py-2.5 px-3 rounded-lg text-xs font-bold uppercase transition-all border ${
                    submissionType === 'question'
                      ? 'bg-[#FF5500] text-black border-[#FF5500]'
                      : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  Question
                </button>
              </div>
            </div>

            {/* Common Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Your Name / Handle
                </label>
                <input
                  type="text"
                  name="author_name"
                  required
                  placeholder="e.g. BallerDev or Alex"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF5500] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Contact Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF5500] transition-colors"
                />
              </div>
            </div>

            {/* Game Specific Inputs */}
            {submissionType === 'game' && (
              <div className="space-y-4 pt-2 border-t border-zinc-900">
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Game Title
                  </label>
                  <input
                    type="text"
                    name="game_title"
                    required
                    placeholder="e.g. Clutch Shot Trivia"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF5500] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Game URL / GitHub / Demo Link
                  </label>
                  <input
                    type="url"
                    name="game_url"
                    required
                    placeholder="https://yourgame.com or https://github.com/..."
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF5500] transition-colors"
                  />
                </div>
              </div>
            )}

            {/* Message / Description Area */}
            <div className="space-y-1.5">
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400">
                {submissionType === 'game'
                  ? 'Game Description & Instructions'
                  : submissionType === 'suggestion'
                  ? 'Your Suggestion Details'
                  : 'Your Message'}
              </label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder={
                  submissionType === 'game'
                    ? 'Briefly describe your game, how it works, and technology used...'
                    : 'Tell us your ideas or questions...'
                }
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF5500] transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-[#FF5500] text-black font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-[0_0_20px_rgba(255,85,0,0.3)] hover:bg-[#ff6a1a] transition-all duration-200 disabled:opacity-50"
            >
              {loading ? 'Transmitting to Supabase...' : 'Send Submission →'}
            </button>

          </form>
        )}

      </div>

      {/* Footer */}
      <footer className="w-full max-w-3xl flex justify-between items-center text-xs text-zinc-600 font-mono z-10 border-t border-zinc-900 pt-6 mt-6">
        <span>&copy; {new Date().getFullYear()} HoopWebb Arcade</span>
        <span>Built for Hoopers &amp; Creators</span>
      </footer>

    </main>
  );
}
