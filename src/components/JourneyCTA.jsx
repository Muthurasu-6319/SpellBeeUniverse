import React from 'react';
import { ArrowRight, Send } from 'lucide-react';

const JourneyCTA = ({ 
  title = "Ready to Compete?", 
  description = "Register now and take the first step towards becoming a Spell Master!"
}) => {
  return (
    <section className="relative mt-8">
      {/* Curved top divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 transform -translate-y-[98%]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[45px] md:h-[75px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C76.13,38.16,146.24,53.47,227.13,56.84Z" fill="#fbc02d"></path>
        </svg>
      </div>

      <div className="bg-[#fbc02d] pt-6 pb-14 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-4">
            
            {/* Left Mascot Bee & Flight trail */}
            <div className="flex items-center gap-5">
              <div className="relative shrink-0 flex items-center justify-center">
                <div className="text-5xl sm:text-6xl animate-bounce-slow filter drop-shadow-md select-none">
                  🐝
                </div>
                {/* Dotted flight loop */}
                <svg className="hidden sm:block absolute -left-10 top-0 w-16 h-12 text-[#1a237e]/40" fill="none" viewBox="0 0 100 80">
                  <path d="M10,60 Q30,10 60,40 T90,20" stroke="currentColor" strokeWidth="2.5" strokeDasharray="5 5" fill="none" />
                </svg>
              </div>

              {/* Title & Description */}
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1a237e] tracking-tight mb-1.5">
                  {title}
                </h2>
                <p className="text-slate-800 font-semibold text-sm sm:text-base max-w-xl">
                  {description}
                </p>
              </div>
            </div>

            {/* Right Button & Airplane trail */}
            <div className="flex items-center gap-4 shrink-0">
              <button className="px-7 py-3 rounded-full bg-[#0d1e4c] hover:bg-[#1a237e] text-white font-bold text-sm sm:text-base shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2 group">
                Register Now 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Little paper plane illustration */}
              <div className="hidden lg:block relative select-none">
                <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-xs flex items-center justify-center text-[#1a237e] transform -rotate-12 border border-[#1a237e]/20 shadow-xs">
                  <Send className="w-4 h-4 fill-[#1a237e]/20" />
                </div>
                <svg className="absolute -bottom-4 right-8 w-16 h-8 text-[#1a237e]/40" fill="none" viewBox="0 0 80 40">
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
