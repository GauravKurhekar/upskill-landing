import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhatSetsUsApart from "@/components/WhatSetsUsApart";
import Roadmap from "@/components/Roadmap";
import TechStackScroll from "@/components/TechStackScroll";
import PricingPlans from "@/components/PricingPlans";
import CourseContent from "@/components/CourseContent";
import Testimonials from "@/components/Testimonials";
import Instructor from "@/components/Instructor";
import VideoGallery from "@/components/VideoGallery";
import ContactCTA from "@/components/ContactCTA";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopNotificationBar from "@/components/TopNotificationBar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopNotificationBar />
      <Navbar />
      <Hero />
      <WhatSetsUsApart />
      <Roadmap />
      <TechStackScroll />
      <PricingPlans />
      <Features />
      <CourseContent />
      <Instructor />
      <VideoGallery />
      <ContactCTA />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
