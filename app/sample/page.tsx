import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopNotificationBar from "@/components/TopNotificationBar";
import Features from "@/components/Features";
import CourseContent from "@/components/CourseContent";

export const metadata = {
  title: "Sample Page - UpSkill Academy",
  description: "Sample page with preserved components",
};

export default function SamplePage() {
  return (
    <main className="min-h-screen">
      <TopNotificationBar />
      <Navbar />
      
      {/* What Makes This Clarity Call Different? */}
      <Features />
      
      {/* What's Included (Bonuses & Privileges) */}
      <CourseContent />
      
      <Footer />
    </main>
  );
}
