import { useState } from "react";
import axios from "axios";

export default function UploadEvent() {
  const [form, setForm] = useState({
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
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", error: "" });

    try {
      const res = await axios.post("http://localhost:3000/events", form, {
        headers: { "Content-Type": "application/json" },
      });

      setStatus({
        loading: false,
        message: "Event created successfully!",
        error: "",
      });
      setForm({ title: "", description: "", date: "" });
      console.log(res.data);
    } catch (err) {
      console.error("Error uploading event:", err);
      setStatus({
        loading: false,
        message: "",
        error: "Upload failed. Please try again.",
      });
    }
  };

  return (
    <main className="w-full min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6">
          Upload Event
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Event Title"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Event Description"
            rows="4"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={status.loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
          >
            {status.loading ? "Uploading..." : "Upload Event"}
          </button>

          {status.message && (
            <p className="text-green-600 text-center font-medium">
              {status.message}
            </p>
          )}
          {status.error && (
            <p className="text-red-600 text-center font-medium">
              {status.error}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
