import React from 'react';
import { Lightbulb, MapPin, Users, Trophy, Rocket, ArrowRight } from 'lucide-react';

const OurJourney = () => {
  const milestones = [
    { year: '2018', title: 'Founded', icon: Lightbulb },
    { year: '2019', title: 'Regional Events', icon: MapPin },
    { year: '2020', title: 'National Participation', icon: Users },
    { year: '2022', title: 'Grand Finale', icon: Trophy },
    { year: '2024', title: 'Future', icon: Rocket },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#1a237e] mb-2 tracking-tight">Our Journey</h2>
          <p className="text-[#3949ab] font-medium text-lg">From an idea to a movement — here's how SpellBee Universe grew.</p>
        </div>

        <div className="relative">
          {/* Main flex container */}
          <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-8 md:gap-0">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col items-center relative w-full md:w-1/5 group">
                
                {/* Connector Arrow (Desktop only) */}
                {index < milestones.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[50%] w-full h-[2px] z-0">
                    <div className="w-full h-full border-t-2 border-dashed border-amber-300 mt-[1px]"></div>
                    <ArrowRight className="absolute -right-3 -top-2 w-5 h-5 text-amber-400" />
                  </div>
                )}
                
                {/* Connector Line (Mobile only) */}
                {index < milestones.length - 1 && (
                  <div className="md:hidden h-12 border-l-2 border-dashed border-amber-300 my-2"></div>
                )}

                {/* Circle Icon */}
                <div className="w-24 h-24 rounded-full bg-[#fbc02d] flex items-center justify-center relative z-10 shadow-lg shadow-amber-200 group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                  <milestone.icon className="w-10 h-10 text-[#1a237e]" strokeWidth={2.5} />
                </div>
                
                {/* Text Content */}
                <div className="text-center mt-6">
                  <h3 className="text-xl font-bold text-[#1a237e] mb-1">{milestone.year}</h3>
                  <p className="text-[#3949ab] font-bold text-sm">{milestone.title}</p>
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
