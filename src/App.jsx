import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ContactUs from "./pages/ContactUs";
import Sermons from "./pages/SermonsList";
import Home from "./pages/Home";
import Jesus from "./pages/Jesus";
import Location from "./pages/Location";
import Footer from "./components/Footer";
import Events from "./pages/Events";
import Collage from "./components/Collage";
import UploadSermon from "./pages/UploadSermons";
import LoginPage from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./router/ProtectedRoute";
import EventsList from "./pages/EventsList";
import AdminMessages from "./pages/AdminMessages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Jesus" element={<Jesus />} />
        <Route path="/Location" element={<Location />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Sermons" element={<Sermons />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Upload" element={<UploadSermon />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/AdminMessages" element={<AdminMessages />} />
        <Route
          path="login/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/EventsList" element={<EventsList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
