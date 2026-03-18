import { useState } from "react";
import axios from "axios";

export default function UploadSermons() {
  const [sermonData, setSermonData] = useState({
    title: "",
    description: "",
    date: "",
    audio: null,
  });
  const [status, setStatus] = useState({
    loading: false,
    message: "",
    error: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "audio") {
      setSermonData({ ...sermonData, audio: files[0] });
    } else {
      setSermonData({ ...sermonData, [name]: value });
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", error: "" });

    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("title", sermonData.title);
      formData.append("description", sermonData.description);
      formData.append("date", sermonData.date);
      formData.append("audio", sermonData.audio);

      await axios.post("http://localhost:3000/sermons", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setStatus({
        loading: false,
        message: "Sermon uploaded successfully!",
        error: "",
      });
      setSermonData({ title: "", description: "", date: "", audio: null });
    } catch (err) {
      console.error("Error uploading sermon:", err);
      setStatus({
        loading: false,
        message: "",
        error: "Upload failed. Check backend logs.",
      });
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Upload Sermon
        </h1>

        <form onSubmit={handleUpload} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={sermonData.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
              placeholder="Sermon Title"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={sermonData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 h-24 focus:ring-2 focus:ring-green-500"
              placeholder="Sermon Description"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Date</label>
            <input
              type="date"
              name="date"
              value={sermonData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Audio File
            </label>
            <input
              type="file"
              name="audio"
              accept="audio/*"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={status.loading}
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-50"
          >
            {status.loading ? "Uploading..." : "Upload Sermon"}
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
