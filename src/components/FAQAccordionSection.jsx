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
  LogIn 
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
        { q: "What is SpellBee Universe?", a: "SpellBee Universe is a premier national and international spelling and vocabulary competition designed to build language skills, confidence, and stage performance for students from Classes 1 to 10." },
        { q: "Who can participate?", a: "Students from Classes 1 through 10 enrolled in recognized schools across any educational board (CBSE, ICSE, State Boards, and International Curriculums) are eligible." },
        { q: "What are the competition categories?", a: "There are four age-tailored categories: Classes 1-2 (Little Learners), Classes 3-5 (Young Explorers), Classes 6-7 (Growing Achievers), and Classes 8-10 (Future Leaders)." },
        { q: "Is there a registration fee?", a: "Yes, a nominal fee is charged which includes registration, curriculum preparatory word banks, digital resources, and participation certification." },
        { q: "Where can I find more information?", a: "You can explore our How It Works and Resources pages, or contact our dedicated academic support desk via WhatsApp or email." }
      ]
    },
    {
      id: "registration",
      title: "Registration",
      icon: <FileText className="w-5 h-5 text-pink-500" />,
      iconBg: "bg-pink-100",
      items: [
        { q: "How do I register?", a: "Students can register online through the student registration portal, or directly through their participating school coordinator." },
        { q: "What information is required?", a: "Student name, grade/class, school name, parent contact number, email ID, and city of residence." },
        { q: "Is there a registration fee?", a: "Registration fees vary depending on individual vs. school-bulk enrollment. Full fee schedules are detailed upon sign-up." },
        { q: "Is the fee refundable?", a: "Registration fees are non-refundable once preparatory materials and student login credentials have been issued." },
        { q: "Can I register through my school?", a: "Yes, if your school is an official partner, you can register via the school coordinator with special institutional support." }
      ]
    },
    {
      id: "competition",
      title: "Competition",
      icon: <Trophy className="w-5 h-5 text-emerald-600" />,
      iconBg: "bg-emerald-100",
      items: [
        { q: "How many rounds are there?", a: "The competition comprises three structured rounds: Round 1 (Written Examination), Round 2 (Interactive Oral Round), and Round 3 (The Grand Finale)." },
        { q: "What happens in Round 1?", a: "Round 1 is a written exam assessing word spelling, phonetics, audio-visual recognition, and vocabulary usage." },
        { q: "What happens in Round 2?", a: "Qualified students participate in verbal oral rounds testing pronunciation, rapid spelling, and verbal accuracy." },
        { q: "What happens in the Grand Finale?", a: "Selected national finalists compete live on stage with buzzers, rapid fire spelling, audio-visual challenges, and elimination rounds." },
        { q: "How are students selected?", a: "Students advance based on standardized benchmark scoring rubrics evaluated by certified language adjudicators." }
      ]
    },
    {
      id: "preparation",
      title: "Preparation",
      icon: <BookOpen className="w-5 h-5 text-blue-500" />,
      iconBg: "bg-blue-100",
      items: [
        { q: "How should my child prepare?", a: "Follow our daily practice word lists, interactive audio pronunciation guides, and take practice quizzes on our student portal." },
        { q: "Are study materials provided?", a: "Yes, every registered student gets access to category-specific word banks, practice worksheets, and phonetics audio clips." },
        { q: "Are practice tests available?", a: "Yes, multiple mock tests and interactive timed quizzes are available in the Practice Zone of our website and mobile app." },
        { q: "How can students improve pronunciation?", a: "Use the audio speaker tool in our Practice Zone to listen to correct British and American pronunciations with syllable breakdowns." },
        { q: "How are students improve vocabulary?", a: "Read daily context sentences, study root words and prefixes/suffixes, and engage with our meaning-and-usage worksheets." }
      ]
    },
    {
      id: "parents",
      title: "Parents",
      icon: <Users className="w-5 h-5 text-purple-600" />,
      iconBg: "bg-purple-100",
      items: [
        { q: "How will parents receive updates?", a: "Updates regarding schedules, results, and round qualification are sent via SMS, WhatsApp, and registered email." },
        { q: "How will I know if my child qualifies?", a: "Result scorecards are published on the student portal and emailed to parents within two weeks of exam completion." },
        { q: "Where will dates be announced?", a: "Competition dates are updated on the website calendar, student dashboard, and communicated directly by school coordinators." },
        { q: "How will I receive certificates?", a: "Digital certificates of participation are downloadable instantly from the dashboard; printed trophies and medals are shipped or awarded at school ceremonies." }
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
        { q: "What happens on the Spell Master stage?", a: "Finalists compete on a state-of-the-art stage with spotlights, digital buzzer podiums, live audience cheering, and expert jury panels." },
        { q: "What are the Grand Finale challenges?", a: "Challenges include Rapid Fire Spelling, Buzzer Round, Audio-Visual Words, Visual Memory Challenge, and Champion Elimination." },
        { q: "What recognition do finalists receive?", a: "All finalists receive customized championship medals, framed certificates of merit, and exclusive SpellBee gifts." },
        { q: "What do winners receive?", a: "Grand champions win prestigious championship trophies, laptops/tablets, educational scholarships, and national media coverage." }
      ]
    },
    {
      id: "app-login",
      title: "App / Login",
      icon: <Smartphone className="w-5 h-5 text-sky-500" />,
      iconBg: "bg-sky-100",
      items: [
        { q: "Is the app available?", a: "Yes, the SpellBee Universe learning app is available for download on both Google Play Store and Apple App Store." },
        { q: "How do I log in?", a: "Use the registered mobile number or student registration ID along with your secure password or OTP." },
        { q: "What if I forget my password?", a: "Click on 'Forgot Password' on the login screen to receive an instant password reset link on your registered phone or email." },
        { q: "Can I use the app on multiple devices?", a: "Yes, students can log in from smartphones, tablets, or desktop browsers with progress synchronized automatically." }
      ]
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-50/70 border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-12">
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
                          <div className="mt-3 pt-3 border-t border-slate-200/70 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
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
              <div className="absolute top-2 right-3 text-3xl animate-bounce-slow">
                🐝
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
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 px-5 rounded-full bg-[#25d366] hover:bg-[#20ba59] text-white font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" /> WhatsApp Us
                </a>
              </div>
            </div>

            {/* Card 2: Download SpellBee Universe App */}
            <div className="bg-[#f0f7ff] border border-blue-200/80 rounded-[2rem] p-6 shadow-xs text-center">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-3 shadow-sm">
                <Smartphone className="w-6 h-6" />
              </div>

              <h4 className="text-base sm:text-lg font-extrabold text-[#1a237e] mb-1">
                Download the SpellBee Universe App
              </h4>
              <p className="text-slate-500 text-xs font-medium mb-4">
                Practice, learn and get ready for the competition on the go.
              </p>

              {/* App Store / Google Play Buttons */}
              <div className="space-y-2.5">
                <a 
                  href="#google-play"
                  className="w-full bg-slate-950 hover:bg-slate-800 text-white rounded-xl py-2.5 px-4 flex items-center justify-center gap-3 shadow-sm transition-colors text-left"
                >
                  <span className="text-xl">▶</span>
                  <div>
                    <div className="text-[9px] text-slate-300 uppercase tracking-widest leading-none">Get it on</div>
                    <div className="text-xs font-bold leading-tight">Google Play</div>
                  </div>
                </a>

                <a 
                  href="#app-store"
                  className="w-full bg-slate-950 hover:bg-slate-800 text-white rounded-xl py-2.5 px-4 flex items-center justify-center gap-3 shadow-sm transition-colors text-left"
                >
                  <span className="text-xl">🍏</span>
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
