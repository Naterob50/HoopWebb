'use client';

import { useState } from 'react';

export default function SubmitGamePage() {
  const [formData, setFormData] = useState({
    developerName: '',
    email: '',
    gameTitle: '',
    demoUrl: '',
    githubUrl: '',
    techStack: '',
    description: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const contentType = res.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        const result = await res.json();
        if (res.ok) {
          setSubmitted(true);
        } else {
          setErrorMsg(result.error || `Server Error (${res.status})`);
        }
      } else {
        const text = await res.text();
        setErrorMsg(`Route Error (${res.status}): Expected JSON but got HTML page. Check API route path.`);
      }
    } catch (e: any) {
      setErrorMsg(`Client Exception: ${e.message || e.toString()}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-12 court-grid flex justify-center items-center">
      <div className="w-full max-w-2xl bg-neutral-950 border-2 border-orange-500/30 p-8 rounded-2xl space-y-6 shadow-[0_0_30px_rgba(249,115,22,0.1)]">
        <div>
          <span className="text-xs font-mono text-orange-500">// ARCADE PLATFORM</span>
          <h1 className="text-3xl font-arcade text-white tracking-wider mt-1">
            SUBMIT YOUR <span className="text-orange-500">GAME</span>
          </h1>
          <p className="text-sm text-neutral-400 font-mono mt-1">
            Host your basketball game or analytics tool on the Hoopwebb Arcade.
          </p>
        </div>

        {submitted ? (
          <div className="bg-emerald-500/10 border border-emerald-500/30 p-6 rounded-xl text-center space-y-2">
            <h3 className="text-xl font-arcade text-emerald-400">SUBMISSION RECEIVED!</h3>
            <p className="text-sm text-neutral-300 font-mono">
              Your game has been queued for staging review. You'll be notified upon approval.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
            {errorMsg && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-3 rounded break-all">
                {errorMsg}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-neutral-400 mb-1">DEVELOPER NAME *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Balfazar"
                  value={formData.developerName}
                  onChange={(e) => setFormData({ ...formData, developerName: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded p-3 text-white focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">CONTACT EMAIL *</label>
                <input
                  required
                  type="email"
                  placeholder="dev@hoopwebb.org"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded p-3 text-white focus:border-orange-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-neutral-400 mb-1">GAME TITLE *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Clutch Shot Trivia"
                  value={formData.gameTitle}
                  onChange={(e) => setFormData({ ...formData, gameTitle: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded p-3 text-white focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">TECH STACK</label>
                <input
                  type="text"
                  placeholder="e.g. Next.js, Canvas API"
                  value={formData.techStack}
                  onChange={(e) => setFormData({ ...formData, techStack: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded p-3 text-white focus:border-orange-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-neutral-400 mb-1">DEMO / PLAYABLE URL *</label>
              <input
                required
                type="url"
                placeholder="https://your-game.vercel.app"
                value={formData.demoUrl}
                onChange={(e) => setFormData({ ...formData, demoUrl: e.target.value })}
                className="w-full bg-neutral-900 border border-neutral-800 rounded p-3 text-white focus:border-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-neutral-400 mb-1">GITHUB REPO URL (OPTIONAL)</label>
              <input
                type="url"
                placeholder="https://github.com/username/repo"
                value={formData.githubUrl}
                onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                className="w-full bg-neutral-900 border border-neutral-800 rounded p-3 text-white focus:border-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-neutral-400 mb-1">GAME DESCRIPTION *</label>
              <textarea
                required
                rows={3}
                placeholder="Briefly describe gameplay, controls, and concept..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-neutral-900 border border-neutral-800 rounded p-3 text-white focus:border-orange-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 text-black font-arcade font-bold py-3.5 rounded-xl transition shadow-[0_0_20px_rgba(249,115,22,0.3)] disabled:opacity-50"
            >
              {loading ? 'SUBMITTING...' : 'SUBMIT GAME TO ARCADE HUB'}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
