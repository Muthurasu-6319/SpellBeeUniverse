import React from 'react';
import { UserCheck, BookOpen, Trophy, ArrowRight, Bug } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-[#fffff8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-10 lg:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">How It Works</h2>
          <p className="text-slate-600 font-medium text-lg">A simple 3-step journey to success.</p>
        </div>

        <div className="bg-[#fffbeb] rounded-[32px] p-8 md:p-12 lg:p-16 relative border border-amber-100/50">
          
          {/* Decorative element */}
          <div className="absolute right-8 top-12 md:right-16 md:top-16 transform rotate-12 hidden md:block select-none pointer-events-none z-0">
            <div className="relative group">
              <span className="text-blue-900 text-xl md:text-2xl font-bold -rotate-6 block tracking-tight" style={{fontFamily: "'Comic Sans MS', cursive, sans-serif"}}>Small Steps...</span>
              <span className="text-blue-900 text-xl md:text-2xl font-bold -rotate-6 block ml-6 tracking-tight" style={{fontFamily: "'Comic Sans MS', cursive, sans-serif"}}>Big Achievements!</span>
              
              <div className="absolute -right-10 -bottom-8 animate-bounce transition-transform duration-1000">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center relative z-10 border-2 border-slate-900">
                    <div className="absolute -left-1 top-1 w-2 h-3 bg-slate-900 rounded-full rotate-45"></div>
                    <div className="absolute -right-1 top-1 w-2 h-3 bg-slate-900 rounded-full -rotate-45"></div>
                  </div>
                  {/* dashed line path */}
                  <svg className="absolute -left-28 top-4 w-32 h-16 -z-10" viewBox="0 0 100 50">
                    <path d="M0,50 Q40,-20 100,0" fill="none" stroke="#d97706" strokeWidth="2" strokeDasharray="6 6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start justify-between relative z-10 gap-12 lg:gap-6 max-w-5xl xl:max-w-6xl">
            
            {/* Step 1 */}
            <div className="flex flex-col gap-6 w-full lg:w-1/3 relative group">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-400/40 border-4 border-white z-10 group-hover:scale-110 transition-transform duration-300">
                  <UserCheck className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div className="hidden lg:block w-full h-[2px] bg-amber-200/60 relative -ml-4 z-0">
                  <ArrowRight className="absolute -right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-300" />
                </div>
              </div>
              <div className="pr-4 lg:pr-8">
                <span className="text-sm font-bold text-slate-400 tracking-wider mb-2 block">01</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Register</h3>
                <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">Choose your category and complete registration.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col gap-6 w-full lg:w-1/3 relative group">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-pink-500/40 border-4 border-white z-10 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div className="hidden lg:block w-full h-[2px] bg-amber-200/60 relative -ml-4 z-0">
                  <ArrowRight className="absolute -right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-300" />
                </div>
              </div>
              <div className="pr-4 lg:pr-8">
                <span className="text-sm font-bold text-slate-400 tracking-wider mb-2 block">02</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Learn & Prepare</h3>
                <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">Practice spelling, vocabulary, pronunciation and word usage.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col gap-6 w-full lg:w-1/3 relative group">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/40 border-4 border-white z-10 group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
              </div>
              <div className="pr-4 lg:pr-8">
                <span className="text-sm font-bold text-slate-400 tracking-wider mb-2 block">03</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Compete & Shine</h3>
                <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">Take part in the competition and progress through the qualifying rounds.</p>
              </div>
            </div>

          </div>

          <div className="mt-14 relative z-10">
            <button className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-3.5 px-7 rounded-full flex items-center gap-2 transition-all hover:gap-3 hover:shadow-lg shadow-amber-400/20 active:scale-95">
              See How It Works <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
