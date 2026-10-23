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
    <section className="py-12 bg-[#fffff8] border-y border-amber-100/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          <div className="text-center lg:text-left w-full lg:w-1/4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a237e] mb-1.5 tracking-tight">Our Journey</h2>
            <p className="text-slate-500 font-medium text-sm">Growing with young learners across India.</p>
          </div>

          <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-3.5 bg-white/80 p-3.5 rounded-2xl border border-amber-100/70 shadow-2xs hover:shadow-xs transition-shadow">
                  <div className={`w-11 h-11 rounded-xl ${item.bg} ${item.border} border flex items-center justify-center flex-shrink-0 shadow-xs`}>
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[#1a237e] font-black text-lg sm:text-xl leading-tight">
                      {item.value}
                    </h3>
                    <p className="text-slate-600 text-xs font-semibold leading-tight mt-0.5">
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
