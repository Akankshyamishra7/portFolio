import React from 'react';
import { IconType } from 'react-icons';
import { 
  FiCode, FiLayers, FiSettings, FiCpu,
  FiGitBranch, FiGithub, FiTerminal, FiActivity
} from 'react-icons/fi';
import { 
  SiReact, SiTailwindcss, SiBootstrap, SiMui,
  SiJavascript, SiPython, SiHtml5, SiCss3
} from 'react-icons/si';
import { HiGlobeAlt, HiLightningBolt } from 'react-icons/hi';
import { BiTargetLock } from 'react-icons/bi';

interface Skill {
  name: string;
  level: number;
  icon: IconType;
  color: string;
  description: string;
}

interface SkillsData {
  languages: Skill[];
  frameworks: Skill[];
  tools: Skill[];
  concepts: string[];
}

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const TechnicalSkills: React.FC = () => {
  const skillsData: SkillsData = {
    languages: [
      { name: 'JavaScript', level: 85, icon: SiJavascript, color: 'from-yellow-400 to-yellow-600', description: 'Modern ES6+, DOM manipulation, Async/Await' },
      { name: 'Python', level: 80, icon: SiPython, color: 'from-green-400 to-emerald-500', description: 'Object-oriented programming, Data structures' },
      { name: 'HTML5', level: 90, icon: SiHtml5, color: 'from-green-500 to-teal-500', description: 'Semantic markup, Accessibility, SEO' },
      { name: 'CSS3', level: 85, icon: SiCss3, color: 'from-emerald-400 to-green-500', description: 'Flexbox, Grid, Animations, Responsive design' }
    ],
    frameworks: [
      { name: 'React', level: 82, icon: SiReact, color: 'from-teal-400 to-green-500', description: 'Hooks, Context API, Component lifecycle' },
      { name: 'Tailwind CSS', level: 88, icon: SiTailwindcss, color: 'from-green-400 to-emerald-500', description: 'Utility-first, Custom components, Responsive' },
      { name: 'Bootstrap', level: 75, icon: SiBootstrap, color: 'from-emerald-400 to-teal-500', description: 'Grid system, Components, Customization' },
      { name: 'Material UI', level: 70, icon: SiMui, color: 'from-green-500 to-emerald-600', description: 'Component library, Theming, Design system' }
    ],
    tools: [
      { name: 'Git', level: 78, icon: FiGitBranch, color: 'from-green-600 to-emerald-700', description: 'Version control, Branching, Collaboration' },
      { name: 'GitHub', level: 85, icon: FiGithub, color: 'from-gray-400 to-gray-600', description: 'Repository management, Actions, Pages' },
      { name: 'VS Code', level: 90, icon: FiTerminal, color: 'from-green-500 to-teal-600', description: 'Extensions, Debugging, Integrated terminal' },
      { name: 'Vite', level: 75, icon: FiActivity, color: 'from-emerald-500 to-green-600', description: 'Fast build tool, Hot reload, Optimization' }
    ],
    concepts: [
      'Responsive Web Design',
      'Version Control',
      'Problem Solving',
      'Algorithm Design',
      'Data Structures',
      'Software Engineering',
      'UI/UX Principles',
      'Performance Optimization'
    ]
  };

  const SkillBar: React.FC<SkillBarProps> = ({ skill }) => (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center text-white shadow-md shadow-green-500/20`}>
            {React.createElement(skill.icon, { className: "w-4 h-4" })}
          </div>
          <div>
            <span className="font-semibold text-white text-sm sm:text-base">{skill.name}</span>
            <p className="text-xs text-gray-500 hidden sm:block">{skill.description}</p>
          </div>
        </div>
        <span className="text-sm font-semibold gradient-text">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2 sm:h-3 overflow-hidden">
        <div
          className={`bg-gradient-to-r ${skill.color} h-full rounded-full transition-all duration-1000 ease-out transform origin-left`}
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="technical-skills" className="section-padding bg-gradient-to-br from-black via-gray-950 to-black">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center animate-fade-in-up">Technical Skills</h2>
          <p className="text-center text-gray-400 mb-8 sm:mb-12 lg:mb-16 max-w-2xl mx-auto text-sm sm:text-base animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Here's an overview of my technical expertise across different technologies and tools I use to build modern web applications.
          </p>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            <div className="card" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-500/30">
                  <FiCode className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Programming Languages
                </h3>
              </div>
              {skillsData.languages.map((skill, index) => (
                <SkillBar key={index} skill={skill} index={index} />
              ))}
            </div>
            
            <div className="card" data-aos="fade-up" data-aos-delay="500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-500/30">
                  <FiLayers className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Frameworks & Libraries
                </h3>
              </div>
              {skillsData.frameworks.map((skill, index) => (
                <SkillBar key={index} skill={skill} index={index} />
              ))}
            </div>
            
            <div className="card lg:col-span-2 xl:col-span-1" data-aos="fade-up" data-aos-delay="700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-500/30">
                  <FiSettings className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Tools & Technologies
                </h3>
              </div>
              {skillsData.tools.map((skill, index) => (
                <SkillBar key={index} skill={skill} index={index} />
              ))}
            </div>
          </div>
          
          <div className="mt-12 lg:mt-16">
            <div className="card" data-aos="fade-up" data-aos-delay="900">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-500/30">
                  <FiCpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white text-center">
                  Core Concepts & Expertise
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {skillsData.concepts.map((concept, index) => (
                  <div
                    key={index}
                    className="skill-tag text-center"
                  >
                    {concept}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: <HiGlobeAlt className="w-8 h-8" />,
                title: 'Full-Stack Web Development',
                description: 'Specialized in creating responsive, performant, and user-friendly web applications',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: <HiLightningBolt className="w-8 h-8" />,
                title: 'Modern Frameworks & Tools',
                description: 'Proficient with React, Tailwind CSS, and modern development workflows',
                color: 'from-emerald-500 to-teal-500'
              },
              {
                icon: <BiTargetLock className="w-8 h-8" />,
                title: 'Problem Solving & Algorithms',
                description: 'Strong analytical skills with focus on efficient solutions and clean code',
                color: 'from-teal-500 to-green-500'
              }
            ].map((item, index) => (
              <div key={index} className={`project-card text-center bg-gradient-to-br from-gray-900 to-gray-950 border-green-900/30 animate-fade-in-up`} style={{animationDelay: `${1.5 + index * 0.2}s`}}>
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-white mb-6 mx-auto shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg sm:text-xl text-white mb-3">{item.title}</h4>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
