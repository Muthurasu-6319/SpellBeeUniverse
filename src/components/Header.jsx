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
      <header className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-xs">
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
          <Image 
            src="/logo.png" 
            alt="SpellBee Universe Logo" 
            width={70} 
            height={70} 
            className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform" 
            priority 
          />
          <div className="flex flex-col">
            <span className="text-base sm:text-lg md:text-xl font-black text-[#1a237e] tracking-tight leading-none">
              SpellBee<span className="text-rose-500 font-extrabold">!</span>
            </span>
            <span className="text-[9px] sm:text-[10px] md:text-[11px] font-extrabold text-amber-500 tracking-wider uppercase leading-tight">
              Universe
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-6 xl:gap-7 text-sm font-semibold text-gray-700">
          <Link 
            href="/" 
            className={`transition-colors pb-1 ${isLinkActive("/") ? "text-yellow-500 font-bold border-b-2 border-yellow-500" : "hover:text-yellow-500"}`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`transition-colors pb-1 ${isLinkActive("/about") ? "text-yellow-500 font-bold border-b-2 border-yellow-500" : "hover:text-yellow-500"}`}
          >
            About Us
          </Link>
          <Link 
            href="/how-it-works" 
            className={`transition-colors pb-1 ${isLinkActive("/how-it-works") ? "text-yellow-500 font-bold border-b-2 border-yellow-500" : "hover:text-yellow-500"}`}
          >
            How It Works
          </Link>
          <Link 
            href="/competition" 
            className={`transition-colors pb-1 flex items-center gap-1 ${isLinkActive("/competition") ? "text-yellow-500 font-bold border-b-2 border-yellow-500" : "hover:text-yellow-500"}`}
          >
            Competition ▾
          </Link>
          <Link 
            href="/schools" 
            className={`transition-colors pb-1 flex items-center gap-1 ${isLinkActive("/schools") ? "text-yellow-500 font-bold border-b-2 border-yellow-500" : "hover:text-yellow-500"}`}
          >
            Schools ▾
          </Link>
          <Link 
            href="/gallery" 
            className={`transition-colors pb-1 ${isLinkActive("/gallery") ? "text-yellow-500 font-bold border-b-2 border-yellow-500" : "hover:text-yellow-500"}`}
          >
            Gallery
          </Link>
          <Link 
            href="/resources" 
            className={`transition-colors pb-1 flex items-center gap-1 ${isLinkActive("/resources") ? "text-yellow-500 font-bold border-b-2 border-yellow-500" : "hover:text-yellow-500"}`}
          >
            Resources ▾
          </Link>
          <Link 
            href="/faqs" 
            className={`transition-colors pb-1 ${isLinkActive("/faqs") ? "text-yellow-500 font-bold border-b-2 border-yellow-500" : "hover:text-yellow-500"}`}
          >
            FAQs
          </Link>
        </nav>

        {/* Right Action Buttons on Desktop & Hamburger Menu on Mobile */}
        <div className="flex items-center gap-3">
          {/* Desktop Buttons */}
          <Link 
            href="/login"
            className="hidden lg:block px-5 py-2 rounded-full border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Student Login
          </Link>
          <Link 
            href="/register"
            className="hidden md:flex px-5 py-2.5 rounded-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-sm font-bold shadow-md shadow-yellow-400/20 transition-transform transform hover:-translate-y-0.5 items-center gap-1"
          >
            Register Now →
          </Link>

          {/* Mobile Hamburger Menu Button (Replaces Register button on mobile) */}
          <button 
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-11 h-11 rounded-2xl bg-amber-50 hover:bg-amber-100 text-[#1a237e] border border-amber-200/80 flex items-center justify-center transition-all shadow-xs active:scale-95"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-rose-600" /> : <Menu className="w-6 h-6 text-[#1a237e]" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-white/98 backdrop-blur-xl border-b border-amber-200/80 shadow-2xl z-40 animate-fade-in">
          <div className="px-6 py-6 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
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
