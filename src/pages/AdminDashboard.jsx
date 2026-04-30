import { useNavigate } from "react-router-dom";
import {
  FaCalendarAlt,
  FaUpload,
  FaEnvelope,
  FaSignOutAlt,
  FaBookOpen,
  FaTrash,
  FaEdit,
  FaUsers,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import InactivityHandler from "./inactivityHandler";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({ sermons: 0, events: 0, messages: 0 });
  const [recent, setRecent] = useState({
    sermons: [],
    events: [],
    messages: [],
  });
  <InactivityHandler />;
  const token = localStorage.getItem("token"); // ✅ define once here

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // Fetch stats + recent activity
  useEffect(() => {
    const fetchData = async () => {
      try {
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

        setRecent({
          sermons: sermonsRes.data.slice(0, 5),
          events: eventsRes.data.slice(0, 5),
          messages: messagesRes.data.slice(0, 5),
        });
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      }
    };

    fetchData();
  }, [token]);

  // Delete handlers
  const deleteSermon = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/sermons/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRecent((prev) => ({
        ...prev,
        sermons: prev.sermons.filter((s) => s.id !== id),
      }));
    } catch (err) {
      console.error("Error deleting sermon:", err);
    }
  };

  const deleteEvent = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/events/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRecent((prev) => ({
        ...prev,
        events: prev.events.filter((e) => e.id !== id),
      }));
    } catch (err) {
      console.error("Error deleting event:", err);
    }
  };

  const deleteMessage = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/contact/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRecent((prev) => ({
        ...prev,
        messages: prev.messages.filter((m) => m.id !== id),
      }));
    } catch (err) {
      console.error("Error deleting message:", err);
    }
  };

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
      title: "Manage Members",
      description: "Add and manage church membership records.",
      icon: <FaUsers size={40} />, // import FaUsers from react-icons/fa
      color: "bg-teal-600 hover:bg-teal-700",
      path: "/Members",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
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

        {/* Recent Activity Feed */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sermons */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-700">
                Latest Sermons
              </h3>
              <ul className="space-y-2">
                {recent.sermons.map((s) => (
                  <li
                    key={s.id}
                    className="flex justify-between items-center text-gray-700"
                  >
                    <span>
                      {s.title} — {new Date(s.date).toLocaleDateString()}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => navigate(`/EditSermon/${s.id}`)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => deleteSermon(s.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Events */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-blue-700">
                Latest Events
              </h3>
              <ul className="space-y-2">
                {recent.events.map((e) => (
                  <li
                    key={e.id}
                    className="flex justify-between items-center text-gray-700"
                  >
                    <span>
                      {e.title} — {new Date(e.date).toLocaleDateString()}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => navigate(`/EditEvent/${e.id}`)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => deleteEvent(e.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Messages */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-purple-700">
                Latest Messages
              </h3>
              <ul className="space-y-2">
                {recent.messages.map((m) => (
                  <li
                    key={m.id}
                    className="flex justify-between items-center text-gray-700"
                  >
                    <span>
                      {m.name}: {m.message.substring(0, 30)}...
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => navigate(`/ViewMessage/${m.id}`)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => deleteMessage(m.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
