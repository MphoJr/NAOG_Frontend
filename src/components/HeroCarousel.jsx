import { useState, useEffect } from "react";

export default function HeroCarousel() {
  const slides = [
    {
      image: "/images/_MG_7975.jpg",
      caption: "NGUDZA ASSEMBLIES OF GOD",
    },
    {
      image: "/images/CHCH.jpg",
      caption: "A PLACE FOR WORSHIP, COMMUNITY AND HOPE",
    },
    {
      image: "/images/GJH.jpg",
      caption: "WE ARE COMMITTED TO SHARING THE LOVE OF CHRIST",
    },
    {
      image: "/images/communion.jpg",
      caption: "THROUGH WORSHIP, FELLOWSHIP, AND SERVICE TO OUR COMMUNITY.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full h-60 sm:h-96 md:h-[600px] overflow-hidden pt-70">
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
          {/* Caption with animation */}
          <div className="absolute inset-0 flex items-center justify-start px-8">
            <p
              className={`text-2xl sm:text-5xl md:text-7xl font-bold text-white text-left drop-shadow-lg max-w-[60%] font-[Open_Sans] transform transition-all duration-700 ease-out ${
                index === currentIndex
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              {slide.caption}
            </p>
          </div>
        </div>
      ))}

      {/* Controls (optional, currently commented out) */}
      {/* <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black/70"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black/70"
      >
        ›
      </button> */}

      {/* Dots (optional, currently commented out) */}
      {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div> */}
    </section>
  );
}
