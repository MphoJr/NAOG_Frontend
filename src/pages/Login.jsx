import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
export default function AdminLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState({
    loading: false,
    message: "",
    error: "",
  });
  const navigate = useNavigate(); // ✅ hook for navigation

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", error: "" });

    try {
      const res = await axios.post(`${API_URL}/admin/login`, form, {
        headers: { "Content-Type": "application/json" },
      });

      // Save token
      localStorage.setItem("token", res.data.token);

      setStatus({ loading: false, message: "Login successful!", error: "" });

      // ✅ Redirect to dashboard
      navigate("admin/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      setStatus({ loading: false, message: "", error: "Invalid credentials" });
    }
  };

  return (
    <main className="w-full min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6">
          Admin Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={status.loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
          >
            {status.loading ? "Logging in..." : "Login"}
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
