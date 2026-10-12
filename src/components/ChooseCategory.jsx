import React from 'react';
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
      image: "/images/little-learner.png",
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
      image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Jack&backgroundColor=fbe5f1",
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
      image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sophia&backgroundColor=dff3e5",
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
      image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Liam&backgroundColor=e2effe",
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-10 lg:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight" style={{color: '#1a237e'}}>Choose Your Category</h2>
          <p className="text-[#3949ab] font-medium text-lg">Four categories. One exciting journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div key={index} className={`${cat.bgClass} rounded-[24px] p-6 lg:p-7 relative overflow-hidden transition-transform duration-300 hover:-translate-y-1`}>
              
              <div className="flex justify-between items-start mb-24 relative z-10">
                <span className={`${cat.tagBg} ${cat.tagText} px-4 py-1.5 rounded-full text-sm font-bold shadow-sm`}>
                  {cat.classes}
                </span>
              </div>
              
              {/* Student Image */}
              <div className="absolute -top-4 -right-4 w-44 h-44 pointer-events-none z-0">
                <img 
                  src={cat.image} 
                  alt={cat.title}
                  className="w-full h-full object-cover object-top rounded-full drop-shadow-md"
                />
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight" style={{color: '#1a237e'}}>{cat.title}</h3>
                <p className="text-sm text-slate-700 mb-6 font-medium leading-relaxed min-h-[44px]">
                  {cat.description}
                </p>
                
                <button className={`${cat.btnBg} ${cat.btnText} font-bold py-2.5 px-6 rounded-full flex items-center gap-2 text-sm transition-all shadow-sm hover:shadow-md hover:gap-3`}>
                  View Category <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseCategory;
