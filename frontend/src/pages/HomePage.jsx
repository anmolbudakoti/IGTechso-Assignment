import CoreFeatures from "../components/CoreFeatures";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import Navbar from "../components/Navbar";
import PopularCourses from "../components/PopularCourses";
import QualityFeatures from "../components/QualityFeatures";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <QualityFeatures />
      <CoreFeatures />
      <PopularCourses />
      <HowItWorks />
    </>
  );
}
