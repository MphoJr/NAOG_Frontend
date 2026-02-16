export default function Hero() {
  return (
    <div className="landing-page  bg-gray-100">
      {/* Banner Section */}
      <div
        className="relative h-[70vh] bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('/images/hero.jpeg')`,
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-6xl md:text-6xl font-bold mb-4">
              NGUDZA <br />
              ASSEMBLIES OF GOD
            </h1>
            <h4 className="text-2xl md:text-2xl font-light leading-relaxed">
              <br />
              A PLACE FOR WORSHIP, COMMUNITY AND HOPE <br />
              WE ARE COMMITTED TO SHARING THE LOVE OF CHRIST
              <br />
              THROUGH WORSHIP, FELLOWSHIP, AND SERVICE TO OUR COMMUNITY.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
