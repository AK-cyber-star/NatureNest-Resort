import express from "express";
import { Booking } from "../model/Booking";
import { apiKeyMiddleware } from "../middlewares/apiKeyMiddleware";

const router = express.Router()

router.post("/", async (req, res) => {
    try {
        const booking = new Booking(req.body);
        await booking.save();
        res.status(201).json({ message: "Booking saved", booking});
    } catch (err: any) {
        console.error("Error saving booking: ", err.message);
        return res.status(400).json({ error: "Server error" })
    }
});

router.get("/", apiKeyMiddleware, async (req, res) => {
    try {
        const bookings = await Booking.find().sort({ createdAt: -1});
        res.json(bookings);
    } catch (err: any) {
        console.error("Error fetching bookings: ", err.message);
        res.status(500).json({ error: "Server error"})
    }
})

export default router;