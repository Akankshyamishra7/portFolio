import React, { useState } from 'react';
import { FaRss, FaLinkedin, FaThumbsUp, FaComment } from 'react-icons/fa6';
import { HiExternalLink, HiX } from 'react-icons/hi';
import { portfolioData, FeedItem } from '../data/portfolioData';

const Feed: React.FC = () => {
  const { feed } = portfolioData;
  const [selectedItem, setSelectedItem] = useState<FeedItem | null>(null);

  return (
    <section id="feed" className="py-20 sm:py-28 bg-[#090a0c] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header: Right-aligned "Feed" with RSS Icon matching Screenshot 2 */}
        <div className="flex items-center justify-end gap-3 mb-6">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Feed
          </h2>
          <FaRss className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </div>

        {/* Full-width Horizontal Divider Line matching Screenshot 2 */}
        <div className="w-full h-px bg-white/20 mb-12 sm:mb-16"></div>

        {/* Feed Cards Masonry / Multi-column Grid matching Screenshot 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
          {feed.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="bg-white text-gray-900 rounded-2xl p-5 sm:p-6 shadow-2xl hover:shadow-[0_20px_50px_rgba(255,255,255,0.08)] transition-all duration-300 border border-gray-200 cursor-pointer hover:scale-[1.01] flex flex-col justify-between"
            >
              {item.type === 'certificate' ? (
                /* Certificate Card Layout */
                <div>
                  {item.imageUrl && (
                    <div className="w-full h-48 sm:h-56 bg-gray-100 rounded-xl overflow-hidden mb-4 border border-gray-200 relative group">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-white/90 text-black px-3 py-1.5 rounded-full text-xs font-semibold shadow-md flex items-center gap-1.5">
                          View Certificate <HiExternalLink className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  )}
                  <h3 className="font-sans font-semibold text-gray-900 text-sm sm:text-base leading-snug mb-2 hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs text-gray-500 font-mono flex items-center justify-between">
                    <span>{item.badge || 'coursera.org'}</span>
                    <span>{item.timeAgo}</span>
                  </div>
                </div>
              ) : (
                /* LinkedIn Post Card Layout */
                <div>
                  {/* LinkedIn Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-indigo-900 to-slate-800 text-white flex items-center justify-center font-serif font-bold text-sm overflow-hidden flex-shrink-0 border border-gray-300 shadow-sm">
                        <span>{item.author.name.charAt(0)}</span>
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="font-sans font-bold text-gray-900 text-xs sm:text-sm">
                            {item.author.name}
                          </span>
                          {item.author.connection && (
                            <span className="text-gray-400 text-xs font-normal">
                              · {item.author.connection}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] sm:text-xs text-gray-500 truncate max-w-[200px] sm:max-w-xs">
                          {item.author.headline}
                        </p>
                        <span className="text-[10px] text-gray-400 block font-mono">
                          {item.timeAgo}
                        </span>
                      </div>
                    </div>

                    {/* Official Blue LinkedIn Logo */}
                    <div className="flex-shrink-0">
                      <div className="flex items-center gap-1 text-[#0a66c2] font-bold text-base sm:text-lg">
                        <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                        <span className="font-sans font-black tracking-tighter hidden sm:inline text-sm">
                          LinkedIn
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn Post Content */}
                  <div className="font-sans text-xs sm:text-sm text-gray-800 leading-relaxed space-y-2 whitespace-pre-line line-clamp-6">
                    {item.content}
                  </div>

                  {/* LinkedIn Engagement Footer */}
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-gray-500 text-xs">
                    <div className="flex items-center gap-1.5 text-[#0a66c2]">
                      <FaThumbsUp className="w-3.5 h-3.5" />
                      <span>{item.likes || 128}</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400 text-[11px]">
                      <span>{item.comments || 16} comments</span>
                      <span className="hover:text-gray-600">Share</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in-up"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-white text-gray-900 rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <HiX className="w-5 h-5" />
            </button>

            {selectedItem.type === 'certificate' ? (
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  Certificate
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-gray-900 mt-3 mb-4">
                  {selectedItem.title}
                </h3>
                {selectedItem.imageUrl && (
                  <img
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    className="w-full rounded-xl border border-gray-200 mb-4 shadow-sm"
                  />
                )}
                <p className="text-sm text-gray-700 leading-relaxed mb-6 font-sans">
                  {selectedItem.content}
                </p>
                {selectedItem.sourceUrl && (
                  <a
                    href={selectedItem.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0b0c0e] text-white hover:bg-black transition-all text-xs sm:text-sm font-medium"
                  >
                    Verify Credential on {selectedItem.badge} <HiExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-900 to-slate-800 text-white flex items-center justify-center font-serif font-bold text-base">
                    <span>{selectedItem.author.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-gray-900">
                      {selectedItem.author.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {selectedItem.author.headline}
                    </p>
                    <span className="text-[11px] text-gray-400 font-mono">
                      {selectedItem.timeAgo}
                    </span>
                  </div>
                </div>
                <div className="font-sans text-sm sm:text-base text-gray-800 leading-relaxed space-y-4 whitespace-pre-line">
                  {selectedItem.content}
                </div>
                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2 text-[#0a66c2] font-semibold">
                    <FaThumbsUp className="w-4 h-4" />
                    <span>{selectedItem.likes || 140} Likes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaComment className="w-4 h-4" />
                    <span>{selectedItem.comments || 24} Comments</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Feed;
