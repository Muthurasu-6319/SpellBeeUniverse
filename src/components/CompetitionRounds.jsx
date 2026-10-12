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
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 lg:items-center">
          
          {/* Left Content */}
          <div className="lg:w-2/5 shrink-0">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-1 bg-yellow-400 rounded-full inline-block"></span>
              <span className="text-[#1a237e] font-extrabold tracking-wider text-xs sm:text-sm uppercase">
                Three Rounds
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a237e] mb-4 tracking-tight leading-tight">
              The Competition Rounds
            </h2>
            
            <p className="text-[#3949ab] font-medium text-base md:text-lg mb-8 leading-relaxed">
              A structured journey to help every student learn, perform and grow.
            </p>
            
            <button className="px-7 py-3 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-gray-900 font-bold shadow-md shadow-yellow-400/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 text-sm">
              Explore Competition Rounds <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Process Cards */}
          <div className="lg:w-3/5 flex flex-col sm:flex-row items-center gap-4 relative">
            {rounds.map((round, index) => (
              <React.Fragment key={index}>
                <div className={`${round.bgClass} rounded-2xl p-6 flex-1 w-full flex flex-col relative border border-black/5 shadow-sm hover:shadow-md transition-all duration-300 min-h-[260px]`}>
                  
                  {/* Top Header with Badges */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-extrabold text-xs text-white shadow-sm shrink-0 ${round.badgeBg}`}>
                      {round.number}
                    </div>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-xs shrink-0 ${round.iconBg}`}>
                      {round.icon}
                    </div>
                  </div>

                  <h3 className={`text-base font-extrabold mb-2.5 ${round.textColor}`}>{round.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 flex-grow">
                    {round.description}
                  </p>

                  <button className={`w-fit px-4 py-1.5 rounded-full font-bold text-xs transition-colors flex items-center gap-1.5 ${round.btnColor}`}>
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                
                {/* Connecting Arrow between cards */}
                {index < rounds.length - 1 && (
                  <div className="hidden sm:flex items-center justify-center shrink-0 w-2 text-slate-300">
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
