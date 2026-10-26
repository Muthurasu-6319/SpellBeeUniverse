import React from 'react';
import { Lightbulb, Award, Trophy, Globe, Zap, Rocket, ArrowRight } from 'lucide-react';

const OurJourney = () => {
  const milestones = [
    { year: '2017', title: 'Season 1', icon: Lightbulb },
    { year: '2018', title: 'Season 2', icon: Award },
    { year: '2022', title: 'Season 3', icon: Trophy },
    { year: '2023', title: 'Season 4', icon: Globe },
    { year: '2024', title: 'Season 5', icon: Zap },
    { year: '2026', title: 'Season 6', icon: Rocket },
  ];

  return (
    <section className="pt-6 sm:pt-8 pb-8 sm:pb-10 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-6 sm:mb-8 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a237e] mb-1.5 tracking-tight">Our Journey</h2>
          <p className="text-slate-800 font-medium text-sm sm:text-base max-w-lg mx-auto sm:mx-0">
            From an idea to a movement — here&apos;s how SpellBee Universe grew.
          </p>
        </div>

        <div className="relative overflow-x-auto pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          {/* Main flex container */}
          <div className="flex flex-row items-start relative z-10 min-w-[620px] md:min-w-0 md:w-full justify-between">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col items-center relative flex-1 min-w-[90px] md:min-w-0 group cursor-pointer hover:-translate-y-1.5 transition-transform duration-300 px-2">
                
                {/* Connector Arrow */}
                {index < milestones.length - 1 && (
                  <div className="absolute top-6 sm:top-7 xl:top-8 left-[50%] w-full h-[2px] z-0 pointer-events-none">
                    <div className="w-full h-full border-t-2 border-dashed border-amber-300 mt-[1px]"></div>
                    <ArrowRight className="absolute -right-2 -top-1.5 w-3.5 h-3.5 text-amber-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                )}

                {/* Circle Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 xl:w-16 xl:h-16 rounded-full bg-[#fbc02d] flex items-center justify-center relative z-10 shadow-md shadow-amber-200/60 group-hover:scale-115 group-hover:rotate-6 group-hover:ring-4 group-hover:ring-amber-200 transition-all duration-300 border-3 sm:border-4 border-white shrink-0">
                  <milestone.icon className="w-5 h-5 sm:w-6 sm:h-6 xl:w-7 xl:h-7 text-[#1a237e] group-hover:scale-110 transition-transform" strokeWidth={2.5} />
                </div>
                
                {/* Text Content */}
                <div className="text-center mt-3">
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-950 group-hover:text-amber-600 transition-colors mb-0.5 tracking-tight">{milestone.year}</h3>
                  <p className="text-slate-900 font-bold text-xs sm:text-sm leading-tight">{milestone.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
