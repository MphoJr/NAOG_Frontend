import { useEffect, useState } from "react";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/events") // ✅ replace with production API URL
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch events");
        return res.json();
      })
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="p-6 bg-white rounded-lg shadow max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Upcoming Events
      </h2>

      {loading && (
        <p className="text-center text-gray-500">Loading events...</p>
      )}
      {error && <p className="text-center text-red-600">Error: {error}</p>}

      {!loading && !error && events.length === 0 && (
        <p className="text-center text-gray-600">No upcoming events found.</p>
      )}

      <ul className="space-y-4">
        {events.map((event) => (
          <li
            key={event.id}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <strong className="block text-lg sm:text-xl text-blue-700">
              {event.name}
            </strong>
            <span className="text-sm sm:text-base text-gray-600">
              {event.date}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
