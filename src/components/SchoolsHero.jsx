import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

const SchoolsHero = () => {
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
          <span className="text-gray-500">Schools</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-1 bg-yellow-400 rounded-full inline-block"></span>
              <span className="text-[#1a237e] font-extrabold tracking-wider text-xs sm:text-sm uppercase">
                Schools
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1a237e] leading-[1.12] mb-6 tracking-tight">
              Bring SpellBee Universe to Your School
            </h1>
            
            <p className="text-[#3949ab] text-base sm:text-lg lg:text-xl font-medium mb-8 max-w-xl leading-relaxed">
              Give your students an engaging opportunity to strengthen language skills, experience competition and celebrate achievement.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#partnership-form"
                className="px-7 py-3.5 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-gray-900 font-bold shadow-lg shadow-yellow-400/30 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 group text-sm sm:text-base"
              >
                Register Your School
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#school-coordinators"
                className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#1a237e] border border-slate-300 font-bold text-sm sm:text-base shadow-sm transition-all transform hover:-translate-y-0.5"
              >
                Talk to Our School Team
              </a>
            </div>
          </div>

          {/* Right Image & School Student Heroes Visual */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center items-center">
            {/* The circular golden background glow */}
            <div className="absolute w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] rounded-full bg-gradient-to-tr from-yellow-300 via-amber-200 to-yellow-100 shadow-xl opacity-90 z-0"></div>
            
            {/* Student Heroes with Book */}
            <div className="relative z-10 w-full max-w-[420px] aspect-square rounded-full p-2.5 bg-white/80 shadow-2xl backdrop-blur-sm border-4 border-white overflow-hidden flex items-center justify-center">
              <img 
                src="/images/competition-hero-student.png" 
                alt="SpellBee Universe School Students" 
                className="w-full h-full object-cover rounded-full scale-105"
              />
              
              {/* Overlay Badge holding book */}
              <div className="absolute bottom-4 inset-x-8 bg-amber-400/95 backdrop-blur-md rounded-2xl p-2.5 shadow-lg border border-yellow-200 text-center">
                <div className="font-extrabold text-[#1a237e] text-xs sm:text-sm tracking-wider uppercase">
                  🐝 SpellBee UNIVERSE
                </div>
                <div className="text-[11px] text-slate-900 font-bold">
                  Official School Partner Program
                </div>
              </div>
            </div>

            {/* Flying Cute Bee Mascot */}
            <div className="absolute -top-2 left-6 sm:left-4 z-20 text-3xl sm:text-4xl animate-bounce-slow">
              🐝
            </div>

            {/* Floating Motto Text with Crown */}
            <div className="absolute top-2 right-2 sm:-right-4 z-20 text-center select-none transform rotate-6">
              <div className="font-serif italic font-extrabold text-[#1a237e] text-sm sm:text-base leading-tight drop-shadow-sm bg-white/80 backdrop-blur-xs px-3 py-1.5 rounded-xl border border-yellow-200 shadow-sm">
                <span className="text-amber-700">Stronger</span><br/>
                <span className="text-[#1a237e]">Learners</span><br/>
                <span className="text-emerald-700">Brighter</span><br/>
                <span className="text-rose-600">Futures</span>
              </div>
            </div>

            {/* Floating ABC Block Badges */}
            <div className="absolute bottom-6 right-2 sm:-right-2 z-20 flex flex-col gap-1.5 transform rotate-6 filter drop-shadow">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-extrabold text-xs shadow-md">
                C
              </div>
              <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center text-white font-extrabold text-xs shadow-md translate-x-2">
                B
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

export default SchoolsHero;
