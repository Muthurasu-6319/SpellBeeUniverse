import React from 'react';
import { Phone, Mail, MapPin, BookOpen } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] pt-12 sm:pt-14 pb-8 border-t-[6px] border-[#fbc02d]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10 sm:mb-12">
          
          {/* Logo & Info */}
          <div className="lg:col-span-2 pr-0 lg:pr-10">
            <Link href="/" className="inline-flex items-center gap-4 sm:gap-5 mb-6 group">
              <img 
                src="/logo.png" 
                alt="SpellBee Universe Logo" 
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain filter drop-shadow-lg group-hover:scale-105 transition-transform shrink-0"
              />
              <div className="flex flex-col justify-center">
                <span className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                  SpellBee
                </span>
                <span className="text-2xl sm:text-3xl font-black text-amber-400 tracking-tight leading-none mt-1.5">
                  Universe
                </span>
                <span className="text-xs sm:text-sm text-slate-400 italic font-semibold leading-none mt-2">
                  Where Words Build Worlds
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium max-w-md">
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
              {[
                { name: 'Register', href: '/register' },
                { name: 'Student Login', href: '/login' },
                { name: 'Competition Categories', href: '/competition' },
                { name: 'Preparation Resources', href: '/resources' },
                { name: 'Rules & Guidelines', href: '/rules' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-300 hover:text-white text-sm transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-amber-400 font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 mb-8">
              <li>
                <a 
                  href="https://wa.me/919611209606" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-4 h-4 fill-slate-300 group-hover:fill-white group-hover:scale-110 transition-all flex-shrink-0"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.89 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="text-slate-300 text-sm group-hover:text-white transition-colors">+91 96112 09606</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@spellbeeuniverse.com" 
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-slate-300 flex-shrink-0" />
                  <span className="text-sm">info@spellbeeuniverse.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-slate-300 flex-shrink-0" />
                <span className="text-slate-300 text-sm">India</span>
              </li>
            </ul>
            
            <div className="flex gap-3.5">
              <a 
                href="https://wa.me/919611209606" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-400 hover:text-slate-900 hover:scale-115 hover:-translate-y-1 hover:shadow-md transition-all duration-200 text-white"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.89 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <Link href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-400 hover:text-slate-900 hover:scale-115 hover:-translate-y-1 hover:shadow-md transition-all duration-200 text-white">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-400 hover:text-slate-900 hover:scale-115 hover:-translate-y-1 hover:shadow-md transition-all duration-200 text-white">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-400 hover:text-slate-900 hover:scale-115 hover:-translate-y-1 hover:shadow-md transition-all duration-200 text-white">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-400 hover:text-slate-900 hover:scale-115 hover:-translate-y-1 hover:shadow-md transition-all duration-200 text-white">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs text-center md:text-left">
            © 2025 SpellBee Universe. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6">
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
