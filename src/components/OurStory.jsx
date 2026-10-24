import React from 'react';
import { Target, Eye, Bug } from 'lucide-react';

const OurStory = () => {
  return (
    <section className="py-8 sm:py-10 md:py-12 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          
          {/* Left: Our Story */}
          <div className="w-full lg:w-1/2 relative flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a237e] mb-3 sm:mb-4 tracking-tight">Our Story</h2>
            
            {/* Decorative Bug */}
            <div className="absolute top-0 right-10 md:right-28 lg:right-10 hidden md:block select-none">
              <div className="relative">
                <Bug className="w-7 h-7 text-amber-500 rotate-[30deg] animate-bounce-slow hover:scale-125 hover:rotate-45 transition-all cursor-pointer" />
                <svg className="absolute -left-14 top-5 w-16 h-12 -z-10" viewBox="0 0 100 50">
                  <path d="M0,0 Q40,50 100,-10" fill="none" stroke="#fcd34d" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              </div>
            </div>

            <div className="space-y-3.5 text-slate-600 font-medium leading-relaxed text-sm sm:text-base text-left">
              <p>
                SpellBee Universe was created with a simple idea: learning language can be exciting, challenging and rewarding.
              </p>
              <p>
                We provide young learners with a platform where they can strengthen their English vocabulary, practise spelling and pronunciation, experience healthy competition and build the confidence to speak in front of others.
              </p>
              <p>
                Through structured rounds and live competition experiences, students are encouraged to learn beyond the classroom and celebrate their progress.
              </p>
            </div>
          </div>

          {/* Right: Mission & Vision Cards */}
          <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-5 items-stretch">
            
            {/* Mission Card */}
            <div className="bg-[#fffbeb] rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-amber-300 border border-amber-100 flex-1 flex flex-col justify-between transition-all duration-300 group cursor-pointer h-full text-left">
              <div>
                <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center mb-4 shadow-sm shadow-amber-400/40 border-[3px] border-white group-hover:scale-115 group-hover:rotate-12 transition-all duration-300">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1a237e] group-hover:text-amber-600 transition-colors mb-2">Our Mission</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-sm">
                  To make language learning exciting, accessible and confidence-building for every young learner.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-[#f0fdf4] rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-emerald-300 border border-emerald-100 flex-1 flex flex-col justify-between transition-all duration-300 group cursor-pointer h-full text-left">
              <div>
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mb-4 shadow-sm shadow-emerald-500/40 border-[3px] border-white group-hover:scale-115 group-hover:rotate-12 transition-all duration-300">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1a237e] group-hover:text-emerald-600 transition-colors mb-2">Our Vision</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-sm">
                  To inspire a generation of confident communicators who are curious about words, language and learning.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;
