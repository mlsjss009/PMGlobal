import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Briefcase, GitBranch, AlertTriangle, Zap, ArrowRight } from "lucide-react";

export function Services() {
  const services = [
    {
      id: "strategic-project-management",
      icon: Briefcase,
      title: "Strategic Project Management",
      description: "End-to-end project leadership for complex, high-value initiatives. PMO setup, portfolio optimization, and governance frameworks.",
      link: "/services/strategic-project-management" // Added link for consistency with changes
    },
    {
      id: "digital-transformation",
      icon: GitBranch,
      title: "Digital Transformation",
      description: "Technology-enabled business transformation programs. Change management, agile adoption, and digital innovation strategies.",
      link: "/services/digital-transformation" // Added link for consistency with changes
    },
    {
      id: "crisis-management",
      icon: AlertTriangle,
      title: "Crisis Management & Recovery",
      description: "Rapid response programs for operational disruptions. Risk mitigation, business continuity, and crisis communication.",
      link: "/services/crisis-management" // Added link for consistency with changes
    },
    {
      id: "performance-acceleration",
      icon: Zap,
      title: "Performance Acceleration",
      description: "Quick Wins methodology to expedite critical initiatives. Process optimization, resource alignment, and rapid value delivery.",
      link: "/services/performance-acceleration" // Added link for consistency with changes
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Consulting Services
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive project management solutions tailored to your needs
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg md:text-xl">{service.title}</CardTitle>
                <CardDescription className="line-clamp-3">{service.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="link" className="p-0 group-hover:gap-3 transition-all" asChild>
                  <Link href={service.link} className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}