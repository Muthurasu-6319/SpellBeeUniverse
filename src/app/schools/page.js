import Header from "@/components/Header";
import SchoolsHero from "@/components/SchoolsHero";
import WhySchoolsParticipate from "@/components/WhySchoolsParticipate";
import HowItWorksForSchools from "@/components/HowItWorksForSchools";
import SchoolOfferingsAndPortal from "@/components/SchoolOfferingsAndPortal";
import SchoolPartnershipForm from "@/components/SchoolPartnershipForm";
import SchoolsWorkedWith from "@/components/SchoolsWorkedWith";
import SchoolsFAQ from "@/components/SchoolsFAQ";
import JourneyCTA from "@/components/JourneyCTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Bring SpellBee Universe to Your School | SpellBee Universe",
  description: "Give your students an engaging opportunity to strengthen language skills, experience competition and celebrate achievement."
};

export default function SchoolsPage() {
  return (
    <main className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Header />
      <SchoolsHero />
      <SchoolsWorkedWith />
      <WhySchoolsParticipate />
      <HowItWorksForSchools />
      <SchoolOfferingsAndPortal />
      <SchoolPartnershipForm />
      <SchoolsFAQ />
      <JourneyCTA 
        title="Ready to Bring SpellBee Universe to Your School?" 
        description="Give your students the opportunity to learn, compete and shine." 
      />
      <Footer />
    </main>
  );
}
