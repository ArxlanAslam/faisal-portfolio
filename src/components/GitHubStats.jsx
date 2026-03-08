import React from 'react';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';
import FadeIn from './FadeIn';

const GitHubStats = ({ username = 'faysal-aslam' }) => {
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

        {/* GitHub Stats Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <FaStar className="text-yellow-500 text-2xl mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-900 dark:text-white">50+</div>
            <div className="text-xs text-slate-600 dark:text-slate-400">Total Stars</div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <FaCodeBranch className="text-indigo-500 text-2xl mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-900 dark:text-white">100+</div>
            <div className="text-xs text-slate-600 dark:text-slate-400">Repositories</div>
          </div>
        </div>

        {/* GitHub Contribution Graph */}
        <div className="space-y-3">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Contribution Activity</p>
          <img 
            src={`https://ghchart.rshah.org/${username}`}
            alt="GitHub Contributions"
            className="w-full rounded-lg"
            loading="lazy"
          />
        </div>

        {/* View Profile Link */}
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
