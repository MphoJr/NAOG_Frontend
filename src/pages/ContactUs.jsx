import React, { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await axios.post(`${API_URL}/contact`, formData);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // reset form
    } catch (err) {
      console.error("Error sending message:", err);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <main className="w-full min-h-screen bg-white py-12 sm:py-16 px-4 sm:px-6">
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-center mb-8 sm:mb-10 text-gray-900">
        Contact Us
      </h1>
      <p className="text-base sm:text-lg md:text-2xl text-center mb-6 sm:mb-8 text-gray-700">
        We’d love to hear from you! Reach out with questions, prayer requests,
        or feedback.
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-12 sm:mb-16">
        {/* Contact Info */}
        <div className="bg-[#0c2526] p-6 sm:p-8 rounded-lg shadow-md text-center md:text-left">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-white">
            Our Details
          </h2>
          <p className="text-sm sm:text-lg md:text-2xl mb-4 text-white">
            📍 123 Church Street, Thulamela, Limpopo
          </p>
          <p className="text-sm sm:text-lg md:text-2xl mb-4 text-white">
            📞 +27 123 456 789
          </p>
          <p className="text-sm sm:text-lg md:text-2xl mb-4 text-white">
            ✉️ info@church.com
          </p>
          <p className="text-sm sm:text-lg md:text-2xl mb-4 text-white">
            🕒 Sunday Service: 10:30 AM – 1:00 PM
          </p>
          <p className="text-sm sm:text-lg md:text-2xl mb-4 text-white">
            🕒 Wednesday Service: 5:00 PM – 6:00 PM
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
            Send a Message
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-[#0c2526] rounded-lg p-3 text-sm sm:text-base md:text-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-[#0c2526] rounded-lg p-3 text-sm sm:text-base md:text-lg"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-[#0c2526] rounded-lg p-3 text-sm sm:text-base md:text-lg"
            ></textarea>
            <button
              type="submit"
              className="bg-[#0c2526] text-white px-6 py-3 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:bg-[#0a1e1f] w-full md:w-auto"
            >
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
        </div>
      </div>

      {/* Google Map */}
      <div className="max-w-7xl mx-auto px-4">
        <iframe
          title="Church Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1053.5724350220564!2d30.520068195780205!3d-22.905694756549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sza!4v1769001900965!5m2!1sen!2sza"
          className="w-full h-64 sm:h-96 md:h-[500px] rounded-lg shadow-lg"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
}
