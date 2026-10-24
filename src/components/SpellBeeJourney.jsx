import React from 'react';
import Link from 'next/link';
import { ClipboardList, Mic, Trophy, ArrowRight } from 'lucide-react';

const SpellBeeJourney = () => {
  return (
    <section className="py-8 sm:py-10 md:py-12 bg-[#fed940] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4 sm:gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a237e] mb-2 tracking-tight">The SpellBee Journey</h2>
            <p className="text-[#3949ab] font-medium text-base sm:text-lg leading-relaxed">Three stages. One grand opportunity.</p>
          </div>
          <Link 
            href="/competition"
            className="bg-[#fbc02d] hover:bg-[#f9a825] text-[#1a237e] font-black py-2.5 px-6 rounded-full inline-flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md hover:scale-105 active:scale-95 w-full sm:w-auto group cursor-pointer text-center"
          >
            <span>Explore Competition</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-4 lg:gap-3">
          
          {/* Stage 1 */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 w-full lg:w-[31%] flex items-start gap-4 h-full group cursor-pointer border border-amber-200/50">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 shadow-xs group-hover:scale-115 group-hover:rotate-6 transition-all duration-300">
              <ClipboardList className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-[#1a237e] group-hover:text-amber-600 transition-colors font-bold text-base mb-1.5">Stage 1 - Written Round</h3>
              <p className="text-slate-600 text-sm leading-relaxed min-h-[44px]">Check your spelling and vocabulary skills through an online test.</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex items-center justify-center text-amber-800/80 animate-float-slow">
            <ArrowRight className="w-6 h-6" />
          </div>

          {/* Stage 2 */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 w-full lg:w-[31%] flex items-start gap-4 h-full group cursor-pointer border border-pink-200/50">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-pink-500 flex items-center justify-center flex-shrink-0 shadow-xs group-hover:scale-115 group-hover:rotate-6 transition-all duration-300">
              <Mic className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-[#1a237e] group-hover:text-pink-600 transition-colors font-bold text-base mb-1.5">Stage 2 - Oral Round</h3>
              <p className="text-slate-600 text-sm leading-relaxed min-h-[44px]">Showcase your pronunciation and confidence in a live round.</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex items-center justify-center text-amber-800/80 animate-float-slow" style={{ animationDelay: '0.8s' }}>
            <ArrowRight className="w-6 h-6" />
          </div>

          {/* Stage 3 */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 w-full lg:w-[31%] flex items-start gap-4 h-full group cursor-pointer border border-emerald-200/50">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-xs group-hover:scale-115 group-hover:rotate-6 transition-all duration-300">
              <Trophy className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-[#1a237e] group-hover:text-emerald-600 transition-colors font-bold text-base mb-1.5">Stage 3 - Grand Finale</h3>
              <p className="text-slate-600 text-sm leading-relaxed min-h-[44px]">The top performers battle it out for the title of Spell Master!</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpellBeeJourney;
