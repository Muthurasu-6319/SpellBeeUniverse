import React from 'react';
import { ArrowRight, FileText, Mic, Trophy } from 'lucide-react';

const CompetitionRounds = () => {
  const rounds = [
    {
      number: "01",
      icon: <FileText className="w-5 h-5 text-amber-600" />,
      title: "Written Round",
      description: "All registered participants take the written examination.",
      bgClass: "bg-[#fffdf2]",
      badgeBg: "bg-[#fbc02d]",
      iconBg: "bg-[#fff9c4]",
      textColor: "text-[#1a237e]",
      btnColor: "text-amber-800 bg-[#fff59d]/40 hover:bg-[#fff59d]/70"
    },
    {
      number: "02",
      icon: <Mic className="w-5 h-5 text-pink-600" />,
      title: "Oral Round",
      description: "Qualified participants take part in interactive oral rounds at school.",
      bgClass: "bg-[#fff0f5]",
      badgeBg: "bg-[#ec407a]",
      iconBg: "bg-[#f8bbd0]",
      textColor: "text-[#880e4f]",
      btnColor: "text-pink-800 bg-pink-100/60 hover:bg-pink-100"
    },
    {
      number: "03",
      icon: <Trophy className="w-5 h-5 text-blue-600" />,
      title: "Grand Finale",
      description: "Selected finalists compete in an exciting stage competition with multiple challenges.",
      bgClass: "bg-[#f0f7ff]",
      badgeBg: "bg-[#2196f3]",
      iconBg: "bg-[#bbdefb]",
      textColor: "text-[#0d47a1]",
      btnColor: "text-blue-800 bg-blue-100/60 hover:bg-blue-100"
    }
  ];

  return (
    <section className="py-7 sm:py-9 md:py-11 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-center">
          
          {/* Left Content */}
          <div className="lg:w-2/5 shrink-0 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2 sm:mb-2.5">
              <span className="w-6 h-1 bg-yellow-400 rounded-full inline-block"></span>
              <span className="text-[#1a237e] font-extrabold tracking-wider text-xs sm:text-sm uppercase">
                Three Rounds
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1a237e] mb-2.5 sm:mb-3 tracking-tight leading-tight">
              The Competition Rounds
            </h2>
            
            <p className="text-[#3949ab] font-medium text-sm sm:text-base md:text-lg mb-5 sm:mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              A structured journey to help every student learn, perform and grow.
            </p>
            
            <div className="flex justify-center lg:justify-start">
              <button className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-gray-900 font-extrabold shadow-md shadow-yellow-400/20 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 text-xs sm:text-sm group cursor-pointer">
                Explore Competition Rounds <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* Right Process Cards */}
          <div className="lg:w-3/5 flex flex-col sm:flex-row items-stretch gap-3.5 sm:gap-4 relative">
            {rounds.map((round, index) => (
              <React.Fragment key={index}>
                <div className={`${round.bgClass} rounded-2xl p-4 sm:p-5 flex-1 w-full flex flex-col relative border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 min-h-[210px] sm:min-h-[225px] group cursor-pointer text-left`}>
                  
                  {/* Top Header with Badges */}
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center font-extrabold text-xs text-white shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-300 ${round.badgeBg}`}>
                      {round.number}
                    </div>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-xs shrink-0 group-hover:scale-115 group-hover:rotate-6 group-hover:shadow-md transition-all duration-300 ${round.iconBg}`}>
                      {round.icon}
                    </div>
                  </div>

                  <h3 className={`text-sm sm:text-base font-extrabold mb-1.5 sm:mb-2 group-hover:text-amber-600 transition-colors ${round.textColor}`}>{round.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-4 flex-grow font-medium">
                    {round.description}
                  </p>

                  <button className={`w-fit px-3.5 py-1.5 rounded-full font-bold text-xs transition-all flex items-center gap-1.5 group-hover:scale-105 group-hover:shadow-xs ${round.btnColor}`}>
                    Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                
                {/* Connecting Arrow between cards */}
                {index < rounds.length - 1 && (
                  <div className="hidden sm:flex items-center justify-center shrink-0 w-2 text-amber-500 animate-float-slow">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompetitionRounds;
