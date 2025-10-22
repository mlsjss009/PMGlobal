
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { MessageSquare } from "lucide-react";
import backgroundImage from "@assets/lock-page-bg.png";

interface LockPageProps {
  onUnlock: (sessionToken: string) => void;
}

export default function LockPage({ onUnlock }: LockPageProps) {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/verify-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok && data.valid) {
        toast({
          title: "Access granted",
          description: "Welcome to the portfolio",
        });
        onUnlock(data.sessionToken);
      } else {
        toast({
          title: "Access denied",
          description: data.message || "Invalid or expired password",
          variant: "destructive",
        });
        setPassword("");
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to verify password. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: '130%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 w-full max-w-md mx-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            className="h-12 text-lg bg-white/95 backdrop-blur-sm"
            autoFocus
            autoComplete="current-password"
            data-testid="input-password"
          />
          <Button
            type="submit"
            className="w-full h-12 text-lg"
            disabled={isLoading || !password}
            data-testid="button-login"
          >
            {isLoading ? "Verifying..." : "Login"}
          </Button>
        </form>

    
      </div>

    
    </div>
  );
}
