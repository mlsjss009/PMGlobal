import { Building2, Cpu, Factory, Heart, Landmark, Plane, ShoppingBag, Smartphone } from "lucide-react";

export function Industries() {
  const industries = [
    { icon: Smartphone, name: "Technology & Software" },
    { icon: Landmark, name: "Financial Services" },
    { icon: Heart, name: "Healthcare" },
    { icon: Factory, name: "Manufacturing" },
    { icon: Cpu, name: "Telecommunications" },
    { icon: ShoppingBag, name: "Retail & E-commerce" },
    { icon: Plane, name: "Transportation" },
    { icon: Building2, name: "Construction" },
  ];

  return (
    <section id="industries" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Industry Expertise
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Deep domain knowledge across multiple sectors, enabling rapid value delivery
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 md:gap-3 p-4 md:p-5 rounded-lg border bg-card hover-elevate transition-all group shadow-sm"
              data-testid={`industry-${industry.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="p-2.5 md:p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <industry.icon className="h-5 md:h-6 w-5 md:w-6 text-primary" />
              </div>
              <span className="text-xs text-center font-medium leading-tight">
                {industry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
