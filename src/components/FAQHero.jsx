"use client";
import React from 'react';
import Link from 'next/link';
import { Search, ChevronRight, Sparkles, MessageCircle, X } from 'lucide-react';

const FAQHero = ({ searchQuery = '', onSearch, onSelectCategory }) => {
  const popularKeywords = [
    { label: "Registration Fee", query: "registration fee" },
    { label: "Competition Rounds", query: "rounds" },
    { label: "Download App", query: "download app" },
    { label: "How to Prepare", query: "prepare" },
    { label: "Grand Finale", query: "finale" }
  ];

  const handleClear = () => {
    if (onSearch) onSearch('');
  };

  return (
    <section className="bg-[#fff9e6] pt-3 pb-5 md:pt-4 md:pb-7 overflow-hidden relative">
      {/* Background soft ambient glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-6 left-10 w-52 h-52 bg-yellow-200/50 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-4 right-16 w-64 h-64 bg-amber-200/40 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#3949ab] font-medium mb-3">
          <Link href="/" className="hover:text-yellow-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-500">FAQs</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 xl:col-span-7 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-2">
              <span className="w-5 h-1 bg-yellow-400 rounded-full inline-block"></span>
              <span className="text-[#1a237e] font-extrabold tracking-wider text-[11px] sm:text-xs uppercase">
                Frequently Asked Questions
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1a237e] leading-tight mb-2 tracking-tight">
              Questions? We&apos;ve Got Answers.
            </h1>
            
            <p className="text-[#3949ab] text-xs sm:text-sm md:text-base font-medium mb-3 sm:mb-4 max-w-xl leading-relaxed mx-auto lg:mx-0">
              Find instant answers about rounds, eligibility, registration, preparation, and awards.
            </p>
            
            {/* Search Input Bar */}
            <div className="relative max-w-lg mx-auto lg:mx-0 mb-3">
              <div className="flex items-center bg-white rounded-full p-1.5 sm:p-2 border-2 border-amber-300 shadow-sm focus-within:ring-2 focus-within:ring-yellow-400 focus-within:border-amber-400 transition-all">
                <Search className="w-4 h-4 text-slate-400 ml-2.5 shrink-0" />
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearch && onSearch(e.target.value)}
                  placeholder="Search your question (e.g. fees, app, dates)..."
                  className="w-full px-2.5 py-1 text-xs sm:text-sm text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none font-medium"
                />
                {searchQuery && (
                  <button 
                    onClick={handleClear}
                    className="p-1 mr-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
                <button 
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-gray-900 flex items-center justify-center shrink-0 shadow-xs transition-transform active:scale-95 cursor-pointer"
                  aria-label="Search FAQs"
                >
                  <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>

            {/* Quick Keyword Pills for Instant Micro-interaction */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 text-[11px] sm:text-xs">
              <span className="text-slate-500 font-semibold mr-1">Popular:</span>
              {popularKeywords.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => onSearch && onSearch(chip.query)}
                  className="px-2.5 py-0.5 rounded-full bg-white/80 hover:bg-amber-100 text-slate-700 hover:text-[#1a237e] border border-amber-200/90 font-medium transition-all duration-200 hover:scale-105 active:scale-95 shadow-2xs cursor-pointer"
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Image & Creative Visual - Compact Size */}
          <div className="lg:col-span-5 xl:col-span-5 relative flex justify-center items-center py-1 sm:py-2">
            {/* The circular golden background glow */}
            <div className="absolute w-[200px] h-[200px] sm:w-[230px] sm:h-[230px] md:w-[260px] md:h-[260px] rounded-full bg-gradient-to-tr from-yellow-300 via-amber-200 to-yellow-100 shadow-md opacity-90 z-0 animate-pulse-soft"></div>
            
            {/* Wrapper for circular photo and bottom badge */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Student visual in circle */}
              <div className="w-[190px] h-[190px] sm:w-[220px] sm:h-[220px] md:w-[250px] md:h-[250px] rounded-full p-2 bg-white/90 shadow-xl backdrop-blur-xs border-4 border-white overflow-hidden flex items-center justify-center">
                <img 
                  src="/images/faq-hero-student.png" 
                  alt="SpellBee Student Champion asking and answering questions" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Compact bottom live support badge - OUTSIDE overflow-hidden to prevent letter cutting */}
              <div className="absolute -bottom-2 sm:-bottom-3 z-20 bg-white/98 backdrop-blur-md rounded-full py-1.5 px-3.5 sm:px-4 shadow-lg border border-yellow-300 flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] font-black text-slate-950 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Instant Answers & Support</span>
              </div>
            </div>

            {/* Mascot Sparkle Badge */}
            <div className="absolute -top-1 left-4 sm:left-8 z-20">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center shadow-md border-2 border-white animate-bounce-slow">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-slate-900" />
              </div>
            </div>

            {/* Floating Speech Bubble: "Ask" */}
            <div className="absolute top-3 right-3 sm:right-6 z-20 select-none animate-float-slow">
              <div className="px-3 py-1 rounded-full bg-[#0d1e4c] text-white font-extrabold text-xs shadow-md border border-blue-400/30 flex items-center gap-1 hover:scale-105 transition-transform cursor-default">
                <span>Ask</span> <MessageCircle className="w-3.5 h-3.5 text-amber-400" />
              </div>
            </div>

            {/* Floating question mark doodles */}
            <div className="absolute -top-2 right-1/3 z-20 text-lg font-black text-amber-500 drop-shadow transform -rotate-12 animate-pulse">
              ?
            </div>
            <div className="absolute top-2 right-1/4 z-20 text-base font-black text-orange-400 drop-shadow transform rotate-12">
              ?
            </div>
          </div>

        </div>
      </div>
      
      {/* Curved bottom edge - reduced height */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 transform translate-y-[1px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[20px] md:h-[26px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C76.13,38.16,146.24,53.47,227.13,56.84Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
};

export default FAQHero;
