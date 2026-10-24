"use client";
import React, { useState } from 'react';
import { CheckCircle2, UserCheck, ArrowRight, Laptop, Sparkles, X, ShieldCheck, Trophy, Award } from 'lucide-react';

const SchoolOfferingsAndPortal = () => {
  const [showPortalModal, setShowPortalModal] = useState(false);

  const offerings = [
    { title: "Competition Support & Rubrics", desc: "Complete guidebooks and live helpline for school teachers." },
    { title: "Student Participation Records", desc: "Detailed score analytics, progress cards and roster exports." },
    { title: "Printed & Digital Certificates", desc: "Gold-embossed certificates for participants and prize-winners." },
    { title: "Dedicated Event Coordination", desc: "Assigned academic relationship manager for your campus." },
    { title: "Preparation Word Banks & Audio", desc: "Curated vocabulary banks with phonetic audios and origin hints." },
    { title: "National Media Recognition", desc: "Featured spots for top participating schools in national publications." }
  ];

  return (
    <section className="py-10 md:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Block: What Your School Receives */}
          <div className="lg:col-span-7 bg-[#fffdf0] border border-amber-200/80 rounded-3xl p-6 sm:p-7 relative overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            {/* Soft decorative background glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-200/40 rounded-full filter blur-2xl pointer-events-none"></div>

            <div className="relative z-10">
              <div className="group/pill inline-flex items-center gap-2 mb-2 cursor-pointer">
                <span className="w-5 group-hover/pill:w-8 h-1 bg-yellow-400 rounded-full inline-block transition-all duration-300"></span>
                <span className="text-[#1a237e] font-extrabold tracking-wider text-xs uppercase group-hover/pill:text-yellow-600 transition-colors">
                  School Package
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#1a237e] mb-1.5 tracking-tight">
                What Your School Receives
              </h2>
              <p className="text-[#3949ab] font-medium text-xs sm:text-sm mb-5">
                We provide the end-to-end curriculum and operational support you need to make the experience smooth and successful.
              </p>

              {/* Interactive Checklist with micro hover highlight */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                {offerings.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="group/item flex items-start gap-2.5 p-2 -mx-2 rounded-xl hover:bg-amber-100/70 transition-all duration-200 cursor-pointer"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:scale-125 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-all duration-300 shadow-2xs">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-slate-800 text-xs sm:text-sm font-bold group-hover/item:text-[#1a237e] transition-colors">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Team Illustration / Badge with hover pops */}
            <div className="relative z-10 pt-3 border-t border-amber-200/50 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-1.5">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-amber-400 flex items-center justify-center font-bold text-xs text-slate-900 shadow-xs hover:scale-125 hover:z-20 transition-transform duration-200 cursor-pointer">
                    <Sparkles className="w-4 h-4 fill-slate-900" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-500 flex items-center justify-center font-bold text-xs text-white shadow-xs hover:scale-125 hover:z-20 transition-transform duration-200 cursor-pointer">
                    <Trophy className="w-4 h-4 fill-white" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-emerald-500 flex items-center justify-center font-bold text-xs text-white shadow-xs hover:scale-125 hover:z-20 transition-transform duration-200 cursor-pointer">
                    <Award className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <div className="text-xs font-extrabold text-[#1a237e]">
                    Complete School Support Kit
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium">
                    Guidance for coordinators & teachers
                  </div>
                </div>
              </div>

              {/* Hand-drawn style badge with bounce */}
              <div className="font-serif italic font-extrabold text-amber-800 text-xs bg-amber-100/80 px-3 py-1 rounded-full border border-amber-300/60 transform rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-200 cursor-default shadow-2xs inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 inline" />
                Teamwork Builds Confidence!
              </div>
            </div>
          </div>

          {/* Right Block: For School Coordinators Portal Login */}
          <div className="lg:col-span-5 bg-[#f0f7ff] border border-blue-200/80 rounded-3xl p-6 sm:p-7 relative overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between" id="school-coordinators">
            {/* Header Badge */}
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs shrink-0 animate-bounce-slow">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-blue-600 font-extrabold tracking-wider text-[11px] uppercase block">
                    Coordinator Portal
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#1a237e]">
                    For School Coordinators
                  </h3>
                </div>
              </div>

              <p className="text-[#3949ab] font-medium text-xs sm:text-sm mb-4 leading-relaxed">
                Already registered your school? Access student lists, round materials, schedules, and reports through your secure coordinator dashboard.
              </p>

              <button 
                onClick={() => setShowPortalModal(true)}
                className="relative overflow-hidden w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#0d1e4c] hover:bg-[#1a237e] text-white font-bold text-xs sm:text-sm shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 group mb-4 cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  School Coordinator Login 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                </span>
                <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
              </button>
            </div>

            {/* Coordinator Laptop Illustration / Graphic with micro-float */}
            <div className="mt-2 p-3.5 rounded-xl bg-white/90 border border-blue-100 shadow-xs flex items-center gap-3 hover:shadow-md hover:border-blue-300 transition-all duration-300 cursor-pointer group">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Laptop className="w-5 h-5 animate-float-slow" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold text-[#1a237e] group-hover:text-blue-700 transition-colors flex items-center gap-1.5">
                  Manage School Entries Online
                  <Sparkles className="w-3 h-3 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-[10px] text-slate-500 font-medium">
                  Instant registration confirmation & round guidelines
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Interactive Coordinator Login Modal Preview */}
      {showPortalModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-pop-in">
          <div className="bg-white rounded-2xl max-w-sm w-full p-5 shadow-2xl border border-slate-200 relative">
            <button 
              onClick={() => setShowPortalModal(false)}
              className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase mb-1">
              <ShieldCheck className="w-4 h-4" /> Coordinator Secure Login
            </div>
            <h3 className="text-lg font-extrabold text-[#1a237e] mb-2">
              School Portal Access
            </h3>
            <p className="text-xs text-slate-600 mb-4 font-medium">
              Enter your school affiliation ID or registered coordinator email to access your dashboard.
            </p>

            <div className="space-y-2.5 mb-4">
              <input 
                type="text" 
                placeholder="School Code / ID (e.g. SBU-2026-104)"
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
              <input 
                type="password" 
                placeholder="Coordinator Password"
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
            </div>

            <button 
              onClick={() => {
                alert("Login credentials verified! Redirecting to coordinator dashboard...");
                setShowPortalModal(false);
              }}
              className="w-full py-2.5 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-gray-900 font-extrabold text-xs shadow-md transition-all active:scale-95 cursor-pointer"
            >
              Sign In to Dashboard
            </button>
            <div className="text-center mt-2.5">
              <a href="#partnership-form" onClick={() => setShowPortalModal(false)} className="text-[11px] text-blue-600 font-semibold hover:underline">
                Not registered yet? Register your school
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SchoolOfferingsAndPortal;
