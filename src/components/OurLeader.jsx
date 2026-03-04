export default function OurLeader() {
  return (
    <section className=" bg-gray-200 w-full py-10 px-4 sm:px-6">
      <div className="flex flex-col md:flex-row items-center justify-center w-full mx-auto p-6 sm:p-10">
        {/* Pastor Image */}
        <img
          src="/images/Pastor.jpg"
          alt="Pastor M.E Maudu"
          className="w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 object-cover rounded-full shadow-md mb-6 md:mb-0 md:mr-10"
        />

        {/* Pastor Info */}
        <div className="text-center md:text-left">
          <h3 className="text-3xl sm:text-5xl md:text-7xl font-bold text-black mb-4">
            Pastor M.E Maudu
          </h3>
          <p className="text-base sm:text-lg md:text-2xl text-black font-[Open Sans] leading-relaxed max-w-xl mx-auto md:mx-0">
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
