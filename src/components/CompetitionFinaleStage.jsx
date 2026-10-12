import React from 'react';
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
    <section className="py-8 md:py-14 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="bg-gradient-to-br from-[#071330] via-[#0c1e4a] to-[#071330] rounded-[2rem] p-8 md:p-12 lg:p-14 relative overflow-hidden text-white shadow-2xl border border-blue-900/40">
          
          {/* Subtle Stage Lighting Effects in background */}
          <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-yellow-500/15 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-1 bg-yellow-400 rounded-full inline-block"></span>
                <span className="text-yellow-400 font-extrabold tracking-wider text-xs sm:text-sm uppercase">
                  The Grand Finale
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight tracking-tight">
                Welcome to the<br/>
                <span className="text-yellow-400">Spell Master Stage.</span>
              </h2>
              
              <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed mb-8">
                The ultimate challenge. The biggest stage.<br/>
                The moment of glory.
              </p>
              
              <div>
                <button className="px-7 py-3 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-gray-900 font-bold shadow-lg shadow-yellow-400/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 group text-sm">
                  Explore Grand Finale 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Center Stage with Golden Trophy */}
            <div className="lg:col-span-4 flex justify-center items-center my-4 lg:my-0">
              <div className="relative w-full max-w-[340px] aspect-square rounded-2xl overflow-hidden border border-amber-400/30 shadow-2xl group">
                <img 
                  src="/images/grand-finale-stage.png" 
                  alt="SpellBee Universe Grand Finale Stage with Championship Trophy" 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Stage Spotlight Vignette Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071330]/80 via-transparent to-transparent pointer-events-none"></div>
                
                <div className="absolute bottom-3 inset-x-0 text-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-yellow-400/90 text-slate-950 font-extrabold text-[11px] tracking-wider uppercase shadow-md">
                    National Championship
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Challenges (2 Sub-Columns of 4) */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-6 h-1 bg-yellow-400 rounded-full inline-block"></span>
                <span className="text-yellow-400 font-extrabold tracking-wider text-xs uppercase">
                  The Grand Finale Challenges
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Column 1 */}
                <div className="flex flex-col gap-2.5">
                  {challengesCol1.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-3 bg-white/[0.08] hover:bg-white/[0.14] border border-white/10 rounded-xl px-3 py-2.5 backdrop-blur-md transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-950/80 border border-white/10 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-slate-100 font-semibold text-xs leading-snug">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-2.5">
                  {challengesCol2.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-3 bg-white/[0.08] hover:bg-white/[0.14] border border-white/10 rounded-xl px-3 py-2.5 backdrop-blur-md transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-950/80 border border-white/10 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-slate-100 font-semibold text-xs leading-snug">
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
