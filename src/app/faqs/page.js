import Header from "@/components/Header";
import FAQHero from "@/components/FAQHero";
import FAQCategories from "@/components/FAQCategories";
import FAQAccordionSection from "@/components/FAQAccordionSection";
import JourneyCTA from "@/components/JourneyCTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Frequently Asked Questions | SpellBee Universe",
  description: "Questions? We've Got Answers. Find everything you need to know about SpellBee Universe, registration, competition rounds, preparation, and awards."
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Header />
      <FAQHero />
      <FAQCategories />
      <FAQAccordionSection />
      <JourneyCTA 
        title="Your SpellBee Journey Continues!" 
        description="Explore our resources, prepare for the competition and keep growing." 
      />
      <Footer />
    </main>
  );
}
