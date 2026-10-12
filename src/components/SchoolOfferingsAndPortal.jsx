import React from 'react';
import { CheckCircle2, UserCheck, ArrowRight, Laptop } from 'lucide-react';

const SchoolOfferingsAndPortal = () => {
  const offerings = [
    "Competition support",
    "Student participation information",
    "Certificates",
    "Event coordination",
    "Preparation resources",
    "Recognition opportunities"
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: What Your School Receives */}
          <div className="lg:col-span-7 bg-[#fffdf0] border border-amber-200/80 rounded-[2rem] p-8 md:p-10 relative overflow-hidden shadow-xs flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a237e] mb-2 tracking-tight">
                What Your School Receives
              </h2>
              <p className="text-[#3949ab] font-medium text-sm sm:text-base mb-8">
                We provide the support you need to make the experience smooth and successful.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {offerings.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="text-slate-700 text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Team Illustration / Badge */}
            <div className="pt-4 border-t border-amber-200/50 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-amber-400 flex items-center justify-center font-bold text-xs text-slate-900 shadow-sm">
                    🐝
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-500 flex items-center justify-center font-bold text-xs text-white shadow-sm">
                    🏆
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-500 flex items-center justify-center font-bold text-xs text-white shadow-sm">
                    ⭐
                  </div>
                </div>
                <div>
                  <div className="text-xs font-extrabold text-[#1a237e]">
                    Complete School Support Kit
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    Guidance for coordinators & teachers
                  </div>
                </div>
              </div>

              {/* Hand-drawn style badge */}
              <div className="font-serif italic font-extrabold text-amber-800 text-sm bg-amber-100/70 px-4 py-1.5 rounded-full border border-amber-300/60 transform rotate-1">
                ✨ Teamwork Builds Confidence!
              </div>
            </div>
          </div>

          {/* Right Block: For School Coordinators Portal Login */}
          <div className="lg:col-span-5 bg-[#f0f7ff] border border-blue-200/80 rounded-[2rem] p-8 md:p-10 relative overflow-hidden shadow-xs flex flex-col justify-between" id="school-coordinators">
            {/* Header Badge */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-blue-600 font-extrabold tracking-wider text-xs uppercase block">
                    Coordinator Portal
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#1a237e]">
                    For School Coordinators
                  </h3>
                </div>
              </div>

              <p className="text-[#3949ab] font-medium text-sm sm:text-base mb-6">
                Already registered your school? Access student lists, round materials, schedules, and reports through your secure coordinator dashboard.
              </p>

              <button className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#0d1e4c] hover:bg-[#1a237e] text-white font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group mb-6">
                School Coordinator Login 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Coordinator Laptop Illustration / Graphic */}
            <div className="mt-4 p-4 rounded-2xl bg-white/80 border border-blue-100 shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <Laptop className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#1a237e]">
                  Manage School Entries Online
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  Instant registration confirmation & round guidelines
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default SchoolOfferingsAndPortal;
