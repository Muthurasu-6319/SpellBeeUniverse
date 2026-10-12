"use client";
import React, { useState } from 'react';
import { ChevronDown, Plus, Minus, ArrowRight } from 'lucide-react';

const SchoolsFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Who can participate?",
      a: "Students from Classes 1 through 10 enrolled in recognized schools across CBSE, ICSE, State Boards, and International curriculums can participate in their respective category groups."
    },
    {
      q: "How are competition dates communicated?",
      a: "Dates for school-level examinations, oral assessments, and regional championships are shared with registered school coordinators via email and the coordinator portal at least 4 weeks in advance."
    },
    {
      q: "How does school registration work?",
      a: "Schools fill out the partnership request form above. Our team shares the registration kit, student enrollment guidelines, and access credentials for your school coordinator."
    },
    {
      q: "Who coordinates the school-level round?",
      a: "The designated School Coordinator or English department lead facilitates the round on campus with comprehensive test sheets, audio-visual materials, and evaluation rubrics provided by us."
    },
    {
      q: "How are students selected?",
      a: "Students qualify based on benchmark scores in the school written assessment. High scorers progress to the oral rounds and subsequent National Championship stage."
    },
    {
      q: "What support does the school receive?",
      a: "We provide printed or digital examination materials, teacher guidebooks, practice word banks, participation certificates for every enrolled student, coordinator mementos, and school trophies."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 md:py-20 bg-slate-50/70 border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-1 bg-yellow-400 rounded-full inline-block"></span>
              <span className="text-[#1a237e] font-extrabold tracking-wider text-xs uppercase">
                Schools FAQ
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a237e] tracking-tight mb-2">
              Frequently Asked Questions for Schools
            </h2>
            <p className="text-[#3949ab] font-medium text-sm sm:text-base">
              Find answers to common questions about school participation, registration and the competition process.
            </p>
          </div>

          <a 
            href="#faqs"
            className="px-5 py-2.5 rounded-full border border-slate-300 hover:bg-slate-100 text-[#1a237e] font-bold text-xs sm:text-sm transition-colors shrink-0 w-fit"
          >
            View All FAQs →
          </a>
        </div>

        {/* 2-Column Responsive Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left gap-4"
                >
                  <span className="text-sm sm:text-base font-bold text-[#1a237e] leading-snug">
                    {faq.q}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-[#1a237e]">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
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
