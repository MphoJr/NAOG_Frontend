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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, value));
    formData.append("audio", audio);

    const res = await fetch("http://localhost:3000/api/sermons/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    alert(data.message || "Upload complete");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Upload Sermon</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <input
          name="preacher"
          value={form.preacher}
          onChange={handleChange}
          placeholder="Preacher"
          required
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="duration"
          value={form.duration}
          onChange={handleChange}
          placeholder="Duration (minutes)"
        />
        <input
          name="tags"
          value={form.tags}
          onChange={handleChange}
          placeholder="Tags (comma separated)"
        />
        <textarea
          name="transcript"
          value={form.transcript}
          onChange={handleChange}
          placeholder="Transcript"
        ></textarea>
        <input
          type="file"
          accept="audio/*"
          onChange={(e) => setAudio(e.target.files[0])}
          required
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default UploadSermon;
