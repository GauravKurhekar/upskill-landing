import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CourseContent from "@/components/CourseContent";
import Testimonials from "@/components/Testimonials";
import Instructor from "@/components/Instructor";
import VideoGallery from "@/components/VideoGallery";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <CourseContent />
      <Instructor />
      <VideoGallery />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
