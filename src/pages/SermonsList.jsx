import { useEffect, useState } from "react";

function SermonsList() {
  const [sermons, setSermons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSermons = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/sermons"); // ✅ replace with production API URL
        if (!res.ok) throw new Error("Failed to fetch sermons");
        const data = await res.json();
        setSermons(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSermons();
  }, []);

  return (
    <main className="w-full min-h-screen bg-gray-100 py-12 px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 text-gray-900">
        All Sermons
      </h1>

      {loading && (
        <p className="text-center text-gray-500">Loading sermons...</p>
      )}
      {error && <p className="text-center text-red-600">Error: {error}</p>}
      {!loading && !error && sermons.length === 0 && (
        <p className="text-center text-gray-600">No sermons found.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {sermons.map((sermon) => (
          <div
            key={sermon.id}
            className="bg-white rounded-lg shadow-md p-6 space-y-3 hover:shadow-lg transition"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-blue-700">
              {sermon.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              <strong>Preacher:</strong> {sermon.preacher}
            </p>
            <p className="text-sm sm:text-base text-gray-700">
              <strong>Date:</strong>{" "}
              {new Date(sermon.date).toLocaleDateString()}
            </p>
            {sermon.duration && (
              <p className="text-sm sm:text-base text-gray-700">
                <strong>Duration:</strong> {sermon.duration} minutes
              </p>
            )}
            {sermon.tags && (
              <p className="text-sm sm:text-base text-gray-700">
                <strong>Tags:</strong> {sermon.tags}
              </p>
            )}
            {sermon.transcript && (
              <p className="text-sm sm:text-base text-gray-700">
                <strong>Transcript:</strong> {sermon.transcript}
              </p>
            )}
            {sermon.audioUrl && (
              <audio
                controls
                src={sermon.audioUrl}
                className="w-full mt-2"
                aria-label={`Audio sermon: ${sermon.title}`}
              ></audio>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}

export default SermonsList;
