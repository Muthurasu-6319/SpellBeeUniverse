"use client";
import React, { useState, useMemo } from 'react';
import { 
  Lightbulb, 
  FileText, 
  Trophy, 
  BookOpen, 
  Users, 
  School, 
  Star, 
  Smartphone, 
  Plus, 
  Minus, 
  MessageCircle, 
  Phone, 
  ArrowRight, 
  LogIn,
  Sparkles,
  Search,
  Check,
  X
} from 'lucide-react';

const FAQAccordionSection = ({ searchQuery = '', onClearSearch, selectedCategory = null }) => {
  const [openItems, setOpenItems] = useState({});
  const [feedback, setFeedback] = useState({});

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleFeedback = (id, type) => {
    setFeedback(prev => ({
      ...prev,
      [id]: type
    }));
  };

  const sections = [
    {
      id: "general",
      title: "General",
      icon: <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />,
      iconBg: "bg-amber-100",
      items: [
        { 
          q: "What is the SpellBee Universe competition?", 
          a: "The SpellBee Universe competition is a three-round contest where participants progress through a written examination, an interactive oral round conducted in school, and a grand finale stage competition. Students spell words correctly across each round, with qualified participants advancing to the next stage." 
        },
        { 
          q: "What is the goal of the SpellBee Universe competition?", 
          a: "The SpellBee Universe competition aims for students to know and understand English vocabulary and pronounce and annunciate words correctly." 
        },
        { 
          q: "Who can participate in a SpellBee Universe competition?", 
          a: "Typically, spelling bee competitions are open to students from ages 6 to 16 years and elementary, middle, and high school grade levels (Classes 1 to 10 across CBSE, ICSE, State Boards and International curriculums)." 
        },
        { 
          q: "Is there any registration fee for competitions?", 
          a: "Yes, the participant must pay the registration fee." 
        },
        { 
          q: "What are the competition categories?", 
          a: "There are four age-tailored categories: Classes 1-2 (Little Learners), Classes 3-5 (Young Explorers), Classes 6-7 (Growing Achievers), and Classes 8-10 (Future Leaders)." 
        },
        { 
          q: "Where can I find more information?", 
          a: "You can explore our How It Works and Resources pages, or contact our dedicated academic support desk via WhatsApp or email." 
        }
      ]
    },
    {
      id: "registration",
      title: "Registration",
      icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" />,
      iconBg: "bg-pink-100",
      items: [
        { 
          q: "What is the Registration process?", 
          a: "The registration process for the SpellBee Universe competition can vary. Here are some general steps you can follow to register:\n\n• Download the SpellBee Universe App from Google Play Store (once available) or register on our website.\n• Once downloaded, register by creating an account.\n• Pay a registration fee of ₹380 + GST to enter the first round (Progressing rounds will carry their registration fees).\n• Cross each level by scoring high.\n• After qualifying through the written examination and oral round, selected students advance to the Grand Finale stage competition." 
        },
        { 
          q: "What are the details required for registration?", 
          a: "You need to provide the necessary information required for registration, such as your name, grade level, school and contact information so that you can be registered for the right category and level and be notified of your progress throughout the competition." 
        },
        { 
          q: "Is there any registration fee for competitions?", 
          a: "Yes, the participant must pay the registration fee. The fee for the first round is ₹380 + GST, and progressing rounds carry their respective fees." 
        },
        { 
          q: "Are there any deadlines to complete the rounds?", 
          a: "Yes, each round has a deadline. You will get notified about these after your registration is complete." 
        },
        { 
          q: "Can I register through my school?", 
          a: "Yes, if your school is an official partner, you can register via the school coordinator with special institutional support." 
        }
      ]
    },
    {
      id: "competition",
      title: "Competition",
      icon: <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />,
      iconBg: "bg-emerald-100",
      items: [
        { 
          q: "How are SpellBee Universe competitions judged?", 
          a: "Round 1 is a written examination where all participants appear for a written test. Qualified students advance based on their performance.\n\nRound 2 consists of interactive spelling rounds conducted in school.\n\nRound 3 is the Grand Finale (Spell Master Stage), a high-level stage competition with advanced rounds where participants spell words aloud and may be eliminated if they misspell a word." 
        },
        { 
          q: "How can we know I am eligible for the next levels or rounds?", 
          a: "SpellBee Universe competition will share feedback on the app to let you know if you are eligible to participate in the next level or round." 
        },
        { 
          q: "Are there any deadlines to complete the rounds?", 
          a: "Yes, each round has a deadline. You will get notified about these after your registration is complete." 
        },
        { 
          q: "How many rounds are there in total?", 
          a: "The competition comprises three structured rounds: Round 1 (Written Examination), Round 2 (Interactive Oral Round conducted in school), and Round 3 (The Grand Finale)." 
        },
        { 
          q: "What happens in the Grand Finale?", 
          a: "Selected national finalists compete live on stage with buzzers, rapid fire spelling, audio-visual challenges, and elimination rounds." 
        }
      ]
    },
    {
      id: "preparation",
      title: "Preparation",
      icon: <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />,
      iconBg: "bg-blue-100",
      items: [
        { 
          q: "How do I prepare for a SpellBee Universe competition?", 
          a: "To prepare for a SpellBee Universe competition, you should study commonly misspelled words and practice spelling them out loud. You may also want to use flashcards or the SpellBee Universe app to help you memorize spellings." 
        },
        { 
          q: "Are study materials provided?", 
          a: "Yes, every registered student gets access to category-specific word banks, practice worksheets, and phonetics audio clips." 
        },
        { 
          q: "Are practice tests available?", 
          a: "Yes, multiple mock tests and interactive timed quizzes are available in the Practice Zone of our website and mobile app." 
        },
        { 
          q: "How can students improve pronunciation?", 
          a: "Use the audio speaker tool in our Practice Zone to listen to correct British and American pronunciations with syllable breakdowns." 
        },
        { 
          q: "How can students improve vocabulary?", 
          a: "Read daily context sentences, study root words and prefixes/suffixes, and engage with our meaning-and-usage worksheets." 
        }
      ]
    },
    {
      id: "parents",
      title: "Parents",
      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />,
      iconBg: "bg-purple-100",
      items: [
        { 
          q: "How can we know if my child is eligible for the next levels or rounds?", 
          a: "SpellBee Universe competition will share feedback on the app to let you know if you are eligible to participate in the next level or round. Additionally, parents receive updates via SMS, WhatsApp, and registered email." 
        },
        { 
          q: "Are there any deadlines to complete the rounds?", 
          a: "Yes, each round has a deadline. You will get notified about these after your registration is complete." 
        },
        { 
          q: "Where will dates be announced?", 
          a: "Competition dates are updated on the website calendar, student dashboard, and communicated directly by school coordinators." 
        },
        { 
          q: "How will I receive certificates?", 
          a: "Digital certificates of participation are downloadable instantly from the dashboard; printed trophies and medals are shipped or awarded at school ceremonies." 
        }
      ]
    },
    {
      id: "schools",
      title: "Schools",
      icon: <School className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />,
      iconBg: "bg-teal-100",
      items: [
        { q: "How can our school participate?", a: "Fill out the School Partnership form on our Schools page, and our team will provide your school coordinator with the partner kit." },
        { q: "Who coordinates the school round?", a: "The designated English teacher or school coordinator conducts the test with complete question papers and audio provided by us." },
        { q: "How can a school become a partner?", a: "Schools can submit their details through our online form or email schools@spellbeeuniverse.com for immediate partnership onboarding." },
        { q: "How can a teacher/coordinator register?", a: "Coordinators receive personalized login credentials to monitor enrollments, print hall tickets, and download test materials." }
      ]
    },
    {
      id: "grand-finale",
      title: "Grand Finale",
      icon: <Star className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500" />,
      iconBg: "bg-rose-100",
      items: [
        { 
          q: "What are the prizes for winning the SpellBee Universe competition?", 
          a: "The prizes for winning the SpellBee Universe competition vary depending on the competition and are subjected to the terms and conditions of the competition. Some competitions may offer cash prizes and gifts like a digital watch, an iPad, holidays etc., while others may offer trophies or certificates. In some cases, winners may also earn scholarships, a trip to NASA, and other forms of recognition." 
        },
        { 
          q: "What happens on the Spell Master stage?", 
          a: "Finalists compete on a state-of-the-art stage with spotlights, digital buzzer podiums, live audience cheering, and expert jury panels." 
        },
        { 
          q: "What are the Grand Finale challenges?", 
          a: "Challenges include Rapid Fire Spelling, Buzzer Round, Audio-Visual Words, Visual Memory Challenge, and Champion Elimination." 
        },
        { 
          q: "What recognition do finalists receive?", 
          a: "All finalists receive customized championship medals, framed certificates of merit, and exclusive SpellBee gifts." 
        }
      ]
    },
    {
      id: "app-login",
      title: "App / Login",
      icon: <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-sky-500" />,
      iconBg: "bg-sky-100",
      items: [
        { 
          q: "Where can I download the app?", 
          a: "It will be available on the play store and the app store shortly. All the registered users will be intimated with the app link to download." 
        },
        { 
          q: "How do I log in?", 
          a: "Use the registered mobile number or student registration ID along with your secure password or OTP." 
        },
        { 
          q: "What if I forget my password?", 
          a: "Click on 'Forgot Password' on the login screen to receive an instant password reset link on your registered phone or email." 
        },
        { 
          q: "Can I use the app on multiple devices?", 
          a: "Yes, students can log in from smartphones, tablets, or desktop browsers with progress synchronized automatically once the app is launched." 
        }
      ]
    }
  ];

  // Filter sections and items if searchQuery is present
  const { filteredSections, totalMatches } = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) {
      return { filteredSections: sections, totalMatches: 0 };
    }

    let count = 0;
    const res = sections.map(sec => {
      const matchingItems = sec.items.filter(item => {
        const match = item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q);
        if (match) count++;
        return match;
      });
      return {
        ...sec,
        items: matchingItems
      };
    }).filter(sec => sec.items.length > 0);

    return { filteredSections: res, totalMatches: count };
  }, [searchQuery]);

  const isSearching = searchQuery.trim().length > 0;

  return (
    <section className="py-5 md:py-8 bg-slate-50/70 border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a237e] mb-1 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-[#3949ab] font-medium text-xs sm:text-sm">
              Detailed explanations and guidance organized by topic.
            </p>
          </div>

          {/* Active Search status chip */}
          {isSearching && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-xs font-bold text-amber-900 shadow-2xs">
              <Search className="w-3.5 h-3.5 text-amber-700" />
              <span>Found {totalMatches} result{totalMatches === 1 ? '' : 's'} for &ldquo;{searchQuery}&rdquo;</span>
              <button 
                onClick={onClearSearch}
                className="ml-1 p-0.5 hover:bg-amber-200 rounded-full transition-colors text-amber-800"
                aria-label="Clear filter"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Categorized FAQ Groups (8 cols) */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-5">
            {filteredSections.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200/90 p-8 text-center shadow-xs">
                <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-3">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-[#1a237e] mb-1">
                  No matching questions found
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm font-medium mb-4 max-w-md mx-auto">
                  We couldn&apos;t find an exact match for &ldquo;{searchQuery}&rdquo;. Try another term or reset the search to browse all categories.
                </p>
                <button
                  onClick={onClearSearch}
                  className="px-4 py-2 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-slate-900 font-extrabold text-xs shadow-xs transition-transform active:scale-95 cursor-pointer"
                >
                  Show All FAQs
                </button>
              </div>
            ) : (
              filteredSections.map((sec) => (
                <div 
                  key={sec.id} 
                  id={`faq-${sec.id}`}
                  className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-2xs scroll-mt-24 transition-all duration-300"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-2.5 mb-3.5 pb-2.5 border-b border-slate-100">
                    <div className={`w-8 h-8 rounded-lg ${sec.iconBg} flex items-center justify-center shrink-0`}>
                      {sec.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-[#1a237e]">
                      {sec.title}
                    </h3>
                  </div>

                  {/* Questions List */}
                  <div className="space-y-2.5">
                    {sec.items.map((item, idx) => {
                      const itemId = `${sec.id}-${idx}`;
                      const isOpen = isSearching || !!openItems[itemId];

                      return (
                        <div 
                          key={idx}
                          className={`rounded-xl border transition-all duration-200 ${isOpen ? 'border-amber-300/80 bg-amber-50/20 shadow-xs' : 'border-slate-100 bg-slate-50/50 hover:border-amber-200 hover:bg-amber-50/10'}`}
                        >
                          <button
                            onClick={() => toggleItem(itemId)}
                            className="w-full flex items-center justify-between text-left gap-3 p-3 sm:p-3.5 group cursor-pointer"
                          >
                            <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#1a237e] leading-snug">
                              {item.q}
                            </span>
                            <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-amber-400 text-slate-900' : 'bg-white border border-slate-200 text-slate-500 group-hover:bg-amber-100 group-hover:text-amber-800'}`}>
                              {isOpen ? <Minus className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> : <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
                            </div>
                          </button>

                          {isOpen && (
                            <div className="px-3 pb-3 sm:px-3.5 sm:pb-3.5 pt-2 border-t border-slate-200/50 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium animate-fadeIn">
                              {item.a.includes('\n•') || item.a.startsWith('•') ? (
                                <div className="space-y-2">
                                  {item.a.split('\n\n').map((paragraph, pIdx) => {
                                    if (paragraph.includes('•')) {
                                      return (
                                        <div key={pIdx} className="space-y-1.5 my-1.5">
                                          {paragraph.split('\n').map((line, lIdx) => {
                                            const trimmed = line.trim();
                                            if (trimmed.startsWith('•')) {
                                              return (
                                                <div key={lIdx} className="flex items-start gap-2.5 text-left">
                                                  <span className="text-amber-500 font-bold shrink-0 select-none mt-0.5">•</span>
                                                  <span className="flex-1 leading-relaxed">{trimmed.replace(/^•\s*/, '')}</span>
                                                </div>
                                              );
                                            }
                                            return trimmed ? <p key={lIdx} className="text-left leading-relaxed">{trimmed}</p> : null;
                                          })}
                                        </div>
                                      );
                                    }
                                    return <p key={pIdx} className="text-left leading-relaxed">{paragraph}</p>;
                                  })}
                                </div>
                              ) : item.a.includes('\n\n') ? (
                                <div className="space-y-2.5 text-left">
                                  {item.a.split('\n\n').map((paragraph, pIdx) => (
                                    <p key={pIdx} className="leading-relaxed">{paragraph}</p>
                                  ))}
                                </div>
                              ) : (
                                <p className="text-left leading-relaxed">{item.a}</p>
                              )}

                              {/* Micro-interaction: Helpful feedback */}
                              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                                <span>Was this helpful?</span>
                                <div className="flex items-center gap-1.5">
                                  <button 
                                    onClick={(e) => { e.stopPropagation(); handleFeedback(itemId, 'yes'); }}
                                    className={`px-2.5 py-0.5 rounded-full border text-[10px] font-bold transition-all cursor-pointer ${feedback[itemId] === 'yes' ? 'bg-emerald-100 text-emerald-800 border-emerald-300' : 'bg-white hover:bg-slate-100 text-slate-600 border-slate-200'}`}
                                  >
                                    {feedback[itemId] === 'yes' ? (
                                      <span className="inline-flex items-center gap-1">
                                        <Check className="w-3 h-3 text-emerald-700" /> Helpful
                                      </span>
                                    ) : (
                                      '👍 Yes'
                                    )}
                                  </button>
                                  <button 
                                    onClick={(e) => { e.stopPropagation(); handleFeedback(itemId, 'no'); }}
                                    className={`px-2.5 py-0.5 rounded-full border text-[10px] font-bold transition-all cursor-pointer ${feedback[itemId] === 'no' ? 'bg-rose-100 text-rose-800 border-rose-300' : 'bg-white hover:bg-slate-100 text-slate-600 border-slate-200'}`}
                                  >
                                    {feedback[itemId] === 'no' ? 'Noted' : '👎 No'}
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right Column: Sticky Sidebar with 3 Cards (4 cols) */}
          <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-20">
            
            {/* Card 1: Still Have a Question? */}
            <div className="bg-[#fffdf0] border border-amber-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs text-center relative overflow-hidden">
              <div className="absolute top-2.5 right-3 w-7 h-7 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center shadow-xs animate-bounce-slow">
                <Sparkles className="w-3.5 h-3.5 fill-slate-900" />
              </div>

              <h3 className="font-serif italic font-black text-xl sm:text-2xl text-[#1a237e] leading-tight mb-1.5 pt-1">
                Still Have a<br />Question?
              </h3>
              
              <p className="text-slate-600 text-xs font-medium mb-4">
                Our academic desk is here to assist parents, students, and coordinators.
              </p>

              <div className="space-y-2">
                <a 
                  href="mailto:info@spellbeeuniverse.com"
                  className="w-full py-2.5 px-4 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-slate-900 font-extrabold text-xs shadow-xs transition-all flex items-center justify-center gap-2 group cursor-pointer active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5" /> Contact Support <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>

                <a 
                  href="https://wa.me/919611209606" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-full bg-[#25d366] hover:bg-[#20ba59] text-white font-extrabold text-xs shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" /> WhatsApp Us
                </a>
              </div>
            </div>

            {/* Card 2: Download SpellBee Universe App */}
            <div className="bg-[#f0f7ff] border border-blue-200/80 rounded-2xl p-4 sm:p-5 shadow-2xs text-center">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-2 shadow-xs">
                <Smartphone className="w-5 h-5" />
              </div>

              <div className="inline-block px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[9px] font-extrabold uppercase mb-1.5">
                Coming Shortly
              </div>

              <h4 className="text-sm sm:text-base font-extrabold text-[#1a237e] mb-1">
                SpellBee Mobile App
              </h4>
              <p className="text-slate-500 text-xs font-medium mb-3">
                Play Store & App Store links will be notified to registered spellers.
              </p>

              {/* App Store / Google Play Buttons */}
              <div className="space-y-2">
                <a 
                  href="#app-download"
                  className="w-full bg-slate-950 hover:bg-slate-800 text-white rounded-xl py-2 px-3 flex items-center justify-center gap-2.5 shadow-2xs transition-colors text-left group"
                >
                  <svg className="w-4 h-4 fill-current text-emerald-400 shrink-0" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.033 2.033 0 0 1-.22-.924V2.738c0-.339.08-.654.22-.924zM15.207 13.414l2.457 2.457-11.49 6.55 9.033-9.007zm0-2.828L6.174 1.579l11.49 6.55-2.457 2.457zm1.414 1.414l3.535-2.016a1.5 1.5 0 0 1 0 2.604l-3.535 2.016-1.414-1.414 1.414-1.19z" />
                  </svg>
                  <div>
                    <div className="text-[8px] text-slate-300 uppercase tracking-widest leading-none">Get it on</div>
                    <div className="text-[11px] font-bold leading-tight">Google Play</div>
                  </div>
                </a>

                <a 
                  href="#app-download"
                  className="w-full bg-slate-950 hover:bg-slate-800 text-white rounded-xl py-2 px-3 flex items-center justify-center gap-2.5 shadow-2xs transition-colors text-left group"
                >
                  <svg className="w-4 h-4 fill-current text-white shrink-0" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.56.64-1.06 1.7-0.93 2.73 1.01.08 2.02-.48 2.64-1.23z" />
                  </svg>
                  <div>
                    <div className="text-[8px] text-slate-300 uppercase tracking-widest leading-none">Download on the</div>
                    <div className="text-[11px] font-bold leading-tight">App Store</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Card 3: Student Login Portal Quick Access */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-2xs text-center">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-900 flex items-center justify-center mx-auto mb-2 shadow-xs">
                <Users className="w-5 h-5" />
              </div>

              <h4 className="text-sm sm:text-base font-extrabold text-[#1a237e] mb-1">
                Student Portal
              </h4>
              <p className="text-slate-500 text-xs font-medium mb-3">
                Log in to practice word banks, attempt tests, and check scores.
              </p>

              <a 
                href="/login"
                className="w-full py-2 px-4 rounded-full border-2 border-blue-600 text-blue-700 hover:bg-blue-50 font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5" /> Login Portal <ArrowRight className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQAccordionSection;
