import React from 'react';

const ShinyMedalIcon = () => (
  <svg viewBox="0 0 100 100" className="w-14 h-14 sm:w-16 sm:h-16 filter drop-shadow-md">
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
  <svg viewBox="0 0 100 100" className="w-14 h-14 sm:w-16 sm:h-16 filter drop-shadow-md">
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
  <svg viewBox="0 0 100 100" className="w-14 h-14 sm:w-16 sm:h-16 filter drop-shadow-md">
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

const ShinyMediaIcon = () => (
  <svg viewBox="0 0 100 100" className="w-14 h-14 sm:w-16 sm:h-16 filter drop-shadow-md">
    {/* Broadcast Signal Waves */}
    <path d="M72 32 C78 38 82 46 82 55 C82 64 78 72 72 78" fill="none" stroke="url(#signalGrad)" strokeWidth="3" strokeLinecap="round" />
    <path d="M66 38 C70 43 73 49 73 55 C73 61 70 67 66 72" fill="none" stroke="url(#signalGrad)" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M60 44 C62 47 64 51 64 55 C64 59 62 63 60 66" fill="none" stroke="url(#signalGrad)" strokeWidth="2" strokeLinecap="round" />
    
    {/* Camera Body */}
    <rect x="16" y="36" width="40" height="36" rx="8" fill="url(#cameraBodyGrad)" stroke="#1565c0" strokeWidth="1" />
    
    {/* Camera Top Handle */}
    <path d="M26 36 L26 28 C26 25 46 25 46 28 L46 36" fill="none" stroke="url(#cameraAccentGrad)" strokeWidth="3" strokeLinecap="round" />
    
    {/* Camera Lens Cone */}
    <polygon points="56,46 72,36 72,72 56,62" fill="url(#cameraLensGrad)" stroke="#0d47a1" strokeWidth="0.8" />
    
    {/* Lens Center Circle */}
    <ellipse cx="72" cy="54" rx="2.5" ry="16" fill="#bbdefb" />
    
    {/* Camera Front Sensor / Lens Element */}
    <circle cx="36" cy="54" r="10" fill="url(#lensCircleGrad)" stroke="#90caf9" strokeWidth="1.5" />
    <circle cx="36" cy="54" r="6" fill="#0d47a1" />
    <circle cx="34" cy="52" r="2" fill="#ffffff" opacity="0.9" />

    {/* Live Badge on Camera */}
    <rect x="20" y="40" width="16" height="7" rx="3.5" fill="#d32f2f" />
    <circle cx="23.5" cy="43.5" r="1.5" fill="#ffffff" className="animate-pulse" />
    <text x="27" y="45.5" fill="#ffffff" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif">LIVE</text>

    {/* Sparkling Stars */}
    <polygon points="20,24 21.5,27.5 25,29 21.5,30.5 20,34 18.5,30.5 15,29 18.5,27.5" fill="#ffeb3b" />
    <polygon points="76,20 77,22.5 79.5,23.5 77,24.5 76,27 75,24.5 72.5,23.5 75,22.5" fill="#ffeb3b" />

    <defs>
      <linearGradient id="cameraBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#42a5f5" />
        <stop offset="50%" stopColor="#1e88e5" />
        <stop offset="100%" stopColor="#1565c0" />
      </linearGradient>
      <linearGradient id="cameraLensGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#29b6f6" />
        <stop offset="60%" stopColor="#0288d1" />
        <stop offset="100%" stopColor="#01579b" />
      </linearGradient>
      <linearGradient id="cameraAccentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffd54f" />
        <stop offset="100%" stopColor="#ffb300" />
      </linearGradient>
      <linearGradient id="lensCircleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e3f2fd" />
        <stop offset="50%" stopColor="#64b5f6" />
        <stop offset="100%" stopColor="#1976d2" />
      </linearGradient>
      <linearGradient id="signalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffb300" />
        <stop offset="100%" stopColor="#e91e63" />
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
    },
    {
      title: "Media Presence",
      subtitle: "(Social Media Live & Coverage)",
      component: <ShinyMediaIcon />
    }
  ];

  return (
    <section className="py-7 sm:py-9 md:py-11 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-5 sm:mb-7 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-2 sm:mb-2.5">
            <span className="w-6 h-1 bg-yellow-400 rounded-full inline-block"></span>
            <span className="text-[#1a237e] font-extrabold tracking-wider text-xs sm:text-sm uppercase">
              Awards & Recognition
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1a237e] mb-2 sm:mb-2.5 tracking-tight">
            Every Milestone Deserves to be Celebrated.
          </h2>
          <p className="text-[#3949ab] font-medium text-sm sm:text-base md:text-lg max-w-2xl mx-auto sm:mx-0 leading-relaxed">
            From participation certificates to trophies, gifts and national media coverage, every achievement is a step towards a brighter future.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
          {awards.map((award, index) => (
            <div 
              key={index} 
              className={`bg-[#fffdf2] rounded-2xl p-3.5 sm:p-5 flex flex-col items-center justify-center text-center border border-amber-200/60 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-amber-300 transition-all duration-300 gap-2 sm:gap-2.5 group cursor-pointer ${
                index === awards.length - 1 ? 'col-span-2 sm:col-span-1 max-w-xs sm:max-w-none mx-auto w-full' : ''
              }`}
            >
              <div className="h-16 w-16 sm:h-20 sm:w-20 flex items-center justify-center group-hover:scale-115 group-hover:rotate-6 transition-transform duration-300">
                {award.isCustomImage ? (
                  <img 
                    src={award.imageSrc} 
                    alt={award.title} 
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain drop-shadow-md rounded-lg group-hover:scale-110 transition-transform"
                  />
                ) : (
                  award.component
                )}
              </div>
              
              <div>
                <h4 className="text-xs sm:text-sm lg:text-base font-extrabold text-[#1a237e] group-hover:text-amber-600 transition-colors leading-tight mb-0.5">
                  {award.title}
                </h4>
                <p className="text-[10px] sm:text-xs font-semibold text-[#3949ab] leading-snug">
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
