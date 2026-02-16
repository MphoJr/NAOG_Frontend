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
import Collage from "./components/collage";
import UploadSermon from "./pages/UploadSermons";
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
