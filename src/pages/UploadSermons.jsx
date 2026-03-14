import axios from "axios";
import { useState } from "react";

export default function UploadSermon() {
  const [title, setTitle] = useState("");
  const [preacher, setPreacher] = useState("");
  const [content, setContent] = useState("");

  const handleUpload = async () => {
    try {
      const token = localStorage.getItem("token"); // JWT stored after login
      const res = await axios.post(
        "http://localhost:3000/sermons",
        { title, preacher, content },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      alert("Sermon uploaded successfully!");
      console.log(res.data);
    } catch (err) {
      console.error("Error uploading sermon:", err);
      alert("Upload failed. Check console for details.");
    }
  };

  return (
    <div>
      <h2>Upload Sermon</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Preacher"
        value={preacher}
        onChange={(e) => setPreacher(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleUpload}>Upload Sermon</button>
    </div>
  );
}
