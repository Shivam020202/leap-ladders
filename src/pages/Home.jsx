import React from "react";
import HeroSection from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import BlogGrid from "../components/Blog";
import TestimonialsSection from "../components/Testimonials";
import TestimonialsMobile from "../components/TestimonialsMobile";
import PortfolioSection from "../components/Portfolio";
import OurImpact from "../components/OurImpact";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <AboutUs /> */}
      <Services />
      <PortfolioSection />
      <OurImpact />
      <TestimonialsSection />
      <div className="sm:hidden">
        <TestimonialsMobile />
      </div>
      <BlogGrid />
    </>
  );
}
