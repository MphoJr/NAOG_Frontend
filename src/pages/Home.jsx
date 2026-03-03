import Section from "../components/Section";
import Collage from "../components/Collage";
import OurLeader from "../components/OurLeader";
import { Routes, Route } from "react-router-dom";
import ImageRow from "../components/ImageRow";
import VideoSection from "../components/VideoSection";
import MissionStatement from "../components/MissionStatement";
import Carousel from "../components/HeroCarousel.jsx";
import OurWorship from "../components/OurWorship";
function App() {
  return (
    <>
      <main className="max-w-full mx-auto animate-fadeIn bg-[#ffffff]">
        <Carousel />
        <Collage />
        <MissionStatement />
        <OurWorship />
        <OurLeader />

        <section className="animate-fade-in">
          <ImageRow />
        </section>
      </main>
    </>
  );
}

export default App;
