import React from 'react';
import Link from 'next/link';
import { School, Settings, Users, Award, ArrowRight, Bug } from 'lucide-react';

const BringToSchool = () => {
  return (
    <section className="py-8 sm:py-9 md:py-10 bg-[#fed940] border-y border-amber-300/50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col xl:flex-row items-center gap-8 lg:gap-10">
          
          {/* Left: School Illustration */}
          <div className="w-full xl:w-auto flex justify-center xl:justify-start">
            <div className="relative animate-float-slow">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white/50 rounded-full blur-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-soft"></div>
              <School className="w-28 h-28 md:w-36 md:h-36 text-[#1a237e] relative z-10 drop-shadow-xl hover:scale-105 transition-transform cursor-pointer" strokeWidth={1.5} />
            </div>
          </div>

          {/* Middle: Content and Cards */}
          <div className="w-full xl:flex-1 flex flex-col justify-center">
            <div className="mb-6 text-center xl:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a237e] mb-2 tracking-tight">Bring SpellBee Universe to Your School</h2>
              <p className="text-[#3949ab] font-medium text-sm md:text-base max-w-2xl mx-auto xl:mx-0">Give your students an engaging platform to learn, compete and celebrate language.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-stretch">
              {/* Card 1 */}
              <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex-1 flex gap-3.5 items-start h-full group cursor-pointer border border-amber-200/40">
                <div className="w-10 h-10 rounded-full bg-pink-500 group-hover:scale-115 group-hover:rotate-12 transition-transform duration-300 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#1a237e] group-hover:text-pink-600 transition-colors text-sm font-bold mb-1">Easy to Organize</h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium min-h-[38px]">Structured competition process for schools.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex-1 flex gap-3.5 items-start h-full group cursor-pointer border border-amber-200/40">
                <div className="w-10 h-10 rounded-full bg-blue-500 group-hover:scale-115 group-hover:rotate-12 transition-transform duration-300 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#1a237e] group-hover:text-blue-600 transition-colors text-sm font-bold mb-1">Student Engagement</h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium min-h-[38px]">An exciting experience beyond the classroom.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex-1 flex gap-3.5 items-start h-full group cursor-pointer border border-amber-200/40">
                <div className="w-10 h-10 rounded-full bg-emerald-500 group-hover:scale-115 group-hover:rotate-12 transition-transform duration-300 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#1a237e] group-hover:text-emerald-600 transition-colors text-sm font-bold mb-1">Recognition</h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium min-h-[38px]">Certificates, awards and opportunities to showcase skills.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Call to action */}
          <div className="w-full xl:w-auto flex flex-col items-center xl:items-end justify-center gap-6 mt-6 xl:mt-0 pl-0 xl:pl-4">
            <div className="relative group text-center xl:text-right select-none animate-float-slow">
              <span className="text-red-500 text-xl md:text-2xl font-bold -rotate-6 block tracking-tight group-hover:scale-105 transition-transform" style={{fontFamily: "'Comic Sans MS', cursive, sans-serif"}}>Stronger Schools</span>
              <span className="text-[#1a237e] text-xl md:text-2xl font-bold -rotate-6 block tracking-tight group-hover:scale-105 transition-transform" style={{fontFamily: "'Comic Sans MS', cursive, sans-serif"}}>Brighter Futures!</span>
              <Bug className="absolute -right-5 sm:-right-6 md:-right-10 -top-2 w-7 h-7 sm:w-8 sm:h-8 text-amber-800 rotate-45 animate-wiggle hover:rotate-90 transition-transform cursor-pointer" />
            </div>

            <Link 
              href="/schools"
              className="bg-[#fbc02d] hover:bg-[#f9a825] text-[#1a237e] border border-amber-400 shadow-md font-black py-3 px-6 rounded-full inline-flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 group cursor-pointer w-full sm:w-auto text-center"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BringToSchool;
