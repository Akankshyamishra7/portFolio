import React from 'react';
import { IconType } from 'react-icons';
import { HiGlobeAlt, HiSparkles } from 'react-icons/hi';
import { FiCpu, FiTool, FiCheckCircle, FiCode, FiBookOpen } from 'react-icons/fi';
import { BiRocket, BiTrophy } from 'react-icons/bi';

interface Project {
  title: string;
  technology: string;
  description: string;
  features: string[];
  technologies: string[];
  icon: IconType;
  color: string;
  bgGradient: string;
  status: string;
  complexity: string;
}

const Projects: React.FC = () => {
  const projectsData: Project[] = [
    {
      title: 'Responsive Portfolio Website',
      technology: 'ReactJS',
      description: 'Developed a personal portfolio website using ReactJS with a focus on creating a fully responsive and user-friendly design. Integrated GitHub for project management and collaboration.',
      features: [
        'Fully responsive design',
        'Modern UI/UX with Tailwind CSS',
        'GitHub integration',
        'Performance optimized',
        'Cross-browser compatibility',
        'SEO friendly'
      ],
      technologies: ['ReactJS', 'Tailwind CSS', 'JavaScript', 'HTML5', 'Vite', 'GitHub'],
      icon: HiGlobeAlt,
      color: 'from-green-500 to-emerald-600',
      bgGradient: 'from-gray-900 to-gray-950',
      status: 'Live',
      complexity: 'Advanced'
    },
    {
      title: 'Interactive Quiz Application',
      technology: 'Python',
      description: 'Developed a Python quiz application to test general knowledge with user interaction, score tracking, and comprehensive error handling features.',
      features: [
        'Interactive GUI interface',
        'Dynamic score tracking',
        'Comprehensive error handling',
        'Multiple question categories',
        'Results analytics & reporting',
        'Data persistence'
      ],
      technologies: ['Python', 'Tkinter', 'JSON', 'Data Structures', 'File I/O', 'OOP'],
      icon: FiCpu,
      color: 'from-emerald-500 to-teal-600',
      bgGradient: 'from-gray-900 to-gray-950',
      status: 'Completed',
      complexity: 'Intermediate'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-black">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center animate-fade-in-up">Projects & Achievements</h2>
          <p className="text-center text-gray-400 mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Here are some of the key projects I've worked on, showcasing my technical skills, problem-solving abilities, 
            and commitment to creating high-quality, user-focused applications.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
            {projectsData.map((project, index) => (
              <div 
                key={index} 
                className={`project-card group bg-gradient-to-br ${project.bgGradient} border-green-900/30`} 
                data-aos="fade-up" 
                data-aos-delay={`${200 + index * 200}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white shadow-xl shadow-green-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {React.createElement(project.icon, { className: "w-6 h-6 sm:w-8 sm:h-8" })}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`bg-gradient-to-r ${project.color} text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-md`}>
                      {project.technology}
                    </span>
                    <div className="flex gap-2">
                      <span className="bg-gray-800/80 text-gray-300 px-2 py-1 rounded-full text-xs font-medium border border-gray-700">
                        {project.status}
                      </span>
                      <span className="bg-gray-800/80 text-gray-300 px-2 py-1 rounded-full text-xs font-medium border border-gray-700">
                        {project.complexity}
                      </span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-green-400 group-hover:to-emerald-400 transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6 text-sm sm:text-base">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-white mb-4 flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                      <HiSparkles className="text-white w-3 h-3" />
                    </div>
                    Key Features
                  </h4>
                  <ul className="space-y-2.5">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm sm:text-base text-gray-400 flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold text-white mb-4 flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                      <FiTool className="text-white w-3 h-3" />
                    </div>
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="skill-tag group-hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-gray-300">
                        {project.status}
                      </span>
                    </div>
                    <button className="btn-secondary text-xs sm:text-sm">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 lg:mt-20">
            <div className="card bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900 border-green-900/30 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-green-500/30 animate-float">
                  <BiTrophy className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                  Project Impact & Achievements
                </h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                  Each project represents a learning milestone, combining technical expertise with creative problem-solving 
                  to deliver meaningful and impactful solutions.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                  {[
                    { number: '2+', label: 'Major Projects', color: 'text-green-400', icon: <BiRocket className="w-6 h-6" /> },
                    { number: '10+', label: 'Technologies Used', color: 'text-emerald-400', icon: <FiCode className="w-6 h-6" /> },
                    { number: '100%', label: 'Completion Rate', color: 'text-teal-400', icon: <FiCheckCircle className="w-6 h-6" /> },
                    { number: '24/7', label: 'Learning Mindset', color: 'text-green-300', icon: <FiBookOpen className="w-6 h-6" /> }
                  ].map((item, index) => (
                    <div key={index} className="text-center animate-scale-in" style={{animationDelay: `${1.0 + index * 0.1}s`}}>
                      <div className={`${item.color} mb-2 flex justify-center`}>{item.icon}</div>
                      <div className={`text-2xl sm:text-3xl font-bold ${item.color} mb-1`}>{item.number}</div>
                      <div className="text-xs sm:text-sm text-gray-500 font-medium">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
