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
    <section className="py-16 md:py-20 bg-white border-t-8 border-amber-400 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a237e] mb-2 tracking-tight">What Happens at the Grand Finale?</h2>
          <p className="text-slate-600 font-medium text-sm md:text-base">Exciting challenges. Real skills. One champion.</p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-between gap-4 md:gap-0">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col items-center justify-center w-[130px] md:w-[130px] h-[130px] md:h-[140px] hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mb-3 ${challenge.iconBg}`}>
                <challenge.icon className={`w-6 h-6 ${challenge.iconColor}`} />
              </div>
              <h3 className="text-center text-[#1a237e] text-xs font-bold leading-tight">
                {challenge.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GrandFinale;
