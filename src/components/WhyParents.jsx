import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const WhyParents = () => {
  const benefitsLeft = [
    "Builds vocabulary",
    "Encourages reading",
    "Develops pronunciation"
  ];
  const benefitsRight = [
    "Builds stage confidence",
    "Encourages healthy competition",
    "Gives students a platform to showcase their skills"
  ];

  return (
    <section className="py-16 md:py-24 bg-[#fffff8] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Image Section */}
          <div className="w-full lg:w-5/12 relative flex justify-center">
            {/* Background Blob/Shape */}
            <div className="absolute inset-0 bg-[#fff5cc] rounded-[60%_40%_50%_50%/40%_50%_50%_60%] w-full h-[110%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"></div>
            
            {/* Doodle Elements */}
            <div className="absolute -left-6 md:left-0 top-1/4 -rotate-12">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 21l3-11 5 3 2-7 2 7 5-3 3 11H2z" />
              </svg>
            </div>
            <div className="absolute -right-4 bottom-1/4 font-bold text-[#1a237e] text-xl -rotate-12 tracking-tight" style={{fontFamily: "'Comic Sans MS', cursive, sans-serif"}}>
              Future<br/>Ready!
            </div>
            
            <img 
              src="/images/little-learner.png" 
              alt="Happy student" 
              className="w-64 md:w-80 h-auto object-cover rounded-3xl"
            />
          </div>

          {/* Right Content Section */}
          <div className="w-full lg:w-7/12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a237e] mb-3 tracking-tight">Why Parents Choose SpellBee Universe</h2>
            <p className="text-slate-600 font-medium text-lg mb-8">Every child has a voice. Every word can build confidence.</p>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 mb-10">
              <ul className="space-y-4 flex-1">
                {benefitsLeft.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <span className="text-[#1a237e] font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4 flex-1">
                {benefitsRight.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <span className="text-[#1a237e] font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="bg-[#fbc02d] hover:bg-[#f9a825] text-[#1a237e] font-bold py-3.5 px-7 rounded-full flex items-center gap-2 transition-all shadow-sm hover:gap-3 hover:shadow-md">
              Register Your Child <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyParents;
