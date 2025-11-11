import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import StoryPage from "./pages/OurStory";
import ServicesSection from "./pages/ServicePage";

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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
