import React, { useEffect, useState } from "react";
import axios from "axios";

function SermonsList() {
  const [sermons, setSermons] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSermons = async () => {
      try {
        const res = await axios.get("http://localhost:3000/sermons"); // no token needed
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
                <audio controls src={`http://localhost:3000${s.audioUrl}`} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SermonsList;
