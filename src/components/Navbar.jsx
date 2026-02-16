import { Link } from "react-router-dom";
import JesusPage from "../pages/Jesus.jsx";
import Sermons from "../pages/SermonsList.jsx";
import Location from "../pages/Location.jsx";
import ContactUs from "../pages/ContactUs.jsx";

export default function Navbar() {
  return (
    <nav className="static w-full bg-white shadow-md flex justify-between px-6 py-4">
      <div className="flex items-center space-x-3">
        <img
          src="/images/logo.png" // ✅ place your logo file in public/images
          alt="Church Logo"
          className="h-12 w-12 object-contain"
        />
        <h1 className="text-xl font-bold">Ngudza Assemblies Of God</h1>
      </div>

      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/ContactUs">Contact Us</Link>
        <Link to="/Location">Location</Link>
        <Link to="/Sermons">Sermons</Link>
        <Link to="/Jesus">Jesus</Link>
        <Link to="/Events">Events</Link>
        <Link to="/Upload">Upload Sermon</Link>
      </div>
    </nav>
  );
}
