import React from 'react';
import { Users, BookOpen, MessageSquare, Trophy, Star, Eye, Sparkles } from 'lucide-react';

const WhySchoolsParticipate = () => {
  const benefits = [
    {
      title: "Student Engagement",
      description: "Create genuine excitement around language learning, spelling games, and classroom teamwork.",
      stat: "+85% Participation",
      icon: <Users className="w-5 h-5 text-white" />,
      iconBg: "bg-pink-500",
      cardBg: "bg-[#fff0f5]",
      borderClass: "border-pink-100 hover:border-pink-300",
      glowColor: "from-pink-300/30"
    },
    {
      title: "Vocabulary Development",
      description: "Encourage students to explore word origins, phonetics, and structured vocabulary lists.",
      stat: "3,000+ Word Bank",
      icon: <BookOpen className="w-5 h-5 text-white" />,
      iconBg: "bg-amber-500",
      cardBg: "bg-[#fffdf0]",
      borderClass: "border-amber-100 hover:border-amber-300",
      glowColor: "from-amber-300/30"
    },
    {
      title: "Communication & Oratory",
      description: "Give students real-world opportunities to speak with poise, clarity, and poise under stage lights.",
      stat: "Stage Articulation",
      icon: <MessageSquare className="w-5 h-5 text-white" />,
      iconBg: "bg-emerald-500",
      cardBg: "bg-[#f1f8e9]",
      borderClass: "border-emerald-100 hover:border-emerald-300",
      glowColor: "from-emerald-300/30"
    },
    {
      title: "Healthy Competition",
      description: "Encourage preparation, resilience, sportsmanship, and celebrating mutual milestones.",
      stat: "Goal-Oriented",
      icon: <Trophy className="w-5 h-5 text-white" />,
      iconBg: "bg-blue-500",
      cardBg: "bg-[#f0f7ff]",
      borderClass: "border-blue-100 hover:border-blue-300",
      glowColor: "from-blue-300/30"
    },
    {
      title: "Recognition & Awards",
      description: "Celebrate every milestone with personalized certificates, medals, and trophies for your students.",
      stat: "100% Certified",
      icon: <Star className="w-5 h-5 text-white" />,
      iconBg: "bg-purple-600",
      cardBg: "bg-[#f3e5f5]",
      borderClass: "border-purple-100 hover:border-purple-300",
      glowColor: "from-purple-300/30"
    },
    {
      title: "School Visibility & Pride",
      description: "Showcase your institution's academic excellence on national media and Spell Master stages.",
      stat: "National Showcase",
      icon: <Eye className="w-5 h-5 text-white" />,
      iconBg: "bg-rose-500",
      cardBg: "bg-[#ffebee]",
      borderClass: "border-rose-100 hover:border-rose-300",
      glowColor: "from-rose-300/30"
    }
  ];

  return (
    <section className="pt-2 md:pt-3 pb-10 md:pb-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-7">
          <div className="group/pill inline-flex items-center gap-2 mb-2 cursor-pointer">
            <span className="w-5 group-hover/pill:w-8 h-1 bg-yellow-400 rounded-full inline-block transition-all duration-300"></span>
            <span className="text-[#1a237e] font-extrabold tracking-wider text-xs uppercase group-hover/pill:text-yellow-600 transition-colors">
              Key Benefits
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a237e] mb-1.5 tracking-tight">
            Why Schools Participate
          </h2>
          <p className="text-[#3949ab] font-medium text-sm md:text-base max-w-3xl">
            SpellBee Universe is more than a competition. It&apos;s a complete learning experience that helps your students grow in many ways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`group relative ${benefit.cardBg} ${benefit.borderClass} border rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer overflow-hidden`}
            >
              {/* Subtle top corner gradient shine */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${benefit.glowColor} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-tr-2xl pointer-events-none`}></div>

              <div className="flex items-start gap-3.5 mb-3">
                <div className={`w-11 h-11 rounded-2xl ${benefit.iconBg} flex items-center justify-center shrink-0 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-base font-bold text-[#1a237e] group-hover:text-black transition-colors">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                    {benefit.description}
                  </p>
                </div>
              </div>

              {/* Bottom Micro Stat Pill */}
              <div className="pt-2.5 mt-2 border-t border-black/5 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-700 bg-white/80 px-2.5 py-0.5 rounded-full border border-black/5 shadow-2xs group-hover:bg-white group-hover:scale-105 transition-all inline-flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-500 shrink-0" />
                  {benefit.stat}
                </span>
                <span className="text-[11px] font-bold text-[#1a237e] opacity-0 group-hover:opacity-100 transform translate-x-1 group-hover:translate-x-0 transition-all">
                  Learn more →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySchoolsParticipate;
