import React from 'react';
import { ArrowRight, CheckCircle2, FileText, Gift, Lightbulb } from 'lucide-react';
import Image from 'next/image';

const RegistrationPrepare = () => {
  return (
    <section className="py-8 sm:py-10 md:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          
          {/* Card 1: Register */}
          <div className="bg-[#fffdf0] rounded-2xl md:rounded-3xl p-5 sm:p-6 border border-amber-200/60 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-[#fbc02d] text-gray-900 flex items-center justify-center font-extrabold text-base shadow-sm shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#1a237e] tracking-tight">Register</h3>
                  <p className="text-[#3949ab] font-semibold text-xs">How to get started</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                {[
                  "Select the student category.",
                  "Enter student details.",
                  "Provide school & parent info.",
                  "Complete registration.",
                  "Receive instructions."
                ].map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 hover:translate-x-1 transition-transform">
                    <div className="w-5 h-5 rounded-full bg-amber-400 text-white flex items-center justify-center font-bold text-[11px] shrink-0">
                      {idx + 1}
                    </div>
                    <p className="text-[#3949ab] font-medium text-xs leading-snug">{step}</p>
                  </div>
                ))}
              </div>

              <button className="px-5 py-2 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-gray-900 font-bold text-xs shadow-md shadow-yellow-400/20 transition-all inline-flex items-center gap-1.5 hover:scale-105 active:scale-95 mb-3 group/btn cursor-pointer">
                Register Now <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Inner Card - Compact & Cute */}
            <div className="bg-[#fff9df] rounded-xl p-3 border border-amber-200/60 flex items-center gap-3 shadow-2xs mt-2 group-hover:bg-[#fff6d0] transition-colors">
              <div className="flex-1">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <FileText className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <h4 className="font-extrabold text-[#1a237e] text-xs">Quick Registration</h4>
                </div>
                <p className="text-[#3949ab] text-[11px] leading-tight">
                  Just a few simple steps to join!
                </p>
              </div>
              <div className="w-13 h-13 shrink-0 rounded-xl overflow-hidden border border-white shadow-xs bg-white hover:scale-105 transition-transform">
                <Image 
                  src="/images/quick-registration.jpg" 
                  alt="Quick Registration" 
                  width={100} 
                  height={100} 
                  className="w-full h-full object-cover object-center" 
                />
              </div>
            </div>
          </div>

          {/* Card 2: Registration Kit */}
          <div className="bg-[#f8faff] rounded-2xl md:rounded-3xl p-5 sm:p-6 border border-blue-200/60 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold text-base shadow-sm shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#1a237e] tracking-tight">Registration Kit</h3>
                  <p className="text-[#3949ab] font-semibold text-xs">Each registration you get</p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                {[
                  {
                    title: "Spell Book",
                    desc: "Preparation workbook with curated word lists, vocabulary & rules."
                  },
                  {
                    title: "Spell App",
                    desc: "Interactive mobile app for practice, audio pronunciations & mock tests."
                  },
                  {
                    title: "Participation Certification",
                    desc: "Official certificate recognizing student effort, dedication & achievement."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start hover:translate-x-1 transition-transform">
                    <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5 shadow-2xs">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-[#1a237e] font-bold text-xs sm:text-sm leading-snug">{item.title}</p>
                      <p className="text-[#3949ab] font-medium text-[11px] sm:text-xs leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom highlight banner */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50/90 rounded-xl p-2.5 border border-blue-200/60 flex items-center gap-2.5 mt-2 shadow-2xs group-hover:from-blue-100/70 group-hover:to-indigo-100/70 transition-colors">
              <Gift className="w-5 h-5 text-indigo-500 shrink-0" />
              <div>
                <h5 className="font-bold text-[#1a237e] text-xs">All Included With Registration</h5>
                <p className="text-[#3949ab] text-[10px]">Book + App + Official Certificate for all!</p>
              </div>
            </div>
          </div>

          {/* Card 3: Prepare */}
          <div className="bg-[#f0fdf4] rounded-2xl md:rounded-3xl p-5 sm:p-6 border border-emerald-200/60 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-extrabold text-base shadow-sm shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  3
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#1a237e] tracking-tight">Prepare</h3>
                  <p className="text-[#3949ab] font-bold text-xs sm:text-sm">Learn Before You Compete</p>
                </div>
              </div>

              {/* 2-Column Checklist - Increased Size */}
              <div className="grid grid-cols-2 gap-x-3 gap-y-2.5 mb-5">
                {[
                  "Word lists",
                  "Practice spelling",
                  "Vocabulary",
                  "Pronunciation",
                  "Meaning & usage",
                  "Sample questions",
                  "Practice tests"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <p className="text-slate-800 font-bold text-xs sm:text-[13px] leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Books Stack Illustration - Increased Size & Prominence */}
            <div className="flex flex-col items-center justify-center relative pt-5 pb-2.5 mt-2 bg-emerald-50/90 rounded-2xl border border-emerald-200/80 p-3 group-hover:bg-emerald-100/60 transition-colors shadow-2xs">
              <div className="absolute -top-3.5 right-6 animate-pulse-soft text-amber-500">
                <Lightbulb className="w-6 h-6 text-amber-500 fill-amber-300 drop-shadow-md" />
              </div>
              
              <div className="w-full max-w-[170px] sm:max-w-[195px] bg-green-500 text-white text-center py-1.5 sm:py-2 font-black text-xs sm:text-[13px] tracking-wider rounded-md shadow-xs border-b-3 border-green-700 transform -rotate-2 relative z-40 mb-[-4px]">
                SPELLING
              </div>
              <div className="w-full max-w-[185px] sm:max-w-[210px] bg-orange-500 text-white text-center py-1.5 sm:py-2 font-black text-xs sm:text-[13px] tracking-wider rounded-md shadow-xs border-b-3 border-orange-700 relative z-30 mb-[-4px]">
                VOCABULARY
              </div>
              <div className="w-full max-w-[198px] sm:max-w-[225px] bg-blue-500 text-white text-center py-1.5 sm:py-2 font-black text-xs sm:text-[13px] tracking-wider rounded-md shadow-xs border-b-3 border-blue-700 relative z-20 mb-[-4px]">
                PRONUNCIATION
              </div>
              <div className="w-full max-w-[210px] sm:max-w-[240px] bg-pink-500 text-white text-center py-1.5 sm:py-2 font-black text-xs sm:text-[13px] tracking-wider rounded-md shadow-xs border-b-3 border-pink-700 transform rotate-1 relative z-10">
                PRACTICE
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RegistrationPrepare;
