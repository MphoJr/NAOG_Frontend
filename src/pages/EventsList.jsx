import axios from "axios";
import { useEffect, useState } from "react";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("http://localhost:3000/events"); // ✅ replace with production API URL
        setEvents(res.data);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };
    fetchEvents();
  }, []);

  return (
    <main className="w-full min-h-screen bg-gray-100 py-12 px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 text-gray-900">
        Upcoming Events
      </h2>

      {events.length === 0 ? (
        <p className="text-center text-gray-600">No events scheduled.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {events.map((event) => (
            <li
              key={event.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-blue-700 mb-2">
                {event.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-3">
                {event.description}
              </p>
              <small className="block text-gray-500">
                {new Date(event.date).toLocaleDateString()}
              </small>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
