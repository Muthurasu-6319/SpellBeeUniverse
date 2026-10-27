import React from 'react';
import { Bug, Lightbulb } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="bg-[#fff9df] pt-8 sm:pt-10 md:pt-12 pb-8 sm:pb-10 md:pb-12 overflow-hidden relative border-b border-amber-200/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 relative z-20 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-3">
              <span className="text-amber-800 bg-amber-200/60 border border-amber-300/50 px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase inline-flex items-center gap-1.5 shadow-2xs hover:scale-105 transition-transform cursor-pointer select-none">
                <img src="/logo.png" alt="SpellBee" className="w-4 h-4 object-contain inline-block animate-wiggle" />
                <span>ABOUT US</span>
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a237e] leading-[1.15] mb-3 sm:mb-4 tracking-tight">
              Inspiring Young Minds,<br className="hidden sm:inline" /> One Word at a Time.
            </h1>
            <p 
              className="text-[#3949ab] text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 text-justify paragraph-justify"
              style={{ textAlign: 'justify', textAlignLast: 'left' }}
            >
              SpellBee Universe creates opportunities for young learners to develop spelling, vocabulary, pronunciation and confidence through an engaging competitive learning experience.
            </p>
          </div>

          {/* Right Image Content */}
          <div className="w-full lg:w-1/2 relative flex justify-center mt-4 lg:mt-0">
            {/* Background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-80 md:h-80 bg-[#fbc02d] rounded-full blur-3xl opacity-35 z-0 animate-pulse-soft"></div>
            
            {/* Main Image */}
            <div className="relative z-10 group">
              <img 
                src="/images/about-hero-student.jpg" 
                alt="SpellBee Student speaking with confidence" 
                className="w-[260px] sm:w-[320px] md:w-[360px] max-h-[300px] sm:max-h-[340px] object-cover object-top relative z-10 rounded-2xl shadow-xl border-4 border-white transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl"
              />
              
              {/* Floating Elements */}
              <div className="absolute -left-8 sm:-left-12 top-6 transform -rotate-12 hidden sm:block z-20 animate-float-slow">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-pink-500 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-md border-2 border-white hover:scale-115 hover:rotate-12 transition-all cursor-pointer">
                  A
                </div>
              </div>
              <div className="absolute left-6 -top-6 transform rotate-12 hidden sm:block z-20 animate-float-reverse">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-amber-500 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-md border-2 border-white hover:scale-115 hover:-rotate-12 transition-all cursor-pointer">
                  B
                </div>
              </div>
              <div className="absolute -right-6 sm:-right-8 top-10 transform rotate-6 hidden sm:block z-20 animate-float-slow" style={{ animationDelay: '1s' }}>
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-md border-2 border-white hover:scale-115 hover:rotate-12 transition-all cursor-pointer">
                  C
                </div>
              </div>
              <div className="absolute -right-6 sm:-right-8 bottom-12 transform -rotate-12 hidden sm:block z-20 animate-float-reverse" style={{ animationDelay: '1.5s' }}>
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shadow-md border border-amber-200 text-amber-500 hover:scale-115 transition-transform cursor-pointer">
                  <Lightbulb className="w-5 h-5" />
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
