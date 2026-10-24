import React from 'react';
import { User, BookOpen, FileText, Mic, Trophy, Tv, ArrowRight } from 'lucide-react';

const JourneyGlance = () => {
  const steps = [
    { id: 1, title: 'Register', desc: 'Choose your category and complete registration.', icon: User, color: 'bg-pink-500' },
    { id: 2, title: 'Prepare', desc: 'Use our resources to learn and practise.', icon: BookOpen, color: 'bg-emerald-500' },
    { id: 3, title: 'Written Round', desc: 'Take the written examination.', icon: FileText, color: 'bg-blue-500' },
    { id: 4, title: 'Oral Round', desc: 'Showcase your spelling skills.', icon: Mic, color: 'bg-orange-500' },
    { id: 5, title: 'Grand Finale', desc: 'Compete on the Spell Master stage.', icon: Trophy, color: 'bg-purple-600' },
    { id: 6, title: 'Media / Press / Television Stage', desc: 'Featured across media, press and television broadcast.', icon: Tv, color: 'bg-teal-500' },
  ];

  return (
    <section className="py-8 sm:py-10 md:py-12 bg-[#fffff8] border-b border-amber-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-6 sm:mb-8 text-center md:text-left">
          <span className="text-[#1a237e] font-extrabold tracking-wider text-xs mb-1.5 inline-block uppercase bg-amber-100 px-3 py-0.5 rounded-full border border-amber-200">
            Roadmap
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a237e] tracking-tight">
            The Journey at a Glance
          </h2>
          <p className="text-[#3949ab] font-medium text-xs sm:text-sm mt-0.5 max-w-xl mx-auto md:mx-0">
            Six simple steps. One incredible journey.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row justify-between items-start relative z-10 gap-5 sm:gap-6 md:gap-3">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center relative w-full md:w-1/6 group text-center cursor-pointer hover:-translate-y-1.5 transition-transform duration-300"
              >
                {/* Connector Arrow (Desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[62%] w-[85%] h-[2px] z-0 pointer-events-none">
                    <ArrowRight className="absolute right-0 -top-[9px] w-4 h-4 text-amber-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                  </div>
                )}

                {/* Circle Icon with Micro-Interactions */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-full ${step.color} flex items-center justify-center relative z-10 shadow-md group-hover:shadow-xl group-hover:scale-105 group-hover:ring-4 group-hover:ring-amber-200 border-3 border-white mb-2.5 sm:mb-3 shrink-0 transition-all duration-300`}>
                  <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-115 group-hover:rotate-6 transition-transform duration-300" strokeWidth={2.2} />
                </div>
                
                {/* Text Content */}
                <div className="w-full px-1">
                  <h3 className="text-xs sm:text-sm font-bold text-[#1a237e] mb-1 min-h-[30px] sm:min-h-[36px] flex items-start justify-center leading-tight group-hover:text-blue-700 transition-colors">
                    {step.id}. {step.title}
                  </h3>
                  <p className="text-[#3949ab] text-[11px] sm:text-xs leading-relaxed max-w-none md:max-w-[140px] mx-auto opacity-90 group-hover:opacity-100">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyGlance;
