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
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Links (desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link to="/">Home</Link>
          <Link to="/ContactUs">Contact Us</Link>
          <Link to="/Location">Location</Link>
          <Link to="/Sermons">Sermons</Link>
          <Link to="/Jesus">Jesus</Link>
          <Link to="/Events">Events</Link>
          <Link to="/login">Login</Link>
          <Link to="/Register">Register</Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/ContactUs" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
          <Link to="/Location" onClick={() => setIsOpen(false)}>
            Location
          </Link>
          <Link to="/Sermons" onClick={() => setIsOpen(false)}>
            Sermons
          </Link>
          <Link to="/Jesus" onClick={() => setIsOpen(false)}>
            Jesus
          </Link>
          <Link to="/Events" onClick={() => setIsOpen(false)}>
            Events
          </Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>
            Login
          </Link>
          <Link to="/Upload" onClick={() => setIsOpen(false)}>
            Upload Sermon
          </Link>
        </div>
      )}
    </nav>
  );
}
