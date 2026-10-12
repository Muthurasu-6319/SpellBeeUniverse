import React from 'react';
import { Users, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';

const ParentAndTeacherResources = () => {
  const parentGuides = [
    "How Parents Can Help Children Prepare",
    "How to Build a Daily Vocabulary Habit",
    "How to Encourage Reading at Home"
  ];

  const teacherGuides = [
    "Classroom Spelling Activities",
    "Vocabulary Games",
    "Spelling Practice Worksheets",
    "How to Conduct a School Spelling Bee"
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-50/60 border-t border-slate-100" id="parent-resources">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: Parent Resources */}
          <div className="lg:col-span-6 bg-[#fff0f5] border border-pink-200/80 rounded-[2.5rem] p-7 sm:p-9 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-pink-500 text-white flex items-center justify-center font-bold shadow-xs">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#1a237e]">
                    Parent Resources
                  </h3>
                  <p className="text-pink-900/80 text-xs sm:text-sm font-medium">
                    Helpful guides and tips to support your child's learning journey.
                  </p>
                </div>
              </div>

              {/* Checklist Guides */}
              <div className="space-y-3.5 my-6">
                {parentGuides.map((guide, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/70 p-3 rounded-xl border border-pink-100">
                    <CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      {guide}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Button & Warm Family Study Badge */}
            <div className="pt-4 border-t border-pink-200/50 flex flex-wrap items-center justify-between gap-4">
              <a 
                href="#all-parent-guides"
                className="px-6 py-2.5 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-slate-900 font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 group"
              >
                Explore Parent Resources <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex items-center gap-2 bg-white/90 px-3.5 py-1.5 rounded-full border border-pink-200 shadow-xs">
                <span className="text-lg">📖</span>
                <span className="text-xs font-bold text-pink-700">Home Learning Kit</span>
              </div>
            </div>
          </div>

          {/* Right Block: Teacher Resources */}
          <div className="lg:col-span-6 bg-[#f0f7ff] border border-blue-200/80 rounded-[2.5rem] p-7 sm:p-9 shadow-xs flex flex-col justify-between" id="teacher-resources">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-xs">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#1a237e]">
                    Teacher Resources
                  </h3>
                  <p className="text-blue-900/80 text-xs sm:text-sm font-medium">
                    Engaging classroom activities and teaching tools for educators.
                  </p>
                </div>
              </div>

              {/* Checklist Guides */}
              <div className="space-y-3 my-6">
                {teacherGuides.map((guide, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/70 p-3 rounded-xl border border-blue-100">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      {guide}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Button & Classroom Badge */}
            <div className="pt-4 border-t border-blue-200/50 flex flex-wrap items-center justify-between gap-4">
              <a 
                href="#all-teacher-tools"
                className="px-6 py-2.5 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-slate-900 font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 group"
              >
                Explore Teacher Resources <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex items-center gap-2 bg-white/90 px-3.5 py-1.5 rounded-full border border-blue-200 shadow-xs">
                <span className="text-lg">🏫</span>
                <span className="text-xs font-bold text-blue-800">Classroom Activity Pack</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ParentAndTeacherResources;
