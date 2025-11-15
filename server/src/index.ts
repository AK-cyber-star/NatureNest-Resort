import express from "express";
import mongoose from "mongoose";
import { env } from "./config/env";
import cors from "cors";
import helmet from "helmet";
import bookingsRoutes from "./routes/bookings";

const app = express();
const PORT = 8080;

const allowedOrigins = [
    "https://nature-nest-resort.vercel.app/",
    "nature-nest-resort-git-main-aks-projects-6b464eb3.vercel.app",
    "nature-nest-resort-gxjzhar8b-aks-projects-6b464eb3.vercel.app"
]

const corsOptions = {
    origin: function (origin: any, cb: any) {
        if (!origin) return cb(null, true);
        if (allowedOrigins.indexOf(origin) != -1) {
            cb(null, true)
        } else {
            cb(new Error("Not allowed by CORS"))
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "x-api-key"],
    credentials: true,
}

app.use(express.json());
app.use(cors(corsOptions))
app.use(helmet())

async function connectDB () {
    try {
        await mongoose.connect(env.dbUrl);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error: ", error);
        process.exit(1);
    }
}

connectDB()

app.use("/bookings", bookingsRoutes);

app.listen(PORT, () => {
    console.log("Server running on port" + PORT);
});
