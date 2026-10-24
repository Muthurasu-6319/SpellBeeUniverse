"use client";
import React, { useState } from 'react';
import { ArrowRight, School, Sparkles, Zap, FileText } from 'lucide-react';

const SchoolPartnershipForm = () => {
  const [formData, setFormData] = useState({
    schoolName: '',
    contactPerson: '',
    city: '',
    designation: '',
    state: '',
    phone: '',
    schoolWebsite: '',
    email: '',
    studentCount: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      schoolName: '',
      contactPerson: '',
      city: '',
      designation: '',
      state: '',
      phone: '',
      schoolWebsite: '',
      email: '',
      studentCount: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-8 md:py-10 bg-slate-50/70 border-t border-slate-100" id="partnership-form">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden p-5 sm:p-7 relative">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
            <div>
              <div className="group/pill inline-flex items-center gap-2 mb-1 cursor-pointer">
                <span className="w-4 group-hover/pill:w-7 h-1 bg-yellow-400 rounded-full inline-block transition-all duration-300"></span>
                <span className="text-[#1a237e] font-extrabold tracking-wider text-[11px] uppercase group-hover/pill:text-yellow-600 transition-colors">
                  Partner With Us
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#1a237e] tracking-tight">
                School Partnership Form
              </h2>
              <p className="text-[#3949ab] font-medium text-xs mt-0.5">
                Fill out the details below. Our academic team will get in touch within 24 hours.
              </p>
            </div>

            {/* Quick Badge */}
            <div className="hidden sm:flex items-center gap-2.5 bg-amber-50 hover:bg-amber-100/70 border border-amber-200/80 px-3 py-1.5 rounded-xl shrink-0 transition-all duration-200 cursor-default group">
              <img src="/logo.png" alt="SpellBee Mascot" className="w-5 h-5 object-contain group-hover:scale-125 transition-transform" />
              <div className="text-left">
                <div className="text-[11px] font-extrabold text-[#1a237e] leading-tight">
                  Official School Partner
                </div>
                <div className="text-[10px] text-amber-700 font-semibold leading-tight">
                  Academic Year 2026–27
                </div>
              </div>
            </div>
          </div>

          {submitted ? (
            <div className="bg-gradient-to-br from-emerald-50 via-teal-50/40 to-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center animate-pop-in">
              <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md animate-bounce-slow">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-emerald-950 mb-1">
                Registration Request Received!
              </h3>
              <p className="text-emerald-800 text-xs sm:text-sm max-w-md mx-auto mb-2 font-medium">
                Thank you for choosing SpellBee Universe for <span className="font-bold underline">{formData.schoolName || "your school"}</span>! Our state coordinator will call <span className="font-bold">{formData.contactPerson || "you"}</span> within 24 hours.
              </p>
              <div className="text-[11px] text-emerald-600 font-semibold mb-4">
                Starter Kit & Grade Word Banks dispatched to: {formData.email || "your email"}
              </div>

              <button
                onClick={handleReset}
                className="px-5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all active:scale-95 cursor-pointer"
              >
                Register Another School / Reset
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Row 1: School Name, Contact Person, Designation */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="group">
                  <label className="block text-[10.5px] font-bold text-slate-700 group-hover:text-[#1a237e] transition-colors uppercase tracking-wider mb-1">
                    School Name *
                  </label>
                  <input 
                    type="text" 
                    name="schoolName"
                    required
                    value={formData.schoolName}
                    onChange={handleChange}
                    placeholder="e.g. Delhi Public School"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/60 text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white focus:scale-[1.01] transition-all duration-200 shadow-2xs"
                  />
                </div>

                <div className="group">
                  <label className="block text-[10.5px] font-bold text-slate-700 group-hover:text-[#1a237e] transition-colors uppercase tracking-wider mb-1">
                    Contact Person *
                  </label>
                  <input 
                    type="text" 
                    name="contactPerson"
                    required
                    value={formData.contactPerson}
                    onChange={handleChange}
                    placeholder="Principal / Coordinator Name"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/60 text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white focus:scale-[1.01] transition-all duration-200 shadow-2xs"
                  />
                </div>

                <div className="group">
                  <label className="block text-[10.5px] font-bold text-slate-700 group-hover:text-[#1a237e] transition-colors uppercase tracking-wider mb-1">
                    Designation *
                  </label>
                  <input 
                    type="text" 
                    name="designation"
                    required
                    value={formData.designation}
                    onChange={handleChange}
                    placeholder="e.g. Head of English"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/60 text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white focus:scale-[1.01] transition-all duration-200 shadow-2xs"
                  />
                </div>
              </div>

              {/* Row 2: Email, Phone, School Website */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="group">
                  <label className="block text-[10.5px] font-bold text-slate-700 group-hover:text-[#1a237e] transition-colors uppercase tracking-wider mb-1">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="principal@yourschool.edu"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/60 text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white focus:scale-[1.01] transition-all duration-200 shadow-2xs"
                  />
                </div>

                <div className="group">
                  <label className="block text-[10.5px] font-bold text-slate-700 group-hover:text-[#1a237e] transition-colors uppercase tracking-wider mb-1">
                    Phone *
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/60 text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white focus:scale-[1.01] transition-all duration-200 shadow-2xs"
                  />
                </div>

                <div className="group">
                  <label className="block text-[10.5px] font-bold text-slate-700 group-hover:text-[#1a237e] transition-colors uppercase tracking-wider mb-1">
                    School Website
                  </label>
                  <input 
                    type="text" 
                    name="schoolWebsite"
                    value={formData.schoolWebsite}
                    onChange={handleChange}
                    placeholder="https://yourschool.edu"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/60 text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white focus:scale-[1.01] transition-all duration-200 shadow-2xs"
                  />
                </div>
              </div>

              {/* Row 3: City, State, Student Count */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="group">
                  <label className="block text-[10.5px] font-bold text-slate-700 group-hover:text-[#1a237e] transition-colors uppercase tracking-wider mb-1">
                    City *
                  </label>
                  <input 
                    type="text" 
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Chennai"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/60 text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white focus:scale-[1.01] transition-all duration-200 shadow-2xs"
                  />
                </div>

                <div className="group">
                  <label className="block text-[10.5px] font-bold text-slate-700 group-hover:text-[#1a237e] transition-colors uppercase tracking-wider mb-1">
                    State *
                  </label>
                  <input 
                    type="text" 
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="e.g. Tamil Nadu"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/60 text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white focus:scale-[1.01] transition-all duration-200 shadow-2xs"
                  />
                </div>

                <div className="group">
                  <label className="block text-[10.5px] font-bold text-slate-700 group-hover:text-[#1a237e] transition-colors uppercase tracking-wider mb-1">
                    Student Count *
                  </label>
                  <select 
                    name="studentCount"
                    required
                    value={formData.studentCount}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/60 text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white focus:scale-[1.01] transition-all duration-200 cursor-pointer shadow-2xs"
                  >
                    <option value="">Select range</option>
                    <option value="50-100">50 - 100 Students</option>
                    <option value="100-300">100 - 300 Students</option>
                    <option value="300-600">300 - 600 Students</option>
                    <option value="600+">600+ Students</option>
                  </select>
                </div>
              </div>

              {/* Bottom Row: Submit Button & Micro Trust Features */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <button 
                  type="submit"
                  disabled={loading}
                  className="relative overflow-hidden px-6 py-2.5 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-gray-900 font-extrabold text-xs sm:text-sm shadow-md shadow-yellow-400/30 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 group cursor-pointer shrink-0 disabled:opacity-75"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {loading ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></span>
                        Sending Details...
                      </>
                    ) : (
                      <>
                        Request School Registration
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
                      </>
                    )}
                  </span>
                  <span className="absolute inset-0 bg-white/30 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
                </button>

                <div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium">
                  <span className="flex items-center gap-1 hover:text-amber-700 transition-colors cursor-default">
                    <Zap className="w-3.5 h-3.5 text-amber-500" /> Fast 24h Response
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 hover:text-amber-700 transition-colors cursor-default">
                    <FileText className="w-3.5 h-3.5 text-blue-500" /> Free Starter Kit
                  </span>
                </div>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
};

export default SchoolPartnershipForm;
