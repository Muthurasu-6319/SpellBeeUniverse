import React from 'react';
import { School, GraduationCap, Medal, Trophy } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      value: '500+',
      label: 'Schools',
      icon: School,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-100',
    },
    {
      value: '125,000+',
      label: 'Student Participants',
      icon: GraduationCap,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
      border: 'border-indigo-100',
    },
    {
      value: '10,000+',
      label: 'Medals Awarded',
      icon: Medal,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      border: 'border-amber-100',
    },
    {
      value: '2,000+',
      label: 'Championship Trophies Presented',
      icon: Trophy,
      color: 'text-yellow-600',
      bg: 'bg-yellow-50',
      border: 'border-yellow-100',
    },
  ];

  return (
    <section className="py-7 sm:py-8 md:py-9 bg-white border-b border-slate-100 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          <div className="text-center lg:text-left w-full lg:w-1/4 max-w-md mx-auto lg:mx-0">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a237e] mb-1.5 tracking-tight">Our Journey</h2>
            <p className="text-slate-500 font-medium text-sm">Growing with young learners across India.</p>
          </div>

          <div className="w-full lg:w-3/4 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6">
            {stats.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3.5 bg-white/90 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border border-amber-100/70 shadow-2xs hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer h-full">
                  <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl ${item.bg} ${item.border} border flex items-center justify-center flex-shrink-0 shadow-xs group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.color}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[#1a237e] group-hover:text-amber-500 transition-colors font-black text-base sm:text-xl leading-tight">
                      {item.value}
                    </h3>
                    <p className="text-slate-600 text-[11px] sm:text-xs font-semibold leading-snug mt-0.5">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
