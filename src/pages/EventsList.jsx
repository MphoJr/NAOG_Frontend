import { useEffect, useState } from "react";
import axios from "axios";

export default function EventsList() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token = localStorage.getItem("token"); // ✅ get JWT
        const res = await axios.get("http://localhost:3000/events", {
          headers: { Authorization: `Bearer ${token}` }, // ✅ send token
        });
        setEvents(res.data);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Unauthorized or failed to fetch events.");
      }
    };

    fetchEvents();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Events List
        </h1>

        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

        <ul className="space-y-4">
          {events.map((event) => (
            <li
              key={event.id}
              className="border border-gray-300 rounded-lg p-4 hover:shadow-md transition"
            >
              <h2 className="text-lg font-semibold text-gray-700">
                {event.title}
              </h2>
              <p className="text-gray-600">{event.description}</p>
              <p className="text-sm text-gray-500">
                Date: {new Date(event.date).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
