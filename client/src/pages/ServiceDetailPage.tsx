
import { useParams, useLocation } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { serviceDetails, type ServiceId } from "@/../../shared/service-details";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function ServiceDetailPage() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const serviceId = params.id as ServiceId;
  const service = serviceDetails[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 md:px-8 py-20">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The service you're looking for doesn't exist.
          </p>
          <Button onClick={() => setLocation("/services")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-muted/20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <Button 
              variant="ghost" 
              onClick={() => setLocation("/services")}
              className="mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Button>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
              {service.subtitle}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <ReactMarkdown
                components={{
                  h2: ({ children }) => (
                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="space-y-2 mb-6">{children}</ul>
                  ),
                  li: ({ children }) => (
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{children}</span>
                    </li>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-foreground">
                      {children}
                    </strong>
                  ),
                }}
              >
                {service.content}
              </ReactMarkdown>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-muted/20">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <Card className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how {service.title.toLowerCase()} can help transform your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => setLocation("/contact")}>
                  Schedule a Consultation
                </Button>
                <Button size="lg" variant="outline" onClick={() => setLocation("/services")}>
                  View All Services
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
