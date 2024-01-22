import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db } from "./db";

export const migrateDB = async () => {
  try {
    console.log("Starting migration...");
    await migrate(db, { migrationsFolder: "./drizzle" });
    console.log("Migration completed successfully...");
  } catch (error) {
    console.log("DB migration error:", error);
  }
};
