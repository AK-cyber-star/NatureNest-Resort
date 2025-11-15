"use client"

import NotAuthorized from "@/src/components/NotAuthorized";
import { useEffect, useState } from "react";

type Booking = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  guests: number;
  accommodationType: string;
  startDate: string;
  endDate: string;
  status: string;
  createdAt: string;
};

export default function AdminBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [unauthorized, setUnauthorized] = useState<boolean>(false);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/bookings`, {
            headers: {
                "x-api-key": process.env.NEXT_PUBLIC_API_KEY || "",
            }
        });
        if (res.status == 401) {
            setUnauthorized(true);
            setLoading(false);
            return;
        }

        const data = await res.json();
        setBookings(data);
      } catch (err) {
        console.error("Failed to fetch bookings");
      } finally {
        setLoading(false);
      }
    }
    fetchBookings();
  }, []);
  
  if (unauthorized) return <NotAuthorized />

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Bookings Admin</h1>

      {loading ? (
        <p>Loading bookings...</p>
      ) : bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <table className="w-full text-left border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Phone</th>
              <th className="border border-gray-300 px-4 py-2">Guests</th>
              <th className="border border-gray-300 px-4 py-2">Accommodation</th>
              <th className="border border-gray-300 px-4 py-2">Start Date</th>
              <th className="border border-gray-300 px-4 py-2">End Date</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Created</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b._id}>
                <td className="border border-gray-300 px-4 py-2">{b.name}</td>
                <td className="border border-gray-300 px-4 py-2">{b.email}</td>
                <td className="border border-gray-300 px-4 py-2">{b.phone}</td>
                <td className="border border-gray-300 px-4 py-2">{b.guests}</td>
                <td className="border border-gray-300 px-4 py-2">{b.accommodationType}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(b.startDate).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(b.endDate).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 px-4 py-2">{b.status}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(b.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
