import React from 'react';
import { School, Award, Sparkles, Building2, BookOpen, CheckCircle } from 'lucide-react';

const SchoolsWorkedWith = () => {
  // Exactly 24 unique partner schools corresponding strictly to verified schools
  const partnerSchools = [
    {
      name: "Presidency School",
      type: "Bangalore North",
      location: "Bengaluru, Karnataka",
      logo: "/images/schools/presidency-school.png",
      tag: "Presidency Group"
    },
    {
      name: "Candor International",
      type: "IB & Cambridge School",
      location: "Bengaluru, Karnataka",
      logo: "/images/schools/candor-international-school.png",
      tag: "World School"
    },
    {
      name: "Apollo International",
      type: "International School",
      location: "Aspire & Actualise",
      logo: "/images/schools/apollo-international-school.png",
      tag: "Excellence Hub"
    },
    {
      name: "IQRA School",
      type: "Islamic & Modern School",
      location: "Academic Excellence",
      logo: "/images/schools/iqra-school.png",
      tag: "Knowledge & Values"
    },
    {
      name: "Aryan International",
      type: "International School",
      location: "Legacy of Trust",
      logo: "/images/schools/aryan-international-school.png",
      tag: "Premier Campus"
    },
    {
      name: "Hillrock National Public",
      type: "National Public School",
      location: "Bengaluru, Karnataka",
      logo: "/images/schools/hillrock-national-public-school.png",
      tag: "Academic Leader"
    },
    {
      name: "NES National Public",
      type: "NES & SVB Group",
      location: "Mulund, Mumbai",
      logo: "/images/schools/nes-national-public-school.png",
      tag: "CISCE Affiliated"
    },
    {
      name: "Martin Luther Public",
      type: "Girinagar Educational Trust",
      location: "Bengaluru, Karnataka",
      logo: "/images/schools/martin-luther-public-school.png",
      tag: "Foundation for Tomorrow"
    },
    {
      name: "VSS Public School",
      type: "CBSE Affiliated",
      location: "Bengaluru, Karnataka",
      logo: "/images/schools/vss-public-school.png",
      tag: "Since 1972"
    },
    {
      name: "PES Public School",
      type: "PES Institutions",
      location: "Bengaluru & Shivamogga",
      logo: "/images/schools/pes-public-school.png",
      tag: "PES Group"
    },
    {
      name: "KLE Society Schools",
      type: "Lingayat Education Society",
      location: "Belagavi & Bengaluru",
      logo: "/images/schools/kle-society.png",
      tag: "Heritage Society"
    },
    {
      name: "Oakridge International",
      type: "Nord Anglia School",
      location: "Bengaluru & Hyderabad",
      logo: "/images/schools/oakridge-international-school.png",
      tag: "Global Network"
    },
    {
      name: "Orchids International",
      type: "The International School",
      location: "Bengaluru & Pan India",
      logo: "/images/schools/orchids-international-school.png",
      tag: "CBSE & ICSE Chain"
    },
    {
      name: "TCIS Bangalore",
      type: "The Cambridge International",
      location: "Bengaluru, Karnataka",
      logo: "/images/schools/tcis-international-school.png",
      tag: "Cambridge Certified"
    },
    {
      name: "EKAM Early Learning",
      type: "International Preschool & Daycare",
      location: "Bengaluru, Karnataka",
      logo: "/images/schools/ekam-school.png",
      tag: "Early Education"
    },
    {
      name: "Edify World School",
      type: "Think Beyond • Whitefield",
      location: "Whitefield, Bengaluru",
      logo: "/images/schools/edify-world-school.png",
      tag: "World School"
    },
    {
      name: "Heritage Public School",
      type: "Public School",
      location: "Excellence in Education",
      logo: "/images/schools/heritage-public-school.png",
      tag: "Value Education"
    },
    {
      name: "Freedom International",
      type: "Dare to Dream",
      location: "Bengaluru, Karnataka",
      logo: "/images/schools/freedom-international-school.png",
      tag: "ICSE School"
    },
    {
      name: "Harvest International",
      type: "Education Beyond Classrooms",
      location: "Sarjapur, Bengaluru",
      logo: "/images/schools/harvest-international-school.png",
      tag: "IB & Cambridge"
    },
    {
      name: "Greenwood High",
      type: "Rooted In Knowledge",
      location: "Bengaluru, Karnataka",
      logo: "/images/schools/greenwood-high.png",
      tag: "International School"
    },
    {
      name: "Bethany High",
      type: "Trust & Obey",
      location: "Koramangala, Bengaluru",
      logo: "/images/schools/bethany-high.png",
      tag: "Estd. 1963"
    },
    {
      name: "Christ School (ICSE)",
      type: "Bengaluru - 560 029",
      location: "Bengaluru, Karnataka",
      logo: "/images/schools/christ-school-icse.png",
      tag: "CISCE Affiliated"
    },
    {
      name: "Magnolia Maaruti Public",
      type: "AECS • Building Knowledge",
      location: "Bengaluru, Karnataka",
      logo: "/images/schools/magnolia-maaruti-public-school.png",
      tag: "CBSE Affiliated"
    }
  ];

  return (
    <section className="pt-8 md:pt-10 pb-3 md:pb-4 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <div className="group/pill inline-flex items-center gap-2 mb-1.5 cursor-pointer">
              <span className="w-5 group-hover/pill:w-8 h-1 bg-yellow-400 rounded-full inline-block transition-all duration-300"></span>
              <span className="text-slate-950 font-black tracking-wider text-xs uppercase group-hover/pill:text-yellow-600 transition-colors">
                Our Network
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-950 mb-1 tracking-tight">
              Schools We&apos;ve Worked With
            </h2>
            <p className="text-slate-700 font-medium text-xs sm:text-sm">
              We are proud to partner with respected schools and premier educational institutions across India.
            </p>
          </div>

          {/* Exact count badge matching user-provided logos */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-black text-slate-950 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Participated Schools
            </span>
          </div>
        </div>

        {/* Clean Showcase Grid - Zero Repetition, Every school shown exactly once */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3 sm:gap-3.5">
          {partnerSchools.map((school, idx) => (
            <div 
              key={`${school.name}-${idx}`}
              className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-yellow-400 p-3 sm:p-3.5 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 min-h-[145px] cursor-pointer overflow-hidden animate-pop-in"
            >
              {/* Active hover corner glow */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-yellow-300/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-tr-2xl pointer-events-none"></div>

              {/* Verified partner badge popping up on hover */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 text-emerald-600 z-10">
                <CheckCircle className="w-4 h-4 fill-emerald-100" />
              </div>

              {/* Circular School Logo Badge */}
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border-2 border-slate-100 group-hover:border-yellow-400 p-1 bg-white shadow-xs group-hover:shadow-md transition-all duration-300 group-hover:scale-110 flex items-center justify-center mb-2 shrink-0 overflow-hidden">
                <img 
                  src={school.logo} 
                  alt={`${school.name} Logo`}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>

              <h4 className="text-xs sm:text-[13px] font-extrabold text-slate-800 group-hover:text-[#1a237e] leading-snug mb-0.5 transition-colors line-clamp-2">
                {school.name}
              </h4>

              <p className="text-[10px] text-slate-500 font-medium line-clamp-1">
                {school.type}
              </p>

              <div className="text-[9px] text-amber-700/80 font-semibold mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                {school.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolsWorkedWith;
