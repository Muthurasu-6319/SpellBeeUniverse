"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Camera, 
  Sparkles, 
  Maximize2, 
  X, 
  ArrowRight, 
  Calendar, 
  MapPin,
  Image as ImageIcon
} from "lucide-react";

export const galleryPhotos = [
  {
    id: 1,
    title: "Grand Finale Champion Trophy Presentation",
    category: "Grand Finale",
    date: "Grand Finale",
    location: "State Championship Stage",
    description: "Champion speller receiving the prestigious trophy amidst a burst of celebratory confetti on the grand finale stage.",
    tag: "Championship Stage",
    image: "/images/gallery/img-1.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/9G6A8194%20copy.jpg"
  },
  {
    id: 2,
    title: "State Champion Trophy & Gold Medal",
    category: "Award Ceremonies",
    date: "Award Ceremony",
    location: "Grand Finale Arena",
    description: "Proud young champion raising her trophy and flower bouquet with school leaders and distinguished dignitaries.",
    tag: "Gold Medalist",
    image: "/images/gallery/img-2.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/9G6A8168%20copy.jpg"
  },
  {
    id: 3,
    title: "Star Speller Award Celebration with Family",
    category: "Award Ceremonies",
    date: "Award Ceremony",
    location: "State Auditorium",
    description: "A heartwarming victory moment as the young spelling champion celebrates lifting the star trophy together with his family and mentors.",
    tag: "Proud Family",
    image: "/images/gallery/img-3.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/9G6A8107%20copy.JPG"
  },
  {
    id: 4,
    title: "School Champions Felicitation & Honor",
    category: "School Rounds",
    date: "School Round",
    location: "School Championship Arena",
    description: "School speller receiving special memento of excellence, certificate, and gold medal alongside school management and mentors.",
    tag: "School Champions",
    image: "/images/gallery/img-4.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/WA9A1439.JPG"
  },
  {
    id: 7,
    title: "Grand Stage Confetti Shower Celebration",
    category: "Grand Finale",
    date: "Grand Finale",
    location: "Karnataka State Championship",
    description: "Stunning celebration moment as multi-color confetti rains down upon young champions holding their trophies high.",
    tag: "Confetti Celebration",
    image: "/images/gallery/img-7.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/WA9A1327.JPG"
  },
  {
    id: 8,
    title: "Medal of Excellence Felicitation",
    category: "Award Ceremonies",
    date: "Medal Stage",
    location: "Grand Finale Stage",
    description: "Distinguished school leader awarding the medal of excellence to a smiling student speller on the main stage.",
    tag: "Medal Honor",
    image: "/images/gallery/img-8.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/WA9A1313.JPG"
  },
  {
    id: 9,
    title: "School Finalist Medal Recognition",
    category: "School Rounds",
    date: "Zonal Finals",
    location: "Main Stage",
    description: "Proud finalist student receiving her medal of achievement alongside coordinators and teachers in front of the mascot backdrop.",
    tag: "Finalist Medal",
    image: "/images/gallery/img-9.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/WA9A1260.JPG"
  },
  {
    id: 10,
    title: "Championship Certificate & Trophy Presentation",
    category: "Award Ceremonies",
    date: "Felicitation Stage",
    location: "State Arena",
    description: "Student speller holding her certificate of excellence and star trophy amidst thunderous applause and confetti.",
    tag: "Merit Certificate",
    image: "/images/gallery/img-10.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/WA9A1021.JPG"
  },
  {
    id: 11,
    title: "Junior Category Star Winner Honor",
    category: "School Rounds",
    date: "Junior Round",
    location: "Championship Stage",
    description: "Beaming young junior speller in school uniform receiving his award certificate and trophy from distinguished guests.",
    tag: "Junior Star",
    image: "/images/gallery/img-11.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/WA9A0839.JPG"
  },
  {
    id: 13,
    title: "High-Stakes Countdown Spelling Round",
    category: "Competitions",
    date: "Live Stage",
    location: "Grand Finale Arena",
    description: "Student finalist spelling on stage with 14 seconds on the giant digital countdown screen under the watchful eye of the pronouncer.",
    tag: "Live Countdown",
    image: "/images/gallery/img-13.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/WA9A0420.JPG"
  },
  {
    id: 14,
    title: "Spelling Round: Word Articulation on Stage",
    category: "Competitions",
    date: "Stage Round",
    location: "Grand Finale Stage",
    description: "Student finalist confidently speaking into the microphone, spelling her given word in front of the audience and judges.",
    tag: "Live Spelling",
    image: "/images/gallery/img-14.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/WA9A0411.JPG"
  },
  {
    id: 16,
    title: "Chief Pronouncer & Host at the Podium",
    category: "Competitions",
    date: "Live Session",
    location: "State Championship Arena",
    description: "Official pronouncer giving phonetic cues, definitions, and word origins from the ceremonial podium.",
    tag: "Official Pronouncer",
    image: "/images/gallery/img-16.jpg",
    objectPosition: "top",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/WA9A0394.JPG"
  },
  {
    id: 17,
    title: "Senior Category Finalist Word Challenge",
    category: "Competitions",
    date: "Final Round",
    location: "Championship Stage",
    description: "Senior category finalist demonstrating exceptional linguistic mastery under the lights of the competition stage.",
    tag: "Senior Finals",
    image: "/images/gallery/img-17.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/WA9A0280.JPG"
  },
  {
    id: 18,
    title: "Grand Stage Host & Master of Ceremonies",
    category: "Grand Finale",
    date: "Grand Opening",
    location: "Amphitheater Arena",
    description: "Master of ceremonies welcoming the audience, schools, and young spellers to the prestigious SpellBee celebration.",
    tag: "Stage Emcee",
    image: "/images/gallery/img-18.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/WA9A0199.JPG"
  },
  {
    id: 19,
    title: "Official Spell Champion Medals & Honors",
    category: "Award Ceremonies",
    date: "Awards Gallery",
    location: "State Championship",
    description: "Custom minted SpellBee Universe championship medals engraved with the official mascot and winner laurels.",
    tag: "Champion Medals",
    image: "/images/gallery/img-19.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/WA9A0040.JPG"
  },
  {
    id: 21,
    title: "District Championship Golden Trophies",
    category: "Award Ceremonies",
    date: "Awards Gallery",
    location: "State Championship Arena",
    description: "The iconic golden trophies lined up on the honours table ready for the felicitation of district champions.",
    tag: "Golden Trophies",
    image: "/images/gallery/img-21.jpg",
    objectPosition: "top",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/WA9A0011.JPG"
  },

  {
    id: 24,
    title: "Rising Stars: Category Winners Trophy Triumph",
    category: "Grand Finale",
    date: "Grand Finale",
    location: "Main Stage Arena",
    description: "All category spellers joyously raising their trophies together in an unforgettable victory moment on stage.",
    tag: "Winners Triumph",
    image: "/images/gallery/img-24.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/p3%204.JPG"
  },
  {
    id: 25,
    title: "Be a Spell Champ: Joy of Learning Words",
    category: "School Rounds",
    date: "Learning Zone",
    location: "Auditorium Hub",
    description: "Radiant young student holding her 'Be a Spell Champ' guidebook with pride in the auditorium.",
    tag: "Young Learner",
    image: "/images/gallery/img-25.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/p3%201.JPG"
  },
  {
    id: 27,
    title: "Packed Auditorium: Enthusiastic Student Audience",
    category: "Competitions",
    date: "Live Arena",
    location: "Auditorium Hall",
    description: "Hundreds of school students, parents, and teachers filling the auditorium to cheer on their school spelling champions.",
    tag: "Audience Arena",
    image: "/images/gallery/img-27.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/p2%202.JPG"
  },
  {
    id: 28,
    title: "Laurel High Global School Felicitation Ceremony",
    category: "Award Ceremonies",
    date: "District Felicitation",
    location: "Main Stage Auditorium",
    description: "School delegation from Laurel High Global School honored on stage with medals, certificates, and dignitaries.",
    tag: "School Felicitation",
    image: "/images/gallery/img-28.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/KET_2431.JPG"
  },
  {
    id: 29,
    title: "District Championship Trophy Felicitation",
    category: "Award Ceremonies",
    date: "Awards Gala",
    location: "Grand Stage Arena",
    description: "Senior champion speller proudly receiving the golden trophy and certificate of merit from guest dignitaries.",
    tag: "Championship Trophy",
    image: "/images/gallery/img-29.jpg",
    objectPosition: "top",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/KET_2389-001.JPG"
  },
  {
    id: 30,
    title: "Star Speller Felicitation with Dignitaries & Family",
    category: "Award Ceremonies",
    date: "Awards Gala",
    location: "Auditorium Stage",
    description: "Young spelling star honored on stage with parents and chief guests presenting the golden laurels.",
    tag: "Star Speller",
    image: "/images/gallery/img-30.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/KET_2382.JPG"
  },
  {
    id: 31,
    title: "Junior Spelling Champion Award Presentation",
    category: "Award Ceremonies",
    date: "Awards Ceremony",
    location: "Main Auditorium Stage",
    description: "Junior champion receiving certificate and golden trophy surrounded by proud parents and jury members.",
    tag: "Junior Champion",
    image: "/images/gallery/img-31.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/KET_2372.JPG"
  },
  {
    id: 32,
    title: "Stage Honors: Young Achiever Trophy Presentation",
    category: "Award Ceremonies",
    date: "Awards Ceremony",
    location: "Grand Finale Arena",
    description: "Talented speller felicitated by distinguished panel of judges with golden victory cup.",
    tag: "Trophy Presentation",
    image: "/images/gallery/img-32.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/KET_2366.JPG"
  },
  {
    id: 33,
    title: "Proud Moments: Parent & Speller on Stage",
    category: "School Rounds",
    date: "Felicitation Round",
    location: "Auditorium Stage",
    description: "Heartwarming moment as parents join their child on stage to receive the SpellBee Universe achievement award.",
    tag: "Family Pride",
    image: "/images/gallery/img-33.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/KET_2356.JPG"
  },
  {
    id: 34,
    title: "Merit Certificate & Trophy Presentation Ceremony",
    category: "Award Ceremonies",
    date: "District Finals",
    location: "Championship Stage",
    description: "School representative speller honored with certificate of excellence and shiny gold cup on stage.",
    tag: "Excellence Award",
    image: "/images/gallery/img-34.jpg",
    objectPosition: "top",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/KET_2352-001.JPG"
  },
  {
    id: 35,
    title: "Dignitary Handshake & Honor Presentation",
    category: "Award Ceremonies",
    date: "Felicitation Ceremony",
    location: "Auditorium Stage",
    description: "Guest of honor warmly congratulating the young speller while handing over the prestigious trophy.",
    tag: "Honors Stage",
    image: "/images/gallery/img-35.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/KET_2342.JPG"
  },
  {
    id: 36,
    title: "Golden Trophy Handover by Chief Guest",
    category: "Award Ceremonies",
    date: "Awards Ceremony",
    location: "Main Stage Arena",
    description: "Chief guest presenting the SpellBee Universe championship trophy to the bright young winner.",
    tag: "Trophy Handover",
    image: "/images/gallery/img-36.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/KET_2336.JPG"
  },
  {
    id: 37,
    title: "Stage Recognition: Speller Achievement Award",
    category: "Award Ceremonies",
    date: "Grand Finale Gala",
    location: "Auditorium Stage",
    description: "Celebrating vocabulary excellence as the student takes the stage to receive official honors and trophy.",
    tag: "Stage Recognition",
    image: "/images/gallery/img-37.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/KET_2327.JPG"
  },
  {
    id: 38,
    title: "State Championship Category 3 Winners Podium",
    category: "Grand Finale",
    date: "State Championship",
    location: "Karnataka Spell Bee Grand Arena",
    description: "Category 3 champions celebrated on the main stage, proudly displaying their prestigious trophies, medals, and certificates of excellence.",
    tag: "Category 3 Winners",
    image: "/images/gallery/img-38.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/cat%203.JPG"
  },
  {
    id: 39,
    title: "State Championship Category 2 Winners Podium",
    category: "Grand Finale",
    date: "State Championship",
    location: "Karnataka Spell Bee Grand Arena",
    description: "Category 2 winners standing tall on stage with gleaming victory trophies, medals, and certificates alongside dignitaries.",
    tag: "Category 2 Winners",
    image: "/images/gallery/img-39.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/cat%202.JPG"
  },
  {
    id: 40,
    title: "State Championship Category 1 Junior Winners Podium",
    category: "Grand Finale",
    date: "State Championship",
    location: "Karnataka Spell Bee Grand Arena",
    description: "Little champions of Category 1 felicitated on stage with trophies, medals, and certificates under the applause of proud parents and judges.",
    tag: "Category 1 Winners",
    image: "/images/gallery/img-40.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/cat%201%20.JPG"
  },
  {
    id: 41,
    title: "Championship Stage: Live Spelling Challenge",
    category: "Competitions",
    date: "Season Finale",
    location: "Karnataka Spell Bee Arena",
    description: "Student finalist speaking into the microphone on stage with pronouncer at the podium and seated finalists observing.",
    tag: "Live Stage",
    image: "/images/gallery/img-41.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A2063.JPG"
  },
  {
    id: 42,
    title: "Student Word Articulation Under Stage Lights",
    category: "Competitions",
    date: "Season Finale",
    location: "Main Stage Auditorium",
    description: "Young girl finalist confidently spelling her assigned word with the official pronouncer listening intently.",
    tag: "Finalist Spelling",
    image: "/images/gallery/img-42.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A2061.JPG"
  },
  {
    id: 43,
    title: "Enthusiastic Audience & Parents in the Auditorium",
    category: "Grand Finale",
    date: "Championship Day",
    location: "Main Auditorium",
    description: "Full house of parents, educators, and supporters watching each exciting round of the Karnataka Spell Bee.",
    tag: "Audience & Parents",
    image: "/images/gallery/img-43.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A2060.JPG"
  },
  {
    id: 44,
    title: "Contestant #3 Live Spell Challenge",
    category: "Competitions",
    date: "Final Round",
    location: "Championship Stage",
    description: "Finalist contestant #3 delivering sharp articulation on stage in front of the digital Karnataka Spell Bee display.",
    tag: "Stage Finalist",
    image: "/images/gallery/img-44.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1971.JPG"
  },
  {
    id: 45,
    title: "Contestant #2 Stage Word Presentation",
    category: "Competitions",
    date: "Final Round",
    location: "Championship Stage",
    description: "Finalist contestant #2 in school blazer spelling with poise and confidence under championship spotlights.",
    tag: "Poise & Confidence",
    image: "/images/gallery/img-45.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1968.JPG"
  },
  {
    id: 46,
    title: "Official Pronouncer at the Ceremonial Podium",
    category: "Competitions",
    date: "Live Session",
    location: "Main Podium",
    description: "Chief pronouncer delivering word origins, phonetic enunciations, and sentence clues from the stage podium.",
    tag: "Chief Pronouncer",
    image: "/images/gallery/img-46.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1966.JPG"
  },
  {
    id: 47,
    title: "Focused Finalists Awaiting Their Turn",
    category: "Competitions",
    date: "Final Round",
    location: "Championship Stage",
    description: "Contestants seated on stage listening intently to words being spelled, eagerly anticipating their moment.",
    tag: "Stage Finalists",
    image: "/images/gallery/img-47.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1965.JPG"
  },
  {
    id: 48,
    title: "Senior Finalist High-Stakes Spelling",
    category: "Competitions",
    date: "Grand Finale",
    location: "Main Stage",
    description: "Senior division finalist carefully deciphering complex root words and spelling with determination.",
    tag: "Senior Division",
    image: "/images/gallery/img-48.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1964.JPG"
  },
  {
    id: 49,
    title: "Host Briefing the Finalists on Stage",
    category: "Grand Finale",
    date: "Opening Round",
    location: "Main Stage Arena",
    description: "Master of ceremonies explaining the buzzer rules and scoring breakdown to all contestants on stage.",
    tag: "Championship Briefing",
    image: "/images/gallery/img-49.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1963.JPG"
  },
  {
    id: 50,
    title: "Championship Lineup: All Category Finalists",
    category: "Grand Finale",
    date: "Grand Finale",
    location: "Karnataka Spell Bee Stage",
    description: "All qualifying school finalists gathered together on the grand stage under the glowing honeycomb emblems.",
    tag: "Finalist Lineup",
    image: "/images/gallery/img-50.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1960.JPG"
  },
  {
    id: 51,
    title: "Pre-Round Focus: Speller Ready for Action",
    category: "Competitions",
    date: "Junior Finals",
    location: "Karnataka Spell Bee Stage",
    description: "Young Greenwood High speller holding his competition handbook, waiting with calm focus for his turn.",
    tag: "Pre-Round Focus",
    image: "/images/gallery/img-51.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1954.JPG"
  },
  {
    id: 52,
    title: "SpellBee Goodie Packs: Excitement of Young Spellers",
    category: "School Rounds",
    date: "Welcome Session",
    location: "Stage Auditorium",
    description: "Young spellers eagerly unpacking their official SpellBee Universe goodie packs and participant materials.",
    tag: "Goodie Packs",
    image: "/images/gallery/img-52.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1952.JPG"
  },
  {
    id: 53,
    title: "Coordinator Distributing Competition Kits on Stage",
    category: "Competitions",
    date: "Championship Briefing",
    location: "Grand Stage Arena",
    description: "Stage coordinator handing out official contest folders and briefing young finalists on stage before the buzzer round.",
    tag: "Contest Kits",
    image: "/images/gallery/img-53.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1950.JPG"
  },
  {
    id: 54,
    title: "Junior Contestant #25 Live Mascot Stage Spelling",
    category: "Competitions",
    date: "Junior Round",
    location: "Main Stage Screen",
    description: "Primary category speller #25 enunciating her word clearly against the backdrop of the iconic SpellBee Universe mascot.",
    tag: "Mascot Stage",
    image: "/images/gallery/img-54.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1946.JPG"
  },
  {
    id: 55,
    title: "Junior Contestant #22 Confident Articulation",
    category: "Competitions",
    date: "Junior Category",
    location: "Main Stage Screen",
    description: "Young schoolboy finalist #22 holding the microphone firmly with both hands as he spells each letter with precision.",
    tag: "Young Finalist",
    image: "/images/gallery/img-55.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1944.JPG"
  },
  {
    id: 56,
    title: "Junior Contestant #21 Word Mastery Under Lights",
    category: "Competitions",
    date: "Junior Category",
    location: "Championship Stage",
    description: "Contestant #21 standing poised and determined before the pronouncers, spelling out his word under bright stage lights.",
    tag: "Word Mastery",
    image: "/images/gallery/img-56.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1942.JPG"
  },
  {
    id: 57,
    title: "Junior Contestant #20 Radiant Spelling Performance",
    category: "Competitions",
    date: "Junior Category",
    location: "Championship Stage",
    description: "Radiant smile of young contestant #20 as she confidently spells her vocabulary challenge in front of the giant bee mascot.",
    tag: "Radiant Speller",
    image: "/images/gallery/img-57.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1940.JPG"
  },
  {
    id: 58,
    title: "Contestant #19 Focused Articulation on Stage",
    category: "Competitions",
    date: "Junior Finals",
    location: "Karnataka Spell Bee Stage",
    description: "Young speller #19 delivering his spelling with steady focus in front of the animated mascot backdrop.",
    tag: "Junior Speller",
    image: "/images/gallery/img-58.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1936.JPG"
  },
  {
    id: 59,
    title: "Contestant #17 Vocabulary Challenge",
    category: "Competitions",
    date: "Junior Finals",
    location: "Karnataka Spell Bee Arena",
    description: "Harvest International School finalist #17 carefully listening to the pronouncer's word origin clue and delivering his spelling.",
    tag: "Vocabulary Challenge",
    image: "/images/gallery/img-59.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1927.JPG"
  },
  {
    id: 60,
    title: "Official Master of Ceremonies at the Podium",
    category: "Grand Finale",
    date: "Stage Session",
    location: "Ceremonial Podium",
    description: "The official host guiding participants through complex word definitions and phonetics from the stage podium.",
    tag: "Stage Host",
    image: "/images/gallery/img-60.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1926.JPG"
  },
  {
    id: 61,
    title: "Contestant #16 Poised Stage Presentation",
    category: "Competitions",
    date: "Junior Category",
    location: "Main Stage Screen",
    description: "Harvest International School speller #16 showing remarkable confidence and clarity while spelling her word on stage.",
    tag: "Poised Speller",
    image: "/images/gallery/img-61.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1924.JPG"
  },
  {
    id: 62,
    title: "Contestant #14 Precision Spelling on Stage",
    category: "Competitions",
    date: "Junior Round",
    location: "Championship Stage",
    description: "School speller #14 standing upright and focused at the microphone, demonstrating precision word knowledge.",
    tag: "Precision Spelling",
    image: "/images/gallery/img-62.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1919.JPG"
  },
  {
    id: 63,
    title: "Season-2 Stage Round: Contestant #12 Live Challenge",
    category: "Competitions",
    date: "Stage Round",
    location: "Karnataka Spell Bee Main Stage",
    description: "Young speller #12 tackling his stage word under the Karnataka Spell Bee Season-2 banner with the pronouncer overseeing.",
    tag: "Season-2 Stage",
    image: "/images/gallery/img-63.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1913.JPG"
  },
  {
    id: 65,
    title: "Hillrock NPS Speller Confident Stage Performance",
    category: "Competitions",
    date: "Junior Finals",
    location: "Karnataka Spell Bee Arena",
    description: "Hillrock National Public School finalist holding the microphone with both hands, enunciating syllables clearly on stage.",
    tag: "Hillrock NPS Speller",
    image: "/images/gallery/img-65.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1910.JPG"
  },
  {
    id: 66,
    title: "Contestant #9 Freedom International School Showcase",
    category: "Competitions",
    date: "Junior Finals",
    location: "Main Stage Screen",
    description: "Young speller #9 from Freedom International School delivering his word with bright enthusiasm.",
    tag: "Freedom International",
    image: "/images/gallery/img-66.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1908.JPG"
  },
  {
    id: 67,
    title: "Contestant Confidence: Word Articulation Challenge",
    category: "Competitions",
    date: "Junior Finals",
    location: "Karnataka Spell Bee Stage",
    description: "Young girl finalist delivering each letter clearly into the microphone under the encouraging gaze of the judges.",
    tag: "Stage Confidence",
    image: "/images/gallery/img-67.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1905.JPG"
  },
  {
    id: 68,
    title: "Speller Camaraderie: Finalists Clapping on Stage",
    category: "Competitions",
    date: "Junior Finals",
    location: "Championship Stage",
    description: "Heartwarming sportsmanship as fellow contestants applaud and cheer each other on during the live buzzer round.",
    tag: "Sportsmanship",
    image: "/images/gallery/img-68.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1900.JPG"
  },
  {
    id: 69,
    title: "Contestant #6 Precision Spelling Performance",
    category: "Competitions",
    date: "Junior Category",
    location: "Main Stage Screen",
    description: "Young contestant #6 confidently reciting letters against the colorful SpellBee Universe mascot screen.",
    tag: "Precision Spelling",
    image: "/images/gallery/img-69.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1898.JPG"
  },
  {
    id: 70,
    title: "Contestant #5 Stage Challenge at the Podium",
    category: "Competitions",
    date: "Junior Category",
    location: "Karnataka Spell Bee Arena",
    description: "Young speller #5 focused on the pronouncer's question, delivering his answer calmly under the spotlight.",
    tag: "Junior Finalist",
    image: "/images/gallery/img-70.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1895.JPG"
  },
  {
    id: 72,
    title: "Junior Finalists Awaiting the Countdown Clock",
    category: "Competitions",
    date: "Junior Category",
    location: "Stage Seating Area",
    description: "Row of young finalists in school uniforms intently observing the competition rounds as their turns approach.",
    tag: "Finalists Row",
    image: "/images/gallery/img-72.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1892.JPG"
  },
  {
    id: 73,
    title: "Contestant #3 Confident Stage Presentation",
    category: "Competitions",
    date: "Junior Category",
    location: "Karnataka Spell Bee Stage",
    description: "Young contestant #3 delivering his spelling challenge with composed confidence in front of the colorful mascot backdrop.",
    tag: "Junior Speller #3",
    image: "/images/gallery/img-73.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1890.JPG"
  },
  {
    id: 74,
    title: "Contestant #1 Bethany High School Presentation",
    category: "Competitions",
    date: "Junior Finals",
    location: "Karnataka Spell Bee Stage",
    description: "Contestant #1 from Bethany High School opening the junior spelling round with poise and confidence.",
    tag: "Bethany High",
    image: "/images/gallery/img-74.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1879.JPG"
  },
  {
    id: 75,
    title: "Junior Category Finalists Stage Seating",
    category: "Competitions",
    date: "Junior Finals",
    location: "Karnataka Spell Bee Stage",
    description: "Full row of junior spellers from across Karnataka schools seated on stage waiting for their turns.",
    tag: "Junior Lineup",
    image: "/images/gallery/img-75.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1875.JPG"
  },
  {
    id: 77,
    title: "Spell Champ In Your School: Proud Certificate Holder",
    category: "School Rounds",
    date: "District Round",
    location: "Registration & Honors Arena",
    description: "Young achiever holding her official Karnataka Spell Bee Certificate of Participation beside the star champion trophy.",
    tag: "School Champion",
    image: "/images/gallery/img-77.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1808.JPG"
  },
  {
    id: 80,
    title: "Speller Focus: Portrait of Determination",
    category: "School Rounds",
    date: "State Championship",
    location: "Main Arena",
    description: "Young participant wearing his school uniform lanyard, showcasing the quiet determination of a champion speller.",
    tag: "Speller Portrait",
    image: "/images/gallery/img-80.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1797.JPG"
  },
  {
    id: 81,
    title: "Double Celebration: Proud Spellers with Certificates",
    category: "School Rounds",
    date: "State Championship",
    location: "Auditorium Lobby",
    description: "Two enthusiastic schoolmates beaming with joy as they showcase their Karnataka Spell Bee certificates together.",
    tag: "Double Celebration",
    image: "/images/gallery/img-81.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1788.JPG"
  },
  {
    id: 83,
    title: "Vocabulary Revision: Students Studying Together",
    category: "School Rounds",
    date: "Study Session",
    location: "Auditorium Corridors",
    description: "Two dedicated spellers revising word roots and definitions from their SpellBee prep books before entering the arena.",
    tag: "Study Buddies",
    image: "/images/gallery/img-83.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1742.JPG"
  },
  {
    id: 84,
    title: "Cheerful Spirit: Student In The Auditorium",
    category: "School Rounds",
    date: "Championship Day",
    location: "Auditorium Gallery",
    description: "A cheerful young speller with braided hair enjoying the vibrant energy of the state spelling championship.",
    tag: "Student Smile",
    image: "/images/gallery/img-84.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1741.JPG"
  },
  {
    id: 85,
    title: "Excited Participant: Waiting for Results",
    category: "School Rounds",
    date: "State Championship",
    location: "Auditorium Seating",
    description: "Enthusiastic young girl speller eagerly watching stage announcements alongside her school peers.",
    tag: "Event Excitement",
    image: "/images/gallery/img-85.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1738.JPG"
  },
  {
    id: 86,
    title: "GVN School Speller: Little Achiever",
    category: "School Rounds",
    date: "Junior Category",
    location: "Auditorium Gallery",
    description: "Youngest speller from GVN School in uniform pigtails, representing her school with utmost pride.",
    tag: "Little Achiever",
    image: "/images/gallery/img-86.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1736.JPG"
  },

  {
    id: 89,
    title: "GVN Primary Speller: Quiet Focus",
    category: "School Rounds",
    date: "Junior Category",
    location: "Auditorium Hall",
    description: "Youngest participant from GVN School calmly observing the stage proceedings with quiet confidence.",
    tag: "Quiet Focus",
    image: "/images/gallery/img-89.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1730.JPG"
  },
  {
    id: 90,
    title: "Bethany High Speller: Joyful Smile",
    category: "School Rounds",
    date: "Junior Finals",
    location: "Auditorium Seating",
    description: "Bethany High School student beaming with happiness in the auditorium audience gallery.",
    tag: "Joyful Smile",
    image: "/images/gallery/img-90.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1728.JPG"
  },
  {
    id: 91,
    title: "Bethany Institutions Spellers Watching the Stage",
    category: "School Rounds",
    date: "Championship Day",
    location: "Main Auditorium",
    description: "Bethany Institutions school delegation seated together, following each round of competition with rapt attention.",
    tag: "Bethany Delegation",
    image: "/images/gallery/img-91.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1688.JPG"
  },
  {
    id: 92,
    title: "Oakridge International School Contingent on Stage",
    category: "Competitions",
    date: "Junior Round",
    location: "Stage Arena",
    description: "Team of bright young spellers from Oakridge International School standing proudly on stage in their team uniforms.",
    tag: "Oakridge International",
    image: "/images/gallery/img-92.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1683.JPG"
  },
  {
    id: 93,
    title: "Keynote Address: Dignitary Inspiring Young Spellers",
    category: "Grand Finale",
    date: "Grand Finale",
    location: "Official Podium",
    description: "Distinguished guest delivering an inspiring address on the power of vocabulary and lifelong learning.",
    tag: "Keynote Address",
    image: "/images/gallery/img-93.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1682.JPG"
  },
  {
    id: 94,
    title: "Official Address at V Best Educare Forum",
    category: "Grand Finale",
    date: "Opening Ceremony",
    location: "Ceremonial Podium",
    description: "Guest of honor sharing words of wisdom and encouragement to students, parents, and educators.",
    tag: "Guest of Honor",
    image: "/images/gallery/img-94.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1679.JPG"
  },
  {
    id: 95,
    title: "Morning Arrival: School Contingent Entering Venue",
    category: "School Rounds",
    date: "Registration Hour",
    location: "Arena Entrance",
    description: "Excited school students in blue uniforms queued up in an orderly line as they arrive for the championship.",
    tag: "Morning Arrival",
    image: "/images/gallery/img-95.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1678.JPG"
  },
  {
    id: 96,
    title: "Dignitary Address from the Main Podium",
    category: "Grand Finale",
    date: "Inauguration",
    location: "Stage Podium",
    description: "Leadership address highlighting the mission of SpellBee Universe to empower vocabulary excellence statewide.",
    tag: "Leadership Speech",
    image: "/images/gallery/img-96.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1660.JPG"
  },
  {
    id: 97,
    title: "Auditorium Moments: Friendship & Vocabulary Sharing",
    category: "School Rounds",
    date: "Auditorium Session",
    location: "Main Auditorium",
    description: "Three joyful schoolmates sharing laughs and word tips while awaiting the announcement of the next round.",
    tag: "Speller Friendship",
    image: "/images/gallery/img-97.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1614.JPG"
  },
  {
    id: 98,
    title: "Bright Smile: Young Speller in the Auditorium",
    category: "School Rounds",
    date: "Auditorium Session",
    location: "Auditorium Seating",
    description: "Young speller smiling with quiet confidence and excitement from the auditorium seats as the championship proceeds.",
    tag: "Auditorium Smiles",
    image: "/images/gallery/img-98.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1596.JPG"
  },
  {
    id: 99,
    title: "Word Puzzle Prep: Finalists Reviewing Answer Keys",
    category: "Competitions",
    date: "Finals Preparation",
    location: "Participant Lounge",
    description: "Two dedicated schoolgirls studying crossword puzzle answer keys together to sharpen vocabulary before the round.",
    tag: "Study Prep",
    image: "/images/gallery/img-99.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1595.JPG"
  },
  {
    id: 100,
    title: "Official Handbook: Karnataka Spell Bee Contender",
    category: "Competitions",
    date: "Championship Round",
    location: "Participant Seating",
    description: "Contestant proudly holding her official yellow Karnataka Spell Bee handbook, reviewing word lists before stepping onto stage.",
    tag: "Official Handbook",
    image: "/images/gallery/img-100.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1585.JPG"
  },
  {
    id: 101,
    title: "Focused Junior Speller: Rapt Attention",
    category: "School Rounds",
    date: "Junior Category",
    location: "Auditorium Seating",
    description: "Young primary category participant in school uniform listening intently to the ongoing spelling competition.",
    tag: "Junior Contender",
    image: "/images/gallery/img-101.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1556.JPG"
  },
  {
    id: 102,
    title: "Organizing Committee: Active Event Direction",
    category: "Grand Finale",
    date: "Behind the Scenes",
    location: "Coordination Desk",
    description: "Event coordinator providing active guidance and ensuring seamless round-by-round management for the championship.",
    tag: "Event Direction",
    image: "/images/gallery/img-102.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1553%20(2).JPG"
  },
  {
    id: 105,
    title: "Family Support: Parents Cheering from Audience",
    category: "Grand Finale",
    date: "Audience Gallery",
    location: "Main Hall",
    description: "Proud mothers and families sitting in the audience gallery, eagerly tracking their children's spelling rounds.",
    tag: "Family Support",
    image: "/images/gallery/img-105.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1547.JPG"
  },
  {
    id: 106,
    title: "Spell Bee Champion in the Making: Eager Focus",
    category: "Competitions",
    date: "Junior Category",
    location: "Auditorium Seating",
    description: "Young student peeking playfully behind her yellow Spell Bee guide while maintaining steady focus on the stage.",
    tag: "Eager Focus",
    image: "/images/gallery/img-106.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1543.JPG"
  },
  {
    id: 107,
    title: "Peer Practice: Word Review in the Auditorium",
    category: "Competitions",
    date: "Finals Preparation",
    location: "Auditorium Seating",
    description: "Two classmates testing each other on difficult vocabulary words with their study notebook before the buzzer round.",
    tag: "Peer Practice",
    image: "/images/gallery/img-107.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1541.JPG"
  },
  {
    id: 108,
    title: "Enthusiastic Audience: Junior Classmates Cheering",
    category: "School Rounds",
    date: "Audience Session",
    location: "Auditorium Seating",
    description: "A row of smiling schoolmates looking towards the stage with pure joy and excitement for their peers.",
    tag: "Classmate Cheer",
    image: "/images/gallery/img-108.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/059A1545.JPG"
  },
  {
    id: 110,
    title: "Championship Star Trophy: Proud Winner",
    category: "Award Ceremonies",
    date: "Award Ceremony",
    location: "Victory Stage",
    description: "Trophy winner standing tall on stage with her shining star trophy and champion medal around her neck.",
    tag: "Championship Trophy",
    image: "/images/gallery/img-110.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/9G6A8449%20copy.JPG"
  },
  {
    id: 111,
    title: "Junior Category Winner: Sweet Victory Smile",
    category: "Award Ceremonies",
    date: "Award Ceremony",
    location: "Victory Stage",
    description: "Junior champion holding her gleaming golden star trophy with pride and happiness in the spotlight.",
    tag: "Junior Winner",
    image: "/images/gallery/img-111.jpg",
    objectPosition: "top",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/9G6A8452%20copy.jpg"
  },
  {
    id: 112,
    title: "Senior Finale Champion: Trophy & Flower Bouquet",
    category: "Award Ceremonies",
    date: "Grand Finale",
    location: "Main Stage",
    description: "Senior speller in blazer holding her star trophy and victory flower bouquet in front of the Karnataka Spell Bee insignia.",
    tag: "Senior Champion",
    image: "/images/gallery/img-112.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/9G6A8459%20copy.jpg"
  },
  {
    id: 114,
    title: "Champions of Karnataka: Grand Victory Lineup",
    category: "Grand Finale",
    date: "Grand Finale",
    location: "Championship Arena",
    description: "Grand finale celebration with all category winners raising their star trophies high above their heads in joyous triumph.",
    tag: "Victory Celebration",
    image: "/images/gallery/img-114.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/9G6A8483%20copy.jpg"
  },
  {
    id: 115,
    title: "State Champion: Golden Star & Medal Glory",
    category: "Award Ceremonies",
    date: "Grand Finale",
    location: "Championship Stage",
    description: "Senior topper receiving statewide recognition with the coveted star trophy, medal, and celebratory flowers.",
    tag: "State Champion",
    image: "/images/gallery/img-115.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/9G6A8488%20copy.jpg"
  },
  {
    id: 116,
    title: "Double Trophy Triumph: Candor International Speller",
    category: "Award Ceremonies",
    date: "Grand Finale",
    location: "Victory Stage",
    description: "Candor International School speller beaming with excitement while raising two championship star trophies simultaneously.",
    tag: "Double Trophy",
    image: "/images/gallery/img-116.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/9G6A8493%20copy.jpg"
  },
  {
    id: 118,
    title: "Acharya Vidya Kula Winner: Pure Joy",
    category: "Award Ceremonies",
    date: "Junior Awards",
    location: "Victory Stage",
    description: "Young student from Acharya Vidya Kula radiating joy with her tall star trophy and vibrant floral bouquet.",
    tag: "Acharya Vidya Kula",
    image: "/images/gallery/img-118.jpg",
    originalUrl: "https://ik.imagekit.io/iq1cbg5ga/Spell%20Bee%20Universe/9G6A8499%20copy.jpg"
  }
];

const portraitImages = new Set([
  "/images/gallery/img-16.jpg",
  "/images/gallery/img-19.jpg",
  "/images/gallery/img-20.jpg",
  "/images/gallery/img-21.jpg",
  "/images/gallery/img-29.jpg",
  "/images/gallery/img-34.jpg",
  "/images/gallery/img-111.jpg",
]);

const categories = ["All Moments", "Grand Finale", "Competitions", "Award Ceremonies", "School Rounds"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Moments");
  const [activePhoto, setActivePhoto] = useState(null);

  const filteredPhotos = selectedCategory === "All Moments" 
    ? galleryPhotos 
    : galleryPhotos.filter(item => item.category === selectedCategory);

  return (
    <main className="min-h-screen bg-slate-50 font-sans overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative py-10 md:py-14 bg-gradient-to-b from-[#1a237e] via-[#151c6b] to-[#0f172a] text-white overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Camera className="w-4 h-4 text-amber-400" />
            Moments That Matter
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
            SpellBee Universe <span className="text-amber-400">Photo Gallery</span>
          </h1>

          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
            Explore memorable moments, triumphs, and highlights from our nationwide competitions, celebrations, and school workshops.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-3 sm:py-4 bg-white border-b border-gray-200 sticky top-[60px] sm:top-[68px] z-30 shadow-xs">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 justify-start md:justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                  selectedCategory === cat
                    ? "bg-[#1a237e] text-white shadow-md shadow-[#1a237e]/20 scale-105"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Showcase Section */}
      <section className="py-8 md:py-12 min-h-[420px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {filteredPhotos.length === 0 ? (
            /* Visitor-facing Clean Curated State */
            <div className="max-w-2xl mx-auto text-center py-12 px-6 bg-white rounded-3xl border border-slate-200/80 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-500 border border-amber-200/80 flex items-center justify-center mx-auto mb-4 shadow-xs">
                <ImageIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#1a237e] mb-2">
                {selectedCategory === "All Moments" 
                  ? "Event Highlights Coming Soon" 
                  : `Moments from "${selectedCategory}" Coming Soon`}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto mb-5 leading-relaxed">
                Photographs from our recent nationwide rounds and award ceremonies are currently being curated and will be showcased here shortly.
              </p>
              {selectedCategory !== "All Moments" && (
                <button
                  onClick={() => setSelectedCategory("All Moments")}
                  className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  View All Categories
                </button>
              )}
            </div>
          ) : (
            /* Photos Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {filteredPhotos.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => setActivePhoto(item)}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col"
                >
                  {/* Image Container - position at 15% from top to guarantee heads are never cut off */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      style={{ objectPosition: item.objectPosition || 'center 15%' }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                      <span className="text-white text-xs font-semibold flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full">
                        <Maximize2 className="w-3.5 h-3.5 text-amber-400" /> View Large
                      </span>
                    </div>

                    <span className="absolute top-3 left-3 bg-[#1a237e]/90 backdrop-blur-md text-amber-300 text-[11px] font-extrabold px-3 py-1 rounded-full shadow-xs">
                      {item.tag || item.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-amber-500" />
                          {item.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {item.location}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#1a237e] group-hover:text-amber-500 transition-colors mb-1.5 line-clamp-1">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="text-slate-500 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal (For viewing enlarged photo) - Responsive & viewport safe */}
      {activePhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in"
          onClick={() => setActivePhoto(null)}
        >
          {/* Always-visible top-right fixed close button */}
          <button
            onClick={() => setActivePhoto(null)}
            className="fixed top-3 right-3 sm:top-5 sm:right-5 z-60 bg-amber-400 hover:bg-amber-300 text-slate-900 p-2.5 sm:p-3 rounded-full shadow-2xl transition-all hover:scale-110 cursor-pointer font-bold flex items-center justify-center border-2 border-white/20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div 
            className="bg-white rounded-2xl sm:rounded-3xl max-w-3xl w-full max-h-[88vh] flex flex-col shadow-2xl relative overflow-hidden my-auto border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Container - fits nicely inside viewport */}
            <div className="relative bg-slate-950 flex items-center justify-center overflow-hidden flex-1 min-h-[200px] max-h-[52vh] sm:max-h-[58vh]">
              <img 
                src={activePhoto.image} 
                alt={activePhoto.title} 
                className="max-h-full w-auto max-w-full object-contain mx-auto select-none"
              />
            </div>

            {/* Content Details */}
            <div className="p-4 sm:p-6 bg-white shrink-0 overflow-y-auto max-h-[32vh] border-t border-slate-100">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-amber-100 text-amber-800 text-xs font-extrabold px-3 py-1 rounded-full">
                    {activePhoto.category}
                  </span>
                  <span className="text-slate-400 text-xs font-medium">
                    {activePhoto.date} • {activePhoto.location}
                  </span>
                </div>
                <button
                  onClick={() => setActivePhoto(null)}
                  className="sm:hidden text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full"
                >
                  Close
                </button>
              </div>
              <h2 className="text-lg sm:text-2xl font-black text-[#1a237e] mb-1.5">
                {activePhoto.title}
              </h2>
              {activePhoto.description && (
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {activePhoto.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="py-10 md:py-14 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 border-t border-amber-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1a237e] mb-4">
            Be A Part Of Our Next Unforgettable Event!
          </h2>
          <p className="text-slate-800 font-medium text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Give your child or students the opportunity to stand on the grand stage, discover the magic of words, and shine.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/register"
              className="px-8 py-3.5 rounded-full bg-[#1a237e] hover:bg-[#121858] text-white font-bold text-sm shadow-lg shadow-black/15 transition-transform transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              Register Now <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
            <Link
              href="/schools"
              className="px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#1a237e] font-bold text-sm shadow-md transition-transform transform hover:-translate-y-0.5"
            >
              Partner Your School
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
