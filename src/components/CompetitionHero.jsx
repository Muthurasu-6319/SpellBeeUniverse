import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

const CompetitionHero = () => {
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
          <span className="text-gray-500">Competition</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-yellow-400 font-bold text-[#1a237e] text-xs sm:text-sm tracking-wide mb-6 shadow-sm">
              COMPETITION OVERVIEW
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1a237e] leading-[1.12] mb-6 tracking-tight">
              The Stage Is Set.<br/>
              Are You Ready?
            </h1>
            
            <p className="text-[#3949ab] text-base sm:text-lg lg:text-xl font-medium mb-8 max-w-xl leading-relaxed">
              Challenge your spelling. Expand your vocabulary. Build your confidence. Take your place on the SpellBee Universe stage.
            </p>
            
            <button className="px-8 py-3.5 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-gray-900 font-bold shadow-lg shadow-yellow-400/30 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 group text-base">
              Register Now 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Image & Creative Stage Visual */}
          <div className="lg:col-span-6 xl:col-span-5 relative flex justify-center items-center">
            {/* The circular golden background glow */}
            <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-tr from-yellow-300 via-amber-200 to-yellow-100 shadow-xl opacity-90 z-0"></div>
            
            {/* Main Student Image */}
            <div className="relative z-10 w-full max-w-[360px] sm:max-w-[420px] aspect-square rounded-full p-2.5 bg-white/80 shadow-2xl backdrop-blur-sm border-4 border-white overflow-hidden flex items-center justify-center">
              <img 
                src="/images/competition-hero-student.png" 
                alt="SpellBee Universe Student Competitor" 
                className="w-full h-full object-cover rounded-full scale-105"
              />
            </div>

            {/* Floating Motto Text with Crown */}
            <div className="absolute top-4 right-0 sm:right-2 z-20 text-center select-none transform rotate-6">
              <span className="text-3xl block animate-bounce-slow">👑</span>
              <div className="font-serif italic font-extrabold text-[#1a237e] text-lg sm:text-xl leading-tight drop-shadow-sm">
                <span>Learn</span><br/>
                <span>Spell</span><br/>
                <span>Grow</span><br/>
                <span className="text-amber-700">Shine</span>
              </div>
            </div>

            {/* Cute Flying Bee */}
            <div className="absolute top-12 left-4 sm:left-2 z-20 animate-pulse text-3xl sm:text-4xl filter drop-shadow">
              🐝
            </div>

            {/* Floating 3D ABC Blocks */}
            <div className="absolute bottom-12 left-2 sm:-left-4 z-20 flex flex-col gap-1.5 transform -rotate-6 filter drop-shadow-lg">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-extrabold text-sm shadow-md border border-white/40">
                A
              </div>
              <div className="w-9 h-9 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center text-white font-extrabold text-sm shadow-md border border-white/40 translate-x-3">
                B
              </div>
              <div className="w-9 h-9 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center text-white font-extrabold text-sm shadow-md border border-white/40 translate-x-1">
                C
              </div>
            </div>

            {/* Floating Golden Trophy badge */}
            <div className="absolute -bottom-2 right-6 z-20 text-5xl sm:text-6xl drop-shadow-2xl transform rotate-12">
              🏆
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

export default CompetitionHero;
