export default function Section({ title, text, image, reverse }) {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } w-full`}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full md:w-1/2 h-64 sm:h-80 md:h-full object-cover"
      />

      {/* Text Content */}
      <div className="p-6 sm:p-8 md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-4 bg-gray-900">
        <h3 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white font-sans">
          {title}
        </h3>
        <p className="text-base sm:text-lg md:text-2xl text-white leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}
