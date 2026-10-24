"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  Sparkles, 
  Trophy, 
  BookOpen, 
  ShieldCheck, 
  School, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Award, 
  Lock 
} from 'lucide-react';

export default function StudentRegisterPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    studentName: '',
    category: 'classes-3-5',
    schoolName: '',
    city: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    password: '',
    agreeTerms: true
  });

  const [submitted, setSubmitted] = useState(false);

  const categories = [
    { id: 'classes-1-2', label: 'Classes 1 - 2', name: 'Little Learners', color: 'border-amber-400 bg-amber-50 text-amber-900' },
    { id: 'classes-3-5', label: 'Classes 3 - 5', name: 'Young Explorers', color: 'border-pink-400 bg-pink-50 text-pink-900' },
    { id: 'classes-6-7', label: 'Classes 6 - 7', name: 'Growing Achievers', color: 'border-emerald-400 bg-emerald-50 text-emerald-900' },
    { id: 'classes-8-10', label: 'Classes 8 - 10', name: 'Future Leaders', color: 'border-blue-400 bg-blue-50 text-blue-900' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step < 2) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#fffdf0] flex flex-col justify-between font-sans selection:bg-amber-200">
      {/* Top Header with Back option */}
      <header className="px-6 sm:px-12 py-5 flex items-center justify-between border-b border-amber-200/60 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-4 sm:gap-6">
          <Link 
            href="/" 
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold transition-all"
            title="Go back to Home"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link href="/" className="flex items-center gap-2.5">
            <Image 
              src="/logo.png" 
              alt="SpellBee Universe Logo" 
              width={56} 
              height={56} 
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain filter drop-shadow-xs" 
              priority 
            />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black text-[#1a237e] tracking-tight leading-none">
                SpellBee
              </span>
              <span className="text-base sm:text-lg font-black text-amber-500 tracking-tight leading-none mt-0.5">
                Universe
              </span>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm">
          <span className="text-slate-600 hidden sm:inline">Already registered?</span>
          <Link 
            href="/login" 
            className="px-4 sm:px-5 py-2 rounded-full border border-slate-300 hover:bg-slate-50 text-[#1a237e] font-bold transition-all shadow-xs"
          >
            Student Login
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 container mx-auto px-4 sm:px-6 py-10 sm:py-16 max-w-6xl flex items-center justify-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Perks (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0c1e4a] via-[#102a6b] to-[#071330] rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-2xl flex flex-col justify-between min-h-[580px]">
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/15 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 font-bold text-xs uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> National Championship 2026
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4">
                Join the <br />
                <span className="text-amber-400">SpellBee Universe!</span>
              </h1>

              <p className="text-blue-100/90 text-sm leading-relaxed mb-8">
                Register today to receive your category practice word banks, interactive quizzes, and contest entry.
              </p>

              {/* What Every Registered Student Receives */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xs p-3 rounded-2xl border border-white/10">
                  <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white">Full Curated Category Word Bank & Guide</span>
                </div>

                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xs p-3 rounded-2xl border border-white/10">
                  <div className="w-8 h-8 rounded-xl bg-pink-500 text-white flex items-center justify-center font-bold shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white">Unlimited Practice Zone Quizzes & Audio Tools</span>
                </div>

                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xs p-3 rounded-2xl border border-white/10">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white">Official Certificate of Participation</span>
                </div>

                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xs p-3 rounded-2xl border border-white/10">
                  <div className="w-8 h-8 rounded-xl bg-blue-500 text-white flex items-center justify-center font-bold shrink-0">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white">Eligibility for Grand Finale Stage & Medals</span>
                </div>
              </div>
            </div>

            {/* Bottom Mascot */}
            <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                <ShieldCheck className="w-4 h-4" /> Safe & Secure Registration
              </div>
              <img src="/logo.png" alt="SpellBee Mascot" className="w-8 h-8 object-contain animate-bounce-slow" />
            </div>
          </div>

          {/* Right Form Card (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-amber-200/80 shadow-xl relative">
            <div className="max-w-lg mx-auto">
              
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a237e] tracking-tight">
                    Student Registration
                  </h2>
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-amber-100 text-amber-800">
                    Step {step} of 2
                  </span>
                </div>
                <p className="text-slate-500 text-sm font-medium">
                  {step === 1 ? "Step 1: Student Details & Category" : "Step 2: Parent / Guardian Contact Details"}
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 text-center animate-fade-in">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-emerald-950 mb-2">Registration Confirmed!</h3>
                  <p className="text-sm text-emerald-800 max-w-sm mx-auto mb-6 leading-relaxed">
                    Welcome to SpellBee Universe, <strong>{formData.studentName}</strong>! Your registration details and word bank access link have been dispatched to <strong>{formData.parentEmail}</strong>.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link 
                      href="/login" 
                      className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-md transition-all"
                    >
                      Log In to Your Portal →
                    </Link>
                    <Link 
                      href="/resources" 
                      className="px-6 py-3 rounded-full bg-white border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-all"
                    >
                      Start Practice Zone
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleNextStep} className="space-y-4">
                  {step === 1 ? (
                    /* STEP 1: Student Details & Category */
                    <>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          Student Full Name *
                        </label>
                        <div className="relative">
                          <input 
                            type="text" 
                            name="studentName"
                            required
                            value={formData.studentName}
                            onChange={handleChange}
                            placeholder="e.g. Aarav Sharma"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all pl-10"
                          />
                          <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        </div>
                      </div>

                      {/* Select Category */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          Select Grade / Category *
                        </label>
                        <div className="grid grid-cols-2 gap-2.5">
                          {categories.map(cat => (
                            <button
                              key={cat.id}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, category: cat.id }))}
                              className={`p-3 rounded-xl border text-left transition-all ${
                                formData.category === cat.id 
                                  ? `${cat.color} ring-2 ring-amber-400 shadow-xs font-extrabold` 
                                  : 'border-slate-200 bg-slate-50/50 text-slate-700 hover:bg-slate-100'
                              }`}
                            >
                              <div className="text-xs font-extrabold leading-tight">{cat.label}</div>
                              <div className="text-[11px] opacity-80 leading-tight">{cat.name}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* School Name */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          School Name *
                        </label>
                        <div className="relative">
                          <input 
                            type="text" 
                            name="schoolName"
                            required
                            value={formData.schoolName}
                            onChange={handleChange}
                            placeholder="e.g. Delhi Public School"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all pl-10"
                          />
                          <School className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        </div>
                      </div>

                      {/* City */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          City *
                        </label>
                        <div className="relative">
                          <input 
                            type="text" 
                            name="city"
                            required
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="e.g. Bangalore"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all pl-10"
                          />
                          <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        </div>
                      </div>

                      <button 
                        type="submit"
                        className="w-full py-3.5 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-slate-950 font-extrabold text-sm shadow-md shadow-yellow-400/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group mt-4"
                      >
                        Continue to Step 2
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </>
                  ) : (
                    /* STEP 2: Parent Details & Account Password */
                    <>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          Parent / Guardian Name *
                        </label>
                        <div className="relative">
                          <input 
                            type="text" 
                            name="parentName"
                            required
                            value={formData.parentName}
                            onChange={handleChange}
                            placeholder="e.g. Sunita Sharma"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all pl-10"
                          />
                          <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          Parent Mobile Number *
                        </label>
                        <div className="relative">
                          <input 
                            type="tel" 
                            name="parentPhone"
                            required
                            maxLength={10}
                            value={formData.parentPhone}
                            onChange={handleChange}
                            placeholder="e.g. 9876543210"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all pl-10"
                          />
                          <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          Parent Email Address *
                        </label>
                        <div className="relative">
                          <input 
                            type="email" 
                            name="parentEmail"
                            required
                            value={formData.parentEmail}
                            onChange={handleChange}
                            placeholder="e.g. parent@gmail.com"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all pl-10"
                          />
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          Create Student Account Password *
                        </label>
                        <div className="relative">
                          <input 
                            type="password" 
                            name="password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Create a strong password (min 6 chars)"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all pl-10"
                          />
                          <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        </div>
                      </div>

                      <div className="flex items-start gap-2 pt-2">
                        <input 
                          type="checkbox" 
                          id="terms" 
                          checked={formData.agreeTerms} 
                          onChange={(e) => setFormData(prev => ({ ...prev, agreeTerms: e.target.checked }))}
                          required
                          className="mt-0.5 rounded border-slate-300 text-amber-500 focus:ring-amber-400" 
                        />
                        <label htmlFor="terms" className="text-xs font-medium text-slate-600 leading-snug">
                          I agree to SpellBee Universe competition rules, terms of participation, and privacy policy.
                        </label>
                      </div>

                      <div className="flex gap-3 pt-3">
                        <button 
                          type="button"
                          onClick={() => setStep(1)}
                          className="w-1/3 py-3 rounded-full border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-sm transition-all"
                        >
                          ← Back
                        </button>
                        <button 
                          type="submit"
                          className="w-2/3 py-3.5 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-slate-950 font-extrabold text-sm shadow-md shadow-yellow-400/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
                        >
                          Complete Registration
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </>
                  )}
                </form>
              )}

              {/* Bottom Support */}
              <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                <p className="text-xs text-slate-500">
                  Are you a school coordinator registering multiple students?{' '}
                  <Link href="/schools" className="text-[#1a237e] font-bold hover:underline">
                    School Bulk Registration →
                  </Link>
                </p>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* Footer minimal copyright */}
      <footer className="py-4 text-center text-xs text-slate-500 border-t border-amber-200/40">
        © 2026 SpellBee Universe. All rights reserved.
      </footer>
    </div>
  );
}
