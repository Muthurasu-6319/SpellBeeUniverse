import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, FileText, BookOpen, Type, Award, Mic, Zap, Image as ImageIcon, MessageSquare, Volume2, Bell, Eye, Trophy, Gift, Medal, Tv } from 'lucide-react';

const CompetitionStages = () => {
  return (
    <section className="py-8 sm:py-10 md:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col gap-5 sm:gap-6">
          
          {/* Row 1: Written and Oral Rounds */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-6">
            
            {/* Step 3: Written Round */}
            <div className="lg:col-span-3 bg-[#f4f8ff] rounded-2xl md:rounded-3xl p-5 sm:p-6 border border-blue-200/60 flex flex-col justify-between relative overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold text-base shadow-sm shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-[#1a237e] tracking-tight">Written Round</h3>
                    <p className="text-[#3949ab] text-xs font-semibold mt-0.5">All registered participants take the written examination.</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-5">
                  <div className="bg-white rounded-xl p-3 flex flex-col items-center justify-center gap-1.5 border border-blue-100/70 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 group/item cursor-pointer">
                    <FileText className="w-5 h-5 text-blue-500 group-hover/item:scale-115 transition-transform" />
                    <span className="text-xs font-bold text-[#1a237e]">Written Test</span>
                  </div>
                  <div className="bg-white rounded-xl p-3 flex flex-col items-center justify-center gap-1.5 border border-blue-100/70 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 group/item cursor-pointer">
                    <BookOpen className="w-5 h-5 text-blue-500 group-hover/item:scale-115 transition-transform" />
                    <span className="text-xs font-bold text-[#1a237e]">Vocabulary</span>
                  </div>
                  <div className="bg-white rounded-xl p-3 flex flex-col items-center justify-center gap-1.5 border border-blue-100/70 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 group/item cursor-pointer">
                    <Type className="w-5 h-5 text-blue-500 group-hover/item:scale-115 transition-transform" />
                    <span className="text-xs font-bold text-[#1a237e]">Spelling</span>
                  </div>
                  <div className="bg-white rounded-xl p-3 flex flex-col items-center justify-center gap-1.5 border border-blue-100/70 shadow-2xs text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 group/item cursor-pointer">
                    <Award className="w-5 h-5 text-blue-500 group-hover/item:scale-115 transition-transform" />
                    <span className="text-[10px] font-bold text-[#1a237e] leading-tight">Participation<br/>Recognition</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-blue-800 text-xs font-semibold px-3.5 py-1.5 rounded-lg border border-blue-200/50 shadow-2xs">
                  Qualified students move forward to the next round.
                </div>
              </div>
            </div>

            {/* Step 4: Oral Round */}
            <div className="lg:col-span-2 bg-[#fff0f5] rounded-2xl md:rounded-3xl p-5 sm:p-6 border border-pink-200/60 relative overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#ec407a] text-white flex items-center justify-center font-extrabold text-base shadow-sm shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-[#880e4f] tracking-tight">Oral Round</h3>
                    <p className="text-[#ad1457] text-xs font-semibold">Live School Challenge</p>
                  </div>
                </div>
                <p className="text-[#ad1457] text-xs mb-4 leading-relaxed max-w-sm">
                  Students demonstrate their spelling skills through interactive oral rounds conducted at school.
                </p>

                <div className="space-y-2 mb-6 relative z-10">
                  {["Live interaction", "Confidence building", "Better communication"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                      <CheckCircle2 className="w-4 h-4 text-[#ec407a] shrink-0" />
                      <span className="text-[#880e4f] font-semibold text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Illustration with Micro-Float */}
              <div className="absolute bottom-3 right-3 md:bottom-5 md:right-5 flex flex-col items-center animate-float-slow pointer-events-none">
                 <div className="bg-pink-100/90 w-12 h-12 rounded-full flex items-center justify-center mb-1 shadow-xs border border-pink-200">
                   <Mic className="w-6 h-6 text-[#ec407a]" />
                 </div>
                 <div className="text-center font-script text-[#ec407a] text-xs font-bold leading-tight rotate-[-8deg]">
                   Speak<br/>Spell<br/>Shine
                 </div>
              </div>
            </div>

          </div>

          {/* Step 5: Grand Finale */}
          <div className="bg-[#1a237e] rounded-2xl md:rounded-3xl p-6 md:p-8 relative overflow-hidden text-white border border-[#283593] shadow-xl hover:shadow-2xl transition-all duration-300 group">
             {/* Background Effects */}
             <div className="absolute inset-0 bg-gradient-to-r from-[#1a237e] via-[#311b92] to-[#1a237e] opacity-80"></div>
             <div className="absolute top-0 left-1/4 w-64 h-full bg-blue-500 opacity-20 blur-3xl transform -skew-x-12"></div>
             <div className="absolute top-0 right-1/4 w-64 h-full bg-blue-500 opacity-20 blur-3xl transform skew-x-12"></div>

             <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                
                {/* Left Content */}
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#fbc02d] text-gray-900 flex items-center justify-center font-extrabold text-base shadow-sm shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      5
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Grand Finale</h3>
                      <p className="text-amber-300 font-semibold text-xs sm:text-sm">Welcome to the Spell Master Stage</p>
                    </div>
                  </div>
                  <p className="text-blue-100 text-xs sm:text-sm leading-relaxed mb-6">
                    Selected finalists compete in an exciting stage competition featuring multiple spelling and language challenges.
                  </p>
                  <Link 
                    href="/competition"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#fbc02d] hover:bg-yellow-400 text-gray-900 font-bold text-xs shadow-lg shadow-yellow-400/25 transition-all hover:scale-105 active:scale-95 cursor-pointer w-fit"
                  >
                    <span>Explore Competition</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Center Champion Visual */}
                <div className="lg:col-span-4 flex flex-col justify-center items-center h-full min-h-[220px] relative select-none py-2">
                  <div className="relative group/champ">
                    {/* Golden ambient aura */}
                    <div className="absolute -inset-2 bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-500 rounded-3xl blur-lg opacity-40 group-hover/champ:opacity-75 transition-opacity duration-500"></div>

                    {/* Frame Container */}
                    <div className="relative w-48 sm:w-52 h-48 sm:h-52 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-amber-300/80 shadow-2xl bg-gradient-to-b from-amber-100 to-amber-200">
                      <img 
                        src="/images/grand-finale-champion.png" 
                        alt="SpellBee Universe Grand Finale Champion"
                        className="w-full h-full object-cover object-center group-hover/champ:scale-105 transition-transform duration-500"
                      />
                      {/* Subtle bottom gradient overlay for badge readability */}
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#071330]/80 via-transparent to-transparent pointer-events-none"></div>
                    </div>

                    {/* Floating Champion Badge Pill */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 font-black text-[10px] sm:text-xs px-3 py-1 rounded-full shadow-xl border-2 border-white flex items-center gap-1.5 whitespace-nowrap tracking-wide">
                      <Trophy className="w-3.5 h-3.5 text-slate-950 fill-slate-950" />
                      <span>Spell Master Champion</span>
                    </div>
                  </div>
                </div>

                {/* Right Content - Challenges List */}
                <div className="lg:col-span-4">
                  <div className="bg-[#121858]/80 backdrop-blur-sm border border-blue-800/60 rounded-xl p-4 sm:p-5 shadow-lg">
                    <h4 className="text-white font-extrabold text-xs sm:text-sm mb-3 border-b border-blue-800/60 pb-2 flex items-center justify-between">
                      <span>Grand Finale Challenges</span>
                      <span className="text-[10px] bg-blue-900 text-blue-200 px-2 py-0.5 rounded-full font-semibold">Stage</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                      {[
                        { icon: <Zap className="w-3.5 h-3.5" />, text: "Rapid Fire Spelling" },
                        { icon: <ImageIcon className="w-3.5 h-3.5" />, text: "Audio-Visual Words" },
                        { icon: <Type className="w-3.5 h-3.5" />, text: "Jumbled Letters" },
                        { icon: <BookOpen className="w-3.5 h-3.5" />, text: "Meaning & Usage" },
                        { icon: <Volume2 className="w-3.5 h-3.5" />, text: "Pronunciation & Listening" },
                        { icon: <Bell className="w-3.5 h-3.5" />, text: "Buzzer Round" },
                        { icon: <Eye className="w-3.5 h-3.5" />, text: "Visual Memory Challenge" },
                        { icon: <Award className="w-3.5 h-3.5" />, text: "Champion Elimination" }
                      ].map((item, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center gap-2.5 px-2 py-1 rounded-md hover:bg-blue-800/60 hover:translate-x-1 transition-all duration-200 cursor-pointer"
                        >
                          <div className="w-5 h-5 rounded-full bg-blue-900/60 flex items-center justify-center text-blue-300 shrink-0">
                            {item.icon}
                          </div>
                          <span className="text-blue-100 text-xs font-medium">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

             </div>
          </div>

          {/* Step 6: Recognition */}
          <div className="bg-[#fffdf0] rounded-2xl md:rounded-3xl p-5 sm:p-6 border border-amber-200/60 shadow-xs hover:shadow-xl transition-all duration-300">
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#fbc02d] text-gray-900 flex items-center justify-center font-extrabold text-base shadow-sm shrink-0">
                      6
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-[#1a237e] tracking-tight">Recognition</h3>
                      <p className="text-[#3949ab] font-semibold text-xs">Every effort deserves celebration</p>
                    </div>
                  </div>
                  <p className="text-[#3949ab] text-xs leading-relaxed mb-4 max-w-sm">
                    Participants, finalists and winners receive certificates, medals, gifts, trophies and wide media coverage.
                  </p>
                  <button className="px-4 py-2 rounded-full border-2 border-[#fbc02d] text-[#1a237e] hover:bg-[#fff9df] font-bold text-xs transition-all inline-flex items-center gap-1.5 bg-white hover:scale-105 active:scale-95 cursor-pointer shadow-2xs">
                    Awards & Recognition <ArrowRight className="w-3.5 h-3.5 text-[#fbc02d]" />
                  </button>
                </div>

                <div className="lg:col-span-8">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                    
                    <div className="bg-white rounded-xl p-3 flex flex-col items-center justify-center text-center border border-amber-100 shadow-2xs hover:shadow-md hover:-translate-y-1.5 hover:border-amber-300 transition-all duration-300 gap-2 h-full cursor-pointer group/card">
                      <div className="w-11 h-9 bg-amber-100 rounded-lg flex items-center justify-center border border-amber-200 group-hover/card:scale-110 transition-transform">
                        <FileText className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#1a237e]">Certificates</h4>
                        <p className="text-[10px] text-[#3949ab] mt-0.5">(Participants)</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-3 flex flex-col items-center justify-center text-center border border-amber-100 shadow-2xs hover:shadow-md hover:-translate-y-1.5 hover:border-amber-300 transition-all duration-300 gap-2 h-full cursor-pointer group/card">
                      <div className="group-hover/card:scale-125 group-hover/card:-rotate-6 transition-transform">
                        <Medal className="w-7 h-7 text-amber-500 fill-amber-300" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#1a237e]">Medals</h4>
                        <p className="text-[10px] text-[#3949ab] mt-0.5">(Finalists)</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-3 flex flex-col items-center justify-center text-center border border-amber-100 shadow-2xs hover:shadow-md hover:-translate-y-1.5 hover:border-amber-300 transition-all duration-300 gap-2 h-full cursor-pointer group/card">
                      <div className="group-hover/card:scale-125 group-hover/card:-rotate-6 transition-transform">
                        <Trophy className="w-7 h-7 text-amber-500 fill-amber-300" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#1a237e]">Trophies</h4>
                        <p className="text-[10px] text-[#3949ab] mt-0.5">(Winners)</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-3 flex flex-col items-center justify-center text-center border border-amber-100 shadow-2xs hover:shadow-md hover:-translate-y-1.5 hover:border-amber-300 transition-all duration-300 gap-2 h-full cursor-pointer group/card">
                      <div className="group-hover/card:scale-125 group-hover/card:-rotate-6 transition-transform">
                        <Gift className="w-7 h-7 text-pink-500" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#1a237e]">Gifts</h4>
                        <p className="text-[10px] text-[#3949ab] mt-0.5">(All Stages)</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-3 flex flex-col items-center justify-center text-center border border-amber-100 shadow-2xs hover:shadow-md hover:-translate-y-1.5 hover:border-amber-300 transition-all duration-300 gap-2 h-full cursor-pointer group/card">
                      <div className="group-hover/card:scale-125 group-hover/card:-rotate-6 transition-transform">
                        <Tv className="w-7 h-7 text-indigo-500" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#1a237e] leading-snug">Media Presence</h4>
                        <p className="text-[10px] text-[#3949ab] leading-tight mt-0.5">(Live & Coverage)</p>
                      </div>
                    </div>

                  </div>
                </div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompetitionStages;
