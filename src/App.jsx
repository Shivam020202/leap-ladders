import React, { useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FloatingActions from "./components/FloatingActions";
import StoryPage from "./pages/OurStory";
import ServicesSection from "./pages/ServicePage";
import TestimonialsSection from "./pages/TestiminialsPage";
import BYOBSection from "./pages/ByobPage";
import BlogPage from "./pages/BlogPage";
import ThankYou from "./pages/ThankYou";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        setTimeout(() => {
          const element = document.getElementById(
            location.hash.replace("#", "")
          );
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-[#FFF8F3] text-slate-900">
      <Navbar />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/our-story" element={<StoryPage />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/testimonials" element={<TestimonialsSection />} />
          <Route path="/byob" element={<BYOBSection />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
