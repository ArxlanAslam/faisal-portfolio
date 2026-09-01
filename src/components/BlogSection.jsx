import React from 'react';
import { Calendar, Clock, ArrowRight, PenLine } from 'lucide-react';
import FadeIn from './FadeIn';

const BlogSection = ({ blogs }) => {
  const published = blogs.filter((b) => b.link && b.link !== '#').length;

  return (
    <section id="blog" className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-slate-900 dark:text-white">
            Writing
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-4"></div>
          <p className="text-center text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            {published === 0
              ? 'Topics I am currently writing up from production work — drafts in progress.'
              : 'Notes and deep dives from production AI work.'}
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <article className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700 hover:scale-105 transform duration-300">
                <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 relative overflow-hidden">
                  {blog.image ? (
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-6xl">
                      {blog.icon}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xl border-2 border-indigo-500">
                      {blog.icon}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                      {blog.link && blog.link !== '#' ? (
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{blog.date}</span>
                        </div>
                      ) : (
                        <span className="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-xs font-semibold">
                          Draft
                        </span>
                      )}
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {blog.link && blog.link !== '#' ? (
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all"
                    >
                      Read More <ArrowRight size={16} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                      <PenLine size={14} />
                      In progress
                    </span>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
