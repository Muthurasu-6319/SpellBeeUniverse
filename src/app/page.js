import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import WhySpellbee from "@/components/WhySpellbee";
import ChooseCategory from "@/components/ChooseCategory";
import SpellBeeJourney from "@/components/SpellBeeJourney";
import HowItWorks from "@/components/HowItWorks";
import GrandFinale from "@/components/GrandFinale";
import WhyParents from "@/components/WhyParents";
import BringToSchool from "@/components/BringToSchool";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Header />
      <Hero />
      <TrustedBy />
      <Stats />
      <WhySpellbee />
      <HowItWorks />
      <ChooseCategory />
      <SpellBeeJourney />
      <GrandFinale />
      <WhyParents />
      <BringToSchool />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
