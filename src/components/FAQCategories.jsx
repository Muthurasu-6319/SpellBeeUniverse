"use client";
import React from 'react';
import { 
  Lightbulb, 
  FileText, 
  Trophy, 
  BookOpen, 
  Users, 
  School, 
  Star, 
  Smartphone, 
  ArrowRight 
} from 'lucide-react';

const FAQCategories = ({ onSelectCategory }) => {
  const categories = [
    {
      id: "general",
      title: "General",
      desc: "About SpellBee Universe, eligibility & rules.",
      icon: <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />,
      iconBg: "bg-amber-100",
      cardBg: "bg-[#fffdf0]",
      borderClass: "border-amber-200/80 hover:border-amber-400",
      textAccent: "text-amber-800"
    },
    {
      id: "registration",
      title: "Registration",
      desc: "Sign up, fees & step-by-step entry.",
      icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" />,
      iconBg: "bg-pink-100",
      cardBg: "bg-[#fff0f5]",
      borderClass: "border-pink-200/80 hover:border-pink-400",
      textAccent: "text-pink-700"
    },
    {
      id: "competition",
      title: "Competition",
      desc: "3 rounds format, judging & stage rounds.",
      icon: <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />,
      iconBg: "bg-emerald-100",
      cardBg: "bg-[#f1f8e9]",
      borderClass: "border-emerald-200/80 hover:border-emerald-400",
      textAccent: "text-emerald-700"
    },
    {
      id: "preparation",
      title: "Preparation",
      desc: "Word banks, mock tests & phonetics audio.",
      icon: <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />,
      iconBg: "bg-blue-100",
      cardBg: "bg-[#f0f7ff]",
      borderClass: "border-blue-200/80 hover:border-blue-400",
      textAccent: "text-blue-700"
    },
    {
      id: "parents",
      title: "Parents",
      desc: "Score updates, certificates & guidance.",
      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />,
      iconBg: "bg-purple-100",
      cardBg: "bg-[#f3e5f5]",
      borderClass: "border-purple-200/80 hover:border-purple-400",
      textAccent: "text-purple-700"
    },
    {
      id: "schools",
      title: "Schools",
      desc: "Institutional tie-ups & exam kits.",
      icon: <School className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />,
      iconBg: "bg-teal-100",
      cardBg: "bg-[#e0f2f1]",
      borderClass: "border-teal-200/80 hover:border-teal-400",
      textAccent: "text-teal-800"
    },
    {
      id: "grand-finale",
      title: "Grand Finale",
      desc: "Buzzer rounds, podiums, cash & trophies.",
      icon: <Star className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500" />,
      iconBg: "bg-rose-100",
      cardBg: "bg-[#ffebee]",
      borderClass: "border-rose-200/80 hover:border-rose-400",
      textAccent: "text-rose-700"
    },
    {
      id: "app-login",
      title: "App / Login",
      desc: "Play Store app download & credentials.",
      icon: <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-sky-500" />,
      iconBg: "bg-sky-100",
      cardBg: "bg-[#e1f5fe]",
      borderClass: "border-sky-200/80 hover:border-sky-400",
      textAccent: "text-sky-700"
    }
  ];

  const handleCardClick = (id) => {
    if (onSelectCategory) {
      onSelectCategory(id);
    }
    const elem = document.getElementById(`faq-${id}`);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-4 md:py-6 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-3 sm:mb-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a237e] mb-1 tracking-tight">
            Browse by Category
          </h2>
          <p className="text-[#3949ab] font-medium text-xs sm:text-sm">
            Quickly jump to answers in your preferred section.
          </p>
        </div>

        {/* 8 Categories Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {categories.map((cat) => (
            <div 
              key={cat.id}
              onClick={() => handleCardClick(cat.id)}
              className={`${cat.cardBg} ${cat.borderClass} border rounded-xl p-3 sm:p-4 flex flex-col justify-between shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 min-h-[135px] sm:min-h-[150px] group cursor-pointer`}
            >
              <div>
                <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg ${cat.iconBg} flex items-center justify-center mb-2 shadow-2xs group-hover:scale-110 transition-transform duration-300`}>
                  {cat.icon}
                </div>
                <h3 className="text-xs sm:text-sm font-extrabold text-[#1a237e] mb-0.5 leading-snug group-hover:text-yellow-600 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-slate-600 text-[11px] sm:text-xs font-medium leading-relaxed mb-2 line-clamp-2">
                  {cat.desc}
                </p>
              </div>

              <div 
                className={`inline-flex items-center gap-1 font-bold text-[11px] sm:text-xs ${cat.textAccent} mt-auto`}
              >
                <span>View FAQs</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQCategories;
