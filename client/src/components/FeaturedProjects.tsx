import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import project1 from "@assets/stock_images/professional_busines_524a9de1.jpg";
import project2 from "@assets/stock_images/professional_busines_9928466c.jpg";
import project3 from "@assets/stock_images/professional_busines_c28d5997.jpg";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FeaturedProjects() {
  const projects = [
    {
      image: project1,
      company: "Global Tech Corporation",
      title: "Digital Transformation Initiative",
      description: "Led enterprise-wide digital transformation impacting 50,000+ employees across 30 countries. Delivered 6 months ahead of schedule with 25% cost savings.",
      budget: "$380M",
      timeline: "18 months",
      impact: "30% efficiency gain",
      featured: true,
      id: 1
    },
    {
      image: project2,
      company: "Fortune 100 Financial Services",
      title: "Crisis Response & Recovery Program",
      description: "Orchestrated rapid crisis response program during critical operational disruption. Restored services within 72 hours, preventing $2B in potential losses.",
      budget: "$150M",
      timeline: "6 months",
      impact: "99.9% uptime achieved",
      featured: false,
      id: 2
    },
    {
      image: project3,
      company: "International Manufacturing Leader",
      title: "Supply Chain Optimization",
      description: "Redesigned global supply chain operations across 12 manufacturing facilities. Reduced lead times by 40% and improved inventory turnover by 35%.",
      budget: "$300M",
      timeline: "12 months",
      impact: "$120M annual savings",
      featured: false,
      id: 3
    },
  ];

  return (
    <section id="projects" className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Featured Projects</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Transformative initiatives that have delivered measurable impact for global industry leaders
          </p>
        </div>

        <div className="grid gap-4 md:gap-6">
          {/* Featured large project */}
          <Card className="overflow-hidden hover-elevate group border shadow-lg" data-testid="card-project-0">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-48 sm:h-64 md:h-auto overflow-hidden">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Badge className="absolute top-3 left-3 md:top-4 md:left-4 bg-primary text-primary-foreground text-xs">
                  Featured
                </Badge>
              </div>
              <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                <div className="text-xs sm:text-sm text-muted-foreground mb-1.5 md:mb-2">{projects[0].company}</div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl mb-2 md:mb-3 leading-tight">{projects[0].title}</CardTitle>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">{projects[0].description}</p>
                <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Budget</div>
                    <div className="font-mono font-bold text-sm sm:text-base md:text-lg text-primary">{projects[0].budget}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Timeline</div>
                    <div className="font-mono font-bold text-sm sm:text-base md:text-lg">{projects[0].timeline}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Impact</div>
                    <div className="font-mono font-semibold text-xs sm:text-sm leading-tight">{projects[0].impact}</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Two smaller projects side by side */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {projects.slice(1).map((project) => (
              <Card key={project.id} className="overflow-hidden hover-elevate group border shadow-sm" data-testid={`card-project-${project.id}`}>
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="p-4 sm:p-5 pb-2 sm:pb-3">
                  <div className="text-xs text-muted-foreground mb-1 sm:mb-1.5">{project.company}</div>
                  <CardTitle className="text-base sm:text-lg leading-tight">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-5 pt-0">
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed line-clamp-3">{project.description}</p>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <div className="text-xs text-muted-foreground">Budget</div>
                      <div className="font-mono font-semibold text-xs sm:text-sm">{project.budget}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Timeline</div>
                      <div className="font-mono font-semibold text-xs sm:text-sm">{project.timeline}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Impact</div>
                      <div className="font-mono font-semibold text-xs leading-tight">{project.impact}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}