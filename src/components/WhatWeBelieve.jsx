import React from 'react';
import { Smile, User, Trophy, Star } from 'lucide-react';

const WhatWeBelieve = () => {
  const values = [
    {
      title: "Learning Should Be Fun",
      description: "When learning is enjoyable, children stay curious and achieve more.",
      bgClass: "bg-[#fefce8]",
      borderClass: "border-amber-100",
      iconBg: "bg-amber-400",
      icon: Smile
    },
    {
      title: "Every Child Can Grow",
      description: "Every child has unique talents and the right support helps them shine.",
      bgClass: "bg-[#fdf2f8]",
      borderClass: "border-pink-100",
      iconBg: "bg-pink-500",
      icon: User
    },
    {
      title: "Competition Can Build Confidence",
      description: "Healthy competition creates focus, resilience and self-belief.",
      bgClass: "bg-[#f0fdf4]",
      borderClass: "border-emerald-100",
      iconBg: "bg-emerald-500",
      icon: Trophy
    },
    {
      title: "Every Achievement Deserves Recognition",
      description: "Every effort, big or small, matters and deserves to be celebrated.",
      bgClass: "bg-[#eff6ff]",
      borderClass: "border-blue-100",
      iconBg: "bg-blue-500",
      icon: Star
    }
  ];

  return (
    <section className="py-8 sm:py-10 md:py-12 bg-[#fffff8] relative border-y border-amber-100/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-6 sm:mb-8 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a237e] mb-1.5 tracking-tight">What We Believe</h2>
          <p className="text-[#3949ab] font-medium text-sm sm:text-base max-w-md mx-auto sm:mx-0">Our core values guide everything we do.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {values.map((val, index) => (
            <div key={index} className={`${val.bgClass} rounded-2xl p-5 sm:p-6 shadow-2xs border ${val.borderClass} hover:-translate-y-2 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group cursor-pointer text-left`}>
              <div>
                <div className={`w-11 h-11 ${val.iconBg} rounded-xl flex items-center justify-center mb-4 shadow-xs border-2 border-white group-hover:scale-115 group-hover:rotate-12 group-hover:shadow-md transition-all duration-300`}>
                  <val.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#1a237e] group-hover:text-amber-600 transition-colors mb-2 leading-snug min-h-[44px] sm:min-h-[48px] flex items-start">
                  {val.title}
                </h3>
                <p className="text-slate-600 font-medium text-xs sm:text-sm leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBelieve;
