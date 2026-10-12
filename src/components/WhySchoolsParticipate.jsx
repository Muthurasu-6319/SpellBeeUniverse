import React from 'react';
import { Users, BookOpen, MessageSquare, Trophy, Star, Eye } from 'lucide-react';

const WhySchoolsParticipate = () => {
  const benefits = [
    {
      title: "Student Engagement",
      description: "Create excitement around language learning.",
      icon: <Users className="w-5 h-5 text-white" />,
      iconBg: "bg-pink-500",
      cardBg: "bg-[#fff0f5]",
      borderClass: "border-pink-100"
    },
    {
      title: "Vocabulary Development",
      description: "Encourage students to explore and use new words.",
      icon: <BookOpen className="w-5 h-5 text-white" />,
      iconBg: "bg-amber-500",
      cardBg: "bg-[#fffdf0]",
      borderClass: "border-amber-100"
    },
    {
      title: "Communication",
      description: "Give students opportunities to practise speaking.",
      icon: <MessageSquare className="w-5 h-5 text-white" />,
      iconBg: "bg-emerald-500",
      cardBg: "bg-[#f1f8e9]",
      borderClass: "border-emerald-100"
    },
    {
      title: "Healthy Competition",
      description: "Encourage preparation, focus and participation.",
      icon: <Trophy className="w-5 h-5 text-white" />,
      iconBg: "bg-blue-500",
      cardBg: "bg-[#f0f7ff]",
      borderClass: "border-blue-100"
    },
    {
      title: "Recognition",
      description: "Celebrate student achievements and build confidence.",
      icon: <Star className="w-5 h-5 text-white" />,
      iconBg: "bg-purple-600",
      cardBg: "bg-[#f3e5f5]",
      borderClass: "border-purple-100"
    },
    {
      title: "School Visibility",
      description: "Highlight your school's participation and achievements.",
      icon: <Eye className="w-5 h-5 text-white" />,
      iconBg: "bg-rose-500",
      cardBg: "bg-[#ffebee]",
      borderClass: "border-rose-100"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a237e] mb-3 tracking-tight">
            Why Schools Participate
          </h2>
          <p className="text-[#3949ab] font-medium text-base md:text-lg max-w-3xl">
            SpellBee Universe is more than a competition. It's a complete learning experience that helps your students grow in many ways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`${benefit.cardBg} ${benefit.borderClass} border rounded-2xl p-6 flex items-start gap-4 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300`}
            >
              <div className={`w-12 h-12 rounded-full ${benefit.iconBg} flex items-center justify-center shrink-0 shadow-sm`}>
                {benefit.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#1a237e] mb-1.5">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySchoolsParticipate;
