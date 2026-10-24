import React from 'react';
import Link from 'next/link';
import { ArrowRight, Trophy, Bug, BookOpen, Sparkles } from 'lucide-react';

const HowItWorksHero = () => {
  return (
    <section className="bg-[#fff9df] pt-10 pb-8 sm:pt-14 sm:pb-10 md:pt-16 md:pb-12 overflow-hidden relative border-b border-amber-200/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 relative z-20 text-center lg:text-left">
            <span className="text-[#1a237e] font-extrabold tracking-wider text-xs mb-2 sm:mb-3 inline-block uppercase bg-amber-200/60 px-3 py-1 rounded-full border border-amber-300/60 shadow-xs">
              HOW IT WORKS
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#1a237e] leading-[1.12] mb-3 sm:mb-4 tracking-tight">
              From Registration to<br/><span className="text-amber-500">Spell Master</span>
            </h1>
            <p className="text-[#3949ab] text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-xl mb-6 mx-auto lg:mx-0">
              A simple journey. Three exciting stages.<br className="hidden sm:inline" /> One unforgettable learning experience.
            </p>
            <Link 
              href="/register" 
              className="px-7 py-3 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-gray-900 font-black text-sm sm:text-base shadow-lg shadow-yellow-400/25 transition-all transform hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2 group cursor-pointer w-full sm:w-auto text-center"
            >
              <span>Register Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
            </Link>
          </div>

          {/* Right Image Content */}
          <div className="w-full lg:w-1/2 relative flex justify-center mt-4 lg:mt-0">
            {/* Background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-80 md:h-80 bg-[#fbc02d] rounded-full blur-3xl opacity-25 z-0 animate-pulse-soft"></div>
            
            {/* Main Image Container */}
            <div className="relative z-10 max-w-sm lg:max-w-md w-full group">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white transition-transform duration-500 group-hover:scale-[1.02]">
                <img 
                  src="/images/how-it-works-student.jpg" 
                  alt="Young student prepared and enthusiastic for the SpellBee competition journey" 
                  className="w-full h-auto object-cover block transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Floating Elements with Micro-Animations */}
              <div className="absolute -left-3 sm:-left-5 top-6 transform -rotate-12 hidden sm:block z-20 animate-float-slow">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-red-500 rounded-xl flex items-center justify-center text-white font-extrabold text-lg sm:text-xl shadow-lg border-2 border-white hover:scale-115 hover:rotate-12 transition-all cursor-pointer">
                  A
                </div>
              </div>
              <div className="absolute right-2 -top-4 transform rotate-12 hidden sm:block z-20 animate-float-reverse">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-yellow-400 rounded-xl flex items-center justify-center text-white font-extrabold text-lg sm:text-xl shadow-lg border-2 border-white hover:scale-115 hover:-rotate-12 transition-all cursor-pointer">
                  B
                </div>
              </div>
              <div className="absolute -right-3 sm:-right-5 top-16 transform -rotate-6 hidden sm:block z-20 animate-float-slow" style={{ animationDelay: '1s' }}>
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white font-extrabold text-lg sm:text-xl shadow-lg border-2 border-white hover:scale-115 hover:rotate-12 transition-all cursor-pointer">
                  C
                </div>
              </div>
              <div className="absolute -left-4 sm:-left-6 -bottom-3 transform rotate-6 hidden sm:block z-20 animate-float-reverse" style={{ animationDelay: '1.5s' }}>
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-lg border-3 border-amber-300 text-yellow-500 hover:scale-115 hover:rotate-12 transition-all cursor-pointer">
                  <Trophy className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
              </div>
            </div>


            {/* Bee */}
            <div className="absolute -left-2 top-0 hidden lg:block z-20 pointer-events-none animate-bounce-slow">
               <Bug className="w-9 h-9 text-slate-900 rotate-45 hover:rotate-90 transition-transform" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksHero;
