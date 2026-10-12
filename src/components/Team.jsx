import React from 'react';
import { Code, CalendarDays, Megaphone, FileText, Handshake } from 'lucide-react';
import Image from 'next/image';

const Team = () => {
  return (
    <div className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Founders Section */}
        <div className="mb-24 border-b border-gray-100 pb-20">
          <h2 className="text-3xl font-bold text-[#1a237e] mb-12 tracking-tight">Meet Our Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Saravana */}
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
               <div className="relative w-48 h-48 shrink-0">
                 <div className="absolute inset-0 bg-[#fbc02d] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] z-0 opacity-80"></div>
                 <Image src="/images/saravana.png" alt="Saravana Kumar" width={192} height={192} className="relative z-10 w-full h-full object-cover rounded-full p-2" />
               </div>
               <div className="mt-4 sm:mt-6">
                 <h3 className="text-xl font-bold text-[#1a237e] mb-1">Saravana Kumar</h3>
                 <p className="text-blue-500 font-semibold text-sm mb-4">CEO</p>
                 <p className="text-[#3949ab] text-sm leading-relaxed max-w-sm">
                   With 23 years of experience in media, broadcasting, filmmaking and events, Saravana brings creativity, leadership and a passion for education to SpellBee Universe.
                 </p>
               </div>
            </div>
            
            {/* Vani */}
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
               <div className="relative w-48 h-48 shrink-0">
                 <div className="absolute inset-0 bg-[#fbc02d] rounded-[50%_50%_30%_70%/50%_40%_60%_50%] z-0 opacity-80"></div>
                 <div className="relative z-10 w-full h-full bg-yellow-100 rounded-full flex items-center justify-center p-2">
                   <span className="text-4xl text-yellow-600 font-bold">VG</span>
                 </div>
               </div>
               <div className="mt-4 sm:mt-6">
                 <h3 className="text-xl font-bold text-[#1a237e] mb-1">Vani Gowda</h3>
                 <p className="text-blue-500 font-semibold text-sm mb-4">CFO</p>
                 <p className="text-[#3949ab] text-sm leading-relaxed max-w-sm">
                   An entrepreneur, social worker, writer, sports enthusiast and education advocate, Vani brings a deep commitment to creating meaningful opportunities for young learners.
                 </p>
               </div>
            </div>
          </div>
        </div>

        {/* Jury Section */}
        <div className="mb-24 border-b border-gray-100 pb-20">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[#1a237e] mb-2 tracking-tight">Our Jury & Experts</h2>
            <p className="text-[#3949ab] font-medium text-lg">Guiding, evaluating and inspiring our young learners.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Jury 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col xl:flex-row gap-4 items-center xl:items-start text-center xl:text-left hover:-translate-y-1 transition-transform">
              <div className="relative w-24 h-24 shrink-0">
                 <div className="absolute inset-0 bg-[#fbc02d] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] z-0 opacity-80"></div>
                 <div className="relative z-10 w-full h-full bg-yellow-100 rounded-full flex items-center justify-center p-1">
                   <span className="text-2xl text-yellow-600 font-bold">VS</span>
                 </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1a237e] mb-1">Dr. R Vijaya Saraswathy</h3>
                <p className="text-blue-400 font-semibold text-xs mb-3">Jury Member</p>
                <p className="text-slate-500 text-xs leading-relaxed">
                  A renowned educationist and language expert with decades of experience in academic leadership.
                </p>
              </div>
            </div>
            
            {/* Jury 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col xl:flex-row gap-4 items-center xl:items-start text-center xl:text-left hover:-translate-y-1 transition-transform">
              <div className="relative w-24 h-24 shrink-0">
                 <div className="absolute inset-0 bg-[#fbc02d] rounded-[50%_50%_30%_70%/50%_40%_60%_50%] z-0 opacity-80"></div>
                 <Image src="/images/bipin.png" alt="Bipinchandra Chaugule" width={96} height={96} className="relative z-10 w-full h-full object-cover rounded-full p-1" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1a237e] mb-1">Bipinchandra Chaugule</h3>
                <p className="text-blue-400 font-semibold text-xs mb-3">Jury Member</p>
                <p className="text-slate-500 text-xs leading-relaxed">
                  An educationist and mentor with deep expertise in language and communication skills.
                </p>
              </div>
            </div>
            
            {/* Jury 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col xl:flex-row gap-4 items-center xl:items-start text-center xl:text-left hover:-translate-y-1 transition-transform">
              <div className="relative w-24 h-24 shrink-0">
                 <div className="absolute inset-0 bg-[#fbc02d] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] z-0 opacity-80"></div>
                 <Image src="/images/ashok.png" alt="Ashok K M Gowda" width={96} height={96} className="relative z-10 w-full h-full object-cover rounded-full p-1" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1a237e] mb-1">Ashok K M Gowda</h3>
                <p className="text-blue-400 font-semibold text-xs mb-3">Jury Member</p>
                <p className="text-slate-500 text-xs leading-relaxed">
                  A respected educator and advisor in the field of education and student development activities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[#1a237e] mb-2 tracking-tight">Our Team</h2>
            <p className="text-[#3949ab] font-medium text-lg">A dedicated team working together to make SpellBee Universe a success.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow min-h-[140px]">
              <Code className="w-8 h-8 text-blue-500 mb-4" />
              <p className="text-sm font-bold text-[#1a237e]">Technology &<br/>Development</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow min-h-[140px]">
              <CalendarDays className="w-8 h-8 text-purple-400 mb-4" />
              <p className="text-sm font-bold text-[#1a237e]">Event Operations</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow min-h-[140px]">
              <Megaphone className="w-8 h-8 text-green-500 mb-4" />
              <p className="text-sm font-bold text-[#1a237e]">Digital Marketing</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow min-h-[140px]">
              <FileText className="w-8 h-8 text-pink-500 mb-4" />
              <p className="text-sm font-bold text-[#1a237e]">Content</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow min-h-[140px]">
              <Handshake className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-sm font-bold text-[#1a237e]">School Partnerships</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Team;
