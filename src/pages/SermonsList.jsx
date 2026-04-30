import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

function SermonsList() {
  const [sermons, setSermons] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSermons = async () => {
      try {
        const res = await axios.get(`${API_URL}/sermons`); // no token needed
        setSermons(res.data);
      } catch (err) {
        console.error("Error fetching sermons:", err);
        setError("Failed to fetch sermons");
      }
    };

    fetchSermons();
  }, []);

  return (
    <div>
      <h2>Sermons</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {sermons.map((s) => (
          <li key={s.id}>
            <strong>{s.title}</strong> — {s.preacher} (
            {new Date(s.date).toLocaleDateString()})
            {s.audioUrl && (
              <div>
                <audio controls src={`${API_URL}${s.audioUrl}`} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SermonsList;
