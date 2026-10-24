import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Trophy, FileText, Sparkles } from 'lucide-react';

const SchoolsHero = () => {
  return (
    <section className="bg-[#fff9e6] pt-5 pb-10 md:pt-6 md:pb-14 overflow-hidden relative">
      {/* Background soft ambient glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-200/60 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-6 right-20 w-80 h-80 bg-amber-200/50 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#3949ab] font-medium mb-5">
          <Link href="/" className="hover:text-yellow-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-500">Schools</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="group/pill inline-flex items-center gap-2.5 mb-3 cursor-pointer">
              <span className="w-5 group-hover/pill:w-8 h-1 bg-yellow-400 rounded-full inline-block transition-all duration-300"></span>
              <span className="text-[#1a237e] font-extrabold tracking-wider text-xs uppercase group-hover/pill:text-yellow-600 transition-colors">
                Schools
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a237e] leading-[1.15] mb-4 tracking-tight">
              Bring SpellBee Universe to Your School
            </h1>
            
            <p className="text-[#3949ab] text-sm sm:text-base lg:text-lg font-medium mb-6 max-w-xl leading-relaxed">
              Give your students an engaging opportunity to strengthen language skills, experience competition and celebrate achievement.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6">
              <a 
                href="#partnership-form"
                className="relative overflow-hidden px-6 py-3 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-gray-900 font-extrabold shadow-md shadow-yellow-400/30 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg active:scale-95 inline-flex items-center justify-center gap-2 group text-sm sm:text-base cursor-pointer w-full sm:w-auto text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Register Your School</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                </span>
                <span className="absolute inset-0 bg-white/30 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
              </a>
              <a
                href="#school-coordinators"
                className="px-6 py-3 rounded-full bg-white hover:bg-amber-50 text-[#1a237e] hover:text-amber-700 border border-slate-300 hover:border-amber-300 font-bold text-sm sm:text-base shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer inline-flex items-center justify-center w-full sm:w-auto text-center"
              >
                Talk to Our School Team
              </a>
            </div>

            {/* Micro stats banner */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600 pt-2 border-t border-amber-200/50">
              <span className="flex items-center gap-1.5 hover:text-amber-700 transition-colors cursor-default">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                100+ Partner Schools
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5 hover:text-amber-700 transition-colors cursor-default">
                <Trophy className="w-3.5 h-3.5 text-amber-500 fill-amber-300" /> CBSE, ICSE & State Boards
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5 hover:text-amber-700 transition-colors cursor-default">
                <FileText className="w-3.5 h-3.5 text-blue-500" /> Free Preparation Kit
              </span>
            </div>
          </div>

          {/* Right Image & School Student Heroes Visual */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center items-center py-4">
            {/* Outer pulsating golden glow ring */}
            <div className="absolute w-[290px] h-[290px] sm:w-[350px] sm:h-[350px] md:w-[380px] md:h-[380px] rounded-full bg-gradient-to-tr from-yellow-400 via-amber-300 to-yellow-100 shadow-2xl opacity-80 z-0 animate-glow-pulse"></div>
            
            {/* Circular Frame Containing The Winner Photo */}
            <div className="group/heroCard relative z-10 w-[270px] h-[270px] sm:w-[330px] sm:h-[330px] md:w-[360px] md:h-[360px] rounded-full p-2 bg-white/95 shadow-2xl backdrop-blur-sm border-4 sm:border-[6px] border-white overflow-hidden flex items-center justify-center hover:scale-[1.03] transition-all duration-500 cursor-pointer">
              <img 
                src="/images/school-hero-winner.jpg" 
                alt="SpellBee Universe School Champion" 
                className="w-full h-full object-cover object-[center_12%] rounded-full group-hover/heroCard:scale-108 transition-transform duration-700 ease-out"
              />
              
              {/* Subtle hover shine sheen on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/heroCard:opacity-100 transition-opacity duration-300 rounded-full pointer-events-none"></div>

              {/* Overlay Badge at Bottom of Circle */}
              <div className="absolute bottom-2.5 sm:bottom-3 inset-x-6 sm:inset-x-10 bg-amber-400/95 backdrop-blur-md rounded-full py-1.5 sm:py-2 px-3 shadow-lg border border-yellow-200 text-center group-hover/heroCard:scale-105 group-hover/heroCard:bg-yellow-400 transition-all duration-300">
                <div className="font-extrabold text-[#1a237e] text-[10px] sm:text-xs tracking-wider uppercase flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-slate-900 fill-slate-900 inline" /> SpellBee UNIVERSE
                </div>
                <div className="text-[9px] sm:text-[10px] text-slate-950 font-bold truncate">
                  School Champions & Grand Finale
                </div>
              </div>
            </div>

            {/* Mascot with Interactive Speech Bubble */}
            <div className="group/mascot absolute -top-1 left-6 sm:left-12 z-20 cursor-pointer">
              <img 
                src="/logo.png" 
                alt="SpellBee Mascot" 
                className="w-10 h-10 object-contain drop-shadow-md animate-bounce-slow transform group-hover/mascot:scale-125 transition-transform duration-300" 
              />
              {/* Interactive Speech Bubble */}
              <div className="absolute -top-7 -left-6 bg-white/95 text-slate-900 border border-yellow-300 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md whitespace-nowrap opacity-0 group-hover/mascot:opacity-100 transition-all duration-200 pointer-events-none transform -translate-y-1 group-hover/mascot:translate-y-0 flex items-center gap-1">
                <span>Buzz! Join us!</span>
                <Sparkles className="w-3 h-3 text-amber-500 fill-amber-300 inline" />
              </div>
            </div>

            {/* Floating Motto Text with Crown */}
            <div className="absolute top-2 right-2 sm:right-6 md:right-10 z-20 text-center select-none transform rotate-6 animate-float-slow hover:rotate-0 hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-default">
              <div className="font-serif italic font-extrabold text-[#1a237e] text-xs sm:text-sm leading-tight drop-shadow-sm bg-white/90 backdrop-blur-xs px-2.5 py-1.5 rounded-xl border border-yellow-200 shadow-xs">
                <span className="text-amber-700">Stronger</span><br/>
                <span className="text-[#1a237e]">Learners</span><br/>
                <span className="text-emerald-700">Brighter</span><br/>
                <span className="text-rose-600">Futures</span>
              </div>
            </div>

            {/* Floating ABC Block Badges with hover pop */}
            <div className="absolute bottom-4 right-4 sm:right-10 md:right-12 z-20 flex flex-col gap-1 transform rotate-6 filter drop-shadow animate-float-reverse">
              <div className="w-7 h-7 bg-emerald-500 hover:bg-emerald-400 rounded-lg flex items-center justify-center text-white font-extrabold text-xs shadow-md hover:scale-125 transition-transform duration-200 cursor-pointer">
                C
              </div>
              <div className="w-7 h-7 bg-pink-500 hover:bg-pink-400 rounded-lg flex items-center justify-center text-white font-extrabold text-xs shadow-md translate-x-1.5 hover:scale-125 transition-transform duration-200 cursor-pointer">
                B
              </div>
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

export default SchoolsHero;
