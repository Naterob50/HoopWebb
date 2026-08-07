'use client';

import { useState, useEffect } from 'react';

interface ScoreEntry {
  id: string;
  name: string;
  score: number;
  date: string; // YYYY-MM-DD
}

interface LeaderboardProps {
  gameId: string; // e.g. "draft-duel", "nba-scramble"
  currentScore?: number | null;
  onScoreSubmitted?: () => void;
}

export default function Leaderboard({ gameId, currentScore, onScoreSubmitted }: LeaderboardProps) {
  const [playerName, setPlayerName] = useState('');
  const [scores, setScores] = useState<ScoreEntry[]>([]);
  const [submitted, setSubmitted] = useState(false);

  // Helper to get today's date in YYYY-MM-DD format
  const getTodayString = () => new Date().toISOString().split('T')[0];

  // Load scores for today only
  useEffect(() => {
    const today = getTodayString();
    const storageKey = `hoopwebb_lb_${gameId}`;
    const rawData = localStorage.getItem(storageKey);

    if (rawData) {
      try {
        const parsed: ScoreEntry[] = JSON.parse(rawData);
        // Filter out scores that are NOT from today (Auto-erase at midnight!)
        const todaysScores = parsed.filter((entry) => entry.date === today);
        
        // Sort descending and keep top 5
        todaysScores.sort((a, b) => b.score - a.score);
        setScores(todaysScores.slice(0, 5));
      } catch (e) {
        setScores([]);
      }
    }
  }, [gameId, submitted]);

  // Submit a new high score
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!playerName || currentScore === null || currentScore === undefined) return;

    const today = getTodayString();
    const storageKey = `hoopwebb_lb_${gameId}`;
    
    // Get existing valid scores for today
    const rawData = localStorage.getItem(storageKey);
    let existingScores: ScoreEntry[] = rawData ? JSON.parse(rawData) : [];
    existingScores = existingScores.filter((entry) => entry.date === today);

    // Create new score entry (4 letters max, forced uppercase)
    const newEntry: ScoreEntry = {
      id: Math.random().toString(36).substring(2, 9),
      name: playerName.substring(0, 4).toUpperCase(),
      score: currentScore,
      date: today,
    };

    const updatedList = [...existingScores, newEntry];
    updatedList.sort((a, b) => b.score - a.score);
    
    // Save back to storage
    localStorage.setItem(storageKey, JSON.stringify(updatedList));

    setScores(updatedList.slice(0, 5));
    setSubmitted(true);
    setPlayerName('');
    if (onScoreSubmitted) onScoreSubmitted();
  };

  return (
    <div className="bg-neutral-950 border-2 border-orange-500/30 rounded-xl p-6 space-y-6 max-w-md mx-auto shadow-[0_0_20px_rgba(249,115,22,0.15)]">
      
      {/* Header */}
      <div className="flex justify-between items-center border-b border-neutral-800 pb-3">
        <div>
          <h3 className="text-xl font-arcade text-orange-500 tracking-wider">DAILY TOP 5</h3>
          <p className="text-[10px] font-mono text-neutral-500">RESETS MIDNIGHT (EST/UTC)</p>
        </div>
        <span className="text-xs bg-orange-500/10 text-orange-400 font-mono px-2 py-1 rounded border border-orange-500/20">
          TODAY ONLY
        </span>
      </div>

      {/* High Score Submission Box (Shows if player has a score to submit) */}
      {currentScore !== undefined && currentScore !== null && !submitted && (
        <form onSubmit={handleSubmit} className="bg-neutral-900 border border-neutral-800 p-4 rounded-lg space-y-3">
          <div className="text-xs font-mono text-neutral-400">
            YOUR SCORE: <span className="text-orange-500 font-bold text-base font-arcade">{currentScore}</span>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              maxLength={4}
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value.toUpperCase())}
              placeholder="4 LTRS"
              className="w-full bg-black border border-neutral-700 text-white font-arcade px-3 py-2 text-center rounded focus:border-orange-500 focus:outline-none tracking-widest text-lg uppercase"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-black font-arcade font-bold px-4 py-2 rounded text-sm transition"
            >
              SAVE
            </button>
          </div>
        </form>
      )}

      {/* Top 5 Leaderboard Display */}
      <div className="space-y-2 font-mono text-sm">
        {scores.length === 0 ? (
          <div className="text-center py-6 text-neutral-600 text-xs tracking-wider">
            NO SCORES YET TODAY.<br />BE THE FIRST ON THE BOARD!
          </div>
        ) : (
          scores.map((entry, index) => (
            <div
              key={entry.id || index}
              className={`flex justify-between items-center p-2.5 rounded border ${
                index === 0
                  ? 'bg-orange-500/10 border-orange-500/40 text-orange-400'
                  : 'bg-neutral-900/60 border-neutral-800 text-neutral-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-arcade text-xs w-4 text-neutral-500">#{index + 1}</span>
                <span className="font-arcade font-bold tracking-widest text-base">{entry.name}</span>
              </div>
              <span className="font-arcade font-bold text-white text-base">{entry.score}</span>
            </div>
          ))
        )}
      </div>

    </div>
  );
}
