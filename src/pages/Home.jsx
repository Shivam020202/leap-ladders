import React from "react";
import HeroSection from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import BlogGrid from "../components/Blog";
import TestimonialsSection from "../components/Testimonials";
import TestimonialsMobile from "../components/TestimonialsMobile";
import PortfolioSection from "../components/Portfolio";
import OurImpact from "../components/OurImpact";
import ContactUs from "../components/ContactUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurImpact />
      <BlogGrid />
      <PortfolioSection />
      <ContactUs />
    </>
  );
}
