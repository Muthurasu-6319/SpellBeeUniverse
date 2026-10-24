import React from 'react';
import { Code, CalendarDays, Megaphone, FileText, Handshake } from 'lucide-react';
import Image from 'next/image';

const Team = () => {
  return (
    <div className="pt-6 sm:pt-8 md:pt-10 pb-4 sm:pb-5 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Founders Section */}
        <div className="mb-6 sm:mb-8 border-b border-slate-100 pb-6 sm:pb-8">
          <div className="mb-5 sm:mb-6 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a237e] mb-1.5 tracking-tight">Meet Our Founders</h2>
            <p className="text-[#3949ab] font-medium text-sm sm:text-base max-w-md mx-auto sm:mx-0">The visionaries steering SpellBee Universe toward excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Saravana */}
            <div className="bg-slate-50/60 hover:bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 hover:border-amber-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left h-full group cursor-pointer">
               <div className="relative w-36 h-36 sm:w-40 sm:h-40 shrink-0">
                 <div className="absolute inset-0 bg-[#fbc02d] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] z-0 opacity-80 group-hover:rotate-12 transition-transform duration-500"></div>
                 <Image src="/images/saravana-ceo.png" alt="Saravana Kumar" width={160} height={160} className="relative z-10 w-full h-full object-cover rounded-full p-2 shadow-sm group-hover:scale-105 transition-transform duration-300" priority />
               </div>
               <div className="flex-1 flex flex-col justify-center">
                 <h3 className="text-xl font-bold text-[#1a237e] group-hover:text-amber-600 transition-colors mb-1">Saravana Kumar</h3>
                 <p className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-2.5">CEO</p>
                 <p className="text-slate-600 font-medium text-xs sm:text-sm leading-relaxed">
                   With 23 years of experience in media, broadcasting, filmmaking and events, Saravana brings creativity, leadership and a passion for education to SpellBee Universe.
                 </p>
               </div>
            </div>
            
            {/* Vani */}
            <div className="bg-slate-50/60 hover:bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 hover:border-amber-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left h-full group cursor-pointer">
               <div className="relative w-36 h-36 sm:w-40 sm:h-40 shrink-0">
                 <div className="absolute inset-0 bg-[#fbc02d] rounded-[50%_50%_30%_70%/50%_40%_60%_50%] z-0 opacity-80 group-hover:-rotate-12 transition-transform duration-500"></div>
                 <Image src="/images/vani-gowda-cfo.png" alt="Vani Gowda" width={160} height={160} className="relative z-10 w-full h-full object-cover rounded-full p-2 shadow-sm group-hover:scale-105 transition-transform duration-300" priority />
               </div>
               <div className="flex-1 flex flex-col justify-center">
                 <h3 className="text-xl font-bold text-[#1a237e] group-hover:text-amber-600 transition-colors mb-1">Vani Gowda</h3>
                 <p className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-2.5">CFO</p>
                 <p className="text-slate-600 font-medium text-xs sm:text-sm leading-relaxed">
                   An entrepreneur, social worker, writer, sports enthusiast and education advocate, Vani brings a deep commitment to creating meaningful opportunities for young learners.
                 </p>
               </div>
            </div>
          </div>
        </div>

        {/* Jury Section */}
        <div className="mb-6 sm:mb-8 border-b border-slate-100 pb-6 sm:pb-8">
          <div className="mb-5 sm:mb-6 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a237e] mb-1.5 tracking-tight">Our Jury & Experts</h2>
            <p className="text-[#3949ab] font-medium text-sm sm:text-base max-w-md mx-auto sm:mx-0">Guiding, evaluating and inspiring our young learners.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
            {/* Jury 1 - Elvis Joseph */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-2xs border border-slate-100/80 hover:border-amber-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col sm:flex-row gap-4 items-center sm:items-start text-center sm:text-left h-full group cursor-pointer">
              <div className="relative w-20 h-20 shrink-0">
                 <div className="absolute inset-0 bg-[#fbc02d] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] z-0 opacity-80 group-hover:scale-105 transition-transform"></div>
                 <Image src="/images/elvis-joseph.png" alt="Elvis Joseph" width={80} height={80} className="relative z-10 w-full h-full object-cover rounded-full p-1 group-hover:scale-110 transition-transform duration-300" priority />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-[#1a237e] group-hover:text-amber-600 transition-colors mb-0.5 leading-snug">Elvis Joseph</h3>
                <p className="text-blue-500 font-semibold text-xs mb-2">Jury Member</p>
                <p className="text-slate-600 text-xs leading-relaxed">
                  As the Founder Trustee and Executive Director of the Bangalore Schools Sports Foundation (BSSF), Elvis has been at the forefront of pioneering Sports-for-Development initiatives that have positively impacted thousands of children and young people across India. Under his leadership, BSSF has evolved into a nationally recognized organization dedicated to empowering vulnerable, marginalized, and underserved communities through sports, education, leadership, and humanitarian action.
                </p>
              </div>
            </div>
            
            {/* Jury 2 */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-2xs border border-slate-100/80 hover:border-amber-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col sm:flex-row gap-4 items-center sm:items-start text-center sm:text-left h-full group cursor-pointer">
              <div className="relative w-20 h-20 shrink-0">
                 <div className="absolute inset-0 bg-[#fbc02d] rounded-[50%_50%_30%_70%/50%_40%_60%_50%] z-0 opacity-80 group-hover:scale-105 transition-transform"></div>
                 <Image src="/images/bipinchandra-jury.png" alt="Bipinchandra Chaugule" width={80} height={80} className="relative z-10 w-full h-full object-cover rounded-full p-1 group-hover:scale-110 transition-transform duration-300" priority />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-[#1a237e] group-hover:text-amber-600 transition-colors mb-0.5 leading-snug">Bipinchandra Chaugule</h3>
                <p className="text-blue-500 font-semibold text-xs mb-2">Jury Member</p>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Educated in Physics, Sociology, Journalism, Information Technology, Television production, working for overseas TV channels director and script-writer for many decades, Founder/President of the Association of Left-handers, India.
                </p>
              </div>
            </div>
            
            {/* Jury 3 */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-2xs border border-slate-100/80 hover:border-amber-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col sm:flex-row gap-4 items-center sm:items-start text-center sm:text-left h-full group cursor-pointer">
              <div className="relative w-20 h-20 shrink-0">
                 <div className="absolute inset-0 bg-[#fbc02d] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] z-0 opacity-80 group-hover:scale-105 transition-transform"></div>
                 <Image src="/images/ashok-gowda-jury.png" alt="Ashok K M Gowda" width={80} height={80} className="relative z-10 w-full h-full object-cover rounded-full p-1 group-hover:scale-110 transition-transform duration-300" priority />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-[#1a237e] group-hover:text-amber-600 transition-colors mb-0.5 leading-snug">Ashok K M Gowda</h3>
                <p className="text-blue-500 font-semibold text-xs mb-2">Jury Member</p>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Possesses a diverse skill set encompassing architecture, education, and politics. He has proficiency in several languages and a keen interest in social welfare. Mr Gowda is deeply passionate about creating a sustainable and inclusive India through skill development and tourism initiatives and contributing to the betterment of society.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="mb-4 sm:mb-5 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a237e] mb-1.5 tracking-tight">Our Team</h2>
            <p className="text-[#3949ab] font-medium text-sm sm:text-base max-w-md mx-auto sm:mx-0">A dedicated team working together to make SpellBee Universe a success.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 items-stretch">
            <div className="bg-slate-50/70 hover:bg-white rounded-xl p-4 sm:p-5 border border-slate-100 hover:border-amber-200 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer min-h-[120px] h-full">
              <Code className="w-7 h-7 text-blue-500 group-hover:scale-120 group-hover:rotate-12 transition-all duration-300 mb-2.5" />
              <p className="text-xs sm:text-sm font-bold text-[#1a237e] group-hover:text-blue-600 transition-colors leading-tight">Technology &<br/>Development</p>
            </div>
            <div className="bg-slate-50/70 hover:bg-white rounded-xl p-4 sm:p-5 border border-slate-100 hover:border-purple-200 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer min-h-[120px] h-full">
              <CalendarDays className="w-7 h-7 text-purple-500 group-hover:scale-120 group-hover:rotate-12 transition-all duration-300 mb-2.5" />
              <p className="text-xs sm:text-sm font-bold text-[#1a237e] group-hover:text-purple-600 transition-colors leading-tight">Event Operations</p>
            </div>
            <div className="bg-slate-50/70 hover:bg-white rounded-xl p-4 sm:p-5 border border-slate-100 hover:border-green-200 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer min-h-[120px] h-full">
              <Megaphone className="w-7 h-7 text-green-600 group-hover:scale-120 group-hover:rotate-12 transition-all duration-300 mb-2.5" />
              <p className="text-xs sm:text-sm font-bold text-[#1a237e] group-hover:text-green-600 transition-colors leading-tight">Digital Marketing</p>
            </div>
            <div className="bg-slate-50/70 hover:bg-white rounded-xl p-4 sm:p-5 border border-slate-100 hover:border-pink-200 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer min-h-[120px] h-full">
              <FileText className="w-7 h-7 text-pink-500 group-hover:scale-120 group-hover:rotate-12 transition-all duration-300 mb-2.5" />
              <p className="text-xs sm:text-sm font-bold text-[#1a237e] group-hover:text-pink-600 transition-colors leading-tight">Content</p>
            </div>
            <div className="bg-slate-50/70 hover:bg-white rounded-xl p-4 sm:p-5 border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer min-h-[120px] h-full col-span-2 md:col-span-1">
              <Handshake className="w-7 h-7 text-blue-600 group-hover:scale-120 group-hover:rotate-12 transition-all duration-300 mb-2.5" />
              <p className="text-xs sm:text-sm font-bold text-[#1a237e] group-hover:text-blue-600 transition-colors leading-tight">School Partnerships</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Team;
