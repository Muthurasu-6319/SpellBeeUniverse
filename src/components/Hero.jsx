import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[460px] md:min-h-[480px] lg:h-[500px] flex items-center bg-gradient-to-r from-[#FFFDF7] via-[#FFF9EB] to-[#FFF4D6]">
      {/* Background Image: Strictly touching top-0 and bottom-0 (Zero space above & below) */}
      <div 
        className="absolute top-0 bottom-0 right-0 h-full aspect-[1583/994] z-0 select-none pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 100%)',
        }}
      >
        <Image 
          src="/images/image.png" 
          alt="SpellBee Universe Hero Background" 
          fill 
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover object-right-top" 
        />
      </div>

      {/* Subtle overlay for small & medium screens to ensure zero text overlap */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFFDF7] via-[#FFFDF7]/90 via-40% to-transparent lg:hidden z-0 pointer-events-none" />

      {/* Hero Content (Foreground) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10 py-6 sm:py-8">
        <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[460px] space-y-4 animate-fade-in-up">
          {/* Badge with micro-interaction */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400 text-slate-950 font-black text-xs sm:text-sm tracking-wider uppercase shadow-xs hover:scale-105 transition-all duration-300 cursor-pointer select-none">
            <img src="/logo.png" alt="SpellBee" className="w-4 h-4 object-contain inline-block animate-wiggle" />
            <span>LEARN • SPELL • GROW • SHINE</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-black text-slate-950 leading-[1.14] tracking-tight">
            Turn Words Into <br className="hidden sm:inline" />
            <span className="text-[#1a237e] hover:text-amber-500 transition-colors duration-300">
              Confidence.
            </span>
          </h1>

          {/* Subtitle / Description - Broken into lines so it stacks cleanly downwards without touching image */}
          <p className="text-sm sm:text-base md:text-lg text-slate-700 font-medium leading-relaxed max-w-[420px]">
            SpellBee Universe is an exciting spelling and vocabulary competition that gives young learners the opportunity to strengthen their English, build confidence and showcase their skills on a bigger stage.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
            <Link 
              href="/register" 
              className="px-6 sm:px-7 py-3 rounded-full bg-yellow-400 hover:bg-yellow-500 text-slate-950 font-black text-sm sm:text-base shadow-md shadow-yellow-400/30 transition-all transform hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2 group cursor-pointer w-full sm:w-auto"
            >
              Register Now 
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
            <Link 
              href="/competition" 
              className="px-6 sm:px-7 py-3 rounded-full border-2 border-[#1a237e] text-[#1a237e] font-black text-sm sm:text-base bg-white/90 hover:bg-[#1a237e] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xs inline-flex items-center justify-center w-full sm:w-auto text-center"
            >
              Explore the Competition
            </Link>
          </div>

          {/* Eligibility Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200 text-blue-950 text-xs sm:text-sm font-bold shadow-2xs hover:shadow-sm hover:scale-105 transition-all duration-300 cursor-pointer">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>For students from Classes 1–10</span>
          </div>
        </div>
      </div>
    </section>
  );
}
