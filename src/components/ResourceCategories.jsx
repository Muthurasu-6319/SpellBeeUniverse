import React from 'react';
import { 
  BookOpen, 
  SpellCheck, 
  Volume2, 
  Target, 
  HelpCircle, 
  Users, 
  GraduationCap, 
  Download, 
  ArrowRight 
} from 'lucide-react';

const ResourceCategories = () => {
  const categories = [
    {
      title: "Word Lists",
      desc: "Age and class-wise word lists, commonly misspelled words and more.",
      linkText: "Explore Word Lists",
      href: "#word-lists",
      icon: <BookOpen className="w-5 h-5 text-white" />,
      iconBg: "bg-blue-500",
      cardBg: "bg-[#f0f7ff]",
      borderClass: "border-blue-100",
      accentText: "text-blue-700"
    },
    {
      title: "Vocabulary",
      desc: "Build your vocabulary with useful words, articles and learning tips.",
      linkText: "Explore Vocabulary",
      href: "#vocabulary",
      icon: <SpellCheck className="w-5 h-5 text-white" />,
      iconBg: "bg-pink-500",
      cardBg: "bg-[#fff0f5]",
      borderClass: "border-pink-100",
      accentText: "text-pink-700"
    },
    {
      title: "Pronunciation",
      desc: "Improve your pronunciation with practical guides and examples.",
      linkText: "Explore Pronunciation",
      href: "#pronunciation",
      icon: <Volume2 className="w-5 h-5 text-white" />,
      iconBg: "bg-emerald-500",
      cardBg: "bg-[#f1f8e9]",
      borderClass: "border-emerald-100",
      accentText: "text-emerald-700"
    },
    {
      title: "Practice Zone",
      desc: "Daily words, practice tests and interactive exercises.",
      linkText: "Explore Practice Zone",
      href: "#practice-zone",
      icon: <Target className="w-5 h-5 text-white" />,
      iconBg: "bg-amber-500",
      cardBg: "bg-[#fffdf0]",
      borderClass: "border-amber-100",
      accentText: "text-amber-800"
    },
    {
      title: "Quiz Zone",
      desc: "Fun quizzes to test and improve your skills.",
      linkText: "Explore Quiz Zone",
      href: "#quiz-zone",
      icon: <HelpCircle className="w-5 h-5 text-white" />,
      iconBg: "bg-purple-600",
      cardBg: "bg-[#f3e5f5]",
      borderClass: "border-purple-100",
      accentText: "text-purple-700"
    },
    {
      title: "Parent Resources",
      desc: "Simple tips and guides to help your child learn and grow.",
      linkText: "Explore Parent Resources",
      href: "#parent-resources",
      icon: <Users className="w-5 h-5 text-white" />,
      iconBg: "bg-teal-600",
      cardBg: "bg-[#e0f2f1]",
      borderClass: "border-teal-100",
      accentText: "text-teal-800"
    },
    {
      title: "Teacher Resources",
      desc: "Classroom activities, worksheets and teaching tools.",
      linkText: "Explore Teacher Resources",
      href: "#teacher-resources",
      icon: <GraduationCap className="w-5 h-5 text-white" />,
      iconBg: "bg-rose-500",
      cardBg: "bg-[#ffebee]",
      borderClass: "border-rose-100",
      accentText: "text-rose-700"
    },
    {
      title: "Downloads",
      desc: "Worksheets, word lists, guides and more.",
      linkText: "Explore Downloads",
      href: "#downloads",
      icon: <Download className="w-5 h-5 text-white" />,
      iconBg: "bg-sky-500",
      cardBg: "bg-[#e1f5fe]",
      borderClass: "border-sky-100",
      accentText: "text-sky-700"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-1 bg-yellow-400 rounded-full inline-block"></span>
            <span className="text-[#1a237e] font-extrabold tracking-wider text-xs sm:text-sm uppercase">
              Resource Directory
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a237e] mb-3 tracking-tight">
            Explore Our Resource Categories
          </h2>
          <p className="text-[#3949ab] font-medium text-base md:text-lg max-w-2xl">
            Find exactly what you need to build stronger spelling, vocabulary and communication skills.
          </p>
        </div>

        {/* 8 Categories Grid (2x4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div 
              key={idx}
              className={`${cat.cardBg} ${cat.borderClass} border rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 min-h-[220px]`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl ${cat.iconBg} flex items-center justify-center shadow-xs`}>
                    {cat.icon}
                  </div>
                  <div className="w-6 h-6 rounded-full bg-white/70 flex items-center justify-center text-slate-400">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="text-lg font-extrabold text-[#1a237e] mb-2">
                  {cat.title}
                </h3>
                
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-6">
                  {cat.desc}
                </p>
              </div>

              <a 
                href={cat.href}
                className={`inline-flex items-center gap-1.5 font-bold text-xs sm:text-sm ${cat.accentText} hover:underline`}
              >
                {cat.linkText} <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceCategories;
