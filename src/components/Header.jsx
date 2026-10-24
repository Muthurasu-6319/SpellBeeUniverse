"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isLinkActive = (path) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname?.startsWith(path)) return true;
    return false;
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Competition", href: "/competition" },
    { label: "Schools", href: "/schools" },
    { label: "Gallery", href: "/gallery" },
    { label: "Resources", href: "/resources" },
    { label: "FAQs", href: "/faqs" },
  ];

  return (
    <>
      <header className="flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-3 bg-white/98 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-xs">
        {/* Brand Logo & Title */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <Image 
            src="/logo.png" 
            alt="SpellBee Universe Logo" 
            width={80} 
            height={80} 
            unoptimized
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain group-hover:scale-105 transition-transform" 
            priority 
          />
          <div className="flex flex-col justify-center">
            <span className="text-lg sm:text-xl md:text-2xl font-black text-[#1a237e] tracking-tight leading-none">
              SpellBee
            </span>
            <span className="text-lg sm:text-xl md:text-2xl font-black text-amber-500 tracking-tight leading-none mt-1">
              Universe
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm font-semibold text-gray-700">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`transition-all pb-1 hover:-translate-y-0.5 ${isLinkActive(link.href) ? "text-yellow-500 font-bold border-b-2 border-yellow-500" : "hover:text-yellow-500"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Action Buttons on Desktop & Hamburger Menu on Mobile */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Desktop Buttons */}
          <Link 
            href="/login"
            className="hidden xl:block px-5 py-2 rounded-full border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:scale-105 active:scale-95 transition-all"
          >
            Student Login
          </Link>
          <Link 
            href="/register"
            className="hidden lg:flex px-5 py-2.5 rounded-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-sm font-bold shadow-md shadow-yellow-400/20 transition-all transform hover:scale-105 active:scale-95 items-center gap-1.5 group cursor-pointer"
          >
            Register Now 
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>

          {/* Hamburger Menu Button */}
          <button 
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 rounded-2xl bg-amber-50 hover:bg-amber-100 text-[#1a237e] border border-amber-200/80 flex items-center justify-center transition-all shadow-xs active:scale-95"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-rose-600" /> : <Menu className="w-6 h-6 text-[#1a237e]" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[68px] bottom-0 bg-white/98 backdrop-blur-xl border-b border-amber-200/80 shadow-2xl z-40 animate-fade-in overflow-y-auto">
          <div className="px-5 py-6 space-y-4 min-h-full flex flex-col justify-between">
            {/* Links List */}
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-2xl text-base font-extrabold flex items-center justify-between transition-colors ${
                      active 
                        ? "bg-amber-100/70 text-[#1a237e] border border-amber-300/60" 
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className={`w-4 h-4 ${active ? "text-amber-600" : "text-slate-400"}`} />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Action Buttons */}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <Link
                href="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-full bg-yellow-400 hover:bg-yellow-500 text-slate-950 text-center font-extrabold text-sm shadow-md shadow-yellow-400/20 flex items-center justify-center gap-2"
              >
                Register Now →
              </Link>
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-full border-2 border-slate-200 text-slate-700 text-center font-bold text-sm hover:bg-slate-50"
              >
                Student Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
