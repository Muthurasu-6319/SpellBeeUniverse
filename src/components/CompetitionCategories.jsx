import React from 'react';
import { ArrowRight } from 'lucide-react';

const LittleLearnerAvatar = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="50" cy="50" r="48" fill="#fff9c4" />
    <circle cx="50" cy="46" r="24" fill="#ffd54f" />
    {/* Hair */}
    <path d="M28 42 C28 26 72 26 72 42 C72 32 60 22 50 22 C40 22 28 32 28 42 Z" fill="#424242" />
    <circle cx="50" cy="48" r="18" fill="#ffe0b2" />
    {/* Glasses */}
    <circle cx="43" cy="47" r="5" fill="none" stroke="#37474f" strokeWidth="2" />
    <circle cx="57" cy="47" r="5" fill="none" stroke="#37474f" strokeWidth="2" />
    <line x1="48" y1="47" x2="52" y2="47" stroke="#37474f" strokeWidth="2" />
    {/* Eyes */}
    <circle cx="43" cy="47" r="2" fill="#263238" />
    <circle cx="57" cy="47" r="2" fill="#263238" />
    {/* Smile */}
    <path d="M46 56 Q50 60 54 56" fill="none" stroke="#e65100" strokeWidth="2" strokeLinecap="round" />
    {/* Cheeks */}
    <circle cx="38" cy="52" r="3" fill="#ffab91" opacity="0.6" />
    <circle cx="62" cy="52" r="3" fill="#ffab91" opacity="0.6" />
    {/* Shirt */}
    <path d="M30 85 C34 68 66 68 70 85 Z" fill="#fbc02d" />
    <polygon points="50,68 46,75 54,75" fill="#1a237e" />
  </svg>
);

const YoungExplorerAvatar = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="50" cy="50" r="48" fill="#fce4ec" />
    {/* Hair back */}
    <circle cx="50" cy="44" r="25" fill="#5d4037" />
    {/* Pigtails */}
    <circle cx="28" cy="40" r="8" fill="#5d4037" />
    <circle cx="72" cy="40" r="8" fill="#5d4037" />
    <circle cx="28" cy="40" r="3" fill="#ec407a" />
    <circle cx="72" cy="40" r="3" fill="#ec407a" />
    {/* Face */}
    <circle cx="50" cy="47" r="18" fill="#ffe0b2" />
    {/* Hair bangs */}
    <path d="M32 44 Q50 30 68 44 Q50 36 32 44 Z" fill="#5d4037" />
    {/* Eyes */}
    <circle cx="43" cy="47" r="2.5" fill="#263238" />
    <circle cx="57" cy="47" r="2.5" fill="#263238" />
    {/* Smile */}
    <path d="M45 55 Q50 60 55 55" fill="none" stroke="#ad1457" strokeWidth="2" strokeLinecap="round" />
    {/* Cheeks */}
    <circle cx="39" cy="52" r="3" fill="#f48fb1" opacity="0.7" />
    <circle cx="61" cy="52" r="3" fill="#f48fb1" opacity="0.7" />
    {/* Uniform */}
    <path d="M30 85 C34 68 66 68 70 85 Z" fill="#ec407a" />
    <polygon points="50,68 45,76 55,76" fill="#ffffff" />
  </svg>
);

const GrowingAchieverAvatar = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="50" cy="50" r="48" fill="#e8f5e9" />
    {/* Hair */}
    <path d="M28 42 C28 24 72 24 72 42 C72 30 60 20 50 20 C40 20 28 30 28 42 Z" fill="#3e2723" />
    {/* Face */}
    <circle cx="50" cy="47" r="18" fill="#ffd8a8" />
    {/* Eyes */}
    <circle cx="43" cy="46" r="2.5" fill="#263238" />
    <circle cx="57" cy="46" r="2.5" fill="#263238" />
    {/* Smile */}
    <path d="M45 55 Q50 60 55 55" fill="none" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" />
    {/* Cheeks */}
    <circle cx="39" cy="52" r="2.5" fill="#ffab91" opacity="0.5" />
    <circle cx="61" cy="52" r="2.5" fill="#ffab91" opacity="0.5" />
    {/* Uniform */}
    <path d="M30 85 C34 68 66 68 70 85 Z" fill="#43a047" />
    <polygon points="50,68 46,78 54,78" fill="#1b5e20" />
    <circle cx="50" cy="80" r="2" fill="#ffd54f" />
  </svg>
);

const FutureLeaderAvatar = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="50" cy="50" r="48" fill="#e3f2fd" />
    {/* Hair back long */}
    <path d="M26 44 C26 24 74 24 74 44 C76 65 72 75 72 75 L28 75 C28 75 24 65 26 44 Z" fill="#212121" />
    {/* Headband */}
    <path d="M30 35 Q50 28 70 35" fill="none" stroke="#1e88e5" strokeWidth="4" />
    {/* Face */}
    <circle cx="50" cy="48" r="18" fill="#ffccbc" />
    {/* Hair bangs */}
    <path d="M33 43 Q50 34 67 43" fill="none" stroke="#212121" strokeWidth="4" />
    {/* Eyes */}
    <circle cx="43" cy="48" r="2.5" fill="#263238" />
    <circle cx="57" cy="48" r="2.5" fill="#263238" />
    {/* Glasses */}
    <circle cx="43" cy="48" r="5.5" fill="none" stroke="#0d47a1" strokeWidth="1.8" />
    <circle cx="57" cy="48" r="5.5" fill="none" stroke="#0d47a1" strokeWidth="1.8" />
    <line x1="48.5" y1="48" x2="51.5" y2="48" stroke="#0d47a1" strokeWidth="1.8" />
    {/* Smile */}
    <path d="M45 57 Q50 61 55 57" fill="none" stroke="#c2185b" strokeWidth="2" strokeLinecap="round" />
    {/* Uniform */}
    <path d="M30 85 C34 69 66 69 70 85 Z" fill="#1e88e5" />
    <polygon points="50,69 46,79 54,79" fill="#0d47a1" />
  </svg>
);

const CompetitionCategories = () => {
  const categories = [
    {
      number: "01",
      classes: "Classes 1-2",
      title: "Little Learners",
      description: "Building early spelling confidence.",
      bgClass: "bg-[#fffdf0]",
      borderClass: "border-amber-200/60",
      badgeBg: "bg-[#fbc02d]",
      badgeText: "text-white",
      btnBg: "bg-[#fbc02d] hover:bg-yellow-500 text-gray-900 shadow-yellow-300/40",
      avatarComponent: <LittleLearnerAvatar />
    },
    {
      number: "02",
      classes: "Classes 3-5",
      title: "Young Explorers",
      description: "Discovering new words and vocabulary.",
      bgClass: "bg-[#fff0f5]",
      borderClass: "border-pink-200/60",
      badgeBg: "bg-[#ec407a]",
      badgeText: "text-white",
      btnBg: "bg-[#ec407a] hover:bg-pink-600 text-white shadow-pink-300/40",
      avatarComponent: <YoungExplorerAvatar />
    },
    {
      number: "03",
      classes: "Classes 6-7",
      title: "Growing Achievers",
      description: "Taking spelling skills to the next level.",
      bgClass: "bg-[#f1f8e9]",
      borderClass: "border-green-200/60",
      badgeBg: "bg-[#4caf50]",
      badgeText: "text-white",
      btnBg: "bg-[#4caf50] hover:bg-green-600 text-white shadow-green-300/40",
      avatarComponent: <GrowingAchieverAvatar />
    },
    {
      number: "04",
      classes: "Classes 8-10",
      title: "Future Leaders",
      description: "Challenging advanced vocabulary and communication skills.",
      bgClass: "bg-[#f0f7ff]",
      borderClass: "border-blue-200/60",
      badgeBg: "bg-[#2196f3]",
      badgeText: "text-white",
      btnBg: "bg-[#2196f3] hover:bg-blue-600 text-white shadow-blue-300/40",
      avatarComponent: <FutureLeaderAvatar />
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-1 bg-yellow-400 rounded-full inline-block"></span>
            <span className="text-[#1a237e] font-extrabold tracking-wider text-xs sm:text-sm uppercase">
              Four Categories
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a237e] mb-3 tracking-tight">
            Four Categories. One Learning Journey.
          </h2>
          <p className="text-[#3949ab] font-medium text-base md:text-lg max-w-2xl">
            Choose your category and take the first step towards the SpellBee Universe experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className={`${cat.bgClass} ${cat.borderClass} rounded-[2rem] p-7 relative flex flex-col items-center text-center shadow-sm border hover:shadow-md hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Number Badge at Top-Left */}
              <div className={`absolute top-5 left-5 w-9 h-9 rounded-full flex items-center justify-center font-extrabold text-sm shadow-sm ${cat.badgeBg} ${cat.badgeText}`}>
                {cat.number}
              </div>

              {/* Avatar circular frame */}
              <div className="w-24 h-24 rounded-full bg-white p-1.5 shadow-md mb-5 mt-2 border-2 border-white">
                <div className="w-full h-full rounded-full overflow-hidden">
                  {cat.avatarComponent}
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-[#1a237e] mb-1">{cat.classes}</h3>
              <h4 className="text-base font-bold text-[#3949ab] mb-3">{cat.title}</h4>
              
              <p className="text-slate-600 text-sm mb-7 leading-relaxed flex-grow">
                {cat.description}
              </p>

              <button className={`w-full py-3 rounded-full font-bold text-sm shadow-md transition-transform transform active:scale-95 flex items-center justify-center gap-2 ${cat.btnBg}`}>
                View Category <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitionCategories;
