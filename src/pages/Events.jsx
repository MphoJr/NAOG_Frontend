import { useEffect, useState } from "react";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <section className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id} className="mb-2">
            <strong>{event.name}</strong> — {event.date}
          </li>
        ))}
      </ul>
    </section>
  );
}
