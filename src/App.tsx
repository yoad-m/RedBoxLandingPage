import { Hero } from "./components/Hero";
import { ProcessSteps } from "./components/ProcessSteps";
import { Features } from "./components/Features";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Hero />
      <ProcessSteps />
      <Features />
      <CTASection />
      <Footer />
    </div>
  );
}
