import { sql } from "drizzle-orm";
import { pgTable, text, timestamp, boolean, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const passwords = pgTable("passwords", {
  id: text("id").primaryKey(),
  password: text("password").notNull(),
  telegramChatId: text("telegram_chat_id").notNull(),
  used: boolean("used").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  expiresAt: timestamp("expires_at").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const selectUserSchema = createSelectSchema(users);
export const insertPasswordSchema = createInsertSchema(passwords).omit({
  id: true,
  used: true,
  createdAt: true,
});
export const selectPasswordSchema = createSelectSchema(passwords);

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type Password = typeof passwords.$inferSelect;
export type InsertPassword = z.infer<typeof insertPasswordSchema>;