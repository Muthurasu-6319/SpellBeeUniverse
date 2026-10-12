import Header from "@/components/Header";
import ResourcesHero from "@/components/ResourcesHero";
import ResourceCategories from "@/components/ResourceCategories";
import FeaturedResources from "@/components/FeaturedResources";
import PracticeAndQuizZone from "@/components/PracticeAndQuizZone";
import ParentAndTeacherResources from "@/components/ParentAndTeacherResources";
import ResourceDownloadsBar from "@/components/ResourceDownloadsBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Learning Resources | SpellBee Universe",
  description: "Learn. Practise. Improve. Everything students, parents and teachers need to prepare for their SpellBee journey."
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Header />
      <ResourcesHero />
      <ResourceCategories />
      <FeaturedResources />
      <PracticeAndQuizZone />
      <ParentAndTeacherResources />
      <ResourceDownloadsBar />
      <Footer />
    </main>
  );
}
