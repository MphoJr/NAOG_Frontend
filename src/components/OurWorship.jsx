export default function OurWorship() {
  return (
    <section className="relative w-full min-h-[50vh] sm:min-h-[70vh] md:min-h-[70vh] overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/images/dance.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Tint overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full  px-4 sm:px-6 py-8 space-y-6">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white drop-shadow-lg mt-10">
          Our Worship
        </h2>
        <p className="text-base sm:text-lg md:text-2xl text-gray-200 max-w-3xl leading-relaxed ">
          We believe worship is the heart of our faith — a time to gather as one
          body, lift our voices in praise, and draw closer to God. Our services
          are designed to inspire, encourage, and strengthen the spirit through
          prayer, music, and the Word. We welcome all to join us in fellowship
          and worship.
        </p>
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white drop-shadow-lg mt-5">
          Weekly Services
        </h2>
        <div className="mt-1">
          <p className="text-base sm:text-lg md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
            Wednesday Evening Service: 5:00 PM – 6:00 PM <br />
            Sunday Worship Service: 10:30 AM – 1:00 PM
          </p>
        </div>
      </div>
    </section>
  );
}
