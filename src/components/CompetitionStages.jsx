import React from 'react';
import { ArrowRight, CheckCircle2, FileText, BookOpen, Type, Award, Mic, Zap, Image as ImageIcon, MessageSquare, Volume2, Bell, Eye, Trophy, Gift } from 'lucide-react';
import Image from 'next/image';

const CompetitionStages = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col gap-8">
          
          {/* Row 1: Written and Oral Rounds */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            
            {/* Step 3: Written Round */}
            <div className="lg:col-span-3 bg-[#f4f8ff] rounded-3xl p-8 border border-blue-100 flex flex-col md:flex-row relative overflow-hidden">
              <div className="flex-1 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl shadow-sm">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1a237e]">Written Round</h3>
                    <p className="text-[#3949ab] text-sm mt-1 max-w-xs">All registered participants take the written examination.</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  <div className="bg-white rounded-xl p-3 flex flex-col items-center justify-center gap-2 border border-blue-50 shadow-sm">
                    <FileText className="w-6 h-6 text-blue-500" />
                    <span className="text-xs font-semibold text-[#1a237e]">Written Test</span>
                  </div>
                  <div className="bg-white rounded-xl p-3 flex flex-col items-center justify-center gap-2 border border-blue-50 shadow-sm">
                    <BookOpen className="w-6 h-6 text-blue-500" />
                    <span className="text-xs font-semibold text-[#1a237e]">Vocabulary</span>
                  </div>
                  <div className="bg-white rounded-xl p-3 flex flex-col items-center justify-center gap-2 border border-blue-50 shadow-sm">
                    <Type className="w-6 h-6 text-blue-500" />
                    <span className="text-xs font-semibold text-[#1a237e]">Spelling</span>
                  </div>
                  <div className="bg-white rounded-xl p-3 flex flex-col items-center justify-center gap-2 border border-blue-50 shadow-sm text-center">
                    <Award className="w-6 h-6 text-blue-500" />
                    <span className="text-[10px] font-semibold text-[#1a237e] leading-tight">Participation<br/>Recognition</span>
                  </div>
                </div>

                <div className="inline-block bg-[#dbeafe] text-blue-800 text-sm font-medium px-4 py-2 rounded-lg">
                  Qualified students move forward to the next round.
                </div>
              </div>
              
              {/* Illustration placeholder */}
              <div className="hidden md:flex w-48 shrink-0 items-end justify-end relative">
                <Image 
                  src="/images/little-learner.png" 
                  alt="Written Round" 
                  width={200} 
                  height={200} 
                  className="w-full h-auto object-cover rounded-2xl relative z-20"
                />
                <div className="absolute bottom-10 right-0 w-32 h-32 bg-blue-200 rounded-full opacity-50 blur-2xl z-10"></div>
              </div>
            </div>

            {/* Step 4: Oral Round */}
            <div className="lg:col-span-2 bg-[#fff0f5] rounded-3xl p-8 border border-pink-100 relative overflow-hidden">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#ec407a] text-white flex items-center justify-center font-bold text-2xl shadow-sm">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#880e4f]">Oral Round</h3>
                </div>
              </div>
              <p className="text-[#ad1457] text-sm mb-6 leading-relaxed max-w-sm">
                Students demonstrate their spelling skills through interactive oral rounds conducted at school.
              </p>

              <div className="space-y-3 mb-8 relative z-10">
                {["Live interaction", "Confidence building", "Better communication"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#ec407a] shrink-0" />
                    <span className="text-[#880e4f] font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Illustration */}
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-center">
                 <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-2">
                   <Mic className="w-8 h-8 text-[#ec407a]" />
                 </div>
                 <div className="text-center font-script text-[#ec407a] font-bold leading-tight rotate-[-10deg]">
                   Speak<br/>Spell<br/>Shine
                 </div>
              </div>
            </div>

          </div>

          {/* Step 5: Grand Finale */}
          <div className="bg-[#1a237e] rounded-3xl p-8 md:p-10 relative overflow-hidden text-white border border-[#283593] shadow-xl">
             {/* Background Effects */}
             <div className="absolute inset-0 bg-gradient-to-r from-[#1a237e] via-[#311b92] to-[#1a237e] opacity-80"></div>
             <div className="absolute inset-0 bg-[url('/images/stars-bg.png')] opacity-30 bg-cover bg-center mix-blend-screen"></div>
             <div className="absolute top-0 left-1/4 w-64 h-full bg-blue-500 opacity-20 blur-3xl transform -skew-x-12"></div>
             <div className="absolute top-0 right-1/4 w-64 h-full bg-blue-500 opacity-20 blur-3xl transform skew-x-12"></div>

             <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Content */}
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#fbc02d] text-gray-900 flex items-center justify-center font-bold text-2xl shadow-sm">
                      5
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">Grand Finale</h3>
                    </div>
                  </div>
                  <p className="text-blue-200 font-medium mb-6">Welcome to the Spell Master Stage</p>
                  <p className="text-blue-100 text-sm leading-relaxed mb-8">
                    Selected finalists compete in an exciting stage competition featuring multiple spelling and language challenges.
                  </p>
                  <button className="px-6 py-3 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-gray-900 font-bold shadow-lg transition-all flex items-center gap-2 text-sm">
                    Explore Competition <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Center Image */}
                <div className="lg:col-span-4 flex justify-center items-end h-full min-h-[250px] relative">
                    <div className="w-full max-w-[280px] aspect-square rounded-t-full bg-gradient-to-b from-blue-400/30 to-transparent absolute bottom-0 flex items-end justify-center pb-4">
                        <div className="text-8xl">🏆</div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="lg:col-span-4">
                  <div className="bg-[#121858]/80 backdrop-blur-sm border border-blue-800/50 rounded-2xl p-6">
                    <h4 className="text-white font-bold mb-4 border-b border-blue-800/50 pb-2">The Grand Finale Challenges</h4>
                    <div className="space-y-3">
                      {[
                        { icon: <Zap className="w-4 h-4" />, text: "Rapid Fire Spelling" },
                        { icon: <ImageIcon className="w-4 h-4" />, text: "Audio-Visual Words" },
                        { icon: <Type className="w-4 h-4" />, text: "Jumbled Letters" },
                        { icon: <BookOpen className="w-4 h-4" />, text: "Meaning & Usage" },
                        { icon: <Volume2 className="w-4 h-4" />, text: "Pronunciation & Listening" },
                        { icon: <Bell className="w-4 h-4" />, text: "Buzzer Round" },
                        { icon: <Eye className="w-4 h-4" />, text: "Visual Memory Challenge" },
                        { icon: <Award className="w-4 h-4" />, text: "Champion Elimination" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-300">
                            {item.icon}
                          </div>
                          <span className="text-blue-100 text-sm">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

             </div>
          </div>

          {/* Step 6: Recognition */}
          <div className="bg-[#fffdf0] rounded-3xl p-8 border border-amber-100 shadow-sm">
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#fbc02d] text-gray-900 flex items-center justify-center font-bold text-2xl shadow-sm">
                      6
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#1a237e]">Recognition</h3>
                      <p className="text-[#3949ab] font-medium text-sm mt-1">Every effort deserves to be celebrated.</p>
                    </div>
                  </div>
                  <p className="text-[#3949ab] text-sm leading-relaxed mb-8 max-w-md">
                    Participants, finalists and winners receive certificates, medals, gifts and trophies based on the competition stage.
                  </p>
                  <button className="px-6 py-2.5 rounded-full border-2 border-[#fbc02d] text-[#1a237e] hover:bg-[#fff9df] font-bold transition-all flex items-center gap-2 text-sm bg-white">
                    Awards & Recognition <ArrowRight className="w-4 h-4 text-[#fbc02d]" />
                  </button>
                </div>

                <div className="lg:col-span-7">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    
                    <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center text-center border border-amber-50 shadow-sm gap-3 h-full">
                      <div className="w-16 h-12 bg-amber-100 rounded-lg flex items-center justify-center border border-amber-200">
                        <FileText className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#1a237e]">Certificates</h4>
                        <p className="text-[10px] text-[#3949ab]">(Participants)</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center text-center border border-amber-50 shadow-sm gap-3 h-full">
                      <div className="text-4xl drop-shadow-md">🏅</div>
                      <div>
                        <h4 className="text-sm font-bold text-[#1a237e]">Medals</h4>
                        <p className="text-[10px] text-[#3949ab]">(Finalists)</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center text-center border border-amber-50 shadow-sm gap-3 h-full">
                      <div className="text-4xl drop-shadow-md">🏆</div>
                      <div>
                        <h4 className="text-sm font-bold text-[#1a237e]">Trophies</h4>
                        <p className="text-[10px] text-[#3949ab]">(Winners)</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center text-center border border-amber-50 shadow-sm gap-3 h-full">
                      <div className="text-4xl drop-shadow-md">🎁</div>
                      <div>
                        <h4 className="text-sm font-bold text-[#1a237e]">Gifts</h4>
                        <p className="text-[10px] text-[#3949ab]">(All Stages)</p>
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
