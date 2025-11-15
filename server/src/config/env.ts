import { config } from "dotenv";

config();

type TypeEnv = {
    dbUrl: string;
    port: number; 
    apiKey: string;
} 

export const env: TypeEnv = {
    dbUrl: process.env.DB_URL || "",
    port: Number(process.env.PORT) || 8080,
    apiKey: process.env.API_KEY || ""
}