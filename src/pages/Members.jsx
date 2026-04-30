import { useState, useEffect } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export default function Members() {
  const [members, setMembers] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    surname: "",
    homeLanguage: "",
    gender: "",
    occupation: "",
    serviceArea: "",
    address: "",
    cell: "",
    maritalStatus: "",
    spouseSaved: false,
    familyMembers: [
      { name: "", relationship: "" },
      { name: "", relationship: "" },
      { name: "", relationship: "" },
      { name: "", relationship: "" },
      { name: "", relationship: "" },
      { name: "", relationship: "" },
    ],
    status: "active",
  });

  const token = localStorage.getItem("token");

  // Fetch members
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await axios.get(`${API_URL}/members`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMembers(res.data);
      } catch (err) {
        console.error("Error fetching members:", err);
      }
    };
    fetchMembers();
  }, [token]);

  // Handle form input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle family member input
  const handleFamilyChange = (index, field, value) => {
    const updated = [...formData.familyMembers];
    updated[index][field] = value;
    setFormData((prev) => ({ ...prev, familyMembers: updated }));
  };

  // Submit new member
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/members`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Member added successfully!");
    } catch (err) {
      console.error("Error adding member:", err);
    }
  };

  // Toggle status
  const toggleStatus = async (id, currentStatus) => {
    try {
      const newStatus = currentStatus === "active" ? "inactive" : "active";
      await axios.put(
        `${API_URL}/members/${id}/status`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      setMembers((prev) =>
        prev.map((m) => (m.id === id ? { ...m, status: newStatus } : m)),
      );
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Members</h1>

      {/* Add Member Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md mb-8"
      >
        <h2 className="text-xl font-semibold mb-4">Add New Member</h2>

        {/* Title */}
        <select
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        >
          <option value="">Select Title</option>
          <option value="Ps">Ps</option>
          <option value="Dr">Dr</option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
        </select>

        {/* Name & Surname */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        />
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          value={formData.surname}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        />

        {/* Home Language */}
        <input
          type="text"
          name="homeLanguage"
          placeholder="Home Language"
          value={formData.homeLanguage}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        />

        {/* Gender */}
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        {/* Occupation */}
        <input
          type="text"
          name="occupation"
          placeholder="Occupation"
          value={formData.occupation}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        />

        {/* Service Area */}
        <input
          type="text"
          name="serviceArea"
          placeholder="Area to Serve in Church"
          value={formData.serviceArea}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        />

        {/* Address */}
        <input
          type="text"
          name="address"
          placeholder="Physical Address"
          value={formData.address}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        />

        {/* Cell */}
        <input
          type="text"
          name="cell"
          placeholder="Cell Number"
          value={formData.cell}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        />

        {/* Marital Status */}
        <select
          name="maritalStatus"
          value={formData.maritalStatus}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        >
          <option value="">Select Marital Status</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
        </select>

        {/* Spouse Saved */}
        <label className="block mb-2">
          <input
            type="checkbox"
            name="spouseSaved"
            checked={formData.spouseSaved}
            onChange={handleChange}
          />{" "}
          Spouse Saved?
        </label>

        {/* Family Members */}
        <h3 className="font-semibold mb-2">Family Members</h3>
        {formData.familyMembers.map((fm, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Name"
              value={fm.name}
              onChange={(e) =>
                handleFamilyChange(index, "name", e.target.value)
              }
              className="border p-2 flex-1"
            />
            <input
              type="text"
              placeholder="Relationship"
              value={fm.relationship}
              onChange={(e) =>
                handleFamilyChange(index, "relationship", e.target.value)
              }
              className="border p-2 flex-1"
            />
          </div>
        ))}

        {/* Status */}
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Save Member
        </button>
      </form>

      {/* Members List */}
      <h2 className="text-xl font-semibold mb-4">Member Records</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Surname</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((m) => (
            <tr key={m.id}>
              <td className="border p-2">{m.name}</td>
              <td className="border p-2">{m.surname}</td>
              <td className="border p-2">
                <span
                  className={`px-2 py-1 rounded ${m.status === "active" ? "bg-green-200" : "bg-red-200"}`}
                >
                  {m.status}
                </span>
              </td>
              <td className="border p-2">
                <button
                  onClick={() => toggleStatus(m.id, m.status)}
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                >
                  Toggle Status
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
