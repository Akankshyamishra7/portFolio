import React from 'react';
import { 
  HiUsers, 
  HiSparkles 
} from 'react-icons/hi';
import { FiTarget, FiZap, FiCode } from 'react-icons/fi';
import { BiRocket } from 'react-icons/bi';

interface HighlightItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const ProfileSummary: React.FC = () => {
  const highlights: HighlightItem[] = [
    {
      icon: <FiTarget className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Goal-Oriented',
      description: 'Focused on achieving excellence in software development with clear objectives',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <BiRocket className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Innovation-Driven',
      description: 'Passionate about creating cutting-edge solutions that make a difference',
      color: 'from-green-400 to-teal-500'
    },
    {
      icon: <HiUsers className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Team Player',
      description: 'Strong collaboration and leadership qualities with excellent communication',
      color: 'from-emerald-500 to-green-600'
    }
  ];

  return (
    <section id="profile-summary" className="section-padding bg-gradient-to-br from-black via-gray-950 to-black gpu-accelerated">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="section-title animate-fade-in-up">Profile Summary</h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed animate-fade-in-up font-sans" style={{animationDelay: '0.2s'}}>
              Passionate Computer Science Engineering student with expertise in modern web development technologies and a strong foundation in software engineering principles.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="card card-animate stagger-1" data-aos="fade-up" data-aos-delay="100">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 stagger-child">
                    <FiTarget className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="stagger-child">
                    <h3 className="font-serif font-semibold text-white mb-2 text-lg sm:text-xl">Solution-Driven Developer</h3>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                      A <span className="font-semibold gradient-text">proactive and solution-driven</span> Computer Science Engineering student with a passion for applying theoretical knowledge to real-world challenges.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card card-animate stagger-2" data-aos="fade-up" data-aos-delay="300">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 stagger-child">
                    <BiRocket className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="stagger-child">
                    <h3 className="font-serif font-semibold text-white mb-2 text-lg sm:text-xl">Innovation-Focused</h3>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                      Highly motivated to excel as a <span className="font-semibold gradient-text">programmer and innovative developer</span>, with a focus on continuous learning and professional growth.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card card-animate stagger-3" style={{animationDelay: '0.4s'}}>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-teal-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FiZap className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-white mb-2 text-lg sm:text-xl">Fast-Paced Excellence</h3>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                      Capable of working in <span className="font-semibold gradient-text">fast-paced environments</span> while maintaining high-quality standards. Eager to contribute as a problem solver and team player with leadership potential.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-6 lg:space-y-8 order-1 lg:order-2">
              <div className="relative animate-float">
                <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white text-4xl sm:text-5xl lg:text-6xl font-bold shadow-2xl shadow-green-500/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                  <span className="relative z-10 font-serif">AM</span>
                </div>
                <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-lg sm:text-2xl animate-bounce shadow-lg">
                  <HiSparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-teal-400 to-green-500 rounded-full flex items-center justify-center text-sm sm:text-lg animate-pulse shadow-lg">
                  <FiCode className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-xs sm:max-w-sm">
                <div className="card text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text font-mono">3+</div>
                  <div className="text-xs sm:text-sm text-gray-400 font-mono">Years Learning</div>
                </div>
                <div className="card text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text font-mono">8+</div>
                  <div className="text-xs sm:text-sm text-gray-400 font-mono">Technologies</div>
                </div>
                <div className="card text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text font-mono">5+</div>
                  <div className="text-xs sm:text-sm text-gray-400 font-mono">Projects</div>
                </div>
                <div className="card text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text font-mono">100%</div>
                  <div className="text-xs sm:text-sm text-gray-400 font-mono">Dedication</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="project-card text-center group animate-fade-in-up" style={{animationDelay: `${0.6 + index * 0.2}s`}}>
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/30`}>
                  {item.icon}
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-white mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSummary;
