import React from "react";
import HeroSection from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import BlogGrid from "../components/Blog";
import TestimonialsSection from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <AboutUs /> */}
      <Services />
      <TestimonialsSection />
      <BlogGrid />
    </>
  );
}
