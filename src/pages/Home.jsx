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
      <div className="py-12 sm:py-16">
        <Collage />
      </div>

      {/* Mission Statement */}
      <div className="py-12 sm:py-16">
        <MissionStatement />
      </div>

      {/* Worship Section */}
      <div className="py-12 sm:py-16">
        <OurWorship />
      </div>

      {/* Leader Section */}
      <div className="py-12 sm:py-16">
        <OurLeader />
      </div>

      {/* Image Row */}
      <div className="py-12 sm:py-16">
        <ImageRow />
      </div>

      {/* Optional Video Section */}
      <div className="py-12 sm:py-16">
        <VideoSection />
      </div>
    </main>
  );
}

export default App;
