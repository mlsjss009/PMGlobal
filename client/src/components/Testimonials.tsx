import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import testimonial1 from "@assets/stock_images/professional_busines_28fb5a4d.jpg";
import testimonial2 from "@assets/stock_images/professional_busines_a5191988.jpg";
import testimonial3 from "@assets/stock_images/professional_busines_cebdcb03.jpg";
import testimonial4 from "@assets/stock_images/professional_busines_c28d5997.jpg";
import testimonial5 from "@assets/stock_images/professional_busines_9928466c.jpg";
import testimonial6 from "@assets/stock_images/professional_busines_524a9de1.jpg";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Exceptional project manager, delivered ahead of schedule. Strategic vision is world-class.",
      name: "Sarah Johnson",
      role: "Chief Operating Officer",
      company: "Global Tech Corporation",
      image: testimonial1,
    },
    {
      quote: "When our operations faced a critical crisis, the rapid response and expert coordination prevented billions in losses. An invaluable partner in our most challenging times.",
      name: "Michael Chen",
      role: "VP of Operations",
      company: "Fortune 100 Financial Services",
      image: testimonial2,
    },
    {
      quote: "The supply chain optimization project exceeded all expectations. The combination of deep industry knowledge and innovative methodologies delivered $120M in annual savings.",
      name: "Emma Rodriguez",
      role: "SVP Supply Chain",
      company: "International Manufacturing Leader",
      image: testimonial3,
    },
    {
      quote: "Outstanding leadership in navigating complex stakeholder environments. The ability to align diverse teams across continents is remarkable.",
      name: "David Thompson",
      role: "Program Director",
      company: "Global Healthcare System",
      image: testimonial4,
    },
    {
      quote: "Brought a level of professionalism and strategic thinking that transformed our approach to project delivery. Results speak for themselves.",
      name: "Lisa Martinez",
      role: "Chief Digital Officer",
      company: "Leading Retail Chain",
      image: testimonial5,
    },
    {
      quote: "The Quick Wins methodology accelerated our critical infrastructure project by 40%. Exceptional value delivered with precision and excellence.",
      name: "James Wilson",
      role: "Executive Vice President",
      company: "Telecommunications Giant",
      image: testimonial6,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Client Testimonials</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Hear from leaders who have experienced transformative results
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-4 sm:p-6 md:p-10 shadow-lg border">
          <CardContent className="p-0">
            <Quote className="h-8 md:h-10 w-8 md:w-10 text-primary mb-4 md:mb-5" />
            <blockquote className="text-base sm:text-lg md:text-xl mb-5 md:mb-6 leading-relaxed">
              "{current.quote}"
            </blockquote>
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12 md:h-14 md:w-14">
                <AvatarImage src={current.image} alt={current.name} />
                <AvatarFallback>{current.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold text-sm md:text-base">{current.name}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{current.role}</div>
                <div className="text-xs text-muted-foreground">{current.company}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-center gap-2 md:gap-3 mt-5 md:mt-6">
          <Button
            variant="outline"
            size="icon"
            onClick={previous}
            className="h-11 w-11 shadow-sm"
            data-testid="button-testimonial-prev"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex gap-1.5">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-6" : "bg-muted w-1.5"
                }`}
                data-testid={`button-testimonial-dot-${index}`}
              />
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={next}
            className="h-11 w-11 shadow-sm"
            data-testid="button-testimonial-next"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
