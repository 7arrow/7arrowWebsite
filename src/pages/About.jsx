import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import { useGlobalContext } from "../context";
import PageTitle from "../components/PageTitle";

function AboutPage() {
  const { updateAboutPage } = useGlobalContext();

  useEffect(() => {
    updateAboutPage();
  }, []);

    return (
      <div>
        <PageTitle title="Who We Are" />
      <HeroSection />
      </div>
    )
}

export default AboutPage;