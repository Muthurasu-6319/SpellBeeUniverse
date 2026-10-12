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
    <section className="py-16 pb-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a237e] mb-2 tracking-tight">What We Believe</h2>
          <p className="text-[#3949ab] font-medium text-lg">Our core values guide everything we do.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, index) => (
            <div key={index} className={`${val.bgClass} rounded-2xl p-6 lg:p-8 shadow-sm border ${val.borderClass} hover:-translate-y-1 transition-transform duration-300`}>
              <div className={`w-12 h-12 ${val.iconBg} rounded-full flex items-center justify-center mb-6 shadow-sm border-[3px] border-white`}>
                <val.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#1a237e] mb-3 leading-tight">{val.title}</h3>
              <p className="text-[#3949ab] font-medium text-sm leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBelieve;
