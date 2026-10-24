"use client";
import React, { useState } from 'react';
import { ArrowRight, FileText, UserPlus, BookOpenCheck, School, CheckCircle2, Trophy, Clock, Sparkles } from 'lucide-react';

const HowItWorksForSchools = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Register Your School",
      desc: "Submit your school information through our simple partnership form.",
      timeline: "Day 1",
      icon: <FileText className="w-5 h-5 text-amber-600" />
    },
    {
      num: "02",
      title: "Student Enrollment",
      desc: "Distribute starter brochures and enroll interested students across grades.",
      timeline: "Week 1–2",
      icon: <UserPlus className="w-5 h-5 text-amber-600" />
    },
    {
      num: "03",
      title: "Prep & Word Bank",
      desc: "Receive customized grade-wise study guides, phonetics tips & practice sheets.",
      timeline: "Week 3–4",
      icon: <BookOpenCheck className="w-5 h-5 text-amber-600" />
    },
    {
      num: "04",
      title: "School-Level Round",
      desc: "Conduct the written & preliminary oral spelling challenge right on campus.",
      timeline: "Week 5",
      icon: <School className="w-5 h-5 text-amber-600" />
    },
    {
      num: "05",
      title: "Merit Qualification",
      desc: "Top performers receive qualifying certificates and advance to Regionals.",
      timeline: "Week 6",
      icon: <CheckCircle2 className="w-5 h-5 text-amber-600" />
    },
    {
      num: "06",
      title: "Grand Finale",
      desc: "Selected school stars compete on the live Spell Master National Stage.",
      timeline: "Grand Event",
      icon: <Trophy className="w-5 h-5 text-amber-600" />
    }
  ];

  return (
    <section className="py-10 md:py-12 bg-slate-50/70 border-y border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-7">
          <div>
            <div className="group/pill inline-flex items-center gap-2 mb-2 cursor-pointer">
              <span className="w-5 group-hover/pill:w-8 h-1 bg-yellow-400 rounded-full inline-block transition-all duration-300"></span>
              <span className="text-[#1a237e] font-extrabold tracking-wider text-xs uppercase group-hover/pill:text-yellow-600 transition-colors">
                Step-By-Step Journey
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a237e] mb-1.5 tracking-tight">
              How It Works for Schools
            </h2>
            <p className="text-[#3949ab] font-medium text-sm md:text-base">
              A simple, organized, and stress-free timeline designed for educators.
            </p>
          </div>

          {/* Micro Active Step Indicator */}
          <div className="hidden sm:flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-amber-200/80 shadow-2xs text-xs font-bold text-[#1a237e]">
            <Sparkles className="w-3.5 h-3.5 text-yellow-500 animate-spin-slow" />
            <span>Step {steps[activeStep].num}: {steps[activeStep].title}</span>
          </div>
        </div>

        {/* 6 Steps Grid with Flow Arrows on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5 relative">
          {steps.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <div 
                key={index}
                onClick={() => setActiveStep(index)}
                onMouseEnter={() => setActiveStep(index)}
                className={`group relative rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 cursor-pointer overflow-hidden ${
                  isActive 
                    ? "bg-[#fff9e6] border-2 border-yellow-400 shadow-lg -translate-y-1.5" 
                    : "bg-[#fffdf2] border border-amber-200/70 hover:border-amber-300 shadow-xs hover:shadow-md hover:-translate-y-1"
                }`}
              >
                {/* Active glow gradient */}
                {isActive && (
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-yellow-300/40 via-transparent to-transparent rounded-tr-2xl pointer-events-none"></div>
                )}

                <div>
                  {/* Badge & Icon & Timeline */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-full font-extrabold text-xs flex items-center justify-center shrink-0 shadow-xs transition-all duration-300 ${
                        isActive 
                          ? "bg-yellow-400 text-slate-950 scale-110" 
                          : "bg-amber-300 text-slate-900 group-hover:bg-amber-400 group-hover:scale-105"
                      }`}>
                        {step.num}
                      </div>
                      <div className="w-8 h-8 rounded-xl bg-amber-100/80 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                        {step.icon}
                      </div>
                    </div>

                    <span className="text-[10px] font-bold text-amber-800 bg-amber-100/90 px-2 py-0.5 rounded-full shrink-0">
                      {step.timeline}
                    </span>
                  </div>

                  {/* Step Title & Description */}
                  <h3 className={`text-xs sm:text-sm font-extrabold mb-1.5 leading-snug transition-colors ${
                    isActive ? "text-[#1a237e]" : "text-slate-800 group-hover:text-[#1a237e]"
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>

                {/* Connecting arrow indicator for large screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-amber-300 group-hover:text-amber-500 group-hover:translate-x-0.5 transition-all">
                    <ArrowRight className="w-3.5 h-3.5 animate-pulse-soft" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksForSchools;
