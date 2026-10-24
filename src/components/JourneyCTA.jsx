import React from 'react';
import Link from 'next/link';
import { ArrowRight, Send } from 'lucide-react';

const JourneyCTA = ({ 
  title = "Ready to Compete?", 
  description = "Register now and take the first step towards becoming a Spell Master!"
}) => {
  return (
    <section className="relative mt-2 sm:mt-3">
      {/* Curved top divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 transform -translate-y-[98%]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[26px] md:h-[38px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C76.13,38.16,146.24,53.47,227.13,56.84Z" fill="#fbc02d"></path>
        </svg>
      </div>

      <div className="bg-[#fbc02d] pt-3 pb-7 sm:pb-9 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 py-2">
            
            {/* Left Mascot & Title */}
            <div className="flex items-center gap-4">
              <div className="relative shrink-0 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="SpellBee Mascot" 
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain animate-bounce-slow filter drop-shadow-md select-none hover:scale-125 transition-transform duration-300 cursor-pointer" 
                />
                {/* Dotted flight loop */}
                <svg className="hidden sm:block absolute -left-8 top-0 w-14 h-10 text-[#1a237e]/40" fill="none" viewBox="0 0 100 80">
                  <path d="M10,60 Q30,10 60,40 T90,20" stroke="currentColor" strokeWidth="2.5" strokeDasharray="5 5" fill="none" />
                </svg>
              </div>

              {/* Title & Description */}
              <div className="text-left">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#1a237e] tracking-tight mb-1">
                  {title}
                </h2>
                <p className="text-slate-800 font-semibold text-xs sm:text-sm max-w-xl leading-relaxed">
                  {description}
                </p>
              </div>
            </div>

            {/* Right Button & Airplane trail */}
            <div className="w-full sm:w-auto flex items-center justify-center gap-3 shrink-0">
              <Link 
                href="/register" 
                className="relative overflow-hidden px-6 py-2.5 sm:py-3 rounded-full bg-[#0d1e4c] hover:bg-[#1a237e] text-white font-extrabold text-xs sm:text-sm shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2 group cursor-pointer w-full sm:w-auto text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Register Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                </span>
                <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
              </Link>

              {/* Little paper plane illustration */}
              <div className="hidden lg:block relative select-none animate-float-slow">
                <div className="w-9 h-9 rounded-full bg-white/30 backdrop-blur-xs flex items-center justify-center text-[#1a237e] transform -rotate-12 border border-[#1a237e]/20 shadow-xs hover:scale-115 transition-transform cursor-pointer">
                  <Send className="w-3.5 h-3.5 fill-[#1a237e]/20" />
                </div>
                <svg className="absolute -bottom-3 right-7 w-14 h-6 text-[#1a237e]/40" fill="none" viewBox="0 0 80 40">
                  <path d="M70,30 Q40,5 10,25" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" fill="none" />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyCTA;
