import React from 'react';
import { ArrowRight, ClipboardCheck } from 'lucide-react';

const RulesClipboardIllustration = () => (
  <div className="relative w-56 h-60 flex items-center justify-center">
    {/* Stacked books at bottom left */}
    <div className="absolute -bottom-2 -left-4 z-20 flex flex-col items-center">
      <div className="w-16 h-3.5 bg-rose-500 rounded-sm shadow-xs border-l-4 border-rose-700"></div>
      <div className="w-18 h-4 bg-emerald-500 rounded-sm shadow-xs -mt-0.5 border-l-4 border-emerald-700"></div>
      <div className="w-20 h-4.5 bg-amber-500 rounded-sm shadow-md -mt-0.5 border-l-4 border-amber-700"></div>
    </div>

    {/* Flying cute bee mascot at top right */}
    <div className="absolute -top-3 -right-3 z-20 text-3xl animate-bounce-slow">
      🐝
    </div>

    {/* Clipboard base */}
    <div className="w-48 h-56 bg-white rounded-2xl shadow-xl border border-blue-100 p-4 pt-5 relative z-10 flex flex-col transform rotate-1 hover:rotate-0 transition-transform">
      {/* Top Clip */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-16 h-5 bg-slate-300 rounded-md shadow-xs border border-slate-400 flex items-center justify-center">
        <div className="w-8 h-2 bg-slate-400 rounded-full"></div>
      </div>

      {/* Decorative colored dots */}
      <div className="flex items-center justify-end gap-1.5 mb-2 mt-1">
        <div className="w-2 h-2 rounded-full bg-red-400"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
        <div className="w-2 h-2 rounded-full bg-green-400"></div>
      </div>

      <div className="text-center font-extrabold text-[10px] tracking-wider text-[#1a237e] uppercase bg-blue-50 py-1 rounded-md mb-3 border border-blue-100">
        Rules & Guidelines
      </div>

      {/* Checklist Lines */}
      <div className="space-y-2.5 flex-grow">
        {[
          { color: "text-blue-500", border: "border-blue-400", w: "w-24" },
          { color: "text-emerald-500", border: "border-emerald-400", w: "w-28" },
          { color: "text-amber-500", border: "border-amber-400", w: "w-20" },
          { color: "text-purple-500", border: "border-purple-400", w: "w-26" }
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className={`w-3.5 h-3.5 rounded border-2 ${item.border} flex items-center justify-center text-[9px] font-bold ${item.color}`}>
              ✓
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
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="bg-[#f0f8ff] rounded-[2rem] p-8 md:p-12 border border-blue-100/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Left Text Content */}
          <div className="flex-1 max-w-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-sm shrink-0">
                <ClipboardCheck className="w-5 h-5" />
              </div>
              <span className="text-blue-600 font-extrabold tracking-wider text-xs uppercase">
                Competition Rules & Guidelines
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1a237e] mb-3 tracking-tight">
              Know the Rules. Play Fair.
            </h2>
            
            <p className="text-[#3949ab] font-medium text-sm sm:text-base mb-7 leading-relaxed">
              Read the complete rules and guidelines to ensure a smooth and enjoyable competition experience.
            </p>
            
            <div>
              <button className="px-6 py-2.5 rounded-full border-2 border-blue-500 text-blue-700 hover:bg-blue-500 hover:text-white font-bold transition-all duration-200 flex items-center gap-2 text-sm bg-white shadow-xs">
                Read Complete Rules <ArrowRight className="w-4 h-4" />
              </button>
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
