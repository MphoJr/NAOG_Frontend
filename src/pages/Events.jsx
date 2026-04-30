import { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export default function EventsUpload() {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    date: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    message: "",
    error: "",
  });

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", error: "" });

    try {
      const token = localStorage.getItem("token");
      await axios.post(`${API_URL}/events`, eventData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setStatus({
        loading: false,
        message: "Event uploaded successfully!",
        error: "",
      });
      setEventData({ title: "", description: "", date: "" });
    } catch (err) {
      console.error("Error uploading event:", err);
      setStatus({
        loading: false,
        message: "",
        error: "Upload failed. Check login/token.",
      });
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Upload Event
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={eventData.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Event Title"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={eventData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Event Description"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Date</label>
            <input
              type="date"
              name="date"
              value={eventData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={status.loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
          >
            {status.loading ? "Uploading..." : "Upload Event"}
          </button>
        </form>

        {status.message && (
          <p className="text-green-600 mt-4 text-center">{status.message}</p>
        )}
        {status.error && (
          <p className="text-red-600 mt-4 text-center">{status.error}</p>
        )}
      </div>
    </main>
  );
}
