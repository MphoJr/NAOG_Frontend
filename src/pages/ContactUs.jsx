export default function ContactUs() {
  return (
    <main className="w-full min-h-screen bg-white py-16 px-6">
      <h1 className="text-7xl font-extrabold text-center mb-10 text-gray-900">
        Contact Us
      </h1>
      <p className="text-2xl text-center mb-8 text-gray-700">
        We’d love to hear from you! Reach out with questions, prayer requests,
        or feedback.
      </p>

      {/* Contact Info */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 mb-16 ">
        <div className="bg-[#0c2526] p-8 rounded-lg shadow-md">
          <h2 className="text-5xl font-bold mb-12 text-center text-white">
            Our Details
          </h2>
          <p className="text-2xl mb-5 text-white">
            📍 123 Church Street, Thulamela, Limpopo
          </p>
          <p className="text-2xl mb-5 text-white">📞 +27 123 456 789</p>
          <p className="text-2xl mb-5 text-white">✉️ info@church.com</p>
          <p className="text-2xl mb-5 text-white">
            🕒 Sunday Service: 10:30 AM – 1:00 PM
          </p>
          <p className="text-2xl mb-5 text-white">
            🕒 Wednesday Service: 5:00 PM – 6:00 PM
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md ">
          <h2 className="text-5xl font-bold mb-4 text-center">
            Send a Message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-[#0c2526] rounded-xl p-3 text-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-[#0c2526] rounded-lg p-3 text-lg"
            />
            <textarea
              placeholder="Your Message"
              rows="6"
              className="w-full border border-[#0c2526] rounded-lg p-3 text-lg"
            ></textarea>
            <button
              type="submit"
              className="bg-[#0c2526] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#0a1e1f] center"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="flex justify-center">
        <iframe
          title="Church Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1053.5724350220564!2d30.520068195780205!3d-22.905694756549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sza!4v1769001900965!5m2!1sen!2sza"
          width="1000"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </main>
  );
}
