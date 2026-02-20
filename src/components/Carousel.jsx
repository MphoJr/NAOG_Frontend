import { useState, useEffect } from "react";

export default function HeroCarousel() {
  const slides = [
    {
      image: "/images/pic2.jpg",
      caption: "",
    },
    {
      image: "/images/Worship.jpeg",
      caption: "",
    },
    {
      image: "/images/pic3.jpg",
      caption: "",
    },
    {
      image: "/images/pic3.jpg",
      caption: "",
    },

    {
      image: "/images/pic1.jpg",
      caption: "",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000); // auto-slide every 4s
    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full h-150 overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Tint overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Caption */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-3xl md:text-5xl font-bold text-white text-center px-6 drop-shadow-lg">
              {slide.caption}
            </p>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
