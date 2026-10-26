"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  ArrowLeft,
  Smartphone, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  Sparkles, 
  Trophy, 
  BookOpen, 
  ShieldCheck 
} from 'lucide-react';

export default function StudentLoginPage() {
  const [loginMethod, setLoginMethod] = useState('id');
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form states
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (mobile.length >= 10) {
      setOtpSent(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#fffdf0] flex flex-col justify-between font-sans selection:bg-amber-200">
      {/* Top Simple Navigation with Back option */}
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
            <div className="flex flex-col font-brand">
              <span className="text-base sm:text-lg font-black text-slate-950 tracking-tight leading-tight select-none">
                SpellBee
              </span>
              <span className="text-base sm:text-lg font-black text-amber-500 tracking-tight leading-tight mt-0.5 select-none">
                Universe
              </span>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm">
          <span className="text-slate-600 hidden sm:inline">New to SpellBee Universe?</span>
          <Link 
            href="/register" 
            className="px-4 sm:px-5 py-2 rounded-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold transition-all shadow-xs"
          >
            Register Now →
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 container mx-auto px-4 sm:px-6 py-10 sm:py-16 max-w-6xl flex items-center justify-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Card / Welcome Visual (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0c1e4a] via-[#102a6b] to-[#071330] rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-2xl flex flex-col justify-between min-h-[500px]">
            {/* Ambient Spotlight */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/15 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 font-bold text-xs uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Student Portal
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4">
                Welcome Back, <br />
                <span className="text-amber-400">Future Champion!</span>
              </h1>

              <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed mb-8">
                Log in to access your customized word lists, mock assessments, performance scorecards, and competition schedules.
              </p>

              {/* Quick Feature Badges */}
              <div className="space-y-3.5">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xs p-3 rounded-2xl border border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <span className="font-extrabold block text-white">Daily Practice Word Banks</span>
                    <span className="text-blue-200">Interactive phonetics & meanings</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xs p-3 rounded-2xl border border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-blue-500 text-white flex items-center justify-center font-bold shrink-0">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <span className="font-extrabold block text-white">Competition Results</span>
                    <span className="text-blue-200">Download certificates & rankings</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Mascot */}
            <div className="relative z-10 pt-8 mt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                <ShieldCheck className="w-4 h-4" /> Verified Student Access
              </div>
              <img src="/logo.png" alt="SpellBee Mascot" className="w-8 h-8 object-contain animate-bounce-slow" />
            </div>
          </div>

          {/* Right Form Card (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-amber-200/80 shadow-xl relative">
            <div className="max-w-md mx-auto">
              
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a237e] tracking-tight mb-2">
                  Student Sign In
                </h2>
                <p className="text-slate-500 text-sm font-medium">
                  Enter your credentials to enter your SpellBee Universe account.
                </p>
              </div>

              {/* Login Method Toggle Tabs */}
              <div className="flex rounded-2xl bg-slate-100 p-1 mb-6 border border-slate-200">
                <button
                  type="button"
                  onClick={() => { setLoginMethod('id'); setSubmitted(false); }}
                  className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                    loginMethod === 'id' 
                      ? 'bg-white text-[#1a237e] shadow-xs' 
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Reg ID / Email
                </button>
                <button
                  type="button"
                  onClick={() => { setLoginMethod('otp'); setSubmitted(false); }}
                  className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                    loginMethod === 'otp' 
                      ? 'bg-white text-[#1a237e] shadow-xs' 
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Mobile & OTP
                </button>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center animate-fade-in">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-900 mb-1">Login Successful!</h3>
                  <p className="text-xs text-emerald-700 mb-4">
                    Welcome back. Redirecting you to your student learning dashboard...
                  </p>
                  <Link 
                    href="/resources" 
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs"
                  >
                    Go to Practice Zone <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ) : loginMethod === 'id' ? (
                /* Method 1: Reg ID / Email + Password */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Registration ID or Email Address *
                    </label>
                    <div className="relative">
                      <input 
                        type="text" 
                        required
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        placeholder="e.g. SBU2026-8942 or student@gmail.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all pl-10"
                      />
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Password *
                      </label>
                      <Link href="/faqs" className="text-xs font-bold text-blue-600 hover:underline">
                        Forgot Password?
                      </Link>
                    </div>
                    <div className="relative">
                      <input 
                        type={showPassword ? "text" : "password"} 
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your secret password"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all pl-10 pr-10"
                      />
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <button 
                        type="button" 
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <input type="checkbox" id="remember" className="rounded border-slate-300 text-amber-500 focus:ring-amber-400" />
                    <label htmlFor="remember" className="text-xs font-medium text-slate-600">
                      Keep me logged in on this browser
                    </label>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-slate-950 font-extrabold text-sm shadow-md shadow-yellow-400/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group mt-2"
                  >
                    Log In to Student Portal
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              ) : (
                /* Method 2: Mobile Number & OTP */
                <form onSubmit={otpSent ? handleSubmit : handleSendOtp} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Registered Mobile Number *
                    </label>
                    <div className="relative">
                      <input 
                        type="tel" 
                        required
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="e.g. 9876543210"
                        maxLength={10}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all pl-10"
                      />
                      <Smartphone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  {otpSent && (
                    <div className="animate-fade-in">
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Enter 6-Digit OTP *
                        </label>
                        <button 
                          type="button" 
                          onClick={() => setOtpSent(false)} 
                          className="text-xs font-bold text-amber-600 hover:underline"
                        >
                          Change Number
                        </button>
                      </div>
                      <input 
                        type="text" 
                        required
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="• • • • • •"
                        maxLength={6}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-center tracking-widest text-lg font-bold focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all"
                      />
                      <p className="text-[11px] text-slate-500 mt-1.5 text-center">
                        OTP sent to +91 {mobile}. Valid for 5 minutes.
                      </p>
                    </div>
                  )}

                  <button 
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-slate-950 font-extrabold text-sm shadow-md shadow-yellow-400/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group mt-2"
                  >
                    {otpSent ? "Verify & Proceed" : "Send One Time Password (OTP)"}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}

              {/* Bottom Support Callout */}
              <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                <p className="text-xs text-slate-500">
                  Having trouble logging in?{' '}
                  <Link href="/faqs" className="text-[#1a237e] font-bold hover:underline">
                    Visit FAQs
                  </Link>{' '}
                  or{' '}
                  <a href="https://wa.me/919611209606" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-bold hover:underline">
                    Contact WhatsApp Support
                  </a>
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
