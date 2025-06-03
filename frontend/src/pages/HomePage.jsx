import { useRef } from "react";
import CoreFeatures from "../components/CoreFeatures";
import ExploreTutorialsCTA from "../components/ExploreTutorialsCTA";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";
import FooterCTA from "../components/FooterCTA";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import Navbar from "../components/Navbar";
import PopularCourses from "../components/PopularCourses";
import PricingSection from "../components/PricingSection";
import QualityFeatures from "../components/QualityFeatures";

export default function HomePage() {
  const sectionRef = useRef(null);

  function scrollToSection() {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <Navbar />
      <HeroSection />
      <QualityFeatures />
      <CoreFeatures scrollToSection={scrollToSection} />
      <PopularCourses sectionRef={sectionRef} />
      <HowItWorks />
      <PricingSection />
      <ExploreTutorialsCTA />
      <FAQs />
      <FooterCTA />
      <Footer />
    </>
  );
}
