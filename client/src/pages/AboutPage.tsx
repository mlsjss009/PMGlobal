import { Navigation } from "@/components/Navigation";
import { About } from "@/components/About";
import { Statistics } from "@/components/Statistics";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <About />
        <Statistics />
      </main>
      <Footer />
    </div>
  );
}
