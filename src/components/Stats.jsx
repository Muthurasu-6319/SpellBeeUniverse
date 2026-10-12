import React from 'react';
import { Building2, Users, MapPin, CalendarDays } from 'lucide-react';

const Stats = () => {
  return (
    <section className="py-12 bg-[#fffff8] border-y border-amber-100/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          
          <div className="text-center md:text-left w-full md:w-1/3 lg:w-1/4">
            <h2 className="text-2xl font-bold text-[#1a237e] mb-1 tracking-tight">Our Journey</h2>
            <p className="text-slate-500 font-medium text-sm">Growing with young learners across India.</p>
          </div>

          <div className="w-full md:w-2/3 lg:w-3/4 flex flex-wrap justify-center md:justify-end items-center gap-8 lg:gap-16">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-[#1a237e] font-bold text-lg leading-tight">500+</h3>
                <p className="text-slate-500 text-xs font-medium">Schools</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-[#1a237e] font-bold text-lg leading-tight">50,000+</h3>
                <p className="text-slate-500 text-xs font-medium">Students</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-[#1a237e] font-bold text-lg leading-tight">20+</h3>
                <p className="text-slate-500 text-xs font-medium">Cities</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                <CalendarDays className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-[#1a237e] font-bold text-lg leading-tight">25+</h3>
                <p className="text-slate-500 text-xs font-medium">Events</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
