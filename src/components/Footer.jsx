import React from 'react';
import { Phone, Mail, MapPin, BookOpen } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] pt-16 pb-8 border-t-[6px] border-[#fbc02d]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Logo & Info */}
          <div className="lg:col-span-2 pr-0 lg:pr-10">
            <Link href="/" className="inline-flex items-center gap-3.5 mb-6 group">
              <img 
                src="/logo.png" 
                alt="SpellBee Universe Logo" 
                className="w-14 h-14 object-contain filter drop-shadow-md group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tight leading-none">
                  SpellBee<span className="text-rose-500 font-extrabold">!</span>
                </span>
                <span className="text-xs font-extrabold text-amber-400 tracking-wider uppercase leading-tight mt-0.5">
                  Universe
                </span>
                <span className="text-[10px] text-slate-400 italic font-medium leading-none mt-1">
                  Where Words Build Worlds
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
              A national spelling and vocabulary competition for young learners to build language skills, confidence and a brighter future.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-amber-400 font-bold mb-6">Explore</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'How It Works', href: '/how-it-works' },
                { name: 'Competition', href: '/competition' },
                { name: 'Schools', href: '/schools' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Resources', href: '/resources' },
                { name: 'FAQs', href: '/faqs' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-300 hover:text-white text-sm transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Participants */}
          <div>
            <h4 className="text-amber-400 font-bold mb-6">For Participants</h4>
            <ul className="space-y-3">
              {['Register', 'Student Login', 'Competition Categories', 'Preparation Resources', 'Rules & Guidelines'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-300 hover:text-white text-sm transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-amber-400 font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-300" />
                <span className="text-slate-300 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-300" />
                <span className="text-slate-300 text-sm">info@spellbeeuniverse.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-slate-300" />
                <span className="text-slate-300 text-sm">India</span>
              </li>
            </ul>
            
            <div className="flex gap-4">
              <Link href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-400 hover:text-slate-900 transition-colors text-white">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-400 hover:text-slate-900 transition-colors text-white">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-400 hover:text-slate-900 transition-colors text-white">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-400 hover:text-slate-900 transition-colors text-white">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © 2025 SpellBee Universe. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Terms & Conditions</Link>
            <Link href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
