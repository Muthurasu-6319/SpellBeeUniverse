"use client";
import React, { useState } from 'react';
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
  Sparkles 
} from 'lucide-react';

const FAQAccordionSection = () => {
  const [openItems, setOpenItems] = useState({
    "general-0": false
  });

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const sections = [
    {
      id: "general",
      title: "General",
      icon: <Lightbulb className="w-5 h-5 text-amber-500" />,
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
      icon: <FileText className="w-5 h-5 text-pink-500" />,
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
      icon: <Trophy className="w-5 h-5 text-emerald-600" />,
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
      icon: <BookOpen className="w-5 h-5 text-blue-500" />,
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
      icon: <Users className="w-5 h-5 text-purple-600" />,
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
      icon: <School className="w-5 h-5 text-teal-600" />,
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
      icon: <Star className="w-5 h-5 text-rose-500" />,
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
      icon: <Smartphone className="w-5 h-5 text-sky-500" />,
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

  return (
    <section className="py-8 md:py-12 bg-slate-50/70 border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a237e] mb-2 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#3949ab] font-medium text-base md:text-lg">
            Here are some of the most common questions we receive.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 8 Categorized FAQ Groups (approx 8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {sections.map((sec) => (
              <div 
                key={sec.id} 
                id={`faq-${sec.id}`}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-100">
                  <div className={`w-9 h-9 rounded-xl ${sec.iconBg} flex items-center justify-center shrink-0`}>
                    {sec.icon}
                  </div>
                  <h3 className="text-lg font-extrabold text-[#1a237e]">
                    {sec.title}
                  </h3>
                </div>

                {/* Questions List */}
                <div className="space-y-3">
                  {sec.items.map((item, idx) => {
                    const itemId = `${sec.id}-${idx}`;
                    const isOpen = !!openItems[itemId];

                    return (
                      <div 
                        key={idx}
                        className="rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-all"
                      >
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full flex items-center justify-between text-left gap-3 group"
                        >
                          <span className="text-sm font-bold text-slate-800 group-hover:text-[#1a237e] leading-snug">
                            {item.q}
                          </span>
                          <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-slate-600 group-hover:bg-amber-100 group-hover:text-amber-800 transition-colors">
                            {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                          </div>
                        </button>

                        {isOpen && (
                          <div className="mt-3 pt-3 border-t border-slate-200/70 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium whitespace-pre-line">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Sidebar with 3 Cards (approx 4 cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            
            {/* Card 1: Still Have a Question? */}
            <div className="bg-[#fffdf0] border border-amber-200/90 rounded-[2rem] p-6 shadow-xs text-center relative overflow-hidden">
              <div className="absolute top-3 right-4 w-8 h-8 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center shadow-md animate-bounce-slow">
                <Sparkles className="w-4 h-4 fill-slate-900" />
              </div>

              <h3 className="font-serif italic font-black text-2xl text-[#1a237e] leading-tight mb-2 pt-2">
                Still Have a<br />Question?
              </h3>
              
              <p className="text-slate-600 text-xs sm:text-sm font-medium mb-6">
                Our support and academic team is happy to help you.
              </p>

              <div className="space-y-3">
                <a 
                  href="mailto:info@spellbeeuniverse.com"
                  className="w-full py-3 px-5 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-slate-900 font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 group"
                >
                  <Phone className="w-4 h-4" /> Contact Us <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a 
                  href="https://wa.me/919611209606" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 px-5 rounded-full bg-[#25d366] hover:bg-[#20ba59] text-white font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" /> WhatsApp Us
                </a>
              </div>
            </div>

            {/* Card 2: Download SpellBee Universe App */}
            <div className="bg-[#f0f7ff] border border-blue-200/80 rounded-2xl sm:rounded-[2rem] p-6 shadow-xs text-center">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-3 shadow-sm">
                <Smartphone className="w-6 h-6" />
              </div>

              <div className="inline-block px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-extrabold uppercase mb-2">
                Available Shortly
              </div>

              <h4 className="text-base sm:text-lg font-extrabold text-[#1a237e] mb-1">
                Download the SpellBee Universe App
              </h4>
              <p className="text-slate-500 text-xs font-medium mb-4">
                It will be available on the Play Store and the App Store shortly. All registered users will be intimated with the link to download.
              </p>

              {/* App Store / Google Play Buttons */}
              <div className="space-y-2.5">
                <a 
                  href="#google-play"
                  className="w-full bg-slate-950 hover:bg-slate-800 text-white rounded-xl py-2.5 px-4 flex items-center justify-center gap-3 shadow-sm transition-colors text-left"
                >
                  <svg className="w-5 h-5 fill-current text-emerald-400 shrink-0" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.033 2.033 0 0 1-.22-.924V2.738c0-.339.08-.654.22-.924zM15.207 13.414l2.457 2.457-11.49 6.55 9.033-9.007zm0-2.828L6.174 1.579l11.49 6.55-2.457 2.457zm1.414 1.414l3.535-2.016a1.5 1.5 0 0 1 0 2.604l-3.535 2.016-1.414-1.414 1.414-1.19z" />
                  </svg>
                  <div>
                    <div className="text-[9px] text-slate-300 uppercase tracking-widest leading-none">Get it on</div>
                    <div className="text-xs font-bold leading-tight">Google Play</div>
                  </div>
                </a>

                <a 
                  href="#app-store"
                  className="w-full bg-slate-950 hover:bg-slate-800 text-white rounded-xl py-2.5 px-4 flex items-center justify-center gap-3 shadow-sm transition-colors text-left"
                >
                  <svg className="w-5 h-5 fill-current text-white shrink-0" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.56.64-1.06 1.7-0.93 2.73 1.01.08 2.02-.48 2.64-1.23z" />
                  </svg>
                  <div>
                    <div className="text-[9px] text-slate-300 uppercase tracking-widest leading-none">Download on the</div>
                    <div className="text-xs font-bold leading-tight">App Store</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Card 3: Student Login Portal Quick Access */}
            <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-xs text-center">
              <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-900 flex items-center justify-center mx-auto mb-3 shadow-sm">
                <Users className="w-6 h-6" />
              </div>

              <h4 className="text-base sm:text-lg font-extrabold text-[#1a237e] mb-1">
                Student Login
              </h4>
              <p className="text-slate-500 text-xs font-medium mb-5">
                Access your account, word banks, mock tests, and certificates.
              </p>

              <a 
                href="#student-login"
                className="w-full py-2.5 px-5 rounded-full border-2 border-blue-600 text-blue-700 hover:bg-blue-50 font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
              >
                <LogIn className="w-4 h-4" /> Login Now <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQAccordionSection;
