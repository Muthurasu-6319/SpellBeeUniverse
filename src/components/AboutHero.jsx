import React from 'react';
import { Bug, Lightbulb } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="bg-[#fff9df] pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden relative border-b border-amber-200/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 relative z-20">
            <span className="text-[#1a237e] font-bold tracking-wider text-sm mb-4 block">ABOUT US</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a237e] leading-[1.1] mb-6 tracking-tight">
              Inspiring Young Minds,<br/>One Word at a Time.
            </h1>
            <p className="text-[#3949ab] text-lg md:text-xl font-medium leading-relaxed max-w-xl">
              SpellBee Universe creates opportunities for young learners to develop spelling, vocabulary, pronunciation and confidence through an engaging competitive learning experience.
            </p>
          </div>

          {/* Right Image Content */}
          <div className="w-full lg:w-1/2 relative flex justify-center mt-8 lg:mt-0">
            {/* Background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 bg-[#fbc02d] rounded-full blur-3xl opacity-30 z-0"></div>
            
            {/* Main Image */}
            <div className="relative z-10">
              <img 
                src="/images/little-learner.png" 
                alt="Student holding a book" 
                className="w-[280px] md:w-[350px] lg:w-[400px] object-cover relative z-10 rounded-2xl drop-shadow-xl"
              />
              
              {/* Floating Elements */}
              <div className="absolute -left-16 top-10 transform -rotate-12 group hover:rotate-0 transition-transform hidden md:block">
                <div className="w-14 h-14 bg-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg border-4 border-white">
                  A
                </div>
              </div>
              <div className="absolute left-8 -top-8 transform rotate-12 group hover:rotate-0 transition-transform hidden md:block z-20">
                <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg border-4 border-white">
                  B
                </div>
              </div>
              <div className="absolute -right-8 top-16 transform rotate-6 group hover:rotate-0 transition-transform hidden md:block">
                <div className="w-14 h-14 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg border-4 border-white">
                  C
                </div>
              </div>
              <div className="absolute -right-12 bottom-32 transform -rotate-12 hidden md:block">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-amber-200 text-amber-500 animate-pulse">
                  <Lightbulb className="w-6 h-6" />
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
