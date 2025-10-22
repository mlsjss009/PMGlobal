import { type User, type InsertUser, type Password, type InsertPassword } from "@shared/schema";
import { randomUUID } from "crypto";

export interface Session {
  id: string;
  token: string;
  passwordId: string;
  createdAt: Date;
}

export interface InsertSession {
  token: string;
  passwordId: string;
}

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createPassword(password: InsertPassword): Promise<Password>;
  getPasswordByValue(password: string): Promise<Password | undefined>;
  markPasswordAsUsed(id: string): Promise<void>;
  createSession(session: InsertSession): Promise<Session>;
  getSessionByToken(token: string): Promise<Session | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private passwords: Map<string, Password>;
  private sessions: Map<string, Session>;

  constructor() {
    this.users = new Map();
    this.passwords = new Map();
    this.sessions = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createPassword(insertPassword: InsertPassword): Promise<Password> {
    const id = randomUUID();
    const password: Password = {
      id,
      password: insertPassword.password,
      telegramChatId: insertPassword.telegramChatId,
      used: false,
      createdAt: new Date(),
      expiresAt: insertPassword.expiresAt,
    };
    this.passwords.set(id, password);
    return password;
  }

  async getPasswordByValue(passwordValue: string): Promise<Password | undefined> {
    return Array.from(this.passwords.values()).find(
      (pwd) => pwd.password === passwordValue,
    );
  }

  async markPasswordAsUsed(id: string): Promise<void> {
    const password = this.passwords.get(id);
    if (password) {
      password.used = true;
      this.passwords.set(id, password);
    }
  }

  async createSession(insertSession: InsertSession): Promise<Session> {
    const id = randomUUID();
    const session: Session = {
      id,
      token: insertSession.token,
      passwordId: insertSession.passwordId,
      createdAt: new Date(),
    };
    this.sessions.set(id, session);
    return session;
  }

  async getSessionByToken(token: string): Promise<Session | undefined> {
    return Array.from(this.sessions.values()).find(
      (session) => session.token === token,
    );
  }
}

export const storage = new MemStorage();
