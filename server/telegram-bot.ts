
import TelegramBot from "node-telegram-bot-api";
import { storage } from "./storage";
import crypto from "crypto";

let bot: TelegramBot | null = null;

export function initTelegramBot() {
  const token = process.env.TELEGRAM_BOT_TOKEN;

  if (!token) {
    console.log("TELEGRAM_BOT_TOKEN not set. Telegram bot disabled.");
    return;
  }

  bot = new TelegramBot(token, { polling: true });

  bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id;
    await bot!.sendMessage(
      chatId,
      "Welcome! Use /getpassword to receive a one-time access password for the portfolio."
    );
  });

  bot.onText(/\/getpassword/, async (msg) => {
    const chatId = msg.chat.id;

    try {
      // Generate a random 8-character password
      const password = crypto.randomBytes(4).toString("hex");

      // Password expires in 24 hours
      const expiresAt = new Date();
      expiresAt.setHours(expiresAt.getHours() + 24);

      await storage.createPassword({
        password,
        telegramChatId: chatId.toString(),
        expiresAt,
      });

      await bot!.sendMessage(
        chatId,
        `Your one-time password: \`${password}\`\n\n` +
          `This password will expire in 24 hours and can only be used once.\n` +
          `Keep it secure!`,
        { parse_mode: "Markdown" }
      );
    } catch (error) {
      console.error("Error generating password:", error);
      await bot!.sendMessage(
        chatId,
        "Sorry, there was an error generating your password. Please try again later."
      );
    }
  });

  console.log("Telegram bot started successfully");
}

export function getTelegramBot() {
  return bot;
}
