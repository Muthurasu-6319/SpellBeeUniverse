import React from 'react';

const ShinyMedalIcon = () => (
  <svg viewBox="0 0 100 100" className="w-20 h-20 filter drop-shadow-md">
    {/* Red Ribbon */}
    <path d="M42 12 L30 48 L46 48 L50 20 Z" fill="#d32f2f" />
    <path d="M58 12 L70 48 L54 48 L50 20 Z" fill="#b71c1c" />
    <path d="M40 12 L50 32 L60 12 Z" fill="#e53935" />
    {/* Ribbon Stripe */}
    <path d="M37 20 L40 48 L44 48 L41 20 Z" fill="#ffeb3b" opacity="0.8" />
    <path d="M63 20 L60 48 L56 48 L59 20 Z" fill="#ffeb3b" opacity="0.8" />
    {/* Gold Medal Outer Rim */}
    <circle cx="50" cy="62" r="24" fill="url(#goldRimGrad)" stroke="#b78103" strokeWidth="1.5" />
    {/* Gold Medal Inner Surface */}
    <circle cx="50" cy="62" r="19" fill="url(#goldSurfaceGrad)" />
    {/* Star inside Medal */}
    <path d="M50 51 L53 58 L60 59 L55 64 L56 71 L50 67 L44 71 L45 64 L40 59 L47 58 Z" fill="#fff9c4" stroke="#d4a017" strokeWidth="1" />
    <defs>
      <linearGradient id="goldRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffe082" />
        <stop offset="50%" stopColor="#ffb300" />
        <stop offset="100%" stopColor="#ff8f00" />
      </linearGradient>
      <linearGradient id="goldSurfaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fff8e1" />
        <stop offset="40%" stopColor="#ffd54f" />
        <stop offset="100%" stopColor="#ffb300" />
      </linearGradient>
    </defs>
  </svg>
);

const ShinyTrophyIcon = () => (
  <svg viewBox="0 0 100 100" className="w-20 h-20 filter drop-shadow-md">
    {/* Cup handles */}
    <path d="M22 28 C22 42 34 50 42 52 L42 44 C36 42 30 36 30 28 C30 22 34 22 36 22 L36 16 C28 16 22 20 22 28 Z" fill="url(#goldCupGrad)" />
    <path d="M78 28 C78 42 66 50 58 52 L58 44 C64 42 70 36 70 28 C70 22 66 22 64 22 L64 16 C72 16 78 20 78 28 Z" fill="url(#goldCupGrad)" />
    {/* Main Cup Body */}
    <path d="M32 16 L68 16 L66 40 C64 52 56 60 50 60 C44 60 36 52 34 40 Z" fill="url(#goldCupGrad)" stroke="#d4a017" strokeWidth="1" />
    <ellipse cx="50" cy="16" rx="18" ry="4" fill="#fff9c4" />
    {/* Stem */}
    <path d="M46 60 L54 60 L56 72 L44 72 Z" fill="#ffb300" />
    {/* Base Pedestal */}
    <rect x="36" y="72" width="28" height="6" rx="2" fill="#ffd54f" />
    <rect x="32" y="78" width="36" height="14" rx="3" fill="#422216" stroke="#2e1308" strokeWidth="1" />
    {/* Gold Plaque on Base */}
    <rect x="38" y="82" width="24" height="6" rx="1" fill="#ffecb3" stroke="#ffa000" strokeWidth="0.5" />
    {/* Star on Cup */}
    <polygon points="50,28 52,33 57,34 53,38 54,43 50,40 46,43 47,38 43,34 48,33" fill="#fffde7" />
    <defs>
      <linearGradient id="goldCupGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fff9c4" />
        <stop offset="35%" stopColor="#ffd54f" />
        <stop offset="80%" stopColor="#ffb300" />
        <stop offset="100%" stopColor="#e65100" />
      </linearGradient>
    </defs>
  </svg>
);

const ShinyGiftIcon = () => (
  <svg viewBox="0 0 100 100" className="w-20 h-20 filter drop-shadow-md">
    {/* Box Body */}
    <rect x="24" y="44" width="52" height="42" rx="5" fill="url(#giftBoxGrad)" stroke="#c62828" strokeWidth="1" />
    {/* Box Lid */}
    <rect x="20" y="34" width="60" height="13" rx="3" fill="url(#giftLidGrad)" stroke="#b71c1c" strokeWidth="1" />
    {/* Yellow Vertical Ribbon */}
    <rect x="44" y="34" width="12" height="52" fill="url(#ribbonGrad)" />
    {/* Yellow Horizontal Ribbon on Box */}
    <rect x="24" y="60" width="52" height="10" fill="url(#ribbonGrad)" />
    {/* Bow on Top */}
    <path d="M50 34 C44 22 28 20 32 30 C34 35 44 34 50 35 Z" fill="url(#ribbonGrad)" stroke="#f57f17" strokeWidth="0.8" />
    <path d="M50 34 C56 22 72 20 68 30 C66 35 56 34 50 35 Z" fill="url(#ribbonGrad)" stroke="#f57f17" strokeWidth="0.8" />
    <circle cx="50" cy="34" r="5" fill="#fff59d" stroke="#f57f17" strokeWidth="0.8" />
    <defs>
      <linearGradient id="giftBoxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ef5350" />
        <stop offset="60%" stopColor="#e53935" />
        <stop offset="100%" stopColor="#c62828" />
      </linearGradient>
      <linearGradient id="giftLidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff5252" />
        <stop offset="100%" stopColor="#d32f2f" />
      </linearGradient>
      <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fff9c4" />
        <stop offset="50%" stopColor="#fbc02d" />
        <stop offset="100%" stopColor="#f57f17" />
      </linearGradient>
    </defs>
  </svg>
);

const CompetitionAwardsSection = () => {
  const awards = [
    {
      title: "Certificates",
      subtitle: "(Participants)",
      imageSrc: "/images/award-cert.png",
      isCustomImage: true
    },
    {
      title: "Medals",
      subtitle: "(Finalists)",
      component: <ShinyMedalIcon />
    },
    {
      title: "Trophies",
      subtitle: "(Winners)",
      component: <ShinyTrophyIcon />
    },
    {
      title: "Gifts",
      subtitle: "(All Stages)",
      component: <ShinyGiftIcon />
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-1 bg-yellow-400 rounded-full inline-block"></span>
            <span className="text-[#1a237e] font-extrabold tracking-wider text-xs sm:text-sm uppercase">
              Awards & Recognition
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a237e] mb-3 tracking-tight">
            Every Milestone Deserves to be Celebrated.
          </h2>
          <p className="text-[#3949ab] font-medium text-base md:text-lg max-w-2xl">
            From participation certificates to trophies, every achievement is a step towards a brighter future.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <div 
              key={index} 
              className="bg-[#fffdf2] rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center border border-amber-200/60 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 gap-4"
            >
              <div className="h-24 w-24 flex items-center justify-center">
                {award.isCustomImage ? (
                  <img 
                    src={award.imageSrc} 
                    alt={award.title} 
                    className="w-20 h-20 object-contain drop-shadow-md rounded-lg"
                  />
                ) : (
                  award.component
                )}
              </div>
              
              <div>
                <h4 className="text-base sm:text-lg font-extrabold text-[#1a237e]">
                  {award.title}
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-[#3949ab]">
                  {award.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitionAwardsSection;
