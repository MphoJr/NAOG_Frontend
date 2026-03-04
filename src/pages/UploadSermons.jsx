import { useState } from "react";

function UploadSermon() {
  const [form, setForm] = useState({
    title: "",
    preacher: "",
    date: "",
    duration: "",
    tags: "",
    transcript: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", error: "" });

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) =>
        formData.append(key, value),
      );
      if (audio) formData.append("audio", audio);

      const res = await fetch("http://localhost:3000/api/sermons/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Upload failed");

      setStatus({
        loading: false,
        message: data.message || "Upload complete",
        error: "",
      });
      setForm({
        title: "",
        preacher: "",
        date: "",
        duration: "",
        tags: "",
        transcript: "",
      });
      setAudio(null);
    } catch (err) {
      setStatus({ loading: false, message: "", error: err.message });
    }
  };

  return (
    <main className="w-full min-h-screen bg-gray-100 py-12 px-4 sm:px-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
        Upload Sermon
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-md space-y-4"
      >
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          required
          className="w-full border border-gray-300 rounded-lg p-3 text-sm sm:text-base"
        />
        <input
          name="preacher"
          value={form.preacher}
          onChange={handleChange}
          placeholder="Preacher"
          required
          className="w-full border border-gray-300 rounded-lg p-3 text-sm sm:text-base"
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-3 text-sm sm:text-base"
        />
        <input
          type="number"
          name="duration"
          value={form.duration}
          onChange={handleChange}
          placeholder="Duration (minutes)"
          className="w-full border border-gray-300 rounded-lg p-3 text-sm sm:text-base"
        />
        <input
          name="tags"
          value={form.tags}
          onChange={handleChange}
          placeholder="Tags (comma separated)"
          className="w-full border border-gray-300 rounded-lg p-3 text-sm sm:text-base"
        />
        <textarea
          name="transcript"
          value={form.transcript}
          onChange={handleChange}
          placeholder="Transcript"
          rows="5"
          className="w-full border border-gray-300 rounded-lg p-3 text-sm sm:text-base"
        ></textarea>
        <input
          type="file"
          accept="audio/*"
          onChange={(e) => setAudio(e.target.files[0])}
          required
          className="w-full border border-gray-300 rounded-lg p-3 text-sm sm:text-base"
        />

        <button
          type="submit"
          disabled={status.loading}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-blue-700 disabled:opacity-50"
        >
          {status.loading ? "Uploading..." : "Upload"}
        </button>

        {status.message && (
          <p className="text-green-600 text-center font-medium">
            {status.message}
          </p>
        )}
        {status.error && (
          <p className="text-red-600 text-center font-medium">{status.error}</p>
        )}
      </form>
    </main>
  );
}

export default UploadSermon;
