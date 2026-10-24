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

const FAQCategories = () => {
  const categories = [
    {
      id: "general",
      title: "General",
      desc: "About SpellBee Universe, eligibility and more.",
      icon: <Lightbulb className="w-5 h-5 text-amber-500" />,
      iconBg: "bg-amber-100",
      cardBg: "bg-[#fffdf0]",
      borderClass: "border-amber-200/80",
      textAccent: "text-amber-800"
    },
    {
      id: "registration",
      title: "Registration",
      desc: "Sign up, fees and important details.",
      icon: <FileText className="w-5 h-5 text-pink-500" />,
      iconBg: "bg-pink-100",
      cardBg: "bg-[#fff0f5]",
      borderClass: "border-pink-200/80",
      textAccent: "text-pink-700"
    },
    {
      id: "competition",
      title: "Competition",
      desc: "Rounds, format and selection process.",
      icon: <Trophy className="w-5 h-5 text-emerald-600" />,
      iconBg: "bg-emerald-100",
      cardBg: "bg-[#f1f8e9]",
      borderClass: "border-emerald-200/80",
      textAccent: "text-emerald-700"
    },
    {
      id: "preparation",
      title: "Preparation",
      desc: "Study materials, resources and practice tips.",
      icon: <BookOpen className="w-5 h-5 text-blue-500" />,
      iconBg: "bg-blue-100",
      cardBg: "bg-[#f0f7ff]",
      borderClass: "border-blue-200/80",
      textAccent: "text-blue-700"
    },
    {
      id: "parents",
      title: "Parents",
      desc: "Updates, results and certificates.",
      icon: <Users className="w-5 h-5 text-purple-600" />,
      iconBg: "bg-purple-100",
      cardBg: "bg-[#f3e5f5]",
      borderClass: "border-purple-200/80",
      textAccent: "text-purple-700"
    },
    {
      id: "schools",
      title: "Schools",
      desc: "Registration, coordination and support.",
      icon: <School className="w-5 h-5 text-teal-600" />,
      iconBg: "bg-teal-100",
      cardBg: "bg-[#e0f2f1]",
      borderClass: "border-teal-200/80",
      textAccent: "text-teal-800"
    },
    {
      id: "grand-finale",
      title: "Grand Finale",
      desc: "Stage, challenges and recognition.",
      icon: <Star className="w-5 h-5 text-rose-500" />,
      iconBg: "bg-rose-100",
      cardBg: "bg-[#ffebee]",
      borderClass: "border-rose-200/80",
      textAccent: "text-rose-700"
    },
    {
      id: "app-login",
      title: "App / Login",
      desc: "App download and login access.",
      icon: <Smartphone className="w-5 h-5 text-sky-500" />,
      iconBg: "bg-sky-100",
      cardBg: "bg-[#e1f5fe]",
      borderClass: "border-sky-200/80",
      textAccent: "text-sky-700"
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a237e] mb-2 tracking-tight">
            Browse by Category
          </h2>
          <p className="text-[#3949ab] font-medium text-base md:text-lg">
            Find answers to your questions in the right category.
          </p>
        </div>

        {/* 8 Categories Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {categories.map((cat) => (
            <div 
              key={cat.id}
              className={`${cat.cardBg} ${cat.borderClass} border rounded-xl sm:rounded-2xl p-3.5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 min-h-[160px] sm:min-h-[190px]`}
            >
              <div>
                <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl ${cat.iconBg} flex items-center justify-center mb-2.5 sm:mb-4 shadow-xs`}>
                  {cat.icon}
                </div>
                <h3 className="text-sm sm:text-lg font-extrabold text-[#1a237e] mb-1 sm:mb-1.5 leading-tight">
                  {cat.title}
                </h3>
                <p className="text-slate-600 text-[11px] sm:text-sm font-medium leading-relaxed mb-2.5 sm:mb-4">
                  {cat.desc}
                </p>
              </div>

              <a 
                href={`#faq-${cat.id}`}
                className={`inline-flex items-center gap-1 font-bold text-[11px] sm:text-sm ${cat.textAccent} hover:underline mt-auto`}
              >
                <span>View FAQs</span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQCategories;
