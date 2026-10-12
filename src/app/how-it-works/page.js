import Header from "@/components/Header";
import HowItWorksHero from "@/components/HowItWorksHero";
import JourneyGlance from "@/components/JourneyGlance";
import RegistrationPrepare from "@/components/RegistrationPrepare";
import CompetitionStages from "@/components/CompetitionStages";
import JourneyCTA from "@/components/JourneyCTA";
import Footer from "@/components/Footer";

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Header />
      <HowItWorksHero />
      <JourneyGlance />
      <RegistrationPrepare />
      <CompetitionStages />
      <JourneyCTA />
      <Footer />
    </main>
  );
}
