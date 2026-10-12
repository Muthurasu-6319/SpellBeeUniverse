import React from 'react';
import { School, Settings, Users, Award, ArrowRight, Bug } from 'lucide-react';

const BringToSchool = () => {
  return (
    <section className="py-12 bg-[#fed940] border-y border-amber-300/50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col xl:flex-row items-center gap-8 lg:gap-10">
          
          {/* Left: School Illustration Placeholder */}
          <div className="w-full xl:w-auto flex justify-center xl:justify-start">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white/40 rounded-full blur-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <School className="w-28 h-28 md:w-36 md:h-36 text-[#1a237e] relative z-10 drop-shadow-xl" strokeWidth={1.5} />
            </div>
          </div>

          {/* Middle: Content and Cards */}
          <div className="w-full xl:flex-1 flex flex-col justify-center">
            <div className="mb-6 text-center xl:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a237e] mb-2 tracking-tight">Bring SpellBee Universe to Your School</h2>
              <p className="text-[#3949ab] font-medium text-sm md:text-base">Give your students an engaging platform to learn, compete and celebrate language.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              {/* Card 1 */}
              <div className="bg-white rounded-xl p-4 shadow-sm flex-1 flex gap-3 items-start hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-[#1a237e] text-sm font-bold mb-1">Easy to Organize</h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium">Structured competition process for schools.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl p-4 shadow-sm flex-1 flex gap-3 items-start hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-[#1a237e] text-sm font-bold mb-1">Student Engagement</h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium">An exciting experience beyond the classroom.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl p-4 shadow-sm flex-1 flex gap-3 items-start hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-[#1a237e] text-sm font-bold mb-1">Recognition</h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium">Certificates, awards and opportunities to showcase skills.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Call to action */}
          <div className="w-full xl:w-auto flex flex-col items-center xl:items-end justify-center gap-6 mt-6 xl:mt-0 pl-0 xl:pl-4">
            <div className="relative group text-center xl:text-right">
              <span className="text-red-500 text-xl md:text-2xl font-bold -rotate-6 block tracking-tight" style={{fontFamily: "'Comic Sans MS', cursive, sans-serif"}}>Stronger Schools</span>
              <span className="text-[#1a237e] text-xl md:text-2xl font-bold -rotate-6 block ml-4 xl:ml-0 tracking-tight" style={{fontFamily: "'Comic Sans MS', cursive, sans-serif"}}>Brighter Futures!</span>
              <Bug className="absolute -right-6 md:-right-10 -top-2 w-8 h-8 text-amber-600 rotate-45" />
            </div>

            <button className="bg-[#fbc02d] hover:bg-[#f9a825] text-[#1a237e] border border-amber-400 shadow-md font-bold py-3 px-6 rounded-full flex items-center gap-2 transition-all hover:gap-3 active:scale-95">
              Partner With Us <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BringToSchool;
