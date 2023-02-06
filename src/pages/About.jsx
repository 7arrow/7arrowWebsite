import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import { useGlobalContext } from "../context";

function AboutPage() {
  const { updateAboutPage } = useGlobalContext();

  useEffect(() => {
    updateAboutPage();
  }, []);

    return <HeroSection />
}

export default AboutPage;