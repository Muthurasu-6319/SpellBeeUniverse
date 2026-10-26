"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, BookOpen, Volume2, Sparkles, FileText } from 'lucide-react';

const FeaturedResources = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const featuredItems = [
    {
      title: "Commonly Misspelled Words",
      desc: "Avoid common spelling mistakes with our curated word list.",
      tag: "Word Lists",
      badgeColor: "bg-pink-100 text-pink-700",
      graphic: (
        <div className="w-full h-36 sm:h-44 bg-gradient-to-br from-amber-100 via-yellow-100 to-orange-100 rounded-2xl flex flex-col items-center justify-center p-4 relative overflow-hidden border border-amber-200/60">
          <div className="bg-white px-5 py-3 rounded-xl shadow-md border-2 border-pink-300 text-center transform -rotate-3">
            <span className="text-xs font-bold text-pink-500 uppercase tracking-widest block">Essential</span>
            <span className="text-lg font-black text-[#1a237e]">WORD LISTS</span>
          </div>
          <div className="absolute top-2 right-3">
            <FileText className="w-5 h-5 text-pink-500" />
          </div>
        </div>
      )
    },
    {
      title: "100 English Words Every Student Should Know",
      desc: "Build your vocabulary with these essential words.",
      tag: "Vocabulary",
      badgeColor: "bg-blue-100 text-blue-700",
      graphic: (
        <div className="w-full h-36 sm:h-44 bg-gradient-to-br from-blue-100 via-sky-100 to-indigo-100 rounded-2xl flex items-center justify-center p-4 relative overflow-hidden border border-blue-200/60">
          <div className="flex gap-2 transform rotate-2">
            <div className="w-12 h-12 rounded-xl bg-pink-500 text-white font-extrabold text-xl flex items-center justify-center shadow-md">A</div>
            <div className="w-12 h-12 rounded-xl bg-blue-500 text-white font-extrabold text-xl flex items-center justify-center shadow-md -translate-y-2">B</div>
            <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-900 font-extrabold text-xl flex items-center justify-center shadow-md">C</div>
          </div>
          <div className="absolute bottom-2 right-3 text-xs font-bold text-blue-800 bg-white/80 px-2 py-0.5 rounded-md">Top 100</div>
        </div>
      )
    },
    {
      title: "How to Improve English Pronunciation",
      desc: "Simple tips for clearer and confident speech.",
      tag: "Pronunciation",
      badgeColor: "bg-purple-100 text-purple-700",
      graphic: (
        <div className="w-full h-36 sm:h-44 bg-gradient-to-br from-indigo-900 via-blue-950 to-purple-950 rounded-2xl flex flex-col items-center justify-center p-4 relative overflow-hidden border border-indigo-800 text-white">
          <div className="w-14 h-14 rounded-full bg-blue-500/30 border border-blue-400/50 flex items-center justify-center shadow-lg">
            <Volume2 className="w-7 h-7 text-yellow-300" />
          </div>
          <div className="mt-2 text-xs font-bold text-blue-200 tracking-wider uppercase flex items-center gap-1">
            <Volume2 className="w-3.5 h-3.5 text-yellow-400" /> Phonetics & Audio
          </div>
          <div className="absolute top-2 left-3 w-2 h-2 rounded-full bg-cyan-400 animate-ping"></div>
        </div>
      )
    },
    {
      title: "Spelling Practice Worksheets",
      desc: "Download and practice with our printable worksheets.",
      tag: "Worksheets",
      badgeColor: "bg-emerald-100 text-emerald-700",
      graphic: (
        <div className="w-full h-36 sm:h-44 bg-gradient-to-br from-slate-100 via-emerald-50 to-teal-100 rounded-2xl flex flex-col items-center justify-center p-4 relative overflow-hidden border border-emerald-200/60">
          <div className="bg-white p-3.5 rounded-xl shadow-md border border-slate-200 text-center w-40 transform rotate-1">
            <div className="text-[10px] font-extrabold text-emerald-600 uppercase border-b pb-1 mb-1.5 flex items-center justify-center gap-1">
              <FileText className="w-3 h-3" /> Practice Sheet
            </div>
            <div className="space-y-1">
              <div className="h-1.5 bg-slate-200 rounded w-full"></div>
              <div className="h-1.5 bg-slate-200 rounded w-3/4 mx-auto"></div>
            </div>
          </div>
          <div className="absolute bottom-2 left-3 text-xs font-bold text-emerald-800 bg-white/80 px-2 py-0.5 rounded-md">Print Ready</div>
        </div>
      )
    }
  ];

  return (
    <section className="py-8 md:py-10 bg-slate-50/60 border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-1 bg-yellow-400 rounded-full inline-block"></span>
              <span className="text-slate-950 font-black tracking-wider text-xs uppercase">
                Featured Resources
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mb-2">
              Featured Resources
            </h2>
            <p className="text-slate-700 font-medium text-sm sm:text-base">
              Handpicked resources to help you prepare and perform better.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-700 hover:bg-slate-50"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setCurrentPage(Math.min(1, currentPage + 1))}
              className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-700 hover:bg-slate-50"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Graphic */}
                <div className="mb-4">
                  {item.graphic}
                </div>

                <div className="mb-3">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-extrabold ${item.badgeColor} mb-2`}>
                    {item.tag}
                  </span>
                  <h3 className="text-base font-black text-slate-950 leading-snug mb-2 min-h-[44px]">
                    {item.title}
                  </h3>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium min-h-[38px]">
                    {item.desc}
                  </p>
                </div>
              </div>

              <a 
                href="#read-resource"
                className="inline-flex items-center gap-1.5 font-bold text-xs sm:text-sm text-amber-600 hover:text-amber-700 hover:underline pt-2 border-t border-slate-100 mt-2"
              >
                Read More <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Dots Pagination Indicator */}
        <div className="flex items-center justify-center gap-1.5 mt-8">
          <div className="w-5 h-2 rounded-full bg-amber-400"></div>
          <div className="w-2 h-2 rounded-full bg-slate-300"></div>
          <div className="w-2 h-2 rounded-full bg-slate-300"></div>
          <div className="w-2 h-2 rounded-full bg-slate-300"></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedResources;
