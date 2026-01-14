import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Two Column Section: Journey + Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Journey Section */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Register for Your{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Data Engineering Journey
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of professionals who&apos;ve transformed their careers with UpSkill Academy. 
                Get personalized guidance from industry experts with 10+ years of experience.
              </p>
              
              {/* Key Benefits */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 text-3xl">🎯</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Personalized Guidance</h3>
                    <p className="text-gray-600">1:1 mentoring from Microsoft & Databricks certified experts</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 text-3xl">📚</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Comprehensive Curriculum</h3>
                    <p className="text-gray-600">Industry-aligned learning paths from basics to advanced</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 text-3xl">🚀</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Career Growth</h3>
                    <p className="text-gray-600">Real-world projects and job placement assistance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Registration Form */}
            <div>
              <RegistrationForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
