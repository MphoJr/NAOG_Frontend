export default function VideoSection() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Visible Container */}
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-300 p-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Video */}
            <div className="w-full">
              <video
                controls
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
              >
                <source src="/images/Snippets.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Caption */}
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold text-blue-700 mb-6">
                Moments of Worship
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                These snippets capture the heart of our church services — voices
                lifted in praise, prayers shared in unity, and the joy of
                fellowship as we gather together in God’s presence. Each moment
                reflects our mission to honor God and make disciples, inspiring
                lives through worship and community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
