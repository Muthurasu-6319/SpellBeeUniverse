import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFFDF5 0%, #FFF5DB 100%)' }}>
      <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="max-w-xl animate-fade-in-up">
          <h2 className="text-sm md:text-base font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-pink-500 to-blue-500 mb-4">
            LEARN. SPELL. GROW. SHINE.
          </h2>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            Turn Words Into <br/>
            <span className="text-blue-900">Confidence.</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            SpellBee Universe is an exciting spelling and vocabulary competition that gives young learners the opportunity to strengthen their English, build confidence and showcase their skills on a bigger stage.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <button className="px-8 py-4 rounded-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg shadow-xl shadow-yellow-400/30 transition-all transform hover:scale-105">
              Register Now →
            </button>
            <button className="px-8 py-4 rounded-full border-2 border-blue-900 text-blue-900 font-bold text-lg hover:bg-blue-900 hover:text-white transition-all">
              Explore the Competition
            </button>
          </div>
          <p className="text-sm font-semibold text-blue-900/80">For students from Classes 1–10</p>
        </div>

        {/* Image Content */}
        <div className="relative animate-fade-in flex justify-center items-center">
          {/* Big Yellow Circle Background */}
          <div className="absolute w-[120%] aspect-square bg-yellow-400 rounded-full -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-75 md:scale-90 lg:scale-100 opacity-90"></div>
          
          {/* Optional decorative shapes around the circle */}
          <div className="absolute w-64 h-64 bg-yellow-200 rounded-full -z-20 -top-10 -left-10 opacity-60"></div>
          <div className="absolute w-96 h-96 bg-yellow-300 rounded-[40%] -z-20 -bottom-20 -right-10 opacity-60 rotate-45"></div>
          
          <Image 
            src="/images/image.png" 
            alt="Students participating in SpellBee Universe" 
            width={1583} 
            height={994}
            priority
            className="relative z-10 w-full h-auto object-contain"
          />
          

        </div>
      </div>
      
      {/* Bottom Trusted Bar */}
      <div className="container mx-auto px-8 mt-24">
        <div className="border-t border-yellow-500/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xs">
            <h3 className="font-bold text-blue-900 text-lg mb-1">Trusted by Schools & Educators</h3>
            <p className="text-sm text-gray-600">Across India, we work with forward-thinking schools and educators to build better learners.</p>
          </div>
          <div className="flex items-center gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer flex-wrap">
            <div className="flex items-center gap-2 font-bold text-gray-800"><span className="text-2xl text-green-600">🍃</span> Green Valley</div>
            <div className="flex items-center gap-2 font-bold text-gray-800"><span className="text-2xl text-yellow-500">☀️</span> Sunrise Intl</div>
            <div className="flex items-center gap-2 font-bold text-gray-800"><span className="text-2xl text-blue-600">🎓</span> Bright Future</div>
            <div className="flex items-center gap-2 font-bold text-gray-800"><span className="text-2xl text-red-500">🍁</span> Maple Leaf</div>
          </div>
        </div>
      </div>
    </section>
  );
}
