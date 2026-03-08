import React from 'react';
import FadeIn from './FadeIn';

const TestimonialsSection = ({ testimonials }) => {
  return (
    <section id="testimonials" className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-slate-900 dark:text-white">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-4"></div>
          <p className="text-center text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            Don't just take my word for it - hear what clients say about working with me
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:scale-105 transform">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                {/* Project Tag */}
                <div className="mb-4">
                  <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-medium">
                    {testimonial.project}
                  </span>
                </div>
                
                {/* Client Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</p>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <FadeIn delay={400}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-8 px-8 py-4 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">98%</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Satisfaction Rate</div>
              </div>
              <div className="w-px h-12 bg-slate-300 dark:bg-slate-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">15+</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-slate-300 dark:bg-slate-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">5.0</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Average Rating</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default TestimonialsSection;
