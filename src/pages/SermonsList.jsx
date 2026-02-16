import { useEffect, useState } from "react";

function SermonsList() {
  const [sermons, setSermons] = useState([]);

  useEffect(() => {
    const fetchSermons = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/sermons");
        const data = await res.json();
        console.log("Fetched sermons:", data); // ✅ Debug log
        setSermons(data);
      } catch (err) {
        console.error("Error fetching sermons:", err);
      }
    };
    fetchSermons();
  }, []);

  return (
    <div>
      <h1>All Sermons</h1>
      {sermons.length === 0 ? (
        <p>No sermons found.</p>
      ) : (
        sermons.map((sermon) => (
          <div key={sermon.id} style={{ marginBottom: "20px" }}>
            <h2>{sermon.title}</h2>
            <p>Preacher: {sermon.preacher}</p>
            <p>Date: {new Date(sermon.date).toLocaleDateString()}</p>
            {sermon.duration && <p>Duration: {sermon.duration} minutes</p>}
            {sermon.tags && <p>Tags: {sermon.tags}</p>}
            {sermon.transcript && <p>Transcript: {sermon.transcript}</p>}
            <audio controls src={sermon.audioUrl}></audio>
          </div>
        ))
      )}
    </div>
  );
}

export default SermonsList;
