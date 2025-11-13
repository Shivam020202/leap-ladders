import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import StoryPage from "./pages/OurStory";
import ServicesSection from "./pages/ServicePage";
import TestimonialsSection from "./pages/TestiminialsPage";
import BYOBSection from "./pages/ByobPage";
import BlogPage from "./pages/BlogPage";

export default function App() {
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


        </Routes>
      </main>
      <Footer />
    </div>
  );
}
