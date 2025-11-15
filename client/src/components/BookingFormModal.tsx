"use client";

import { FormEvent, useState } from "react";

type TypeForm = {
    name: string;
    email: string;
    phone: string
    guests: number
    accommodationType: string
    startDate: string
    endDate: string
}

export default function BookingFormModal({ isOpen, onClose }: {isOpen: boolean, onClose: () => void}) {
  const [form, setForm] = useState<TypeForm>({
    name: "",
    email: "",
    phone: "",
    guests: 1,
    accommodationType: "",
    startDate: "",
    endDate: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof TypeForm, string>>>({});

  const validate = () => {
    const newErrors: Partial<Record<keyof TypeForm, string>> = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s\-()]{7,15}$/.test(form.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!form.guests || form.guests < 1) {
      newErrors.guests = "Guests must be at least 1";
    }

    if (!form.accommodationType) {
      newErrors.accommodationType = "Please select accommodation type";
    }

    if (!form.startDate) {
      newErrors.startDate = "Start date is required";
    }

    if (!form.endDate) {
      newErrors.endDate = "End date is required";
    }

    if (form.startDate && form.endDate && form.endDate < form.startDate) {
      newErrors.endDate = "End date cannot be before start date";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined })); // clear error on change
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await fetch("http://localhost:8080/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert("Booking request submitted!");
        onClose();
      } else {
        alert("Failed to submit booking.");
      }
    } catch (error: unknown) {
          alert("Error submitting booking.");
          if (error instanceof Error) {
            console.log(error.message);
          } else {
            console.log("Unexpected error:", error);
          }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white text-black rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Book Your Stay</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <input
              type="number"
              name="guests"
              placeholder="Number of Guests"
              min={1}
              value={form.guests}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded ${
                errors.guests ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.guests && (
              <p className="text-red-600 text-sm mt-1">{errors.guests}</p>
            )}
          </div>

          <div>
            <select
              name="accommodationType"
              value={form.accommodationType}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded ${
                errors.accommodationType ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select Accommodation Type</option>
              <option value="Standard Room">Standard Room</option>
              <option value="Deluxe Room">Deluxe Room</option>
              <option value="Villa">Villa</option>
            </select>
            {errors.accommodationType && (
              <p className="text-red-600 text-sm mt-1">{errors.accommodationType}</p>
            )}
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <input
                type="date"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded ${
                  errors.startDate ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.startDate && (
                <p className="text-red-600 text-sm mt-1">{errors.startDate}</p>
              )}
            </div>
            <div className="w-1/2">
              <input
                type="date"
                name="endDate"
                value={form.endDate}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded ${
                  errors.endDate ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.endDate && (
                <p className="text-red-600 text-sm mt-1">{errors.endDate}</p>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-amber-600 text-white rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
