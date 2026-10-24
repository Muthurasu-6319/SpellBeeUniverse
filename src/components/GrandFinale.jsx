import React from 'react';
import { Zap, Headphones, Grid2x2, BookOpen, Mic, Bell, Eye, Trophy } from 'lucide-react';

const GrandFinale = () => {
  const challenges = [
    {
      title: "Rapid Fire Spelling",
      icon: Zap,
      iconBg: "bg-amber-400",
      iconColor: "text-white"
    },
    {
      title: "Audio-Visual Words",
      icon: Headphones,
      iconBg: "bg-purple-500",
      iconColor: "text-white"
    },
    {
      title: "Jumbled Letters",
      icon: Grid2x2,
      iconBg: "bg-pink-500",
      iconColor: "text-white"
    },
    {
      title: "Meaning & Usage",
      icon: BookOpen,
      iconBg: "bg-blue-500",
      iconColor: "text-white"
    },
    {
      title: "Pronunciation & Listening",
      icon: Mic,
      iconBg: "bg-purple-400",
      iconColor: "text-white"
    },
    {
      title: "Buzzer Round",
      icon: Bell,
      iconBg: "bg-emerald-400",
      iconColor: "text-white"
    },
    {
      title: "Visual Memory Challenge",
      icon: Eye,
      iconBg: "bg-blue-400",
      iconColor: "text-white"
    },
    {
      title: "Champion Elimination",
      icon: Trophy,
      iconBg: "bg-amber-400",
      iconColor: "text-white"
    }
  ];

  return (
    <section className="pt-8 sm:pt-9 pb-8 sm:pb-10 bg-white border-t-8 border-amber-400 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="mb-6 sm:mb-7 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a237e] mb-2 tracking-tight">What Happens at the Grand Finale?</h2>
          <p className="text-slate-600 font-medium text-sm md:text-base max-w-xl mx-auto md:mx-0">Exciting challenges. Real skills. One champion.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-white rounded-2xl p-3 sm:p-3.5 shadow-xs hover:shadow-lg hover:border-amber-300 border border-slate-100 flex flex-col items-center justify-start min-h-[135px] h-full transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
              <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 mb-2.5 shadow-xs ${challenge.iconBg} group-hover:scale-115 group-hover:rotate-6 group-hover:shadow-md transition-all duration-300`}>
                <challenge.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${challenge.iconColor}`} />
              </div>
              <div className="flex-1 flex items-center justify-center w-full">
                <h3 className="text-center text-[#1a237e] group-hover:text-amber-600 transition-colors text-xs font-bold leading-snug">
                  {challenge.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GrandFinale;
