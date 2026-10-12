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
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Why SpellBee Universe?</h2>
          <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
            More Than a Spelling Competition. Every word a student learns is a step toward stronger vocabulary, clearer communication and greater confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-white rounded-[24px] p-6 lg:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100/50 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex flex-col h-full gap-4">
                <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm ${card.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                    <card.icon className={`w-7 h-7 ${card.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">{card.title}</h3>
                </div>
                <p className="text-sm text-slate-500 font-medium leading-relaxed mt-2 lg:mt-0">
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
