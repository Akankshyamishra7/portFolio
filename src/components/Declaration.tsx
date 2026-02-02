import React from 'react';
import { HiMail, HiGlobeAlt, HiCheckCircle, HiLocationMarker } from 'react-icons/hi';
import { FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

const Declaration: React.FC = () => {
  return (
    <section id="declaration" className="py-16 md:py-24 bg-gradient-to-br from-gray-950 via-black to-gray-950">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-12">Declaration & Contact</h2>
          
          <div className="card bg-gradient-to-br from-gray-900 to-gray-950 border-green-900/30 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-green-500/30">
                <HiCheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">
                Professional Declaration
              </h3>
              <p className="text-gray-400 leading-relaxed italic max-w-2xl mx-auto">
                "I hereby declare that the above information is true and correct to the best of my knowledge."
              </p>
              <div className="mt-6 pt-6 border-t border-gray-800">
                <p className="text-gray-300 font-medium">
                  Akankshya Mishra
                </p>
                <p className="text-gray-500 text-sm">
                  Computer Science Engineering Student
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card bg-gradient-to-br from-gray-900 to-gray-950 border-green-900/30">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <HiMail className="w-6 h-6 text-green-400" />
                Get In Touch
              </h3>
              <div className="space-y-4">
                <a 
                  href="mailto:akankshyam4@gmail.com" 
                  className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 hover:shadow-md hover:shadow-green-500/10 transition-all duration-300 group border border-gray-700"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white">
                    <HiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-white group-hover:text-green-400">
                      akankshyam4@gmail.com
                    </p>
                    <p className="text-sm text-gray-500">Email</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="card bg-gradient-to-br from-gray-900 to-gray-950 border-green-900/30">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <HiGlobeAlt className="w-6 h-6 text-green-400" />
                Connect Online
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-green-700 hover:bg-gray-800 transition-all duration-300 cursor-pointer group">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white group-hover:bg-gray-600">
                    <FiGithub className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-white group-hover:text-green-400">GitHub</p>
                    <p className="text-sm text-gray-500">View my projects</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-green-700 hover:bg-gray-800 transition-all duration-300 cursor-pointer group">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white">
                    <FiLinkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-white group-hover:text-green-400">LinkedIn</p>
                    <p className="text-sm text-gray-500">Professional profile</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="card bg-gradient-to-r from-green-600 to-emerald-600 text-white border-none shadow-lg shadow-green-500/30">
              <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together!</h3>
              <p className="mb-8 opacity-90 text-lg">
                I'm always excited to discuss new opportunities, collaborate on projects, 
                or simply connect with fellow developers and tech enthusiasts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:akankshyam4@gmail.com"
                  className="bg-black text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-green-500 inline-flex items-center justify-center gap-2"
                >
                  <FiSend className="w-5 h-5" />
                  Send Email
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="card bg-gradient-to-r from-gray-900 to-gray-950 border-green-900/30">
              <p className="text-gray-400 text-sm flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
                <span className="flex items-center gap-1">
                  <HiCheckCircle className="text-green-400" />
                  <span className="font-semibold text-white">Availability:</span> Open to internships, freelance projects, and full-time opportunities
                </span>
                <span className="hidden sm:inline text-gray-600">|</span>
                <span className="flex items-center gap-1">
                  <HiLocationMarker className="text-green-400" />
                  <span className="font-semibold text-white">Location:</span> Odisha, India (Open to remote work)
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Declaration;
