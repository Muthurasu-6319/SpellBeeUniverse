import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const PreviousEvents = () => {
  const events = [
    { id: 1, image: '/images/gallery/img-114.jpg', title: 'Grand Finale All-Stars Celebration' },
    { id: 2, image: '/images/gallery/img-110.jpg', title: 'State Champion Star Trophy' },
    { id: 3, image: '/images/gallery/img-116.jpg', title: 'Double Trophy Triumph' },
    { id: 4, image: '/images/gallery/img-46.jpg', title: 'Inspirational Stage Address' },
    { id: 5, image: '/images/gallery/img-50.jpg', title: 'Karnataka SpellBee Finalists' },
  ];

  return (
    <section className="pt-6 sm:pt-8 pb-8 sm:pb-10 bg-slate-50/60 relative border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 sm:mb-6 gap-4 sm:gap-6 text-center md:text-left items-center md:items-end">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a237e] mb-1.5 tracking-tight">Previous Events</h2>
            <p className="text-[#3949ab] font-medium text-sm sm:text-base max-w-md mx-auto md:mx-0">SpellBee Universe — Moments That Matter</p>
          </div>
          <Link href="/gallery" className="px-5 py-2.5 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-slate-900 font-bold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2 w-full sm:w-auto group cursor-pointer shrink-0">
            <span>View Gallery</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-4">
          {events.map((item, index) => (
            <Link 
              href="/gallery"
              key={item.id} 
              className={`group relative w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 block bg-slate-900 border-2 border-transparent hover:border-amber-400 cursor-pointer ${
                index === 4 ? 'col-span-2 sm:col-span-1' : ''
              }`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2.5 sm:p-3">
                <span className="text-white text-[11px] sm:text-xs font-bold leading-tight drop-shadow-sm transform translate-y-0 sm:translate-y-2 sm:group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousEvents;
