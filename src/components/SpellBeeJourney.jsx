import React from 'react';
import { ClipboardList, Mic, Trophy, ArrowRight } from 'lucide-react';

const SpellBeeJourney = () => {
  return (
    <section className="py-16 md:py-20 bg-[#fed940] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a237e] mb-2 tracking-tight">The SpellBee Journey</h2>
            <p className="text-[#3949ab] font-medium text-lg">Three stages. One grand opportunity.</p>
          </div>
          <button className="bg-[#fbc02d] hover:bg-[#f9a825] text-[#1a237e] font-bold py-2.5 px-6 rounded-full flex items-center gap-2 transition-colors shadow-sm self-start md:self-auto">
            Explore Competition <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2">
          
          {/* Stage 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm w-full lg:w-[30%] flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
              <ClipboardList className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-[#1a237e] font-bold mb-1">Stage 1 - Written Round</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Check your spelling and vocabulary skills through an online test.</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex text-amber-600">
            <ArrowRight className="w-6 h-6" />
          </div>

          {/* Stage 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm w-full lg:w-[30%] flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-pink-500 flex items-center justify-center flex-shrink-0">
              <Mic className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-[#1a237e] font-bold mb-1">Stage 2 - Oral Round</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Showcase your pronunciation and confidence in a live round.</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex text-[#1a237e]">
            <ArrowRight className="w-6 h-6" />
          </div>

          {/* Stage 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm w-full lg:w-[30%] flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
              <Trophy className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-[#1a237e] font-bold mb-1">Stage 3 - Grand Finale</h3>
              <p className="text-slate-500 text-sm leading-relaxed">The top performers battle it out for the title of Spell Master!</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpellBeeJourney;
