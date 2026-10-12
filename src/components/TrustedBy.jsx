import React from 'react';
import { Leaf, Sun, Shield, Waves, ArrowRight } from 'lucide-react';

const TrustedBy = () => {
  return (
    <section className="py-8 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          <div className="w-full lg:w-1/4 text-center lg:text-left">
            <h2 className="text-xl font-bold text-slate-800 mb-2">Trusted by Schools & Educators</h2>
            <p className="text-slate-500 text-xs font-medium leading-relaxed">Across India, we work with forward-thinking schools and educators to build better learners.</p>
          </div>
          
          <div className="w-full lg:w-3/4 flex-1">
            <div className="flex flex-wrap md:flex-nowrap items-center justify-center lg:justify-between gap-8 md:gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
              
              <div className="flex items-center gap-3 min-w-fit">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-800 leading-tight">Green Valley</span>
                  <span className="text-[11px] text-slate-500 font-medium">Public School</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 min-w-fit">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <Sun className="w-5 h-5 text-amber-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-800 leading-tight">Sunrise</span>
                  <span className="text-[11px] text-slate-500 font-medium">International School</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 min-w-fit">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-800" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-800 leading-tight">Bright Future</span>
                  <span className="text-[11px] text-slate-500 font-medium">Academy</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 min-w-fit">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-800 leading-tight">Maple Leaf</span>
                  <span className="text-[11px] text-slate-500 font-medium">School</span>
                </div>
              </div>

              <div className="flex items-center gap-3 min-w-fit">
                <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center">
                  <Waves className="w-5 h-5 text-sky-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-800 leading-tight">Riverside</span>
                  <span className="text-[11px] text-slate-500 font-medium">Public School</span>
                </div>
              </div>

              <div className="hidden lg:flex items-center justify-center p-2 rounded-full hover:bg-slate-200 cursor-pointer transition-colors">
                <ArrowRight className="w-5 h-5 text-slate-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
