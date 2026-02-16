export default function OurLeader() {
  return (
    <section className="bg-gray  w-full">
      {/* <h2 className="text-8xl font-extrabold text-center mb-5 text-black transition duration-150 ease-in-out">
        Our Leader
      </h2> */}
      <div className="flex flex-col md:flex-row items-center justify-center max-w-full mx-auto bg-[#0c2526]  shadow-lg p-10">
        {/* Pastor Image */}
        <img
          src="/images/Pastor.jpg" // ✅ replace with your actual pastor image
          alt="Pastor"
          className="w-100 h-100 object-cover rounded-full shadow-md mb-8 md:mb-0 md:mr-10"
        />

        {/* Pastor Info */}
        <div className="text-center md:text-left">
          <h3 className="text-6xl font-bold text-white mb-4">
            Pastor M.E Maudu
          </h3>
          <p className="text-2xl text-white font-[Open Sans] leading-relaxed max-w-xl">
            Pastor M.E Maudu is the spiritual shepherd of our church, dedicated
            to preaching the Word of God, guiding the community in faith, and
            inspiring believers to live with purpose and compassion. His vision
            is to see lives transformed through worship, discipleship, and
            outreach, raising up leaders who will impact generations to come.
          </p>
        </div>
      </div>
    </section>
  );
}
