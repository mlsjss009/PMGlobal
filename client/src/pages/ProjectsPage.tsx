import { Navigation } from "@/components/Navigation";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Footer } from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <FeaturedProjects />
      </main>
      <Footer />
    </div>
  );
}
