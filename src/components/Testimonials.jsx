import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Our students were excited to participate, prepare and perform. The experience made learning words much more engaging.",
      author: "- Principal, Lakshya International School",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sarah&style=circle"
    },
    {
      quote: "My child became much more confident speaking and spelling words aloud.",
      author: "- Parent, Bengaluru",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Aisha&style=circle"
    },
    {
      quote: "SpellBee Universe has given our students a wonderful platform to showcase their skills and build confidence.",
      author: "- Teacher, Delhi",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Priya&style=circle"
    },
    {
      quote: "A well-organized and inspiring event. Our students loved every moment!",
      author: "- Principal, Chennai",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Ananya&style=circle"
    }
  ];

  return (
    <section className="pt-8 sm:pt-9 pb-8 sm:pb-10 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-6 sm:mb-7 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a237e] mb-2 tracking-tight">What Parents & Teachers Say</h2>
          <p className="text-slate-500 font-medium text-sm md:text-base max-w-xl mx-auto md:mx-0">Real stories. Lasting impact.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white rounded-2xl p-5 sm:p-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-slate-100/80 hover:border-amber-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex gap-4 items-start h-full group cursor-pointer">
              <div className="w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0">
                <img src={t.avatar} alt="Avatar" className="w-full h-full rounded-full shadow-2xs group-hover:scale-110 group-hover:ring-3 group-hover:ring-amber-300 transition-all duration-300" />
              </div>
              <div className="flex flex-col flex-1 h-full justify-between min-w-0">
                <p className="text-[#3949ab] group-hover:text-[#1a237e] transition-colors text-xs font-medium leading-relaxed italic mb-3 min-h-[64px] lg:min-h-[76px]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <span className="text-slate-500 group-hover:text-amber-600 transition-colors text-xs font-bold block mt-auto">
                  {t.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
