export default function Location() {
  return (
    <main className="w-full min-h-screen bg-gray-100 py-16 px-6">
      <h1 className="text-5xl font-extrabold text-center mb-10 text-gray-900">
        Find Us
      </h1>
      <p className="text-2xl text-center mb-8 text-gray-700">
        We welcome you to join us at our church. Below is our location:
      </p>

      {/* Google Maps Embed */}
      <div className="flex justify-center">
        <iframe
          title="Church Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7137.126164977058!2d30.5182278085234!3d-22.90406568921024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec5c134a6d855e1%3A0xd1951dababb7b65d!2sNgudza%20Assemblies%20of%20God!5e0!3m2!1sen!2sza!4v1769356175089!5m2!1sen!2sza"
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
