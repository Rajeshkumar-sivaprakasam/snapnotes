import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

neonConfig.fetchConnectionCache = true; //always reload connection
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error("Database URL is not defined!");
}

const sql = neon(process.env.DATABASE_URL ?? "");

export const db = drizzle(sql);
