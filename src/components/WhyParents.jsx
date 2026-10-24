import React from 'react';
import Link from 'next/link';
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
    <section className="pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-10 md:pb-12 bg-[#fffff8] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          
          {/* Left Image Section */}
          <div className="w-full lg:w-5/12 relative flex justify-center group">
            {/* Background Blob/Shape */}
            <div className="absolute inset-0 bg-[#fff5cc] rounded-[60%_40%_50%_50%/40%_50%_50%_60%] w-full h-[110%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 animate-pulse-soft"></div>
            
            <img 
              src="/images/why-parents-champion.png" 
              alt="SpellBee Student" 
              className="w-full max-w-md h-auto object-cover rounded-3xl shadow-lg border-4 border-white relative z-10 transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl"
            />
          </div>

          {/* Right Content Section */}
          <div className="w-full lg:w-7/12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a237e] mb-2 tracking-tight">Why Parents Choose SpellBee Universe</h2>
            <p className="text-[#3949ab] font-medium text-base md:text-lg mb-6 leading-relaxed">Every child has a voice. Every word can build confidence.</p>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-10 mb-8">
              <ul className="space-y-4 flex-1">
                {benefitsLeft.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 hover:translate-x-1.5 transition-transform duration-200 cursor-pointer group/item">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 group-hover/item:scale-120 group-hover/item:rotate-12 transition-all flex-shrink-0 mt-0.5" />
                    <span className="text-[#1a237e] group-hover/item:text-blue-700 transition-colors font-medium leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4 flex-1">
                {benefitsRight.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 hover:translate-x-1.5 transition-transform duration-200 cursor-pointer group/item">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 group-hover/item:scale-120 group-hover/item:rotate-12 transition-all flex-shrink-0 mt-0.5" />
                    <span className="text-[#1a237e] group-hover/item:text-blue-700 transition-colors font-medium leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link 
              href="/register"
              className="bg-[#fbc02d] hover:bg-[#f9a825] text-[#1a237e] font-black py-3.5 px-7 rounded-full inline-flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-lg hover:scale-105 active:scale-95 group cursor-pointer w-full sm:w-auto text-center"
            >
              <span>Register Your Child</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-200" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyParents;
