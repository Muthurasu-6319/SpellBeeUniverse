import Header from "@/components/Header";
import AboutHero from "@/components/AboutHero";
import OurStory from "@/components/OurStory";
import WhatWeBelieve from "@/components/WhatWeBelieve";
import Team from "@/components/Team";
import OurJourney from "@/components/OurJourney";
import PreviousEvents from "@/components/PreviousEvents";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Header />
      <AboutHero />
      <OurStory />
      <WhatWeBelieve />
      <Team />
      <OurJourney />
      <PreviousEvents />
      <Footer />
    </main>
  );
}
