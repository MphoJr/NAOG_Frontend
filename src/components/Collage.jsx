export default function Collage() {
  const items = [
    {
      image: "/images/Praise.jpg",
      caption: "Praise and Worship",
    },
    {
      image: "/images/kj.jpg",
      caption: "Community Fellowship",
    },
    {
      image: "/images/Choir.jpeg",
      caption: "Serving with Love",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto py-12 px-4 sm:px-6 bg-gray-200">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative h-48 sm:h-64 md:h-[300px] rounded-lg overflow-hidden shadow-lg group"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Tint overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

          {/* Caption */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <p className="text-white text-lg sm:text-xl md:text-2xl font-semibold text-center px-4 drop-shadow-lg transform transition duration-500 group-hover:scale-110 group-hover:text-blue-300">
              {item.caption}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
