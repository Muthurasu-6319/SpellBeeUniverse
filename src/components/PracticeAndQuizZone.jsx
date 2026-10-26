"use client";
import React, { useState } from 'react';
import { 
  Target, 
  Volume2, 
  RefreshCw, 
  HelpCircle, 
  Sparkles, 
  BookOpen, 
  SpellCheck, 
  Layers, 
  Eye, 
  ArrowRight 
} from 'lucide-react';

const PracticeAndQuizZone = () => {
  const dailyWords = [
    {
      word: "Enthusiasm",
      phonetic: "(en-thoo-zee-az-um)",
      meaning: "Great energy and excitement about something.",
      example: "Her enthusiasm inspired everyone in the class."
    },
    {
      word: "Perseverance",
      phonetic: "(pur-suh-veer-uns)",
      meaning: "Persistence in doing something despite difficulty or delay in achieving success.",
      example: "Through hard work and perseverance, he mastered difficult words."
    },
    {
      word: "Luminescent",
      phonetic: "(loo-muh-nes-unt)",
      meaning: "Emitting light not caused by heat; glowing brightly.",
      example: "The luminescent stars guided their imagination during the evening."
    }
  ];

  const [wordIndex, setWordIndex] = useState(0);

  const handleNextWord = () => {
    setWordIndex((prev) => (prev + 1) % dailyWords.length);
  };

  const currentWord = dailyWords[wordIndex];

  const quizzes = [
    { title: "Spelling Quiz", icon: <SpellCheck className="w-5 h-5 text-emerald-600" />, bg: "bg-emerald-50", badge: "New" },
    { title: "Vocabulary Quiz", icon: <BookOpen className="w-5 h-5 text-pink-600" />, bg: "bg-pink-50" },
    { title: "Meaning Quiz", icon: <HelpCircle className="w-5 h-5 text-teal-600" />, bg: "bg-teal-50" },
    { title: "Pronunciation Quiz", icon: <Volume2 className="w-5 h-5 text-blue-600" />, bg: "bg-blue-50" },
    { title: "Jumbled Words", icon: <Layers className="w-5 h-5 text-purple-600" />, bg: "bg-purple-50" },
    { title: "Visual Memory", icon: <Eye className="w-5 h-5 text-amber-600" />, bg: "bg-amber-50" }
  ];

  return (
    <section className="py-8 md:py-10 bg-white" id="practice-zone">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Card: Practice Zone (Today's Word) */}
          <div className="lg:col-span-6 bg-[#fffdf0] border border-amber-200/90 rounded-2xl sm:rounded-[2rem] p-5 sm:p-7 md:p-9 shadow-xs flex flex-col justify-between relative overflow-hidden">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shadow-xs">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                    Practice Zone
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium">
                    Take a break, try a new word and keep learning every day.
                  </p>
                </div>
              </div>

              {/* Today's Word Highlight Card */}
              <div className="mt-6 bg-amber-100/60 border border-amber-300/70 rounded-2xl p-5 mb-5">
                <span className="text-[11px] font-extrabold text-amber-800 uppercase tracking-wider block mb-1">
                  Today&apos;s Word
                </span>
                
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h4 className="text-2xl sm:text-3xl font-black text-slate-950">
                    {currentWord.word}
                  </h4>
                  <span className="text-xs sm:text-sm text-slate-600 font-semibold italic">
                    {currentWord.phonetic}
                  </span>
                  <button 
                    onClick={() => {
                      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                        const utterance = new SpeechSynthesisUtterance(currentWord.word);
                        window.speechSynthesis.speak(utterance);
                      }
                    }}
                    className="p-1.5 rounded-full bg-white hover:bg-amber-200 text-slate-900 transition-colors shadow-xs"
                    title="Listen to pronunciation"
                    aria-label="Listen"
                  >
                    <Volume2 className="w-4 h-4 text-amber-700" />
                  </button>
                </div>
              </div>

              {/* Meaning & Example */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="bg-white/80 p-3.5 rounded-xl border border-amber-200/50">
                  <span className="font-black text-slate-950 block mb-1">Meaning</span>
                  <p className="text-slate-700 font-medium leading-relaxed">
                    {currentWord.meaning}
                  </p>
                </div>

                <div className="bg-white/80 p-3.5 rounded-xl border border-amber-200/50">
                  <span className="font-black text-slate-950 block mb-1">Example</span>
                  <p className="text-slate-700 font-medium italic leading-relaxed">
                    &ldquo;{currentWord.example}&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Button & Mascot Bee */}
            <div className="mt-6 pt-4 border-t border-amber-200/50 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button 
                onClick={handleNextWord}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-slate-900 font-black text-xs sm:text-sm shadow-md transition-all inline-flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Try Another Word
              </button>

              <div className="hidden sm:flex w-8 h-8 rounded-full bg-amber-100 items-center justify-center text-amber-600 shadow-2xs">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Right Card: Quiz Zone (6 Quick Quiz Modules) */}
          <div className="lg:col-span-6 bg-[#f0fbf8] border border-emerald-200/80 rounded-2xl sm:rounded-[2rem] p-5 sm:p-7 md:p-9 shadow-xs flex flex-col justify-between" id="quiz-zone">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold shadow-xs">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                    Quiz Zone
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium">
                    Challenge yourself with interactive fun quizzes.
                  </p>
                </div>
              </div>

              {/* 6 Quiz Tiles Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3.5 mt-5 sm:mt-6">
                {quizzes.map((q, idx) => (
                  <button 
                    key={idx}
                    className="bg-white rounded-xl border border-slate-200/80 p-3 sm:p-4 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md hover:border-emerald-300 transition-all duration-200 group cursor-pointer"
                  >
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${q.bg} flex items-center justify-center mb-2 sm:mb-2.5 group-hover:scale-110 transition-transform`}>
                      {q.icon}
                    </div>
                    <span className="text-xs font-black text-slate-950 leading-tight">
                      {q.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Explore Button */}
            <div className="mt-6 pt-4 border-t border-emerald-200/50 flex justify-center sm:justify-start">
              <a 
                href="#all-quizzes"
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-slate-900 font-extrabold text-xs sm:text-sm shadow-md transition-all inline-flex items-center justify-center gap-2 group text-center cursor-pointer"
              >
                <span>Explore All Quizzes</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PracticeAndQuizZone;
