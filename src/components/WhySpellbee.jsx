import React from 'react';
import { BookOpen, Volume2, Mic, Trophy } from 'lucide-react';

const WhySpellbee = () => {
  const cards = [
    {
      title: "Stronger Vocabulary",
      description: "Discover new words, understand their meanings and build a richer vocabulary.",
      icon: BookOpen,
      iconBg: "bg-amber-400",
      iconColor: "text-white"
    },
    {
      title: "Better Pronunciation",
      description: "Practice saying words clearly and develop stronger pronunciation and listening skills.",
      icon: Volume2,
      iconBg: "bg-pink-500",
      iconColor: "text-white"
    },
    {
      title: "Communication Confidence",
      description: "Speaking on stage helps students express themselves with greater confidence.",
      icon: Mic,
      iconBg: "bg-emerald-500",
      iconColor: "text-white"
    },
    {
      title: "Competitive Learning",
      description: "Learn how to prepare, perform, stay focused and rise to a challenge.",
      icon: Trophy,
      iconBg: "bg-blue-500",
      iconColor: "text-white"
    }
  ];

  return (
    <section className="pt-8 md:pt-12 pb-6 md:pb-8 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mb-8 lg:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a237e] mb-3 tracking-tight">Why SpellBee Universe?</h2>
          <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
            More Than a Spelling Competition. Every word a student learns is a step toward stronger vocabulary, clearer communication and greater confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-white rounded-[24px] p-6 lg:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100/60 hover:shadow-xl hover:-translate-y-2 hover:border-amber-200/80 transition-all duration-300 group flex flex-col justify-between cursor-pointer">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-5">
                  <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm ${card.iconBg} group-hover:scale-115 group-hover:rotate-6 group-hover:shadow-md transition-all duration-300`}>
                    <card.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${card.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-[#1a237e] group-hover:text-amber-500 transition-colors leading-snug min-h-[28px] lg:min-h-[48px] flex items-start">
                    {card.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySpellbee;
