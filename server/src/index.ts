import express from "express";
import mongoose from "mongoose";
import { env } from "./config/env";
import cors from "cors";
import helmet from "helmet";
import bookingsRoutes from "./routes/bookings";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors())
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
