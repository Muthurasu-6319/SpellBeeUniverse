import React from 'react';
import Link from 'next/link';
import { 
  Download, 
  FileText, 
  BookOpen, 
  Users, 
  FileCheck, 
  Scale, 
  Trophy, 
  ArrowRight 
} from 'lucide-react';

const ResourceDownloadsBar = () => {
  const downloadItems = [
    { title: "Practice Worksheets", icon: <FileText className="w-5 h-5 text-amber-700" /> },
    { title: "Word Lists", icon: <BookOpen className="w-5 h-5 text-amber-700" /> },
    { title: "Parent Guide", icon: <Users className="w-5 h-5 text-amber-700" /> },
    { title: "School Coordinator Guide", icon: <FileCheck className="w-5 h-5 text-amber-700" /> },
    { title: "Competition Rules", icon: <Scale className="w-5 h-5 text-amber-700" /> },
    { title: "Pronunciation Audio Guide", icon: <Trophy className="w-5 h-5 text-amber-700" /> }
  ];

  return (
    <section className="py-6 sm:py-7 bg-[#fed940] border-y border-amber-400 relative overflow-hidden" id="downloads">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left Title with Download Icon */}
          <div className="flex items-center gap-4 shrink-0 text-center lg:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#0d1e4c] text-white flex items-center justify-center shadow-md shrink-0">
              <Download className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                Downloads
              </h3>
              <p className="text-slate-950 font-bold text-xs sm:text-sm">
                Get ready with our printable resources and guides.
              </p>
            </div>
          </div>

          {/* Quick Download Items Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
            {downloadItems.map((item, idx) => (
              <a
                key={idx}
                href="#download-file"
                className="bg-white/90 hover:bg-white border border-amber-300 rounded-xl px-3 py-2 flex items-center gap-2 text-xs font-black text-slate-950 shadow-xs hover:shadow-sm transition-all transform hover:-translate-y-0.5"
              >
                {item.icon}
                <span>{item.title}</span>
              </a>
            ))}
          </div>

          {/* Right Action Button */}
          <div className="shrink-0 w-full sm:w-auto flex justify-center">
            <Link 
              href="/resources"
              className="px-6 py-3 rounded-full bg-[#0d1e4c] hover:bg-[#1a237e] text-white font-extrabold text-xs sm:text-sm shadow-md transition-all transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 group whitespace-nowrap w-full sm:w-auto text-center"
            >
              <span>View All Downloads</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResourceDownloadsBar;
