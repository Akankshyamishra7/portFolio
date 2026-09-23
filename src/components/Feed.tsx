'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaRss, FaLinkedin, FaThumbsUp, FaComment } from 'react-icons/fa6';
import { HiExternalLink, HiX } from 'react-icons/hi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData, FeedItem } from '../data/portfolioData';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Feed: React.FC = () => {
  const { feed } = portfolioData;
  const [selectedItem, setSelectedItem] = useState<FeedItem | null>(null);
  const [likesState, setLikesState] = useState<{ [id: string]: { count: number; liked: boolean } }>(() => {
    const initial: { [id: string]: { count: number; liked: boolean } } = {};
    feed.forEach((item) => {
      initial[item.id] = { count: item.likes || 128, liked: false };
    });
    return initial;
  });

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const modalBackdropRef = useRef<HTMLDivElement>(null);
  const modalBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header slide-in
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          x: 60,
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
        });
      }

      // 2. Divider line expansion
      if (dividerRef.current) {
        gsap.from(dividerRef.current, {
          scrollTrigger: {
            trigger: dividerRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          scaleX: 0,
          transformOrigin: 'right center',
          duration: 1.2,
          ease: 'power3.inOut',
        });
      }

      // 3. Staggered Feed Cards Entrance
      if (gridRef.current) {
        gsap.from(gridRef.current.children, {
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          y: 90,
          opacity: 0,
          scale: 0.95,
          stagger: 0.16,
          duration: 1.1,
          ease: 'power3.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Modal GSAP Zoom Animation
  useEffect(() => {
    if (selectedItem && modalBackdropRef.current && modalBoxRef.current) {
      gsap.fromTo(
        modalBackdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
      gsap.fromTo(
        modalBoxRef.current,
        { scale: 0.85, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'back.out(1.5)' }
      );
    }
  }, [selectedItem]);

  const closeModal = () => {
    if (modalBackdropRef.current && modalBoxRef.current) {
      gsap.to(modalBoxRef.current, {
        scale: 0.9,
        opacity: 0,
        y: 20,
        duration: 0.25,
        ease: 'power2.in',
      });
      gsap.to(modalBackdropRef.current, {
        opacity: 0,
        duration: 0.25,
        ease: 'power2.in',
        onComplete: () => setSelectedItem(null),
      });
    } else {
      setSelectedItem(null);
    }
  };

  const handleLikeClick = (e: React.MouseEvent, itemId: string) => {
    e.stopPropagation();
    const current = likesState[itemId] || { count: 128, liked: false };
    const newLiked = !current.liked;
    const newCount = newLiked ? current.count + 1 : current.count - 1;

    setLikesState((prev) => ({
      ...prev,
      [itemId]: { count: newCount, liked: newLiked },
    }));

    // Micro bounce animation
    const target = e.currentTarget;
    gsap.fromTo(
      target,
      { scale: 1.4, rotate: newLiked ? 15 : -15 },
      { scale: 1, rotate: 0, duration: 0.5, ease: 'elastic.out(1.5, 0.4)' }
    );
  };

  return (
    <section ref={sectionRef} id="feed" className="py-20 sm:py-28 bg-[#090a0c] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header: Right-aligned "Feed" with RSS Icon */}
        <div ref={headerRef} className="flex items-center justify-end gap-3 mb-6">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Feed
          </h2>
          <FaRss className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-pulse" />
        </div>

        {/* Full-width Horizontal Divider Line */}
        <div ref={dividerRef} className="w-full h-px bg-white/20 mb-12 sm:mb-16"></div>

        {/* Feed Cards Masonry / Multi-column Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
          {feed.map((item) => {
            const itemLike = likesState[item.id] || { count: item.likes || 128, liked: false };

            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="bg-white text-gray-900 rounded-3xl p-6 sm:p-7 shadow-2xl hover:shadow-[0_25px_50px_rgba(255,255,255,0.09)] transition-all duration-300 border border-gray-200 cursor-pointer hover:-translate-y-1 flex flex-col justify-between group"
              >
                {item.type === 'certificate' ? (
                  /* Certificate Card Layout */
                  <div>
                    {item.imageUrl && (
                      <div className="w-full h-52 sm:h-60 bg-gray-100 rounded-2xl overflow-hidden mb-5 border border-gray-200 relative group/img">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="bg-white/95 text-black px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-2 transform translate-y-2 group-hover/img:translate-y-0 transition-transform">
                            View Certificate <HiExternalLink className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    )}
                    <h3 className="font-sans font-bold text-gray-900 text-base sm:text-lg leading-snug mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-xs text-gray-500 font-mono flex items-center justify-between pt-2 border-t border-gray-100">
                      <span className="font-semibold text-gray-700">{item.badge || 'coursera.org'}</span>
                      <span>{item.timeAgo}</span>
                    </div>
                  </div>
                ) : (
                  /* LinkedIn Post Card Layout */
                  <div>
                    {/* LinkedIn Header */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-900 to-slate-800 text-white flex items-center justify-center font-serif font-bold text-sm overflow-hidden flex-shrink-0 border border-gray-300 shadow-sm">
                          <span>{item.author.name.charAt(0)}</span>
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="font-sans font-bold text-gray-900 text-sm">
                              {item.author.name}
                            </span>
                            {item.author.connection && (
                              <span className="text-gray-400 text-xs font-normal">
                                · {item.author.connection}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 truncate max-w-[200px] sm:max-w-xs">
                            {item.author.headline}
                          </p>
                          <span className="text-[10px] text-gray-400 block font-mono">
                            {item.timeAgo}
                          </span>
                        </div>
                      </div>

                      {/* Official Blue LinkedIn Logo */}
                      <div className="flex-shrink-0">
                        <div className="flex items-center gap-1.5 text-[#0a66c2] font-bold text-base sm:text-lg">
                          <FaLinkedin className="w-6 h-6" />
                          <span className="font-sans font-black tracking-tight hidden sm:inline text-sm">
                            LinkedIn
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* LinkedIn Post Content */}
                    <div className="font-sans text-xs sm:text-sm text-gray-800 leading-relaxed space-y-2 whitespace-pre-line line-clamp-6 mb-4">
                      {item.content}
                    </div>

                    {/* LinkedIn Engagement Footer */}
                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-gray-500 text-xs">
                      <button
                        onClick={(e) => handleLikeClick(e, item.id)}
                        className={`flex items-center gap-1.5 font-semibold transition-colors cursor-pointer px-2 py-1 rounded-lg ${
                          itemLike.liked ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600'
                        }`}
                        aria-label="Like Post"
                      >
                        <FaThumbsUp className={`w-3.5 h-3.5 ${itemLike.liked ? 'text-blue-600' : ''}`} />
                        <span>{itemLike.count}</span>
                      </button>
                      <div className="flex items-center gap-4 text-gray-400 text-[11px]">
                        <span>{item.comments || 16} comments</span>
                        <span className="hover:text-gray-600">Share</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Detail Modal */}
      {selectedItem && (
        <div
          ref={modalBackdropRef}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={closeModal}
        >
          <div
            ref={modalBoxRef}
            className="bg-white text-gray-900 rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <HiX className="w-5 h-5" />
            </button>

            {selectedItem.type === 'certificate' ? (
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full font-bold">
                  Credential
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-gray-900 mt-3 mb-4">
                  {selectedItem.title}
                </h3>
                {selectedItem.imageUrl && (
                  <img
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    className="w-full rounded-2xl border border-gray-200 mb-5 shadow-md"
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
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0b0c0e] text-white hover:bg-black transition-all text-xs sm:text-sm font-semibold shadow-xl"
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
                <div className="font-sans text-sm sm:text-base text-gray-800 leading-relaxed space-y-4 whitespace-pre-line mb-8">
                  {selectedItem.content}
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2 text-[#0a66c2] font-semibold">
                    <FaThumbsUp className="w-4 h-4" />
                    <span>{likesState[selectedItem.id]?.count || selectedItem.likes || 140} Likes</span>
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
