import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minlength: [2, "Name must be at least 2 characters"],
        maxlength: [50, "Name must be at most 50 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, "Please fill a vaild email address"]
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        trim: true,
        match: [/^\+?[0-9\s\-()]{7,15}$/, "Please fill a valid phone number."]
    },
    guests: {
        type: Number,
        required: [true, "Number of guests is required"],
        min: [1, "At least 1 guest is required"],
        max: [20, "Maximum 20 guests allowed"],
    },
    accommodationType: {
        type: String,
        required: [true, "Accommodation type is required"],
        enum: ["Standard Room", "Deluxe Room", "Villa"],
    },
    startDate: {
        type: Date,
        required: [true, "Start date is required"],
    },
    endDate: {
        type: Date,
        required: [true, "End date is required"],
        validate: {
            validator: function (value: Date) {
                return value >= this.startDate;
            }
        }
    },
    status: {
        type: String,
        enum: ["pending", "confirmed", "cancelled"],
        default: "pending",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

export const Booking = mongoose.models.Booking || mongoose.model("Booking", BookingSchema);