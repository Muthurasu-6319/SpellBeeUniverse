import React from 'react';
import { Target, Eye, Bug } from 'lucide-react';

const OurStory = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left: Our Story */}
          <div className="w-full lg:w-1/2 relative">
            <h2 className="text-3xl font-bold text-[#1a237e] mb-6 tracking-tight">Our Story</h2>
            
            {/* Decorative Bug */}
            <div className="absolute top-0 right-10 md:right-32 lg:right-10 hidden md:block">
              <div className="relative">
                <Bug className="w-8 h-8 text-amber-500 rotate-[30deg] animate-pulse" />
                <svg className="absolute -left-16 top-6 w-20 h-16 -z-10" viewBox="0 0 100 50">
                  <path d="M0,0 Q40,50 100,-10" fill="none" stroke="#fcd34d" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              </div>
            </div>

            <div className="space-y-4 text-slate-600 font-medium leading-relaxed">
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
          <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-6">
            
            {/* Mission Card */}
            <div className="bg-[#fffbeb] rounded-2xl p-8 shadow-sm border border-amber-100 flex-1 hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-amber-400 rounded-full flex items-center justify-center mb-6 shadow-sm shadow-amber-400/40 border-[3px] border-white">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1a237e] mb-3">Our Mission</h3>
              <p className="text-[#3949ab] font-medium leading-relaxed text-sm">
                To make language learning exciting, accessible and confidence-building for every young learner.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-[#f0fdf4] rounded-2xl p-8 shadow-sm border border-emerald-100 flex-1 hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-sm shadow-emerald-500/40 border-[3px] border-white">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1a237e] mb-3">Our Vision</h3>
              <p className="text-[#3949ab] font-medium leading-relaxed text-sm">
                To inspire a generation of confident communicators who are curious about words, language and learning.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;
