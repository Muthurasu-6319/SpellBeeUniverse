"use client";
import React, { useState } from 'react';
import { Play, Video, X, Sparkles } from 'lucide-react';

// =========================================================================
// 🎬 VIDEO REVIEWS DATA
// Replace or paste your YouTube / Vimeo embed links or MP4 URLs here!
// Example videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
// =========================================================================
const initialVideoReviews = [
  {
    id: 1,
    title: "How SpellBee boosted Aarav's vocabulary & stage confidence",
    speaker: "Priya Sharma",
    role: "Proud Parent",
    schoolOrCity: "Bengaluru",
    duration: "1:45",
    badge: "Parent Review",
    thumbnail: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    videoUrl: "", // Paste your YouTube / Vimeo / MP4 link here
  },
  {
    id: 2,
    title: "Why our school partners with SpellBee Universe every year",
    speaker: "Dr. K. Ramanathan",
    role: "Principal, Lakshya Intl",
    schoolOrCity: "Chennai",
    duration: "2:10",
    badge: "Principal Review",
    thumbnail: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
    videoUrl: "", // Paste your YouTube / Vimeo / MP4 link here
  },
  {
    id: 3,
    title: "From classroom practice to the Grand Finale stage",
    speaker: "Ananya & Mentor",
    role: "Category 3 Finalist",
    schoolOrCity: "Delhi NCR",
    duration: "1:30",
    badge: "Student Story",
    thumbnail: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    videoUrl: "", // Paste your YouTube / Vimeo / MP4 link here
  },
];

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="py-10 sm:py-14 bg-gradient-to-b from-white via-amber-50/20 to-white relative overflow-hidden" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400 text-slate-950 font-black text-xs uppercase tracking-wider mb-2.5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>Real Experiences</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1a237e] tracking-tight leading-tight">
              What Parents & Teachers Say
            </h2>
            <p className="text-slate-600 font-medium text-sm sm:text-base mt-1.5 max-w-xl">
              Real stories. Lasting impact. Watch how SpellBee Universe transforms young minds.
            </p>
          </div>

          <div className="hidden sm:flex items-center justify-center md:justify-end gap-2 text-xs font-bold text-slate-500 bg-white px-3.5 py-2 rounded-full border border-slate-200/80 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Video Testimonials</span>
          </div>
        </div>

        {/* =========================================================================
            🎬 VIDEO REVIEWS SHOWCASE (SPACE RESERVED FOR VIDEO REVIEWS)
            ========================================================================= */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Video className="w-4 h-4 text-amber-500" />
            <h3 className="text-sm sm:text-base font-black text-slate-900 tracking-tight uppercase">
              Video Reviews & Experiences
            </h3>
            <span className="text-[11px] font-bold text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full ml-1">
              Watch Stories
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {initialVideoReviews.map((v) => (
              <div
                key={v.id}
                onClick={() => setActiveVideo(v)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer border border-slate-200/90 hover:border-amber-300 flex flex-col h-full"
              >
                {/* Video Aspect Ratio Box (16:9) */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900 shrink-0">
                  <img
                    src={v.thumbnail}
                    alt={v.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

                  {/* Badge & Duration */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-yellow-400 text-slate-950 text-[11px] font-black uppercase tracking-wider shadow-sm">
                      {v.badge}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-white text-[11px] font-mono font-bold">
                      {v.duration}
                    </span>
                  </div>

                  {/* Play Button Trigger */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-yellow-400/95 group-hover:bg-yellow-400 text-slate-950 flex items-center justify-center shadow-lg shadow-yellow-400/30 group-hover:scale-110 group-hover:shadow-yellow-400/50 transition-all duration-300">
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-slate-950 translate-x-0.5 text-slate-950" />
                    </div>
                  </div>

                  {/* Video Status Indicator */}
                  {!v.videoUrl && (
                    <div className="absolute bottom-3 right-3 text-[10px] font-bold text-amber-300 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-full border border-amber-400/30">
                      Ready for Video Post
                    </div>
                  )}
                </div>

                {/* Card Meta Content */}
                <div className="p-4 sm:p-5 bg-white flex flex-col justify-between flex-1">
                  <h4 className="text-slate-900 font-black text-sm sm:text-base leading-snug group-hover:text-[#1a237e] transition-colors mb-2.5 line-clamp-2">
                    {v.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100 mt-auto">
                    <div className="font-bold text-slate-800">
                      {v.speaker} <span className="font-normal text-slate-500">• {v.role}</span>
                    </div>
                    <span className="text-amber-600 font-semibold shrink-0 ml-2">{v.schoolOrCity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* =========================================================================
          🎥 VIDEO PLAYER MODAL
          ========================================================================= */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="relative w-full max-w-3xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 bg-slate-900/90 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  {activeVideo.badge} • {activeVideo.speaker}
                </span>
                <h3 className="text-white font-bold text-sm sm:text-base line-clamp-1">
                  {activeVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Video Body */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              {activeVideo.videoUrl ? (
                <iframe
                  src={activeVideo.videoUrl}
                  title={activeVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                /* Empty state when video link hasn't been pasted yet */
                <div className="p-8 text-center max-w-md mx-auto">
                  <div className="w-16 h-16 rounded-full bg-amber-400/20 text-yellow-400 flex items-center justify-center mx-auto mb-4 border border-yellow-400/40">
                    <Video className="w-8 h-8" />
                  </div>
                  <h4 className="text-white font-black text-lg mb-2">
                    Video Review Slot Ready
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    This spot is reserved for <strong className="text-yellow-400">{activeVideo.speaker}&apos;s</strong> review. When you have the video URL, simply paste it into <code className="bg-slate-800 px-1.5 py-0.5 rounded text-amber-300">Testimonials.jsx</code>.
                  </p>
                  <button
                    onClick={() => setActiveVideo(null)}
                    className="px-5 py-2 rounded-full bg-yellow-400 hover:bg-yellow-500 text-slate-950 font-bold text-xs transition-transform hover:scale-105 cursor-pointer"
                  >
                    Got It
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}