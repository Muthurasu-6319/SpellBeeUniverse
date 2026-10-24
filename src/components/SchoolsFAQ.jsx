"use client";
import React, { useState } from 'react';
import { ChevronDown, Plus, Minus, ArrowRight, HelpCircle, Sparkles } from 'lucide-react';

const SchoolsFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Eligibility", "Conducting", "Materials & Awards"];

  const faqs = [
    {
      q: "Who can participate?",
      a: "Students from Classes 1 through 10 enrolled in recognized schools across CBSE, ICSE, State Boards, and International curriculums can participate in their respective category groups.",
      category: "Eligibility"
    },
    {
      q: "How are competition dates communicated?",
      a: "Dates for school-level examinations, oral assessments, and regional championships are shared with registered school coordinators via email and the coordinator portal at least 4 weeks in advance.",
      category: "Conducting"
    },
    {
      q: "How does school registration work?",
      a: "Schools fill out the partnership request form above. Our team shares the registration kit, student enrollment guidelines, and access credentials for your school coordinator.",
      category: "Conducting"
    },
    {
      q: "Who coordinates the school-level round?",
      a: "The designated School Coordinator or English department lead facilitates the round on campus with comprehensive test sheets, audio-visual materials, and evaluation rubrics provided by us.",
      category: "Conducting"
    },
    {
      q: "How are students selected?",
      a: "Students qualify based on benchmark scores in the school written assessment. High scorers progress to the oral rounds and subsequent National Championship stage.",
      category: "Eligibility"
    },
    {
      q: "What support does the school receive?",
      a: "We provide printed or digital examination materials, teacher guidebooks, practice word banks, participation certificates for every enrolled student, coordinator mementos, and school trophies.",
      category: "Materials & Awards"
    }
  ];

  const filteredFaqs = activeCategory === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-10 md:py-12 bg-white border-t border-slate-100" id="faqs">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <div className="group/pill inline-flex items-center gap-2 mb-1.5 cursor-pointer">
              <span className="w-5 group-hover/pill:w-8 h-1 bg-yellow-400 rounded-full inline-block transition-all duration-300"></span>
              <span className="text-[#1a237e] font-extrabold tracking-wider text-xs uppercase group-hover/pill:text-yellow-600 transition-colors">
                Schools FAQ
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1a237e] tracking-tight mb-1">
              Frequently Asked Questions for Schools
            </h2>
            <p className="text-[#3949ab] font-medium text-xs sm:text-sm">
              Find answers to common questions about school participation, registration and the competition process.
            </p>
          </div>

          <a 
            href="#partnership-form"
            className="px-4 py-2 rounded-full border border-slate-300 hover:border-yellow-400 hover:bg-yellow-50 text-[#1a237e] font-bold text-xs transition-all duration-200 shrink-0 w-fit flex items-center gap-1.5 active:scale-95 cursor-pointer"
          >
            <span>Ask Academic Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-3.5 py-1 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#1a237e] text-white shadow-xs scale-105"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 2-Column Responsive Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`rounded-2xl border p-4 transition-all duration-300 cursor-pointer ${
                  isOpen 
                    ? "bg-[#fffdf2] border-yellow-300 shadow-md -translate-y-0.5" 
                    : "bg-white border-slate-200/80 hover:border-yellow-300 hover:shadow-xs"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="w-full flex items-center justify-between text-left gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-bold text-[#1a237e] leading-snug">
                      {faq.q}
                    </span>
                  </div>

                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen 
                      ? "bg-yellow-400 text-slate-950 rotate-180" 
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </div>

                {isOpen && (
                  <div className="mt-2.5 pt-2.5 border-t border-amber-200/60 text-xs text-slate-700 leading-relaxed font-medium animate-pop-in">
                    {faq.a}
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

export default SchoolsFAQ;
