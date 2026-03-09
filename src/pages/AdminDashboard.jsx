import axios from "axios";
import { useState } from "react";

export default function AdminDashboard() {
  const [title, setTitle] = useState("");
  const [preacher, setPreacher] = useState("");
  const [content, setContent] = useState("");

  const handleUploadSermon = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.post(
      "http://localhost:3000/sermons",
      { title, preacher, content },
      { headers: { Authorization: `Bearer ${token}` } },
    );
    alert("Sermon uploaded!");
  };

  return (
    <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        value={preacher}
        onChange={(e) => setPreacher(e.target.value)}
        placeholder="Preacher"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      />
      <button onClick={handleUploadSermon}>Upload Sermon</button>
    </div>
  );
}
