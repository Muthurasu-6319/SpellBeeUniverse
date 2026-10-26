import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

const TrustedBy = () => {
  const partnerSchools = [
    { name: "Presidency School", type: "Bangalore North", logo: "/images/schools/presidency-school.png" },
    { name: "Candor International", type: "IB & Cambridge", logo: "/images/schools/candor-international-school.png" },
    { name: "Apollo International", type: "International School", logo: "/images/schools/apollo-international-school.png" },
    { name: "IQRA School", type: "Islamic & Modern", logo: "/images/schools/iqra-school.png" },
    { name: "Aryan International", type: "International School", logo: "/images/schools/aryan-international-school.png" },
    { name: "Hillrock National Public", type: "National Public School", logo: "/images/schools/hillrock-national-public-school.png" },
    { name: "NES National Public", type: "NES & SVB Group", logo: "/images/schools/nes-national-public-school.png" },
    { name: "Martin Luther Public", type: "Girinagar Trust", logo: "/images/schools/martin-luther-public-school.png" },
    { name: "VSS Public School", type: "CBSE Affiliated", logo: "/images/schools/vss-public-school.png" },
    { name: "PES Public School", type: "PES Institutions", logo: "/images/schools/pes-public-school.png" },
    { name: "KLE Society Schools", type: "Heritage Society", logo: "/images/schools/kle-society.png" },
    { name: "Oakridge International", type: "Nord Anglia School", logo: "/images/schools/oakridge-international-school.png" },
    { name: "Orchids International", type: "The International School", logo: "/images/schools/orchids-international-school.png" },
  ];

  return (
    <section className="py-5 sm:py-6 bg-slate-50/70 border-y border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          
          {/* Section Headline */}
          <div className="w-full lg:w-[260px] shrink-0 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 text-slate-950 text-[10px] font-black uppercase mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> 13 Schools Participated
            </div>
            <h2 className="text-lg sm:text-xl font-black text-slate-950 tracking-tight leading-tight">
              Trusted by Schools & Educators
            </h2>
            <p className="text-slate-600 text-[11px] font-medium leading-relaxed mt-1">
              Across India, premier institutions partner with SpellBee Universe.
            </p>
          </div>
          
          {/* Schools Logo Strip */}
          <div className="w-full lg:flex-1 overflow-hidden relative">
            <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 py-1">
              {partnerSchools.map((school, idx) => (
                <Link
                  key={idx}
                  href="/schools"
                  className="flex items-center gap-2.5 bg-white border border-slate-200/90 hover:border-yellow-400 rounded-full px-3 py-1.5 shadow-2xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 shrink-0 group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full border border-slate-100 group-hover:border-yellow-400 p-0.5 bg-white shrink-0 overflow-hidden flex items-center justify-center">
                    <img 
                      src={school.logo} 
                      alt={school.name}
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                  <div className="flex flex-col pr-1 text-left">
                    <span className="text-xs font-bold text-slate-800 group-hover:text-[#1a237e] transition-colors leading-tight whitespace-nowrap">
                      {school.name}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">
                      {school.type}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* View All Partner Schools Link */}
          <div className="shrink-0 flex justify-center xl:block">
            <Link 
              href="/schools"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1a237e] hover:text-yellow-600 bg-white hover:bg-yellow-50 border border-slate-200 hover:border-yellow-300 px-3.5 py-1.5 sm:py-2 rounded-full shadow-2xs transition-all whitespace-nowrap"
            >
              <span>View All 13 Schools</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
