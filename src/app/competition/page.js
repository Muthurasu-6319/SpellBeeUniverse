import Header from "@/components/Header";
import CompetitionHero from "@/components/CompetitionHero";
import CompetitionCategories from "@/components/CompetitionCategories";
import CompetitionRounds from "@/components/CompetitionRounds";
import CompetitionFinaleStage from "@/components/CompetitionFinaleStage";
import CompetitionAwardsSection from "@/components/CompetitionAwardsSection";
import CompetitionRules from "@/components/CompetitionRules";
import JourneyCTA from "@/components/JourneyCTA";
import Footer from "@/components/Footer";

export default function CompetitionPage() {
  return (
    <main className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Header />
      <CompetitionHero />
      <CompetitionCategories />
      <CompetitionRounds />
      <CompetitionFinaleStage />
      <CompetitionAwardsSection />
      <CompetitionRules />
      <JourneyCTA 
        title="Ready to Compete?" 
        description="Register now and take the first step towards becoming a Spell Master!" 
      />
      <Footer />
    </main>
  );
}
