import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Crown, Sparkles, Trophy } from 'lucide-react';

const CompetitionHero = () => {
  return (
    <section className="bg-[#fff9e6] pt-4 pb-10 sm:pt-6 sm:pb-12 md:pt-6 md:pb-14 overflow-hidden relative">
      {/* Background soft ambient glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-12 left-10 w-72 h-72 bg-yellow-200/60 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-amber-200/50 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#3949ab] font-medium mb-4 sm:mb-5">
          <Link href="/" className="hover:text-yellow-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-500">Competition</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6 xl:col-span-7 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-3 sm:mb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-400 font-extrabold text-[#1a237e] text-xs sm:text-sm tracking-wide shadow-xs hover:scale-105 transition-transform duration-300 cursor-pointer select-none">
                <img src="/logo.png" alt="SpellBee" className="w-4 h-4 object-contain inline-block animate-wiggle" />
                <span>COMPETITION OVERVIEW</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a237e] leading-[1.14] mb-3 sm:mb-4 tracking-tight">
              The Stage Is Set.<br/>
              Are You Ready?
            </h1>
            
            <p className="text-[#3949ab] text-sm sm:text-base lg:text-lg font-medium mb-5 sm:mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Challenge your spelling. Expand your vocabulary. Build your confidence. Take your place on the SpellBee Universe stage.
            </p>
            
            <div className="flex justify-center lg:justify-start">
              <Link 
                href="/register" 
                className="w-full sm:w-auto justify-center px-7 py-3 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-gray-900 font-extrabold shadow-lg shadow-yellow-400/30 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 group text-sm sm:text-base cursor-pointer"
              >
                Register Now 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-200" />
              </Link>
            </div>
          </div>

          {/* Right Image & Creative Stage Visual */}
          <div className="lg:col-span-6 xl:col-span-5 relative flex justify-center items-center py-2 sm:py-4">
            {/* The circular golden background glow */}
            <div className="absolute w-[270px] h-[270px] sm:w-[350px] sm:h-[350px] md:w-[410px] md:h-[410px] rounded-full bg-gradient-to-tr from-yellow-300 via-amber-200 to-yellow-100 shadow-xl opacity-90 z-0 animate-pulse-soft"></div>
            
            {/* Main Stage Champion Image inside Circle */}
            <div className="relative z-10 w-full max-w-[260px] sm:max-w-[340px] md:max-w-[380px] aspect-square rounded-full p-2 sm:p-2.5 bg-white shadow-2xl border-4 border-white overflow-hidden flex items-center justify-center group cursor-pointer">
              <img 
                src="/images/competition-hero-champion.png" 
                alt="SpellBee Universe Competition Champion" 
                className="w-full h-full object-cover object-center rounded-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Floating Motto Text with Crown */}
            <div className="absolute top-2 right-1 sm:top-4 sm:right-2 z-20 text-center select-none transform rotate-6 animate-float-slow hover:scale-110 transition-transform cursor-pointer">
              <Crown className="w-6 h-6 sm:w-7 sm:h-7 text-amber-500 fill-amber-400 mx-auto block animate-bounce-slow drop-shadow-md" />
              <div className="font-serif italic font-extrabold text-[#1a237e] text-xs sm:text-base md:text-xl leading-tight drop-shadow-sm mt-1">
                <span>Learn</span><br/>
                <span>Spell</span><br/>
                <span>Grow</span><br/>
                <span className="text-amber-700">Shine</span>
              </div>
            </div>

            {/* Sparkles Emblem */}
            <div className="absolute top-12 left-4 sm:left-2 z-20 w-10 h-10 rounded-full bg-amber-400/90 text-slate-900 flex items-center justify-center shadow-lg border-2 border-white animate-bounce-slow hover:scale-125 transition-transform cursor-pointer">
              <Sparkles className="w-5 h-5 fill-slate-900" />
            </div>

            {/* Floating 3D ABC Blocks */}
            <div className="absolute bottom-12 left-2 sm:-left-4 z-20 flex flex-col gap-1.5 transform -rotate-6 filter drop-shadow-lg animate-float-reverse hover:scale-110 transition-transform cursor-pointer">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-extrabold text-sm shadow-md border border-white/40 hover:scale-115 transition-transform">
                A
              </div>
              <div className="w-9 h-9 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center text-white font-extrabold text-sm shadow-md border border-white/40 translate-x-3 hover:scale-115 transition-transform">
                B
              </div>
              <div className="w-9 h-9 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center text-white font-extrabold text-sm shadow-md border border-white/40 translate-x-1 hover:scale-115 transition-transform">
                C
              </div>
            </div>

            {/* Floating Golden Trophy badge */}
            <div className="absolute -bottom-2 right-6 z-20 w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-300 p-2.5 shadow-2xl border-2 border-white transform rotate-12 animate-float-slow hover:scale-125 hover:rotate-20 transition-all cursor-pointer flex items-center justify-center">
              <Trophy className="w-8 h-8 text-slate-950 fill-amber-900" />
            </div>
          </div>

        </div>
      </div>
      
      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 transform translate-y-[1px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[26px] md:h-[36px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C76.13,38.16,146.24,53.47,227.13,56.84Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
};

export default CompetitionHero;
