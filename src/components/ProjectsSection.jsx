import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import FadeIn from './FadeIn';
import ProjectModal from './ProjectModal';

const ProjectsSection = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState('default');

  // Extract unique categories
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  // Filter projects by category
  let filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  // Sort projects
  if (sortBy === 'name') {
    filteredProjects = [...filteredProjects].sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === 'recent') {
    filteredProjects = [...filteredProjects].reverse();
  }

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-8"></div>
        </FadeIn>

        {/* Filters and Sort */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
          {/* Category Filters */}
          <FadeIn delay={100}>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-indigo-600 text-white shadow-lg scale-105'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            aria-label="Sort projects"
          >
            <option value="default">Default Order</option>
            <option value="recent">Most Recent</option>
            <option value="name">Alphabetical</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <div className="group bg-slate-50 dark:bg-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-200 dark:border-slate-600 hover:scale-105 transform duration-300 cursor-pointer h-full flex flex-col"
                onClick={() => handleProjectClick(project)}>
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">{project.icon}</div>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                
                {project.metrics && (
                  <div className="mb-3 px-3 py-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <p className="text-sm font-semibold text-green-700 dark:text-green-400">
                      📊 {project.metrics}
                    </p>
                  </div>
                )}
                
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed line-clamp-3 flex-grow">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-3 py-1 bg-slate-200 dark:bg-slate-600 rounded-full text-sm text-slate-600 dark:text-slate-300">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-4 pt-4 border-t border-slate-200 dark:border-slate-600">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-800 dark:bg-slate-600 text-white rounded-lg hover:bg-slate-900 dark:hover:bg-slate-500 transition-all text-sm hover:scale-105"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  <button
                    onClick={() => handleProjectClick(project)}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all text-sm hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    Details
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 dark:text-slate-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default ProjectsSection;
