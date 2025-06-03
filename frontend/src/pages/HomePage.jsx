import CoreFeatures from "../components/CoreFeatures";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import QualityFeatures from "../components/QualityFeatures";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <QualityFeatures />
      <CoreFeatures />
    </>
  );
}
