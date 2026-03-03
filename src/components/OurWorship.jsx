export default function OurWorship() {
  return (
    <section className="relative w-full min-h-[50vh] sm:min-h-[70vh] md:min-h-[90vh] overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/images/AMP.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Tint overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 py-8 space-y-6">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
          Our Worship
        </h2>
        <p className="text-base sm:text-lg md:text-2xl text-gray-200 max-w-2xl leading-relaxed">
          We believe worship is the heart of our faith — a time to gather as one
          body, lift our voices in praise, and draw closer to God. Our services
          are designed to inspire, encourage, and strengthen the spirit through
          prayer, music, and the Word. We welcome all to join us in fellowship
          and worship.
        </p>
        <div className="mt-4">
          <h6 className="text-xl sm:text-3xl md:text-5xl text-white font-bold mb-2">
            Weekly Services
          </h6>
          <ul className="list-disc list-inside text-sm sm:text-lg md:text-2xl text-white space-y-2">
            <li>Wednesday Evening Service: 5:00 PM – 6:00 PM</li>
            <li>Sunday Worship Service: 10:30 AM – 1:00 PM</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
