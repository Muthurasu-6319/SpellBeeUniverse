"use client";
import React, { useState } from 'react';
import { ArrowRight, School, Sparkles } from 'lucide-react';

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

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 md:py-20 bg-slate-50/70 border-t border-slate-100" id="partnership-form">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="bg-white rounded-[2.5rem] border border-slate-200/80 shadow-xl overflow-hidden p-8 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Partnership Form */}
            <div className="lg:col-span-8">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1a237e] tracking-tight mb-2">
                  School Partnership Form
                </h2>
                <p className="text-[#3949ab] font-medium text-sm sm:text-base">
                  Complete the form below and our dedicated academic school team will get in touch with you.
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900 mb-2">Registration Request Received!</h3>
                  <p className="text-emerald-700 text-sm max-w-md mx-auto">
                    Thank you for your interest in bringing SpellBee Universe to your school. Our team will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* School Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        School Name *
                      </label>
                      <input 
                        type="text" 
                        name="schoolName"
                        required
                        value={formData.schoolName}
                        onChange={handleChange}
                        placeholder="e.g. Delhi Public School"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all"
                      />
                    </div>

                    {/* Contact Person */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Contact Person *
                      </label>
                      <input 
                        type="text" 
                        name="contactPerson"
                        required
                        value={formData.contactPerson}
                        onChange={handleChange}
                        placeholder="e.g. Principal / Coordinator Name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* City */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        City *
                      </label>
                      <input 
                        type="text" 
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="e.g. Chennai"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all"
                      />
                    </div>

                    {/* Designation */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Designation *
                      </label>
                      <input 
                        type="text" 
                        name="designation"
                        required
                        value={formData.designation}
                        onChange={handleChange}
                        placeholder="e.g. Head of English / Vice Principal"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* State */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        State *
                      </label>
                      <input 
                        type="text" 
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="e.g. Tamil Nadu"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Phone *
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* School Website */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        School Website
                      </label>
                      <input 
                        type="text" 
                        name="schoolWebsite"
                        value={formData.schoolWebsite}
                        onChange={handleChange}
                        placeholder="e.g. https://yourschool.edu"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Email *
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. principal@yourschool.edu"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Approximate Number of Students */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Approximate Number of Students *
                    </label>
                    <select 
                      name="studentCount"
                      required
                      value={formData.studentCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="">Select an estimated range</option>
                      <option value="50-100">50 - 100 Students</option>
                      <option value="100-300">100 - 300 Students</option>
                      <option value="300-600">300 - 600 Students</option>
                      <option value="600+">600+ Students</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button 
                      type="submit"
                      className="px-8 py-3.5 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-gray-900 font-extrabold text-sm sm:text-base shadow-lg shadow-yellow-400/30 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 group"
                    >
                      Request School Registration
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Campus Illustration & Mascot */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center relative">
              <div className="relative w-full max-w-sm aspect-4/3 rounded-3xl overflow-hidden border-4 border-amber-100 shadow-xl bg-gradient-to-tr from-amber-100 via-yellow-50 to-orange-100 flex items-center justify-center p-6 text-center">
                {/* Floating Bee mascot */}
                <div className="absolute top-3 right-4 text-4xl animate-bounce-slow">
                  🐝
                </div>

                <div className="flex flex-col items-center justify-center z-10">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center text-[#1a237e] mb-4 border border-amber-200">
                    <School className="w-10 h-10 text-amber-500" strokeWidth={1.8} />
                  </div>
                  
                  <div className="font-serif italic font-extrabold text-[#1a237e] text-lg sm:text-xl leading-snug mb-2">
                    "Together We Build Better Learners"
                  </div>
                  
                  <p className="text-slate-600 text-xs font-semibold leading-relaxed max-w-xs">
                    Empowering students nationwide with linguistic clarity, spelling accuracy, and stage poise.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolPartnershipForm;
