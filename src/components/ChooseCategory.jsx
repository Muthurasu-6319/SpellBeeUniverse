import React from 'react';
import Link from 'next/link';
import { ArrowRight, GraduationCap } from 'lucide-react';

const ChooseCategory = () => {
  const categories = [
    {
      classes: "Classes 1 - 2",
      title: "Little Learners",
      description: "Building early spelling confidence.",
      bgClass: "bg-[#fdf4cd]", 
      tagBg: "bg-[#fce5a3]", 
      tagText: "text-amber-900",
      btnBg: "bg-[#f5b81a] hover:bg-[#e0a718]",
      btnText: "text-slate-900",
      image: "/images/little-learner-portrait.png",
    },
    {
      classes: "Classes 3 - 5",
      title: "Young Explorers",
      description: "Discovering new words and vocabulary.",
      bgClass: "bg-[#fbe5f1]", 
      tagBg: "bg-[#f9cce5]",
      tagText: "text-pink-900",
      btnBg: "bg-[#ec449c] hover:bg-[#d83d8e]",
      btnText: "text-white",
      image: "/images/young-explorer-portrait.png",
    },
    {
      classes: "Classes 6 - 7",
      title: "Growing Achievers",
      description: "Taking spelling skills to the next level.",
      bgClass: "bg-[#dff3e5]", 
      tagBg: "bg-[#bce6c8]",
      tagText: "text-emerald-900",
      btnBg: "bg-[#18b556] hover:bg-[#159e4b]",
      btnText: "text-white",
      image: "/images/growing-achiever-portrait.png",
    },
    {
      classes: "Classes 8 - 10",
      title: "Future Leaders",
      description: "Challenging advanced vocabulary and communication skills.",
      bgClass: "bg-[#e2effe]", 
      tagBg: "bg-[#bfdafc]",
      tagText: "text-blue-900",
      btnBg: "bg-[#3e8df3] hover:bg-[#357ce0]",
      btnText: "text-white",
      image: "/images/future-leader-portrait.png",
    }
  ];

  return (
    <section className="pt-8 sm:pt-10 md:pt-12 pb-8 sm:pb-10 md:pb-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a237e] mb-3 tracking-tight">Choose Your Category</h2>
          <p className="text-[#3949ab] font-medium text-base sm:text-lg leading-relaxed">Four categories. One exciting journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {categories.map((cat, index) => (
            <div key={index} className={`${cat.bgClass} rounded-[24px] p-5 sm:p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col justify-between group cursor-pointer border border-white/60`}>
              
              {/* Top Row: Classes Badge on left, Round Student Portrait on right */}
              <div className="flex justify-between items-start gap-2 mb-5 relative z-10">
                <span className={`${cat.tagBg} ${cat.tagText} px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-xs whitespace-nowrap group-hover:scale-105 transition-transform duration-200`}>
                  {cat.classes}
                </span>

                {/* Round Student Portrait - Contained cleanly in top section, zero overlap with text */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-md border-2 border-white/90 flex-shrink-0 bg-white/40 group-hover:ring-4 group-hover:ring-white/80 transition-all duration-300">
                  <img 
                    src={cat.image} 
                    alt={cat.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Bottom Content: Title, Description, Button */}
              <div className="relative z-10 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#1a237e] group-hover:text-amber-600 transition-colors mb-2 leading-tight">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-slate-700 mb-6 font-medium leading-relaxed min-h-[44px]">
                    {cat.description}
                  </p>
                </div>
                
                <div className="mt-auto">
                  <Link 
                    href="/competition"
                    className={`${cat.btnBg} ${cat.btnText} font-black py-2.5 px-6 rounded-full inline-flex items-center justify-center gap-2 text-sm transition-all shadow-sm hover:shadow-md group/btn group-hover:scale-105 active:scale-95 w-full sm:w-auto text-center`}
                  >
                    <span>View Category</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseCategory;
