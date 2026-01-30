const Declaration = () => {
  return (
    <section id="declaration" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-12">Declaration & Contact</h2>
          
          {/* Declaration */}
          <div className="card bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6 shadow-lg">
                ✓
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Professional Declaration
              </h3>
              <p className="text-gray-700 leading-relaxed italic max-w-2xl mx-auto">
                "I hereby declare that the above information is true and correct to the best of my knowledge."
              </p>
              <div className="mt-6 pt-6 border-t border-gray-300">
                <p className="text-gray-600 font-medium">
                  Akankshya Mishra
                </p>
                <p className="text-gray-500 text-sm">
                  Computer Science Engineering Student
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="text-2xl">�</span>
                Get In Touch
              </h3>
              <div className="space-y-4">
                <a 
                  href="mailto:akankshyam4@gmail.com" 
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white">
                    ✉️
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 group-hover:text-red-600">
                      akankshyam4@gmail.com
                    </p>
                    <p className="text-sm text-gray-600">Email</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="card bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="text-2xl">🌍</span>
                Connect Online
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white">
                    🐙
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">GitHub</p>
                    <p className="text-sm text-gray-600">View my projects</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                    💼
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">LinkedIn</p>
                    <p className="text-sm text-gray-600">Professional profile</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <div className="card bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none">
              <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together!</h3>
              <p className="mb-8 opacity-90 text-lg">
                I'm always excited to discuss new opportunities, collaborate on projects, 
                or simply connect with fellow developers and tech enthusiasts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:akankshyam4@gmail.com"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="card bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200">
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">Availability:</span> Open to internships, freelance projects, and full-time opportunities<br/>
                <span className="font-semibold">Location:</span> Odisha, India (Open to remote work)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Declaration;