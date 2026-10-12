import React from 'react';
import { User, BookOpen, FileText, Mic, Trophy, Star, ArrowRight } from 'lucide-react';

const JourneyGlance = () => {
  const steps = [
    { id: 1, title: 'Register', desc: 'Choose your category and complete registration.', icon: User, color: 'bg-pink-500' },
    { id: 2, title: 'Prepare', desc: 'Use our resources to learn and practise.', icon: BookOpen, color: 'bg-emerald-500' },
    { id: 3, title: 'Written Round', desc: 'Take the written examination.', icon: FileText, color: 'bg-blue-500' },
    { id: 4, title: 'Oral Round', desc: 'Showcase your spelling skills.', icon: Mic, color: 'bg-orange-500' },
    { id: 5, title: 'Grand Finale', desc: 'Compete on the Spell Master stage.', icon: Trophy, color: 'bg-purple-600' },
    { id: 6, title: 'Recognition', desc: 'Earn certificates, medals and more.', icon: Star, color: 'bg-teal-500' },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#fffff8] border-b border-amber-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#1a237e] mb-2 tracking-tight">The Journey at a Glance</h2>
          <p className="text-[#3949ab] font-medium text-lg">Six simple steps. One incredible journey.</p>
        </div>

        <div className="relative">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center relative w-full md:w-1/6 group text-center">
                
                {/* Connector Arrow (Desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-[2px] z-0">
                    <ArrowRight className="absolute right-0 -top-[10px] w-5 h-5 text-amber-500" />
                  </div>
                )}

                {/* Circle Icon */}
                <div className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center relative z-10 shadow-lg border-4 border-white mb-4 group-hover:-translate-y-1 transition-transform`}>
                  <step.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                
                {/* Text Content */}
                <div>
                  <h3 className="text-sm font-bold text-[#1a237e] mb-1">{step.id}. {step.title}</h3>
                  <p className="text-[#3949ab] text-xs leading-relaxed max-w-[140px] mx-auto">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyGlance;
