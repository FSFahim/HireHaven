import React from "react";
import CarouselComponent from "@/components/CarouselComponent";
import DisplayText from "@/components/DisplayText";
import DisplayButtons from "@/components/DisplayButtons";
import Banner from "@/components/Banner";
import DisplayCards from "@/components/DisplayCards";
import FAQs from "@/components/FAQs";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <DisplayText />
      <DisplayButtons />
      <CarouselComponent />
      <Banner />
      <DisplayCards />
      <FAQs />
    </main>
  );
};

export default LandingPage;
