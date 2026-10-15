import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const PreviousEvents = () => {
  const events = [
    { id: 1, image: '/images/gallery/img-114.jpg', title: 'Grand Finale All-Stars Celebration' },
    { id: 2, image: '/images/gallery/img-110.jpg', title: 'State Champion Star Trophy' },
    { id: 3, image: '/images/gallery/img-116.jpg', title: 'Double Trophy Triumph' },
    { id: 4, image: '/images/gallery/img-92.jpg', title: 'Oakridge International Contingent' },
    { id: 5, image: '/images/gallery/img-81.jpg', title: 'State Finalists Stage Lineup' },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50/50 relative border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-[#1a237e] mb-2 tracking-tight">Previous Events</h2>
            <p className="text-[#3949ab] font-medium text-lg">SpellBee Universe — Moments That Matter</p>
          </div>
          <Link href="/gallery" className="px-6 py-3 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-gray-900 font-bold text-sm shadow-md shadow-yellow-400/20 transition-all flex items-center gap-2 w-fit">
            View Gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {events.map((item) => (
            <Link 
              href="/gallery"
              key={item.id} 
              className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block bg-slate-900"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-white text-xs font-bold leading-tight drop-shadow-sm">
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
