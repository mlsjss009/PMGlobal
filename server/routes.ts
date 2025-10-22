
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import crypto from "crypto";

export async function registerRoutes(app: Express): Promise<Server> {
  // Generate a new password via Telegram
  app.post("/api/generate-password", async (req, res) => {
    try {
      const { telegramChatId } = req.body;

      if (!telegramChatId) {
        return res.status(400).json({ message: "Telegram chat ID is required" });
      }

      // Generate a random 8-character password
      const password = crypto.randomBytes(4).toString("hex");

      // Password expires in 24 hours
      const expiresAt = new Date();
      expiresAt.setHours(expiresAt.getHours() + 24);

      await storage.createPassword({
        password,
        telegramChatId,
        expiresAt,
      });

      res.json({
        password,
        expiresAt,
        message: "Password generated successfully",
      });
    } catch (error) {
      console.error("Error generating password:", error);
      res.status(500).json({ message: "Failed to generate password" });
    }
  });

  // Verify a password
  app.post("/api/verify-password", async (req, res) => {
    try {
      const { password } = req.body;

      if (!password) {
        return res.status(400).json({ message: "Password is required", valid: false });
      }

      const passwordRecord = await storage.getPasswordByValue(password);

      if (!passwordRecord) {
        return res.status(401).json({ message: "Invalid password", valid: false });
      }

      // Check if password has been used
      if (passwordRecord.used) {
        return res.status(401).json({ message: "Password has already been used", valid: false });
      }

      // Check if password has expired
      if (new Date() > new Date(passwordRecord.expiresAt)) {
        return res.status(401).json({ message: "Password has expired", valid: false });
      }

      // Mark password as used
      await storage.markPasswordAsUsed(passwordRecord.id);

      // Create a session token
      const sessionToken = crypto.randomBytes(32).toString("hex");
      await storage.createSession({
        token: sessionToken,
        passwordId: passwordRecord.id,
      });

      res.json({
        valid: true,
        sessionToken,
        message: "Password verified successfully",
      });
    } catch (error) {
      console.error("Error verifying password:", error);
      res.status(500).json({ message: "Failed to verify password", valid: false });
    }
  });

  // Verify a session token
  app.post("/api/verify-session", async (req, res) => {
    try {
      const { sessionToken } = req.body;

      if (!sessionToken) {
        return res.status(400).json({ message: "Session token is required", valid: false });
      }

      const session = await storage.getSessionByToken(sessionToken);

      if (!session) {
        return res.status(401).json({ message: "Invalid session", valid: false });
      }

      res.json({
        valid: true,
        message: "Session verified successfully",
      });
    } catch (error) {
      console.error("Error verifying session:", error);
      res.status(500).json({ message: "Failed to verify session", valid: false });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
