import axios from "axios";
import { useState } from "react";

export default function UploadSermon() {
  const [form, setForm] = useState({
    title: "",
    preacher: "",
    date: "",
    content: "",
  });
  const [audio, setAudio] = useState(null);
  const [status, setStatus] = useState({
    loading: false,
    message: "",
    error: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", error: "" });

    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();

      // Append text fields
      Object.entries(form).forEach(([key, value]) =>
        formData.append(key, value),
      );

      // Append audio file
      if (audio) formData.append("audio", audio);

      const res = await axios.post("http://localhost:3000/sermons", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setStatus({
        loading: false,
        message: "Sermon uploaded successfully!",
        error: "",
      });
      setForm({ title: "", preacher: "", date: "", content: "" });
      setAudio(null);
    } catch (err) {
      console.error("Error uploading sermon:", err);
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
          Upload Sermon
        </h2>

        <form onSubmit={handleUpload} className="space-y-4">
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="preacher"
            value={form.preacher}
            onChange={handleChange}
            placeholder="Preacher"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Content"
            rows="5"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
          ></textarea>

          {/* File upload for MP3 */}
          <input
            type="file"
            accept="audio/mp3,audio/*"
            onChange={(e) => setAudio(e.target.files[0])}
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={status.loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
          >
            {status.loading ? "Uploading..." : "Upload Sermon"}
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
