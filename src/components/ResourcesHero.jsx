"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronRight, BookOpen, Sparkles } from 'lucide-react';

const ResourcesHero = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <section className="bg-[#fff9e6] pt-4 pb-10 md:pt-6 md:pb-14 overflow-hidden relative">
      {/* Background soft ambient glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-8 left-10 w-64 h-64 bg-yellow-200/60 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-6 right-16 w-80 h-80 bg-amber-200/50 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-700 font-medium mb-4 sm:mb-6">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Resources</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="group/pill inline-flex items-center gap-2 mb-2 cursor-pointer">
              <span className="w-5 group-hover/pill:w-8 h-1 bg-yellow-400 rounded-full inline-block transition-all duration-300"></span>
              <span className="text-slate-950 font-black tracking-wider text-xs sm:text-sm uppercase group-hover/pill:text-yellow-600 transition-colors">
                Resources & Study Hub
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 leading-[1.15] mb-3.5 tracking-tight">
              Learn. Practise. Improve.
            </h1>
            
            <p className="text-slate-700 text-sm sm:text-base lg:text-lg font-medium mb-6 max-w-xl leading-relaxed">
              Everything students, parents and teachers need to prepare for their SpellBee journey with confidence.
            </p>
            
            {/* Search Input Bar */}
            <div className="relative max-w-lg">
              <div className="flex items-center bg-white rounded-full p-1.5 sm:p-2 border-2 border-amber-300 shadow-md focus-within:ring-2 focus-within:ring-yellow-400 focus-within:border-amber-400 transition-all hover:border-amber-400">
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 ml-3 shrink-0" />
                <input 
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search word lists, practice tests, guides..."
                  className="w-full px-3 py-1.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none font-medium"
                />
                <button 
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-gray-900 flex items-center justify-center shrink-0 shadow-sm transition-transform active:scale-95 cursor-pointer hover:scale-105"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Image & Creative Visual */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center items-center py-2 sm:py-4">
            {/* The circular golden background glow */}
            <div className="absolute w-[280px] h-[280px] sm:w-[330px] sm:h-[330px] md:w-[360px] md:h-[360px] rounded-full bg-gradient-to-tr from-yellow-400 via-amber-300 to-yellow-100 shadow-2xl opacity-80 z-0 animate-glow-pulse"></div>
            
            {/* Wrapper for circular photo and floating badge */}
            <div className="group/heroCard relative z-10 flex flex-col items-center">
              {/* Circular Frame Containing The Two Students Reading Photo */}
              <div className="w-[260px] h-[260px] sm:w-[310px] sm:h-[310px] md:w-[340px] md:h-[340px] rounded-full p-2 bg-white/95 shadow-2xl backdrop-blur-sm border-4 sm:border-[6px] border-white overflow-hidden flex items-center justify-center hover:scale-[1.03] transition-all duration-500 cursor-pointer">
                <img 
                  src="/images/resources-hero-reading.jpg" 
                  alt="Students studying with SpellBee Universe learning resources" 
                  className="w-full h-full object-cover object-[center_35%] rounded-full group-hover/heroCard:scale-108 transition-transform duration-700 ease-out"
                />
                
                {/* Subtle hover shine sheen on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/heroCard:opacity-100 transition-opacity duration-300 rounded-full pointer-events-none"></div>
              </div>

              {/* Floating pill badge at bottom - OUTSIDE the overflow-hidden circular frame so letters are NEVER cut */}
              <div className="absolute -bottom-2 sm:-bottom-3 z-20 bg-white/98 backdrop-blur-md rounded-full py-2 px-4 sm:px-6 shadow-xl border-2 border-amber-300 flex items-center justify-center gap-2 text-center group-hover/heroCard:scale-105 group-hover/heroCard:border-amber-400 transition-all select-none">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 animate-pulse"></span>
                <span className="text-[11px] sm:text-xs font-black text-slate-950 uppercase tracking-wider whitespace-nowrap">
                  Spelling • Vocabulary • Grammar
                </span>
              </div>
            </div>

            {/* Flying Cute Mascot Bee Badge */}
            <div className="group/mascot absolute -top-1 left-6 sm:left-10 z-20 cursor-pointer animate-bounce-slow">
              <div className="w-9 h-9 rounded-full bg-amber-400 border border-yellow-200 text-slate-900 flex items-center justify-center font-black shadow-md hover:scale-125 transition-transform">
                <Sparkles className="w-4 h-4 text-slate-950" />
              </div>
            </div>

            {/* Floating Motto Text */}
            <div className="absolute top-2 right-2 sm:right-6 md:right-8 z-20 text-center select-none transform rotate-6 animate-float-slow hover:rotate-0 hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-default">
              <div className="font-serif italic font-extrabold text-slate-950 text-xs sm:text-sm leading-tight drop-shadow-sm bg-white/90 backdrop-blur-xs px-3 py-2 rounded-xl border border-yellow-200 shadow-xs">
                <span className="text-amber-700">Better</span><br/>
                <span className="text-slate-950">Words</span><br/>
                <span className="text-emerald-700">Brighter</span><br/>
                <span className="text-rose-600">Futures</span>
              </div>
            </div>

            {/* Floating ABC Block Badges */}
            <div className="absolute bottom-4 left-4 sm:left-8 z-20 flex flex-col gap-1 transform -rotate-6 filter drop-shadow animate-float-reverse">
              <div className="w-7 h-7 bg-rose-500 hover:bg-rose-400 rounded-lg flex items-center justify-center text-white font-extrabold text-xs shadow-md hover:scale-125 transition-transform duration-200 cursor-pointer">
                A
              </div>
              <div className="w-7 h-7 bg-purple-500 hover:bg-purple-400 rounded-lg flex items-center justify-center text-white font-extrabold text-xs shadow-md translate-x-1.5 hover:scale-125 transition-transform duration-200 cursor-pointer">
                C
              </div>
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

export default ResourcesHero;
