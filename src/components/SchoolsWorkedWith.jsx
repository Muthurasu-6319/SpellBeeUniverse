"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, School, Award, Sparkles, Building2, BookOpen } from 'lucide-react';

const SchoolsWorkedWith = () => {
  const [startIndex, setStartIndex] = useState(0);

  const partnerSchools = [
    {
      name: "Raffles",
      type: "International School",
      icon: <Award className="w-6 h-6 text-red-600" />,
      color: "bg-red-50 text-red-600 border-red-200"
    },
    {
      name: "Delhi Public School",
      type: "DPS Society",
      icon: <School className="w-6 h-6 text-emerald-600" />,
      color: "bg-emerald-50 text-emerald-600 border-emerald-200"
    },
    {
      name: "The Assam Valley School",
      type: "Heritage Campus",
      icon: <Building2 className="w-6 h-6 text-green-700" />,
      color: "bg-green-50 text-green-700 border-green-200"
    },
    {
      name: "Kendriya Vidyalaya",
      type: "Sangathan",
      icon: <Sparkles className="w-6 h-6 text-amber-600" />,
      color: "bg-amber-50 text-amber-600 border-amber-200"
    },
    {
      name: "Ryan International School",
      type: "Ryan Group",
      icon: <Sparkles className="w-6 h-6 text-blue-600" />,
      color: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      name: "Cambridge",
      type: "International School",
      icon: <BookOpen className="w-6 h-6 text-rose-700" />,
      color: "bg-rose-50 text-rose-700 border-rose-200"
    }
  ];

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? partnerSchools.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev === partnerSchools.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-10 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a237e] mb-2 tracking-tight">
            Schools We've Worked With
          </h2>
          <p className="text-[#3949ab] font-medium text-sm sm:text-base">
            We are proud to partner with respected schools and educational institutions.
          </p>
        </div>

        {/* Carousel / Slider Container */}
        <div className="relative flex items-center">
          {/* Left Arrow Button */}
          <button 
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors shrink-0 -mr-3 z-10"
            aria-label="Previous partner schools"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Cards Row */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 px-4 overflow-hidden">
            {partnerSchools.map((school, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 min-h-[140px]"
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-3 shadow-xs ${school.color}`}>
                  {school.icon}
                </div>
                <h4 className="text-xs sm:text-sm font-extrabold text-slate-800 leading-tight mb-1">
                  {school.name}
                </h4>
                <p className="text-[11px] text-slate-500 font-medium">
                  {school.type}
                </p>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button 
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors shrink-0 -ml-3 z-10"
            aria-label="Next partner schools"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SchoolsWorkedWith;
