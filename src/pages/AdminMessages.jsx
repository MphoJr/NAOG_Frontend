import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        // Get token from localStorage (after admin login)
        const token = localStorage.getItem("token");

        const res = await axios.get("http://localhost:3000/contact", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setMessages(res.data);
      } catch (err) {
        console.error("Error fetching messages:", err);
        setError("Failed to fetch messages. Make sure you are logged in.");
      }
    };

    fetchMessages();
  }, []);

  return (
    <main className="w-full min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-8 text-gray-900">
        Contact Messages
      </h1>

      {error && <p className="text-center text-red-600 mb-6">{error}</p>}

      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6">
        {messages.length === 0 ? (
          <p className="text-center text-gray-600">No messages yet.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {messages.map((msg) => (
              <li key={msg.id} className="py-4">
                <p className="font-semibold text-lg text-gray-900">
                  {msg.name}
                </p>
                <p className="text-sm text-gray-600">{msg.email}</p>
                <p className="mt-2 text-gray-800">{msg.message}</p>
                <p className="mt-1 text-xs text-gray-500">
                  {new Date(msg.createdAt).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
