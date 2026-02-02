import React from 'react';
import { HiAcademicCap, HiSparkles, HiBookOpen } from 'react-icons/hi';
import { BiRocket } from 'react-icons/bi';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: 'current' | 'completed';
  description: string;
  highlights: string[];
}

const Education: React.FC = () => {
  const educationData: EducationItem[] = [
    {
      degree: 'Computer Science Engineering',
      institution: "ITER | Siksha 'O' Anusandhan University",
      location: 'Odisha',
      period: 'continuing',
      status: 'current',
      description: 'Currently pursuing undergraduate degree in Computer Science Engineering with focus on software development and emerging technologies.',
      highlights: ['Data Structures & Algorithms', 'Software Engineering', 'Web Development', 'Database Management']
    },
    {
      degree: 'Diploma in Computer Science Engineering',
      institution: 'Government Polytechnic, Rayagada',
      location: 'Odisha',
      period: '2019 - 2022',
      status: 'completed',
      description: 'Completed diploma with strong foundation in programming fundamentals and computer systems.',
      highlights: ['Programming Fundamentals', 'Computer Systems', 'Technical Leadership', 'Project Management']
    }
  ];

  return (
    <section id="education" className="section-padding bg-gradient-to-br from-gray-950 via-black to-gray-950">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center animate-fade-in-up">Education</h2>
          <p className="text-center text-gray-400 mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            My educational journey in Computer Science Engineering, building a strong foundation in technology and software development.
          </p>
          
          <div className="space-y-8 lg:space-y-12">
            {educationData.map((education, index) => (
              <div 
                key={index} 
                className={`relative animate-fade-in-up mobile-stagger-${index + 1}`} 
                style={{animationDelay: `${0.4 + index * 0.3}s`}}
                data-aos="fade-up" 
                data-aos-delay={`${300 + index * 300}`}
              >
                <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-emerald-600 transform -translate-x-1/2"></div>
                
                <div className="hidden lg:block absolute left-1/2 top-8 w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full transform -translate-x-1/2 z-10 shadow-lg shadow-green-500/50"></div>
                
                <div className={`lg:grid lg:grid-cols-2 lg:gap-16 items-start ${index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'}`}>
                  <div className={`${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:col-start-2'}`}>
                    <div className="card bg-gradient-to-br from-gray-900 to-gray-950 border-green-900/30 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-500 group stagger-child">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform duration-300">
                              <HiAcademicCap className="w-6 h-6" />
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              education.status === 'current' 
                                ? 'bg-green-900/50 text-green-400 border border-green-700' 
                                : 'bg-emerald-900/50 text-emerald-400 border border-emerald-700'
                            }`}>
                              {education.status === 'current' ? 'Current' : 'Completed'}
                            </span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-green-400 group-hover:to-emerald-400 transition-all duration-300">
                            {education.degree}
                          </h3>
                          <p className="text-green-400 font-semibold mb-1 text-sm sm:text-base">{education.institution}</p>
                          <p className="text-gray-500 text-sm">{education.location} • {education.period}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-400 leading-relaxed mb-6 text-sm sm:text-base">
                        {education.description}
                      </p>
                      
                      <div>
                        <h4 className="font-bold text-white mb-4 flex items-center gap-2 text-sm sm:text-base">
                          <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                            <HiSparkles className="text-white w-3 h-3" />
                          </div>
                          Key Highlights
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {education.highlights.map((highlight, highlightIndex) => (
                            <div key={highlightIndex} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex-shrink-0"></div>
                              <span className="text-sm text-gray-400">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`hidden lg:block ${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8 lg:col-start-1'}`}>
                    <div className="project-card bg-gradient-to-br from-gray-900 to-gray-950 border-gray-800 text-center animate-float group" style={{animationDelay: `${1 + index * 0.5}s`}}>
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-green-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <HiBookOpen className="w-8 h-8" />
                      </div>
                      <h4 className="font-bold text-white mb-2">Academic Excellence</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Dedicated to continuous learning and academic growth in the field of Computer Science Engineering.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 lg:mt-20">
            <div className="card bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900 border-green-900/30 animate-fade-in-up" style={{animationDelay: '1.2s'}}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-green-500/30 animate-float">
                  <BiRocket className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                  Academic Focus & Future Goals
                </h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                  My educational journey is focused on mastering 
                  <span className="font-semibold gradient-text"> software engineering principles</span>, 
                  <span className="font-semibold gradient-text"> data structures & algorithms</span>, and 
                  <span className="font-semibold gradient-text"> modern web technologies</span>. 
                  Continuously expanding knowledge through practical projects, industry-relevant coursework, 
                  and hands-on experience with cutting-edge development tools and methodologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
