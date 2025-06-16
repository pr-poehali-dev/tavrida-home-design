import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import PromoSection from "@/components/PromoSection";
import ProjectsMap from "@/components/ProjectsMap";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedProjects />
      <PromoSection />
      <ProjectsMap />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Index;
