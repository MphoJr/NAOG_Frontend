import { useNavigate } from "react-router-dom";
import {
  FaCalendarAlt,
  FaUpload,
  FaEnvelope,
  FaSignOutAlt,
  FaBookOpen,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({ sermons: 0, events: 0, messages: 0 });

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  // Fetch stats from backend
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");

        const [sermonsRes, eventsRes, messagesRes] = await Promise.all([
          axios.get("http://localhost:3000/sermons"),
          axios.get("http://localhost:3000/events", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get("http://localhost:3000/contact", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        setStats({
          sermons: sermonsRes.data.length,
          events: eventsRes.data.length,
          messages: messagesRes.data.length,
        });
      } catch (err) {
        console.error("Error fetching stats:", err);
      }
    };

    fetchStats();
  }, []);

  const actions = [
    {
      title: "Manage Events",
      description: "Create and manage upcoming church events.",
      icon: <FaCalendarAlt size={40} />,
      color: "bg-blue-600 hover:bg-blue-700",
      path: "/Events",
    },
    {
      title: "Upload Sermons",
      description: "Add new sermons with audio and details.",
      icon: <FaUpload size={40} />,
      color: "bg-green-600 hover:bg-green-700",
      path: "/Upload",
    },
    {
      title: "View Messages",
      description: "Read messages submitted via Contact Us.",
      icon: <FaEnvelope size={40} />,
      color: "bg-purple-600 hover:bg-purple-700",
      path: "/AdminMessages",
    },
    {
      title: "Logout",
      description: "Sign out of your admin account.",
      icon: <FaSignOutAlt size={40} />,
      color: "bg-red-600 hover:bg-red-700",
      action: handleLogout,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Admin Dashboard
        </h1>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FaBookOpen size={30} className="mx-auto text-green-600 mb-2" />
            <h2 className="text-xl font-bold">{stats.sermons}</h2>
            <p className="text-gray-600">Sermons</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FaCalendarAlt size={30} className="mx-auto text-blue-600 mb-2" />
            <h2 className="text-xl font-bold">{stats.events}</h2>
            <p className="text-gray-600">Events</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FaEnvelope size={30} className="mx-auto text-purple-600 mb-2" />
            <h2 className="text-xl font-bold">{stats.messages}</h2>
            <p className="text-gray-600">Messages</p>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {actions.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition transform hover:scale-105"
            >
              <div className="mb-4 text-gray-700">{item.icon}</div>
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <button
                onClick={() =>
                  item.action ? item.action() : navigate(item.path)
                }
                className={`${item.color} text-white px-6 py-2 rounded-lg font-semibold transition`}
              >
                {item.title}
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
