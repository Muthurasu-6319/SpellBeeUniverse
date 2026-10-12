"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronRight, MessageCircleQuestion } from 'lucide-react';

const FAQHero = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <section className="bg-[#fff9e6] pt-6 pb-16 md:pt-8 md:pb-24 overflow-hidden relative">
      {/* Background soft ambient glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-12 left-10 w-72 h-72 bg-yellow-200/60 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-amber-200/50 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#3949ab] font-medium mb-8">
          <Link href="/" className="hover:text-yellow-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-500">FAQs</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-1 bg-yellow-400 rounded-full inline-block"></span>
              <span className="text-[#1a237e] font-extrabold tracking-wider text-xs sm:text-sm uppercase">
                FAQ
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1a237e] leading-[1.12] mb-6 tracking-tight">
              Questions?<br />We've Got Answers.
            </h1>
            
            <p className="text-[#3949ab] text-base sm:text-lg lg:text-xl font-medium mb-8 max-w-xl leading-relaxed">
              Find everything you need to know about SpellBee Universe.
            </p>
            
            {/* Search Input Bar */}
            <div className="relative max-w-lg">
              <div className="flex items-center bg-white rounded-full p-2 border-2 border-amber-300 shadow-md focus-within:ring-2 focus-within:ring-yellow-400 focus-within:border-amber-400 transition-all">
                <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
                <input 
                  type="text"
                  value={query}
                  onChange={handleInputChange}
                  placeholder="Search your question..."
                  className="w-full px-3 py-2 text-sm text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none font-medium"
                />
                <button 
                  className="w-10 h-10 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-gray-900 flex items-center justify-center shrink-0 shadow-sm transition-transform active:scale-95"
                  aria-label="Search FAQs"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Image & Creative Visual */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center items-center">
            {/* The circular golden background glow */}
            <div className="absolute w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] rounded-full bg-gradient-to-tr from-yellow-300 via-amber-200 to-yellow-100 shadow-xl opacity-90 z-0"></div>
            
            {/* Student Thinking & Asking visual */}
            <div className="relative z-10 w-full max-w-[420px] aspect-square rounded-full p-2.5 bg-white/80 shadow-2xl backdrop-blur-sm border-4 border-white overflow-hidden flex items-center justify-center">
              <img 
                src="/images/competition-hero-student.png" 
                alt="Student asking questions about SpellBee Universe" 
                className="w-full h-full object-cover rounded-full scale-105"
              />
              
              {/* Stacked books pile badge at bottom */}
              <div className="absolute bottom-3 inset-x-12 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-lg border border-yellow-200 flex flex-col gap-1 items-center">
                <div className="w-full flex justify-between gap-1 text-[10px] font-extrabold uppercase">
                  <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800">Learn</span>
                  <span className="px-2.5 py-0.5 rounded bg-pink-100 text-pink-800">Practice</span>
                  <span className="px-2.5 py-0.5 rounded bg-blue-100 text-blue-800">Improve</span>
                </div>
              </div>
            </div>

            {/* Flying Cute Mascot Bee */}
            <div className="absolute -top-2 left-6 sm:left-4 z-20 text-3xl sm:text-4xl animate-bounce-slow">
              🐝
            </div>

            {/* Floating Speech Bubble: "Ask" */}
            <div className="absolute top-8 right-2 sm:right-6 z-20 select-none animate-pulse">
              <div className="px-4 py-2 rounded-2xl bg-[#0d1e4c] text-white font-extrabold text-sm sm:text-base shadow-lg border border-blue-400/30 flex items-center gap-1.5">
                <span>Ask</span> 💬
              </div>
            </div>

            {/* Floating question mark doodles */}
            <div className="absolute -top-4 right-1/3 z-20 text-2xl font-black text-amber-500 drop-shadow transform -rotate-12">
              ?
            </div>
            <div className="absolute top-2 right-1/4 z-20 text-xl font-black text-orange-400 drop-shadow transform rotate-12">
              ?
            </div>
          </div>

        </div>
      </div>
      
      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 transform translate-y-[1px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[36px] md:h-[54px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C76.13,38.16,146.24,53.47,227.13,56.84Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
};

export default FAQHero;
