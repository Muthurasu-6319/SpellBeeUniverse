"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  ChevronRight, 
  ArrowRight, 
  BookOpen, 
  Clock, 
  ShieldAlert, 
  FileText, 
  Scale, 
  Users, 
  HeartHandshake, 
  Lock, 
  Video, 
  Phone, 
  Mail, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle,
  ExternalLink
} from "lucide-react";

export default function RulesAndGuidelinesPage() {
  const [activeTab, setActiveTab] = useState("all");

  const rulesData = [
    {
      id: 1,
      number: "01",
      category: "PREPARATION",
      categoryColor: "bg-amber-100 text-amber-800 border-amber-200",
      iconBg: "bg-amber-500 text-white shadow-amber-300/50",
      cardBg: "bg-gradient-to-br from-[#fffdf5] via-white to-[#fff9e6]",
      cardBorder: "border-amber-200/80 hover:border-amber-400",
      icon: BookOpen,
      title: "Pre-Competition Study & Practice Sessions",
      statement: "You can attend pre-competition events, such as study sessions or practice rounds, to help you prepare for the competition.",
      note: "Participating in practice sessions helps students get comfortable with the stage format, microphone etiquette, and official vocabulary modules.",
      group: "prep"
    },
    {
      id: 2,
      number: "02",
      category: "SCHEDULE & ARRIVAL",
      categoryColor: "bg-blue-100 text-blue-800 border-blue-200",
      iconBg: "bg-blue-600 text-white shadow-blue-300/50",
      cardBg: "bg-gradient-to-br from-[#f8fbff] via-white to-[#edf5ff]",
      cardBorder: "border-blue-200/80 hover:border-blue-400",
      icon: Clock,
      title: "Reporting Time (1 Hour Before)",
      statement: "On the day of the competition, arrive at the designated location at least 1 hour before the start time to check in and receive any necessary instructions or materials.",
      note: "Early reporting ensures stress-free verification, kit collection, seat allocation, and time for participants to settle down comfortably.",
      group: "prep"
    },
    {
      id: 3,
      number: "03",
      category: "FEE POLICY",
      categoryColor: "bg-rose-100 text-rose-800 border-rose-200",
      iconBg: "bg-rose-500 text-white shadow-rose-300/50",
      cardBg: "bg-gradient-to-br from-[#fff9f9] via-white to-[#fff0f0]",
      cardBorder: "border-rose-200/80 hover:border-rose-400",
      icon: ShieldAlert,
      title: "Non-Refundable Registration Fee",
      statement: "The SpellBee Universe registration fee is non-refundable.",
      note: "All operational arrangements, student study material shipments, and venue seating logistics are booked immediately upon registration confirmation.",
      group: "fee"
    },
    {
      id: 4,
      number: "04",
      category: "TRANSPARENCY",
      categoryColor: "bg-purple-100 text-purple-800 border-purple-200",
      iconBg: "bg-purple-600 text-white shadow-purple-300/50",
      cardBg: "bg-gradient-to-br from-[#faf8ff] via-white to-[#f3edff]",
      cardBorder: "border-purple-200/80 hover:border-purple-400",
      icon: FileText,
      title: "Review Terms Prior to Payment",
      statement: "It is important to review the terms and conditions of the registration process and understand the refund policy before completing the payment.",
      note: "We encourage parents to carefully confirm student category, school details, and competition dates prior to final payment submission.",
      group: "fee"
    },
    {
      id: 5,
      number: "05",
      category: "JURY DECISIONS",
      categoryColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
      iconBg: "bg-indigo-600 text-white shadow-indigo-300/50",
      cardBg: "bg-gradient-to-br from-[#f8f9ff] via-white to-[#edf0ff]",
      cardBorder: "border-indigo-200/80 hover:border-indigo-400",
      icon: Scale,
      title: "Collective Judicial Authority",
      statement: "Competition decisions will be made by the spell master, judges, and finally by the show producer collectively.",
      note: "A 3-tier review process guarantees impartial scoring, pronouncer clarity, and uncompromised fair play across every round.",
      group: "conduct"
    },
    {
      id: 6,
      number: "06",
      category: "EVENT SCHEDULE",
      categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
      iconBg: "bg-amber-600 text-white shadow-amber-300/50",
      cardBg: "bg-gradient-to-br from-[#fffdf5] via-white to-[#fff8e7]",
      cardBorder: "border-amber-200/80 hover:border-amber-400",
      icon: Users,
      title: "Parental Cooperation & Flexible Timing",
      statement: "Parents must cooperate with the schedule for the oral round and grand finale events. We try our best to get things done within the deadline, but events may sometimes take more time.",
      note: "Live competitions with sudden tie-breakers and stage interviews can sometimes extend beyond standard estimated running times.",
      group: "conduct"
    },
    {
      id: 7,
      number: "07",
      category: "EQUAL TREATMENT",
      categoryColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      iconBg: "bg-emerald-600 text-white shadow-emerald-300/50",
      cardBg: "bg-gradient-to-br from-[#f6fcf8] via-white to-[#edfbf1]",
      cardBorder: "border-emerald-200/80 hover:border-emerald-400",
      icon: HeartHandshake,
      title: "Equality & Inclusivity for Every Student",
      statement: "We treat all the students equally.",
      note: "Every child receives identical encouragement, equal stage opportunity, objective judging, and our heartfelt celebration of their courage.",
      group: "conduct"
    },
    {
      id: 8,
      number: "08",
      category: "LEGAL & COPYRIGHT",
      categoryColor: "bg-slate-100 text-slate-800 border-slate-300",
      iconBg: "bg-slate-800 text-white shadow-slate-400/50",
      cardBg: "bg-gradient-to-br from-[#f8fafc] via-white to-[#f1f5f9]",
      cardBorder: "border-slate-200/80 hover:border-slate-400",
      icon: Lock,
      title: "Copyrighted Show Formats & Intellectual Property",
      statement: "All content and show formats are copyrighted and registered. If anyone misuses them, we reserve the right to take legal action.",
      note: "Our curriculum, stage design, proprietary challenges, and brand assets are legally protected under Indian copyright law.",
      group: "media"
    },
    {
      id: 9,
      number: "09",
      category: "MEDIA BROADCAST",
      categoryColor: "bg-red-100 text-red-800 border-red-200",
      iconBg: "bg-red-600 text-white shadow-red-300/50",
      cardBg: "bg-gradient-to-br from-[#fff8f8] via-white to-[#ffeded]",
      cardBorder: "border-red-200/80 hover:border-red-400",
      icon: Video,
      title: "Public Video Broadcast on YouTube & Website",
      statement: "All the competition videos will be available on YouTube and our website.",
      note: "Relive proud moments and share high-definition stage recordings of your child's performances with family, friends, and school community.",
      group: "media"
    }
  ];

  const filteredRules = activeTab === "all" 
    ? rulesData 
    : rulesData.filter(r => r.group === activeTab);

  return (
    <main className="min-h-screen bg-[#FFFDF8] font-sans overflow-x-hidden">
      <Header />

      {/* Hero Header Section */}
      <section className="bg-gradient-to-b from-[#FFF9E6] via-[#FFFDF5] to-white pt-6 pb-12 sm:pt-8 sm:pb-16 border-b border-amber-200/60 relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-200/50 rounded-full blur-3xl pointer-events-none -z-0"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-yellow-200/40 rounded-full blur-3xl pointer-events-none -z-0"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#3949ab] font-medium mb-6">
            <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/competition" className="hover:text-amber-600 transition-colors">Competition</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-600 font-bold">Rules & Guidelines</span>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            {/* Animated Official Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400 text-slate-950 font-black text-xs sm:text-sm tracking-wide uppercase shadow-xs mb-4 hover:scale-105 transition-transform cursor-pointer select-none">
              <img src="/logo.png" alt="SpellBee" className="w-4 h-4 object-contain inline-block animate-wiggle" />
              <span>OFFICIAL RULES & REGULATIONS</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-[#1a237e] tracking-tight leading-[1.16] mb-4">
              Competition Rules & Guidelines
            </h1>

            <p className="text-slate-700 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto mb-8">
              Transparent, fair, and supportive guidelines designed to ensure every young learner experiences healthy competition, builds confidence, and shines on stage.
            </p>

            {/* Quick Highlight Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-bold text-slate-800">
              <span className="bg-white/90 border border-amber-200 px-3.5 py-1.5 rounded-full shadow-2xs flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 9 Official Rules
              </span>
              <span className="bg-white/90 border border-amber-200 px-3.5 py-1.5 rounded-full shadow-2xs flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-blue-500" /> 100% Fair Play
              </span>
              <span className="bg-white/90 border border-amber-200 px-3.5 py-1.5 rounded-full shadow-2xs flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-pink-500" /> Equal Opportunity
              </span>
              <span className="bg-white/90 border border-amber-200 px-3.5 py-1.5 rounded-full shadow-2xs flex items-center gap-1.5">
                <Video className="w-4 h-4 text-red-500" /> Public Broadcast
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Rules Content Section */}
      <section className="py-10 sm:py-14 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-12">
            {[
              { id: "all", label: "All Rules (9)" },
              { id: "prep", label: "Preparation & Schedule" },
              { id: "fee", label: "Registration & Policies" },
              { id: "conduct", label: "Judging & Equality" },
              { id: "media", label: "Copyright & Media" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#1a237e] text-white shadow-md shadow-blue-900/20 scale-105"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-amber-300 hover:bg-amber-50/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Rules Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {filteredRules.map((rule) => {
              const IconComponent = rule.icon;
              return (
                <div
                  key={rule.id}
                  className={`${rule.cardBg} ${rule.cardBorder} rounded-3xl p-6 sm:p-7 border shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden`}
                >
                  {/* Subtle card background corner decoration */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/40 rounded-bl-[4rem] -z-0 pointer-events-none group-hover:scale-110 transition-transform"></div>

                  <div>
                    {/* Top Row: Number Badge & Category Pill */}
                    <div className="flex items-center justify-between gap-3 mb-5 relative z-10">
                      <div className="flex items-center gap-3">
                        <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-black text-sm shadow-md shrink-0 transition-transform duration-300 group-hover:scale-115 group-hover:rotate-6 ${rule.iconBg}`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border shadow-2xs ${rule.categoryColor}`}>
                          {rule.category}
                        </span>
                      </div>
                      <div className="text-2xl font-black text-slate-300 group-hover:text-amber-500 transition-colors">
                        #{rule.number}
                      </div>
                    </div>

                    {/* Rule Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#1a237e] group-hover:text-amber-600 transition-colors mb-3 leading-snug">
                      {rule.title}
                    </h3>

                    {/* Official Statement */}
                    <div className="p-3.5 rounded-2xl bg-white/80 border border-slate-100 shadow-2xs mb-4">
                      <p className="text-slate-800 font-bold text-sm sm:text-[15px] leading-relaxed">
                        &ldquo;{rule.statement}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Context Note / Helpful Tip */}
                  <div className="pt-3 border-t border-slate-200/60 flex items-start gap-2 text-xs text-slate-600 leading-relaxed font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{rule.note}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Dedicated Contact & Help Section */}
      <section className="pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-gradient-to-br from-[#0c1a40] via-[#1a237e] to-[#071330] rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-10 md:p-14 text-white relative overflow-hidden shadow-2xl border border-blue-900/50">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-10 w-96 h-96 bg-yellow-400/15 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/20 rounded-full blur-[90px] pointer-events-none"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
              
              {/* Left Text */}
              <div className="text-center lg:text-left max-w-xl">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                  <div className="w-9 h-9 rounded-full bg-yellow-400 text-slate-950 flex items-center justify-center font-bold text-sm shadow-md animate-bounce-slow">
                    <Sparkles className="w-5 h-5 text-slate-950 fill-slate-950" />
                  </div>
                  <span className="text-yellow-400 font-extrabold text-xs uppercase tracking-wider">
                    NEED CLARIFICATION?
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3 leading-tight">
                  Have Questions About the Rules?
                </h2>

                <p className="text-blue-100/90 text-sm sm:text-base font-normal leading-relaxed mb-6">
                  Our dedicated event coordinators are always available to help parents, students, and school teachers with any questions regarding schedule, eligibility, or participation.
                </p>

                {/* Direct Contact Pills */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-blue-200">
                  <a href="https://wa.me/919611209606" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-yellow-400" /> +91 96112 09606
                  </a>
                  <span className="hidden sm:inline">•</span>
                  <a href="mailto:info@spellbeeuniverse.com" className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-yellow-400" /> info@spellbeeuniverse.com
                  </a>
                </div>
              </div>

              {/* Right Action Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full sm:w-auto shrink-0">
                {/* WhatsApp Support Button */}
                <a 
                  href="https://wa.me/919611209606" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-600/30 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5 group cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.89 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>

                {/* Back to Competition Button */}
                <Link 
                  href="/competition"
                  className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/20 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Back to Competition</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
