import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const RegistrationPrepare = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Register Block */}
          <div className="bg-[#fffdf0] rounded-3xl p-8 md:p-12 border border-amber-100 relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-[#fbc02d] text-white flex items-center justify-center font-bold text-2xl shadow-sm">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1a237e]">Register</h3>
                <p className="text-[#3949ab] font-medium">How to get started</p>
              </div>
            </div>

            <div className="space-y-4 mb-10 relative z-10">
              {[
                "Select the appropriate student category.",
                "Enter student details.",
                "Provide school and parent/guardian information.",
                "Complete registration.",
                "Receive competition instructions."
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-amber-400 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-[#3949ab] font-medium text-sm pt-0.5">{step}</p>
                </div>
              ))}
            </div>

            <button className="px-8 py-3 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-gray-900 font-bold shadow-md shadow-yellow-400/20 transition-all flex items-center gap-2 mb-8">
              Register Now <ArrowRight className="w-4 h-4" />
            </button>

            {/* Inner Card */}
            <div className="bg-[#fff9df] rounded-2xl p-6 border border-amber-200/50 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
              <div className="flex-1">
                 <div className="flex items-center gap-3 mb-2">
                   <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm border border-amber-100">
                     <span className="text-xl">📝</span>
                   </div>
                   <h4 className="font-bold text-[#1a237e]">Quick & Easy<br/>Registration</h4>
                 </div>
                 <p className="text-[#3949ab] text-xs leading-relaxed mt-4">
                   Just a few steps and you're on your way to the SpellBee Universe!
                 </p>
              </div>
              <div className="w-24 h-24 shrink-0">
                <Image src="/images/little-learner.png" alt="Student" width={96} height={96} className="w-full h-full object-cover rounded-full border-4 border-white shadow-sm" />
              </div>
            </div>
          </div>

          {/* Prepare Block */}
          <div className="bg-[#f0fdf4] rounded-3xl p-8 md:p-12 border border-emerald-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-2xl shadow-sm">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1a237e]">Prepare</h3>
                <p className="text-[#3949ab] font-medium">Learn Before You Compete</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-8">
              <div className="space-y-4 flex-1">
                {[
                  "Word lists",
                  "Practice spelling",
                  "Vocabulary",
                  "Pronunciation",
                  "Meaning & usage",
                  "Sample questions",
                  "Practice tests"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <p className="text-[#3949ab] font-medium text-sm">{item}</p>
                  </div>
                ))}
              </div>

              {/* Books Stack Illustration */}
              <div className="flex-1 flex flex-col items-center justify-end relative mt-8 sm:mt-0">
                 <div className="absolute -top-6 right-8 animate-pulse text-amber-500">
                   <span className="text-4xl">💡</span>
                 </div>
                 
                 <div className="w-full max-w-[200px] bg-green-500 text-white text-center py-2 font-bold text-sm rounded-md shadow-md border-b-4 border-green-700 transform -rotate-2 relative z-40 mb-[-5px]">
                   SPELLING
                 </div>
                 <div className="w-full max-w-[210px] bg-orange-500 text-white text-center py-2 font-bold text-sm rounded-md shadow-md border-b-4 border-orange-700 relative z-30 mb-[-5px]">
                   VOCABULARY
                 </div>
                 <div className="w-full max-w-[220px] bg-blue-500 text-white text-center py-2 font-bold text-sm rounded-md shadow-md border-b-4 border-blue-700 relative z-20 mb-[-5px]">
                   PRONUNCIATION
                 </div>
                 <div className="w-full max-w-[230px] bg-pink-500 text-white text-center py-2 font-bold text-sm rounded-md shadow-md border-b-4 border-pink-700 transform rotate-1 relative z-10">
                   PRACTICE
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RegistrationPrepare;
