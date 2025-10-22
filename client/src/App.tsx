import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import ProjectsPage from "@/pages/ProjectsPage";
import ServicesPage from "@/pages/ServicesPage";
import ServiceDetailPage from "@/pages/ServiceDetailPage";
import TestimonialsPage from "@/pages/TestimonialsPage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/not-found";
import LockPage from "@/pages/LockPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/testimonials" component={TestimonialsPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/services/:id" component={ServiceDetailPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [sessionToken, setSessionToken] = useState<string | null>(null);

  // Check for valid session on mount
  useEffect(() => {
    const token = sessionStorage.getItem('auth_session');
    if (token) {
      // Verify the session token is still valid
      fetch('/api/verify-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sessionToken: token }),
      })
        .then(res => res.json())
        .then(data => {
          if (data.valid) {
            setSessionToken(token);
            setIsUnlocked(true);
          } else {
            sessionStorage.removeItem('auth_session');
          }
        })
        .catch(() => {
          sessionStorage.removeItem('auth_session');
        });
    }
  }, []);

  // Inactivity timeout - 8 minutes
  useEffect(() => {
    if (!isUnlocked) return;

    let timeoutId: NodeJS.Timeout;
    const INACTIVITY_TIMEOUT = 8 * 60 * 1000; // 8 minutes in milliseconds

    const resetTimeout = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        // Lock the page after 8 minutes of inactivity
        sessionStorage.removeItem('auth_session');
        setSessionToken(null);
        setIsUnlocked(false);
      }, INACTIVITY_TIMEOUT);
    };

    // Events that count as user activity
    const events = ['mousedown', 'keydown', 'scroll', 'touchstart', 'mousemove'];

    events.forEach(event => {
      window.addEventListener(event, resetTimeout);
    });

    // Start the initial timeout
    resetTimeout();

    return () => {
      clearTimeout(timeoutId);
      events.forEach(event => {
        window.removeEventListener(event, resetTimeout);
      });
    };
  }, [isUnlocked]);

  const handleUnlock = (token: string) => {
    sessionStorage.setItem('auth_session', token);
    setSessionToken(token);
    setIsUnlocked(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          {isUnlocked ? <Router /> : <LockPage onUnlock={handleUnlock} />}
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;