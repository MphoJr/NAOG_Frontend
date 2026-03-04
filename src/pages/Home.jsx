import Section from "../components/Section";
import Collage from "../components/Collage";
import OurLeader from "../components/OurLeader";
import ImageRow from "../components/ImageRow";
import VideoSection from "../components/VideoSection";
import MissionStatement from "../components/MissionStatement";
import Carousel from "../components/HeroCarousel.jsx";
import OurWorship from "../components/OurWorship";

function App() {
  return (
    <main className="bg-[#ffffff] max-w-full mx-auto">
      {/* Hero Carousel */}
      <Carousel />

      {/* Collage Section */}
      <div className="">
        <Collage />
      </div>

      {/* Mission Statement */}
      <div className="">
        <MissionStatement />
      </div>

      {/* Worship Section */}
      <div className="">
        <OurWorship />
      </div>

      {/* Leader Section */}
      <div className="">
        <OurLeader />
      </div>
    </main>
  );
}

export default App;
