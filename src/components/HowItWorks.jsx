import { UserCheck, BookOpen, Trophy, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Register",
      description: "Choose your category and complete online registration.",
      icon: UserCheck,
      bg: "bg-amber-400",
      shadow: "shadow-amber-400/30",
    },
    {
      step: "02",
      title: "Learn & Prepare",
      description: "Practice spelling, vocabulary, pronunciation and word usage.",
      icon: BookOpen,
      bg: "bg-pink-500",
      shadow: "shadow-pink-500/30",
    },
    {
      step: "03",
      title: "Compete & Shine",
      description: "Take part in the competition and progress through qualifying rounds.",
      icon: Trophy,
      bg: "bg-emerald-500",
      shadow: "shadow-emerald-500/30",
    },
  ];

  return (
    <section className="py-5 sm:py-6 md:py-8 bg-[#fffff8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="mb-3.5 sm:mb-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a237e] tracking-tight">How It Works</h2>
          <p className="text-[#3949ab] font-medium text-xs sm:text-sm mt-0.5">A simple 3-step journey to success.</p>
        </div>

        {/* Compact Card Container */}
        <div className="bg-[#fffbeb] rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 relative border border-amber-200/60 shadow-2xs overflow-hidden">
          
          {/* Subtle Decorative Badge on top right */}
          <div className="absolute right-6 top-4 hidden md:flex items-center gap-2 select-none pointer-events-none opacity-85 animate-float-slow">
            <span className="text-xs font-bold text-amber-800 bg-amber-200/60 px-3 py-0.5 rounded-full border border-amber-300/50 shadow-2xs inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 inline" />
              Small Steps... Big Achievements!
            </span>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex flex-col gap-2.5 group cursor-pointer p-3 rounded-2xl hover:bg-white/70 hover:shadow-sm hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl ${item.bg} flex items-center justify-center flex-shrink-0 shadow-md ${item.shadow} text-white group-hover:scale-115 group-hover:rotate-6 transition-all duration-300`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-xs font-black text-amber-700/60 tracking-wider">
                      STEP {item.step}
                    </span>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block flex-1 h-[2px] bg-amber-200/80 -mr-4 ml-2" />
                    )}
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#1a237e] group-hover:text-amber-600 transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed min-h-[40px] sm:min-h-[44px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Footer */}
          <div className="mt-5 pt-3.5 border-t border-amber-200/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-xs text-amber-900/80 font-medium">Ready to start your spelling adventure?</p>
            <Link 
              href="/how-it-works"
              className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs sm:text-sm py-2 px-5 rounded-full flex items-center gap-1.5 transition-all hover:gap-2 shadow-xs active:scale-95 shrink-0"
            >
              See How It Works <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
