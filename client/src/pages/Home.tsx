import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ClientLogos } from "@/components/ClientLogos";
import { About } from "@/components/About";
import { Statistics } from "@/components/Statistics";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <ClientLogos />
        <About />
        <Statistics />
        <FeaturedProjects />
        <Services />
        <Industries />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}