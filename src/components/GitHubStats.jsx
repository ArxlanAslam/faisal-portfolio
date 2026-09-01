import React, { useState, useEffect } from 'react';
import { FaGithub, FaStar, FaCodeBranch, FaUsers } from 'react-icons/fa';
import FadeIn from './FadeIn';

const GitHubStats = ({ username = 'faysal-aslam' }) => {
  const [stats, setStats] = useState(null);
  const [status, setStatus] = useState('loading'); // loading | ready | error

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`)
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API unavailable');

        const user = await userRes.json();
        const repos = await reposRes.json();

        if (cancelled) return;

        const stars = Array.isArray(repos)
          ? repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0)
          : 0;

        setStats({
          repos: user.public_repos ?? 0,
          followers: user.followers ?? 0,
          stars
        });
        setStatus('ready');
      } catch {
        if (!cancelled) setStatus('error');
      }
    };

    load();
    return () => { cancelled = true; };
  }, [username]);

  const cards = [
    { icon: <FaCodeBranch className="text-indigo-500 text-2xl mx-auto mb-2" />, value: stats?.repos, label: 'Public Repositories' },
    { icon: <FaStar className="text-yellow-500 text-2xl mx-auto mb-2" />, value: stats?.stars, label: 'Total Stars' },
    { icon: <FaUsers className="text-emerald-500 text-2xl mx-auto mb-2" />, value: stats?.followers, label: 'Followers' }
  ];

  return (
    <FadeIn>
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-3 mb-6">
          <FaGithub className="text-4xl text-slate-800 dark:text-white" />
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">GitHub Activity</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">@{username}</p>
          </div>
        </div>

        {status === 'error' ? (
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Live stats are unavailable right now — view the profile directly below.
          </p>
        ) : (
          <div className="grid grid-cols-3 gap-4 mb-6">
            {cards.map((card, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
                {card.icon}
                <div className="text-2xl font-bold text-slate-900 dark:text-white">
                  {status === 'loading' ? (
                    <span className="inline-block h-7 w-10 rounded bg-slate-200 dark:bg-slate-600 animate-pulse align-middle" />
                  ) : (
                    card.value
                  )}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400">{card.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Contribution graph */}
        <div className="space-y-3">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Contribution Activity</p>
          <img
            src={`https://ghchart.rshah.org/4f46e5/${username}`}
            alt={`GitHub contribution graph for ${username}`}
            className="w-full rounded-lg"
            loading="lazy"
          />
        </div>

        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-900 dark:hover:bg-slate-600 transition-all"
        >
          <FaGithub />
          View Full Profile
        </a>
      </div>
    </FadeIn>
  );
};

export default GitHubStats;
