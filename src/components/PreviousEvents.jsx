import React from 'react';
import { ArrowRight } from 'lucide-react';

const PreviousEvents = () => {
  // We'll use colored placeholders since we don't have the real photos.
  const events = [
    { id: 1, color: 'bg-blue-100' },
    { id: 2, color: 'bg-indigo-100' },
    { id: 3, color: 'bg-purple-100' },
    { id: 4, color: 'bg-pink-100' },
    { id: 5, color: 'bg-rose-100' },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50/50 relative border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-[#1a237e] mb-2 tracking-tight">Previous Events</h2>
            <p className="text-[#3949ab] font-medium text-lg">SpellBee Universe — Moments That Matter</p>
          </div>
          <button className="px-6 py-3 rounded-full bg-[#fbc02d] hover:bg-yellow-500 text-gray-900 font-bold text-sm shadow-md shadow-yellow-400/20 transition-all flex items-center gap-2 w-fit">
            View Gallery <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {events.map((item) => (
            <div key={item.id} className={`w-full aspect-[4/3] rounded-2xl ${item.color} flex items-center justify-center shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer`}>
              <span className="text-gray-400 font-medium text-sm">Event Photo</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousEvents;
