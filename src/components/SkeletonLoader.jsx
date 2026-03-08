import React from 'react';

const SkeletonLoader = ({ type = 'card' }) => {
  if (type === 'card') {
    return (
      <div className="animate-pulse bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg">
        <div className="h-48 bg-slate-200 dark:bg-slate-700 rounded-lg mb-4" />
        <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-3" />
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full mb-2" />
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6 mb-4" />
        <div className="flex gap-2">
          <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded-full w-16" />
          <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded-full w-16" />
          <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded-full w-16" />
        </div>
      </div>
    );
  }

  if (type === 'list') {
    return (
      <div className="animate-pulse space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg">
            <div className="w-16 h-16 bg-slate-200 dark:bg-slate-700 rounded-lg" />
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4" />
              <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-full" />
              <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-2/3" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === 'text') {
    return (
      <div className="animate-pulse space-y-3">
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full" />
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6" />
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-4/6" />
      </div>
    );
  }

  return null;
};

export default SkeletonLoader;
