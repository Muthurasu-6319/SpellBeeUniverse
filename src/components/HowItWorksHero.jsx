import React from 'react';
import { ArrowRight, Trophy, BookOpen, Bug } from 'lucide-react';
import Image from 'next/image';

const HowItWorksHero = () => {
  return (
    <section className="bg-[#fff9df] pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden relative border-b border-amber-200/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 relative z-20">
            <span className="text-[#1a237e] font-bold tracking-wider text-sm mb-4 block uppercase">HOW IT WORKS</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a237e] leading-[1.1] mb-6 tracking-tight">
              From Registration to<br/>Spell Master
            </h1>
            <p className="text-[#3949ab] text-lg md:text-xl font-medium leading-relaxed max-w-xl mb-8">
              A simple journey. Three exciting stages.<br/>One unforgettable learning experience.
            </p>
            <button className="px-8 py-4 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-gray-900 font-bold text-lg shadow-xl shadow-yellow-400/30 transition-all transform hover:scale-105 flex items-center gap-2">
              Register Now <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Image Content */}
          <div className="w-full lg:w-1/2 relative flex justify-center mt-8 lg:mt-0">
            {/* Background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 bg-[#fbc02d] rounded-full blur-3xl opacity-30 z-0"></div>
            
            {/* Main Image */}
            <div className="relative z-10">
              <Image 
                src="/images/little-learner.png" 
                alt="Student smiling holding a book" 
                width={400}
                height={500}
                className="w-[280px] md:w-[350px] lg:w-[400px] object-cover relative z-10"
              />
              
              {/* Floating Elements */}
              <div className="absolute -left-8 top-12 transform -rotate-12 hidden md:block z-20">
                <div className="w-14 h-14 bg-red-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg border-4 border-white">
                  A
                </div>
              </div>
              <div className="absolute right-0 top-0 transform rotate-12 hidden md:block z-20">
                <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg border-4 border-white">
                  B
                </div>
              </div>
              <div className="absolute -right-8 top-24 transform -rotate-6 hidden md:block z-20">
                <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg border-4 border-white">
                  C
                </div>
              </div>
              <div className="absolute -left-12 bottom-32 transform -rotate-12 hidden md:block z-20">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white text-yellow-500">
                  <Trophy className="w-8 h-8" />
                </div>
              </div>
            </div>

            {/* Doodle Text */}
            <div className="absolute right-0 lg:-right-12 top-10 hidden lg:block z-20">
              <div className="text-[#1a237e] text-2xl font-bold -rotate-12 leading-tight tracking-tight" style={{fontFamily: "'Comic Sans MS', cursive, sans-serif"}}>
                Learn<br/>Prepare<br/>Compete<br/>Shine
              </div>
            </div>

            {/* Bee */}
            <div className="absolute -left-4 top-0 hidden lg:block z-20">
               <Bug className="w-12 h-12 text-black rotate-45 animate-bounce" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksHero;
