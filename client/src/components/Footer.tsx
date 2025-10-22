import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Twitter, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import profileImage from "@assets/profile-headshot.png";
import ceoImage from "@assets/ceo-headshot.png";
import coownerImage from "@assets/coowner-headshot.png";

export function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    toast({
      title: "Subscribed successfully!",
      description: "You'll receive our latest insights and updates.",
    });
    setEmail("");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-10">
          <div className="md:col-span-2">
            <div className="mb-3 md:mb-4">
              <h3 className="font-bold text-lg md:text-xl mb-1 md:mb-2">Mosaic Project Co.</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                Independent Project Management Consultant delivering transformative results for global organizations.
              </p>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0">
                  <img 
                    src={profileImage} 
                    alt="Professional consultant" 
                    className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover border-2 border-border"
                  />
                </div>
                <div className="flex-shrink-0">
                  <img 
                    src={ceoImage} 
                    alt="CEO" 
                    className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover border-2 border-border"
                  />
                </div>
                <div className="flex-shrink-0">
                  <img 
                    src={coownerImage} 
                    alt="Co-owner" 
                    className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover border-2 border-border"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="h-11 w-11" data-testid="link-twitter-footer">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-11 w-11" data-testid="link-email-footer">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-xs sm:text-sm uppercase tracking-wide mb-3 md:mb-4">Navigation</h3>
            <div className="space-y-1.5 md:space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-start px-0 min-h-[44px] font-normal text-sm"
                onClick={() => scrollToSection("about")}
                data-testid="link-about-footer"
              >
                About
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start px-0 min-h-[44px] font-normal text-sm"
                onClick={() => scrollToSection("projects")}
                data-testid="link-projects-footer"
              >
                Projects
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start px-0 min-h-[44px] font-normal text-sm"
                onClick={() => scrollToSection("services")}
                data-testid="link-services-footer"
              >
                Services
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start px-0 min-h-[44px] font-normal text-sm"
                onClick={() => scrollToSection("contact")}
                data-testid="link-contact-footer"
              >
                Contact
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-xs sm:text-sm uppercase tracking-wide mb-3 md:mb-4">Newsletter</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 md:mb-4 leading-relaxed">
              Get insights on project management excellence
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-8 md:h-9 text-xs sm:text-sm"
                data-testid="input-newsletter"
              />
              <Button type="submit" size="sm" className="w-full text-xs sm:text-sm" data-testid="button-newsletter-submit">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t pt-5 md:pt-6 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-3 text-xs text-muted-foreground text-center md:text-left">
          <p>
            © {new Date().getFullYear()} Mosaic Project Co. All rights reserved.
          </p>
          <p className="font-medium">
            PMP® | PMI-ACP® | Certified Project Management Professional
          </p>
        </div>
      </div>
    </footer>
  );
}
