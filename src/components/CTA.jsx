import React from 'react';
import Link from 'next/link';
import { ArrowRight, Bug } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-6 sm:py-8 md:py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="bg-[#fed940] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-amber-300/60 group">
          
          {/* Decorative element */}
          <div className="absolute left-6 md:left-20 top-1/2 -translate-y-1/2 opacity-20 md:opacity-100 select-none pointer-events-none">
            <div className="relative">
              <Bug className="w-8 h-8 md:w-10 md:h-10 text-slate-900 rotate-45 animate-bounce-slow group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 cursor-pointer" />
              <svg className="absolute top-6 left-8 w-24 h-12 -z-10" viewBox="0 0 100 50">
                <path d="M0,0 Q40,50 100,-10" fill="none" stroke="#d97706" strokeWidth="2" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>

          <div className="text-center md:text-left flex-1 md:pl-28 lg:pl-32 z-10 relative">
            <h2 className="text-2xl md:text-3xl font-black text-[#1a237e] mb-2 tracking-tight group-hover:text-[#0d1e4c] transition-colors">Your SpellBee Journey Starts Here.</h2>
            <p className="text-[#3949ab] font-medium text-sm md:text-base max-w-xl mx-auto md:mx-0 leading-relaxed">Register today and give your child an opportunity to learn, compete and shine.</p>
          </div>

          <div className="w-full sm:w-auto flex justify-center flex-shrink-0 z-10">
            <Link 
              href="/register"
              className="bg-[#1a237e] hover:bg-[#121858] text-white font-black py-3.5 px-8 rounded-full inline-flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 hover:shadow-xl shadow-blue-900/20 whitespace-nowrap group/btn cursor-pointer w-full sm:w-auto text-center"
            >
              <span>Register Now</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-200" />
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CTA;
