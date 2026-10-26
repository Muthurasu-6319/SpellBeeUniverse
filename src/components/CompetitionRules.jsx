import React from 'react';
import Link from 'next/link';
import { ArrowRight, ClipboardCheck, Sparkles, Check } from 'lucide-react';

const RulesClipboardIllustration = () => (
  <div className="relative w-48 h-52 flex items-center justify-center">
    {/* Stacked books at bottom left */}
    <div className="absolute -bottom-2 -left-3 z-20 flex flex-col items-center animate-pulse-soft">
      <div className="w-14 h-3 bg-rose-500 rounded-sm shadow-xs border-l-4 border-rose-700"></div>
      <div className="w-16 h-3.5 bg-emerald-500 rounded-sm shadow-xs -mt-0.5 border-l-4 border-emerald-700"></div>
      <div className="w-18 h-4 bg-amber-500 rounded-sm shadow-md -mt-0.5 border-l-4 border-amber-700"></div>
    </div>

    {/* Sparkle emblem at top right */}
    <div className="absolute -top-2.5 -right-2 z-20 w-8 h-8 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center shadow-lg border-2 border-white animate-bounce-slow select-none hover:scale-125 transition-transform cursor-pointer">
      <Sparkles className="w-4 h-4 fill-slate-900" />
    </div>

    {/* Clipboard base */}
    <div className="w-42 h-48 bg-white rounded-2xl shadow-xl border border-blue-100 p-3.5 pt-4 relative z-10 flex flex-col transform rotate-1 hover:rotate-0 transition-transform animate-float-slow hover:shadow-2xl">
      {/* Top Clip */}
      <div className="absolute -top-2.5 left-1/2 transform -translate-x-1/2 w-14 h-4.5 bg-slate-300 rounded-md shadow-xs border border-slate-400 flex items-center justify-center">
        <div className="w-7 h-1.5 bg-slate-400 rounded-full"></div>
      </div>

      {/* Decorative colored dots */}
      <div className="flex items-center justify-end gap-1 mb-1.5 mt-1">
        <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
      </div>

      <div className="text-center font-extrabold text-[9px] tracking-wider text-[#1a237e] uppercase bg-blue-50 py-0.5 rounded-md mb-2.5 border border-blue-100">
        Rules & Guidelines
      </div>

      {/* Checklist Lines */}
      <div className="space-y-2 flex-grow">
        {[
          { color: "text-blue-500", border: "border-blue-400", w: "w-20" },
          { color: "text-emerald-500", border: "border-emerald-400", w: "w-24" },
          { color: "text-amber-500", border: "border-amber-400", w: "w-18" },
          { color: "text-purple-500", border: "border-purple-400", w: "w-22" }
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded border-2 ${item.border} flex items-center justify-center ${item.color}`}>
              <Check className="w-2 h-2 stroke-[3]" />
            </div>
            <div className={`h-1.5 bg-slate-200 rounded-full ${item.w}`}></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CompetitionRules = () => {
  return (
    <section className="py-6 sm:py-8 md:py-9 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="bg-[#f0f8ff] rounded-3xl p-6 sm:p-8 md:p-9 border border-blue-100/80 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          
          {/* Left Text Content */}
          <div className="flex-1 max-w-xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2 sm:mb-2.5">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-sm shrink-0">
                <ClipboardCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="text-blue-600 font-extrabold tracking-wider text-xs uppercase">
                Competition Rules & Guidelines
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1a237e] mb-2 sm:mb-2.5 tracking-tight">
              Know the Rules. Play Fair.
            </h2>
            
            <p className="text-slate-900 font-medium text-xs sm:text-sm md:text-base mb-5 sm:mb-6 leading-relaxed max-w-lg mx-auto md:mx-0">
              Read the complete rules and guidelines to ensure a smooth and enjoyable competition experience.
            </p>
            
            <div className="flex justify-center md:justify-start">
              <Link 
                href="/rules"
                className="px-6 py-2.5 rounded-full border-2 border-blue-500 text-blue-700 hover:bg-blue-500 hover:text-white font-extrabold transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm bg-white shadow-xs hover:shadow-md hover:scale-105 active:scale-95 group cursor-pointer"
              >
                Read Complete Rules <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
              </Link>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="shrink-0 flex justify-center items-center">
            <RulesClipboardIllustration />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CompetitionRules;
