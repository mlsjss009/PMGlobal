import { Navigation } from "@/components/Navigation";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { Footer } from "@/components/Footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Services />
        <Industries />
      </main>
      <Footer />
    </div>
  );
}
