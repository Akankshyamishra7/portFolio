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
      if (headerRef.current?.children) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 95%',
              once: true,
            },
          }
        );
      }

      // 2. Divider line expansion
      if (dividerRef.current) {
        gsap.fromTo(
          dividerRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: 'left center',
            duration: 1,
            ease: 'power3.inOut',
            clearProps: 'transform',
            scrollTrigger: {
              trigger: dividerRef.current,
              start: 'top 95%',
              once: true,
            },
          }
        );
      }

      // 3. Staggered Feed Cards Entrance
      if (gridRef.current?.children) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 40, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.12,
            duration: 0.8,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 95%',
              once: true,
            },
          }
        );
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
    <section ref={sectionRef} id="feed" className="py-20 sm:py-28 bg-[#0E0E0D] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-[#8A8985] tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4F3EF]"></span>
              <span>(05 / Journal & Certifications)</span>
            </div>
            <h2 className="font-serif font-light text-3xl sm:text-5xl lg:text-6xl text-[#F4F3EF] tracking-tight leading-none">
              Certifications & <span className="font-serif italic font-normal text-white/70">Insights</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#8A8985] font-mono max-w-md">
            Verified credentials, hackathon takeaways, and engineering reflections across the modern web ecosystem.
          </p>
        </div>

        {/* Full-width Divider Line */}
        <div ref={dividerRef} className="w-full h-px bg-white/10 mb-12 sm:mb-16"></div>

        {/* Feed Cards Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
          {feed.map((item) => {
            const itemLike = likesState[item.id] || { count: item.likes || 128, liked: false };

            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="bg-[#141413] text-[#F4F3EF] rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-300 border border-white/10 hover:border-white/25 cursor-pointer hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                {item.type === 'certificate' ? (
                  /* Certificate Card Layout */
                  <div>
                    {item.imageUrl && (
                      <div className="w-full h-52 sm:h-60 bg-[#1C1B1A] rounded-2xl overflow-hidden mb-6 border border-white/10 relative group/img">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-90 group-hover/img:opacity-100"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="bg-[#F4F3EF] text-black px-4 py-2 rounded-full text-xs font-semibold shadow-lg flex items-center gap-2 transform translate-y-2 group-hover/img:translate-y-0 transition-transform">
                            View Certificate <HiExternalLink className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400">
                        Certification
                      </span>
                      <span className="text-xs text-[#8A8985] font-mono">{item.timeAgo}</span>
                    </div>
                    <h3 className="font-serif font-normal text-[#F4F3EF] text-lg sm:text-xl leading-snug mb-3 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-xs text-[#8A8985] font-mono flex items-center justify-between pt-4 border-t border-white/10">
                      <span className="font-medium text-[#C4C3BE]">{item.badge || 'coursera.org'}</span>
                      <span className="text-[11px] group-hover:underline flex items-center gap-1">Details →</span>
                    </div>
                  </div>
                ) : (
                  /* LinkedIn Post Card Layout */
                  <div>
                    {/* LinkedIn Header */}
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-[#1C1B1A] border border-white/15 text-[#F4F3EF] flex items-center justify-center font-serif font-bold text-sm overflow-hidden flex-shrink-0">
                          <span>{item.author.name.charAt(0)}</span>
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="font-sans font-semibold text-[#F4F3EF] text-sm">
                              {item.author.name}
                            </span>
                            {item.author.connection && (
                              <span className="text-[#8A8985] text-xs font-normal">
                                · {item.author.connection}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[#8A8985] truncate max-w-[200px] sm:max-w-xs font-sans">
                            {item.author.headline}
                          </p>
                          <span className="text-[10px] text-[#8A8985] block font-mono">
                            {item.timeAgo}
                          </span>
                        </div>
                      </div>

                      {/* Official LinkedIn Logo */}
                      <div className="flex-shrink-0">
                        <div className="flex items-center gap-1.5 text-[#0a66c2] text-sm font-semibold">
                          <FaLinkedin className="w-5 h-5" />
                          <span className="font-mono text-xs hidden sm:inline">Post</span>
                        </div>
                      </div>
                    </div>

                    {/* LinkedIn Post Content */}
                    <div className="font-sans text-xs sm:text-sm text-[#C4C3BE] leading-relaxed space-y-2 whitespace-pre-line line-clamp-5 mb-5">
                      {item.content}
                    </div>

                    {/* LinkedIn Engagement Footer */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[#8A8985] text-xs">
                      <button
                        onClick={(e) => handleLikeClick(e, item.id)}
                        className={`flex items-center gap-1.5 font-medium transition-colors cursor-pointer px-3 py-1.5 rounded-full border ${
                          itemLike.liked
                            ? 'text-white bg-white/10 border-white/30'
                            : 'text-[#8A8985] border-white/10 hover:border-white/20 hover:text-white'
                        }`}
                        aria-label="Like Post"
                      >
                        <FaThumbsUp className={`w-3 h-3 ${itemLike.liked ? 'text-white' : ''}`} />
                        <span>{itemLike.count}</span>
                      </button>
                      <div className="flex items-center gap-4 text-[#8A8985] text-[11px] font-mono">
                        <span>{item.comments || 16} réponses</span>
                        <span className="hover:text-white">Partager</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Detail Modal - studiors dark luxury */}
      {selectedItem && (
        <div
          ref={modalBackdropRef}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={closeModal}
        >
          <div
            ref={modalBoxRef}
            className="bg-[#141413] text-[#F4F3EF] border border-white/15 rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <HiX className="w-5 h-5" />
            </button>

            {selectedItem.type === 'certificate' ? (
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full font-medium">
                  Official Credential
                </span>
                <h3 className="font-serif font-light text-2xl sm:text-3xl text-[#F4F3EF] mt-4 mb-4">
                  {selectedItem.title}
                </h3>
                {selectedItem.imageUrl && (
                  <img
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    className="w-full rounded-2xl border border-white/10 mb-6 shadow-md"
                  />
                )}
                <p className="text-sm text-[#C4C3BE] leading-relaxed mb-6 font-sans">
                  {selectedItem.content}
                </p>
                {selectedItem.sourceUrl && (
                  <a
                    href={selectedItem.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F4F3EF] text-black hover:bg-white transition-all text-xs sm:text-sm font-semibold shadow-xl"
                  >
                    Verify on {selectedItem.badge} <HiExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="w-12 h-12 rounded-full bg-[#1C1B1A] border border-white/15 text-[#F4F3EF] flex items-center justify-center font-serif font-bold text-base">
                    <span>{selectedItem.author.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-[#F4F3EF]">
                      {selectedItem.author.name}
                    </h4>
                    <p className="text-xs text-[#8A8985]">
                      {selectedItem.author.headline}
                    </p>
                    <span className="text-[10px] text-[#8A8985] font-mono">
                      {selectedItem.timeAgo}
                    </span>
                  </div>
                </div>
                <div className="font-sans text-sm sm:text-base text-[#C4C3BE] leading-relaxed space-y-4 whitespace-pre-line mb-8">
                  {selectedItem.content}
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#8A8985] font-mono">
                  <div className="flex items-center gap-2 text-[#0a66c2] font-semibold">
                    <FaThumbsUp className="w-3.5 h-3.5" />
                    <span>{likesState[selectedItem.id]?.count || selectedItem.likes || 140} likes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaComment className="w-3.5 h-3.5" />
                    <span>{selectedItem.comments || 24} comments</span>
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
