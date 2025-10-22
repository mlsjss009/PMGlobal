import { Award, Globe, TrendingUp, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

export function About() {
  const highlights = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Delivered projects across 17+ countries on 5 continents",
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description: "PMP, PMI-ACP certified with multiple industry awards",
    },
    {
      icon: TrendingUp,
      title: "Results Driven",
      description: "Average 80% improvement in project delivery timelines",
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led cross-functional teams of 200+ professionals",
    },
  ];

  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-8 md:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              Expertise That Delivers
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              With over two decades of experience managing complex, high-stakes projects for the world's leading organizations, I bring a unique blend of strategic thinking, technical expertise, and proven methodologies to drive exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {highlights.slice(0, 2).map((item, index) => (
              <Card key={index} className="p-4 md:p-5 hover-elevate border shadow-sm bg-card" data-testid={`card-${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <item.icon className="h-6 md:h-8 w-6 md:w-8 text-primary mb-2 md:mb-3" />
                <h3 className="text-sm md:text-base font-semibold mb-1.5 md:mb-2 leading-tight">{item.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-snug">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-4xl mx-auto">
          {highlights.slice(2).map((item, index) => (
            <Card key={index + 2} className="p-4 md:p-5 hover-elevate border shadow-sm bg-card" data-testid={`card-${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <item.icon className="h-6 md:h-8 w-6 md:w-8 text-primary mb-2 md:mb-3" />
              <h3 className="text-sm md:text-base font-semibold mb-1.5 md:mb-2 leading-tight">{item.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-snug">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
