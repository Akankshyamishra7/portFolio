import React from 'react';
import { HiLightningBolt, HiUsers, HiStar, HiSparkles } from 'react-icons/hi';
import { FiTrendingUp, FiClock } from 'react-icons/fi';


interface Competency {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  examples: string[];
}

const CoreCompetencies: React.FC = () => {
  const competencies: Competency[] = [
    {
      title: 'Fast-Paced Learning',
      description: 'Ability to adapt quickly to new technologies and environments.',
      icon: <HiLightningBolt className="w-6 h-6" />,
      color: 'from-green-400 to-emerald-500',
      bgColor: 'from-gray-900 to-gray-950',
      borderColor: 'border-green-900/30',
      examples: ['Quick technology adoption', 'Rapid skill acquisition', 'Adaptive mindset']
    },
    {
      title: 'Continuous Improvement Mindset',
      description: 'Committed to constant learning and upskilling.',
      icon: <FiTrendingUp className="w-6 h-6" />,
      color: 'from-emerald-400 to-teal-500',
      bgColor: 'from-gray-900 to-gray-950',
      borderColor: 'border-green-900/30',
      examples: ['Self-directed learning', 'Skill enhancement', 'Growth-oriented approach']
    },
    {
      title: 'Effective Time Management',
      description: 'Proven ability to manage tasks efficiently and meet deadlines.',
      icon: <FiClock className="w-6 h-6" />,
      color: 'from-teal-400 to-green-500',
      bgColor: 'from-gray-900 to-gray-950',
      borderColor: 'border-green-900/30',
      examples: ['Priority setting', 'Deadline management', 'Efficient workflows']
    },
    {
      title: 'Team Collaboration',
      description: 'Strong team player with leadership qualities, capable of working in diverse and collaborative environments.',
      icon: <HiUsers className="w-6 h-6" />,
      color: 'from-green-400 to-emerald-500',
      bgColor: 'from-gray-900 to-gray-950',
      borderColor: 'border-green-900/30',
      examples: ['Cross-functional teamwork', 'Leadership potential', 'Collaborative spirit']
    }
  ];

  return (
    <section id="core-competencies" className="section-padding bg-black">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center animate-fade-in-up">Core Competencies</h2>
          <p className="text-center text-gray-400 mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Essential soft skills and personal attributes that drive my professional growth and effectiveness in collaborative environments.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {competencies.map((competency, index) => (
              <div key={index} className={`card bg-gradient-to-br ${competency.bgColor} ${competency.borderColor} hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 group`}>
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${competency.color} flex items-center justify-center text-white shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform duration-300`}>
                    {competency.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {competency.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {competency.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-white flex items-center gap-2">
                    <HiSparkles className="text-green-400 w-4 h-4" />
                    Key Aspects
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {competency.examples.map((example, exampleIndex) => (
                      <span
                        key={exampleIndex}
                        className="bg-gray-800/70 text-gray-300 px-3 py-1.5 rounded-full text-sm font-medium border border-gray-700 hover:bg-gray-800 hover:border-green-700 hover:shadow-md transition-all duration-300"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <div className="card bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900 border-green-900/30">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center justify-center gap-2">
                  <HiStar className="w-6 h-6 text-green-400" />
                  Professional Strengths
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">Adaptable</div>
                    <div className="text-sm text-gray-500">Quick learner</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400 mb-1">Growth-Oriented</div>
                    <div className="text-sm text-gray-500">Continuous improvement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-400 mb-1">Organized</div>
                    <div className="text-sm text-gray-500">Efficient planning</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-300 mb-1">Collaborative</div>
                    <div className="text-sm text-gray-500">Team player</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="card bg-gradient-to-r from-green-600 to-emerald-600 text-white border-none shadow-lg shadow-green-500/30">
              <h3 className="text-xl font-bold mb-4">Ready to Contribute</h3>
              <p className="mb-6 opacity-90">
                These core competencies, combined with my technical skills, position me to make meaningful contributions 
                to any development team or project.
              </p>
              <button className="bg-black text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors duration-300 shadow-lg border border-green-500">
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreCompetencies;
