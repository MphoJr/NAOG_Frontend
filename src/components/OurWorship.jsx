export default function OurWorship() {
  return (
    <section className="relative w-full h-180 overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-180 object-cover"
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
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-6">
          Our Worship
        </h2>
        <p className="text-lg md:text-2xl text-gray-200 max-w-2xl">
          We believe worship is the heart of our faith — a time to gather as one
          body, lift our voices in praise, and draw closer to God. Our services
          are designed to inspire, encourage, and strengthen the spirit through
          prayer, music, and the Word. We welcome all to join us in fellowship
          and worship.
        </p>
        <div className="mt-6">
          <h6 className="text-5xl text-white font-bold"> Weekly Services</h6>
          <ul className="list-disc list-inside text-2xl mt-2 text-white">
            <li>Wednesday Evening Service: 5:00 PM – 6:00 PM</li>
            <li>Sunday Worship Service: 10:30 AM – 1:00 PM</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
