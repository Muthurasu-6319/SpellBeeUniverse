import React from 'react';
import { ArrowRight, FileText, UserPlus, BookOpenCheck, School, CheckCircle2, Trophy } from 'lucide-react';

const HowItWorksForSchools = () => {
  const steps = [
    {
      num: "01",
      title: "Register Your School",
      desc: "Submit your school information.",
      icon: <FileText className="w-5 h-5 text-amber-600" />
    },
    {
      num: "02",
      title: "Student Enrollment",
      desc: "Invite eligible students to participate.",
      icon: <UserPlus className="w-5 h-5 text-amber-600" />
    },
    {
      num: "03",
      title: "Competition Preparation",
      desc: "Get competition information and preparation resources.",
      icon: <BookOpenCheck className="w-5 h-5 text-amber-600" />
    },
    {
      num: "04",
      title: "School-Level Round",
      desc: "Conduct the applicable competition activity at school.",
      icon: <School className="w-5 h-5 text-amber-600" />
    },
    {
      num: "05",
      title: "Qualification",
      desc: "Students who meet the criteria progress to the next stage.",
      icon: <CheckCircle2 className="w-5 h-5 text-amber-600" />
    },
    {
      num: "06",
      title: "Grand Finale",
      desc: "Selected finalists compete on the Spell Master stage.",
      icon: <Trophy className="w-5 h-5 text-amber-600" />
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-50/60 border-y border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-1 bg-yellow-400 rounded-full inline-block"></span>
            <span className="text-[#1a237e] font-extrabold tracking-wider text-xs sm:text-sm uppercase">
              How It Works for Schools
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a237e] mb-2 tracking-tight">
            How It Works for Schools
          </h2>
          <p className="text-[#3949ab] font-medium text-base md:text-lg">
            A simple process to get your students involved.
          </p>
        </div>

        {/* 6 Steps Grid with Flow Arrows on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-[#fffdf2] border border-amber-200/70 rounded-2xl p-5 flex flex-col relative shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Badge & Icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center justify-center shrink-0 shadow-xs">
                  {step.num}
                </div>
                <div className="w-9 h-9 rounded-xl bg-amber-100/70 flex items-center justify-center shrink-0">
                  {step.icon}
                </div>
              </div>

              {/* Step Title & Description */}
              <h3 className="text-sm font-extrabold text-[#1a237e] mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed font-medium">
                {step.desc}
              </p>

              {/* Connecting arrow indicator for large screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-amber-300">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksForSchools;
