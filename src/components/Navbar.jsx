import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <img
            src="/images/logo.png"
            alt="Church Logo"
            className="h-10 w-10 object-contain"
          />
          <h1 className="text-lg sm:text-xl font-bold">
            Ngudza Assemblies Of God
          </h1>
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none text-2xl"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Links (desktop) */}
        <div className="hidden md:flex space-x-6 font-medium">
          <Link to="/">Home</Link>
          <Link to="/ContactUs">Contact Us</Link>
          <Link to="/Sermons">Sermons</Link>
          <Link to="/Jesus">Jesus</Link>
          <Link to="/EventsList">Events</Link>
          <Link to="/login">Login</Link>
          <Link to="/Register">Register</Link>
        </div>
      </div>

      {/* Mobile menu with animation */}
      <div
        className={`md:hidden bg-white shadow-md px-6 py-4 space-y-4 transform transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <Link to="/" onClick={() => setIsOpen(false)} className="block">
          Home
        </Link>
        <Link
          to="/ContactUs"
          onClick={() => setIsOpen(false)}
          className="block"
        >
          Contact Us
        </Link>
        <Link to="/Sermons" onClick={() => setIsOpen(false)} className="block">
          Sermons
        </Link>
        <Link to="/Jesus" onClick={() => setIsOpen(false)} className="block">
          Jesus
        </Link>
        <Link
          to="/EventsList"
          onClick={() => setIsOpen(false)}
          className="block"
        >
          Events
        </Link>
        <Link to="/login" onClick={() => setIsOpen(false)} className="block">
          Login
        </Link>
        <Link to="/Upload" onClick={() => setIsOpen(false)} className="block">
          Upload Sermon
        </Link>
      </div>
    </nav>
  );
}
