
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

        <div className="mt-6 flex justify-center">
          <Button
            type="button"
            variant="outline"
            className="bg-white/95 backdrop-blur-sm hover:bg-white"
            onClick={() => setShowInstructions(true)}
            data-testid="button-get-code"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Get Access Code via Telegram
          </Button>
        </div>
      </div>

      <AlertDialog open={showInstructions} onOpenChange={setShowInstructions}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle>Get Your Access Code</AlertDialogTitle>
            <AlertDialogDescription className="space-y-4 text-left">
              <div>
                <p className="font-semibold mb-2">Follow these steps:</p>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Open Telegram and search for the portfolio bot</li>
                  <li>Send <code className="bg-muted px-1 py-0.5 rounded">/start</code> to initialize the bot</li>
                  <li>Send <code className="bg-muted px-1 py-0.5 rounded">/getpassword</code> to receive your access code</li>
                  <li>Enter the code on this page to access the portfolio</li>
                </ol>
              </div>
              <div className="bg-muted p-3 rounded-md text-sm">
                <p className="font-semibold mb-1">📌 Important:</p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Each code can only be used once</li>
                  <li>Codes expire after 24 hours</li>
                  <li>Request a new code anytime via Telegram</li>
                </ul>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction data-testid="button-close-instructions">Got it</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
