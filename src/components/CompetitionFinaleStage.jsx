import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Monitor, Type, BookOpen, Headphones, Bell, Eye, Trophy } from 'lucide-react';

const CompetitionFinaleStage = () => {
  const challengesCol1 = [
    { icon: <Zap className="w-4 h-4 text-yellow-300" />, text: "Rapid Fire Spelling" },
    { icon: <Monitor className="w-4 h-4 text-cyan-300" />, text: "Audio-Visual Words" },
    { icon: <Type className="w-4 h-4 text-purple-300" />, text: "Jumbled Letters" },
    { icon: <BookOpen className="w-4 h-4 text-emerald-300" />, text: "Meaning & Usage" },
  ];

  const challengesCol2 = [
    { icon: <Headphones className="w-4 h-4 text-pink-300" />, text: "Pronunciation & Listening" },
    { icon: <Bell className="w-4 h-4 text-amber-300" />, text: "Buzzer Round" },
    { icon: <Eye className="w-4 h-4 text-blue-300" />, text: "Visual Memory Challenge" },
    { icon: <Trophy className="w-4 h-4 text-yellow-400" />, text: "Champion Elimination" },
  ];

  return (
    <section className="py-5 sm:py-7 md:py-8 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="bg-gradient-to-br from-[#071330] via-[#0c1e4a] to-[#071330] rounded-3xl p-6 sm:p-8 md:p-9 lg:p-10 relative overflow-hidden text-white shadow-2xl border border-blue-900/40">
          
          {/* Subtle Stage Lighting Effects in background */}
          <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-yellow-500/15 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-4 flex flex-col justify-center text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2 sm:mb-3">
                <span className="w-6 h-1 bg-yellow-400 rounded-full inline-block"></span>
                <span className="text-yellow-400 font-extrabold tracking-wider text-xs sm:text-sm uppercase">
                  The Grand Finale
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-2.5 sm:mb-3 leading-tight tracking-tight">
                Welcome to the<br/>
                <span className="text-yellow-400">Spell Master Stage.</span>
              </h2>
              
              <p className="text-blue-100/90 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 max-w-md mx-auto lg:mx-0">
                The ultimate challenge. The biggest stage.<br className="hidden sm:inline" />
                The moment of glory.
              </p>
              
              <div className="flex justify-center lg:justify-start">
                <Link 
                  href="/register"
                  className="w-full sm:w-auto justify-center px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-gray-900 font-extrabold shadow-lg shadow-yellow-400/20 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 group text-xs sm:text-sm cursor-pointer"
                >
                  Explore Grand Finale 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                </Link>
              </div>
            </div>

            {/* Center Stage with Champions Image */}
            <div className="lg:col-span-4 flex justify-center items-center my-2 lg:my-0">
              <div className="relative w-full max-w-[280px] sm:max-w-[340px] aspect-[4/3] rounded-2xl overflow-hidden border border-amber-400/40 shadow-2xl group cursor-pointer hover:border-amber-300 transition-colors duration-300">
                <img 
                  src="/images/competition-finale-champions.jpg" 
                  alt="SpellBee Universe Grand Finale Winners on Stage with Trophies" 
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Stage Spotlight Vignette Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071330]/85 via-black/20 to-transparent pointer-events-none"></div>
                
                <div className="absolute bottom-3 inset-x-0 text-center">
                  <span className="inline-block px-3.5 py-1.5 rounded-full bg-yellow-400 text-slate-950 font-black text-[11px] tracking-wider uppercase shadow-md group-hover:scale-105 transition-transform">
                    Grand Finale Champions
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Challenges (2 Sub-Columns of 4) */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2.5 sm:mb-3">
                <span className="w-6 h-1 bg-yellow-400 rounded-full inline-block"></span>
                <span className="text-yellow-400 font-extrabold tracking-wider text-xs uppercase">
                  The Grand Finale Challenges
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                {/* Column 1 */}
                <div className="flex flex-col gap-2">
                  {challengesCol1.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-2.5 sm:gap-3 bg-white/[0.08] hover:bg-white/[0.16] border border-white/10 hover:border-amber-400/40 rounded-xl px-3 py-2 sm:px-3.5 sm:py-2.5 backdrop-blur-md transition-all duration-300 group cursor-pointer hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-950/80 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-115 group-hover:rotate-6 transition-all duration-300 group-hover:border-amber-400/50">
                        {item.icon}
                      </div>
                      <span className="text-slate-100 group-hover:text-amber-300 font-semibold text-xs leading-snug transition-colors">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-2">
                  {challengesCol2.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-2.5 sm:gap-3 bg-white/[0.08] hover:bg-white/[0.16] border border-white/10 hover:border-amber-400/40 rounded-xl px-3 py-2 sm:px-3.5 sm:py-2.5 backdrop-blur-md transition-all duration-300 group cursor-pointer hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-950/80 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-115 group-hover:rotate-6 transition-all duration-300 group-hover:border-amber-400/50">
                        {item.icon}
                      </div>
                      <span className="text-slate-100 group-hover:text-amber-300 font-semibold text-xs leading-snug transition-colors">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitionFinaleStage;
