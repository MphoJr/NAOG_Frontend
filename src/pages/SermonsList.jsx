import axios from "axios";
import { useEffect, useState } from "react";

export default function SermonsList() {
  const [sermons, setSermons] = useState([]);

  useEffect(() => {
    const fetchSermons = async () => {
      try {
        const res = await axios.get("http://localhost:3000/sermons");
        setSermons(res.data);
      } catch (err) {
        console.error("Error fetching sermons:", err);
      }
    };
    fetchSermons();
  }, []);

  return (
    <div>
      <h2>Sermons</h2>
      {sermons.length === 0 ? (
        <p>No sermons available.</p>
      ) : (
        <ul>
          {sermons.map((sermon) => (
            <li key={sermon.id}>
              <h3>{sermon.title}</h3>
              <p>
                <strong>Preacher:</strong> {sermon.preacher}
              </p>
              <p>{sermon.content}</p>
              <small>{new Date(sermon.date).toLocaleDateString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
