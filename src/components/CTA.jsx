import React from 'react';
import { ArrowRight, Bug } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="bg-[#fed940] rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Decorative element */}
          <div className="absolute left-10 md:left-20 top-1/2 -translate-y-1/2 opacity-30 md:opacity-100">
            <div className="relative">
              <Bug className="w-10 h-10 text-black rotate-45 animate-bounce" />
              <svg className="absolute top-6 left-8 w-24 h-12 -z-10" viewBox="0 0 100 50">
                <path d="M0,0 Q40,50 100,-10" fill="none" stroke="#d97706" strokeWidth="2" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>

          <div className="text-center w-full z-10 relative">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a237e] mb-2 tracking-tight">Your SpellBee Journey Starts Here.</h2>
            <p className="text-[#3949ab] font-medium text-sm md:text-base">Register today and give your child an opportunity to learn, compete and shine.</p>
          </div>

          <div className="flex-shrink-0 z-10">
            <button className="bg-[#1a237e] hover:bg-[#121858] text-white font-bold py-3.5 px-8 rounded-full flex items-center gap-2 transition-all hover:gap-3 hover:shadow-lg shadow-blue-900/20 active:scale-95 whitespace-nowrap">
              Register Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CTA;
