import React from 'react';
import { Code, CalendarDays, Megaphone, FileText, Handshake } from 'lucide-react';
import Image from 'next/image';

const Team = () => {
  return (
    <div className="pt-8 sm:pt-10 md:pt-12 pb-6 sm:pb-8 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Founders Section */}
        <div className="mb-8 sm:mb-10 border-b border-slate-100 pb-8 sm:pb-10">
          <div className="mb-6 sm:mb-8 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a237e] mb-1.5 tracking-tight">Meet Our Founders</h2>
            <p className="text-slate-800 font-medium text-sm sm:text-base max-w-md mx-auto sm:mx-0">The visionaries steering SpellBee Universe toward excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Saravana */}
            <div className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 hover:border-amber-300 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col sm:flex-row gap-5 sm:gap-6 items-center sm:items-start text-center sm:text-left h-full group">
               <div className="relative w-32 h-32 sm:w-36 sm:h-36 shrink-0">
                 <div className="absolute inset-0 bg-[#fbc02d] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] z-0 opacity-80 group-hover:rotate-6 transition-transform duration-500"></div>
                 <Image src="/images/saravana-ceo.png" alt="Saravana Kumar" width={160} height={160} className="relative z-10 w-full h-full object-cover rounded-full p-2 shadow-xs group-hover:scale-105 transition-transform duration-300" priority />
               </div>
               <div className="flex-1 flex flex-col justify-center min-w-0">
                 <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 mb-2">
                   <h3 className="text-xl sm:text-2xl font-bold text-slate-950 group-hover:text-amber-600 transition-colors">Saravana Kumar</h3>
                   <span className="inline-block text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200/60 px-2.5 py-0.5 rounded-full uppercase tracking-wider mx-auto sm:mx-0 w-fit">CEO</span>
                 </div>
                 <p className="text-slate-900 font-normal text-sm sm:text-[15px] leading-relaxed text-left">
                   With 23 years of experience in media, broadcasting, filmmaking and events, Saravana brings creativity, leadership and a passion for education to SpellBee Universe.
                 </p>
               </div>
            </div>
            
            {/* Vani */}
            <div className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 hover:border-amber-300 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col sm:flex-row gap-5 sm:gap-6 items-center sm:items-start text-center sm:text-left h-full group">
               <div className="relative w-32 h-32 sm:w-36 sm:h-36 shrink-0">
                 <div className="absolute inset-0 bg-[#fbc02d] rounded-[50%_50%_30%_70%/50%_40%_60%_50%] z-0 opacity-80 group-hover:-rotate-6 transition-transform duration-500"></div>
                 <Image src="/images/vani-gowda-cfo.png" alt="Vani Gowda" width={160} height={160} className="relative z-10 w-full h-full object-cover rounded-full p-2 shadow-xs group-hover:scale-105 transition-transform duration-300" priority />
               </div>
               <div className="flex-1 flex flex-col justify-center min-w-0">
                 <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 mb-2">
                   <h3 className="text-xl sm:text-2xl font-bold text-slate-950 group-hover:text-amber-600 transition-colors">Vani Gowda</h3>
                   <span className="inline-block text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200/60 px-2.5 py-0.5 rounded-full uppercase tracking-wider mx-auto sm:mx-0 w-fit">CFO</span>
                 </div>
                 <p className="text-slate-900 font-normal text-sm sm:text-[15px] leading-relaxed text-left">
                   An entrepreneur, social worker, writer, sports enthusiast and education advocate, Vani brings a deep commitment to creating meaningful opportunities for young learners.
                 </p>
               </div>
            </div>
          </div>
        </div>

        {/* Jury Section */}
        <div className="mb-8 sm:mb-10 border-b border-slate-100 pb-8 sm:pb-10">
          <div className="mb-6 sm:mb-8 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a237e] mb-1.5 tracking-tight">Our Jury & Experts</h2>
            <p className="text-slate-800 font-medium text-sm sm:text-base max-w-md mx-auto sm:mx-0">Guiding, evaluating and inspiring our young learners.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
            {/* Jury 1 - Elvis Joseph */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-xs border border-slate-200/80 hover:border-amber-300 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="relative w-16 h-16 sm:w-18 sm:h-18 shrink-0">
                     <div className="absolute inset-0 bg-[#fbc02d] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] z-0 opacity-80 group-hover:scale-105 transition-transform"></div>
                     <Image src="/images/elvis-joseph.png" alt="Elvis Joseph" width={72} height={72} className="relative z-10 w-full h-full object-cover rounded-full p-1 group-hover:scale-105 transition-transform duration-300" priority />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-amber-600 transition-colors leading-snug">Elvis Joseph</h3>
                    <span className="inline-block text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200/60 px-2.5 py-0.5 rounded-full uppercase tracking-wider mt-1">Jury Member</span>
                  </div>
                </div>
                <div className="pt-2.5 border-t border-slate-100">
                  <p className="text-slate-900 text-xs sm:text-[13px] leading-relaxed font-normal text-left">
                    As the Founder Trustee and Executive Director of the Bangalore Schools Sports Foundation (BSSF), Elvis has been at the forefront of pioneering Sports-for-Development initiatives that have positively impacted thousands of children and young people across India. Under his leadership, BSSF has evolved into a nationally recognized organization dedicated to empowering vulnerable, marginalized, and underserved communities through sports, education, leadership, and humanitarian action.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Jury 2 - Bipinchandra Chaugule */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-xs border border-slate-200/80 hover:border-amber-300 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="relative w-16 h-16 sm:w-18 sm:h-18 shrink-0">
                     <div className="absolute inset-0 bg-[#fbc02d] rounded-[50%_50%_30%_70%/50%_40%_60%_50%] z-0 opacity-80 group-hover:scale-105 transition-transform"></div>
                     <Image src="/images/bipinchandra-jury.png" alt="Bipinchandra Chaugule" width={72} height={72} className="relative z-10 w-full h-full object-cover rounded-full p-1 group-hover:scale-105 transition-transform duration-300" priority />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-amber-600 transition-colors leading-snug">Bipinchandra Chaugule</h3>
                    <span className="inline-block text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200/60 px-2.5 py-0.5 rounded-full uppercase tracking-wider mt-1">Jury Member</span>
                  </div>
                </div>
                <div className="pt-2.5 border-t border-slate-100">
                  <p className="text-slate-900 text-xs sm:text-[13px] leading-relaxed font-normal text-left">
                    Educated in Physics, Sociology, Journalism, Information Technology, Television production, working for overseas TV channels director and script-writer for many decades, Founder/President of the Association of Left-handers, India.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Jury 3 - Ashok K M Gowda */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-xs border border-slate-200/80 hover:border-amber-300 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="relative w-16 h-16 sm:w-18 sm:h-18 shrink-0">
                     <div className="absolute inset-0 bg-[#fbc02d] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] z-0 opacity-80 group-hover:scale-105 transition-transform"></div>
                     <Image src="/images/ashok-gowda-jury.png" alt="Ashok K M Gowda" width={72} height={72} className="relative z-10 w-full h-full object-cover rounded-full p-1 group-hover:scale-105 transition-transform duration-300" priority />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-amber-600 transition-colors leading-snug">Ashok K M Gowda</h3>
                    <span className="inline-block text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200/60 px-2.5 py-0.5 rounded-full uppercase tracking-wider mt-1">Jury Member</span>
                  </div>
                </div>
                <div className="pt-2.5 border-t border-slate-100">
                  <p className="text-slate-900 text-xs sm:text-[13px] leading-relaxed font-normal text-left">
                    Possesses a diverse skill set encompassing architecture, education, and politics. He has proficiency in several languages and a keen interest in social welfare. Mr Gowda is deeply passionate about creating a sustainable and inclusive India through skill development and tourism initiatives and contributing to the betterment of society.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="mb-5 sm:mb-6 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a237e] mb-1.5 tracking-tight">Our Team</h2>
            <p className="text-slate-800 font-medium text-sm sm:text-base max-w-md mx-auto sm:mx-0">A dedicated team working together to make SpellBee Universe a success.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 items-stretch">
            <div className="bg-slate-50/80 hover:bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 hover:border-amber-300 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer min-h-[120px] h-full">
              <Code className="w-7 h-7 text-blue-600 group-hover:scale-120 group-hover:rotate-12 transition-all duration-300 mb-2.5" />
              <p className="text-xs sm:text-sm font-bold text-slate-950 group-hover:text-blue-700 transition-colors leading-tight">Technology &<br/>Development</p>
            </div>
            <div className="bg-slate-50/80 hover:bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 hover:border-purple-300 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer min-h-[120px] h-full">
              <CalendarDays className="w-7 h-7 text-purple-600 group-hover:scale-120 group-hover:rotate-12 transition-all duration-300 mb-2.5" />
              <p className="text-xs sm:text-sm font-bold text-slate-950 group-hover:text-purple-700 transition-colors leading-tight">Event Operations</p>
            </div>
            <div className="bg-slate-50/80 hover:bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 hover:border-green-300 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer min-h-[120px] h-full">
              <Megaphone className="w-7 h-7 text-green-600 group-hover:scale-120 group-hover:rotate-12 transition-all duration-300 mb-2.5" />
              <p className="text-xs sm:text-sm font-bold text-slate-950 group-hover:text-green-700 transition-colors leading-tight">Digital Marketing</p>
            </div>
            <div className="bg-slate-50/80 hover:bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 hover:border-pink-300 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer min-h-[120px] h-full">
              <FileText className="w-7 h-7 text-pink-600 group-hover:scale-120 group-hover:rotate-12 transition-all duration-300 mb-2.5" />
              <p className="text-xs sm:text-sm font-bold text-slate-950 group-hover:text-pink-700 transition-colors leading-tight">Content</p>
            </div>
            <div className="bg-slate-50/80 hover:bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 hover:border-blue-300 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer min-h-[120px] h-full col-span-2 md:col-span-1">
              <Handshake className="w-7 h-7 text-blue-600 group-hover:scale-120 group-hover:rotate-12 transition-all duration-300 mb-2.5" />
              <p className="text-xs sm:text-sm font-bold text-slate-950 group-hover:text-blue-700 transition-colors leading-tight">School Partnerships</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Team;
