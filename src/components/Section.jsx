export default function Section({ title, text, image, reverse }) {
  return (
    <div
      className={` px-0 flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } `}
    >
      <img src={image} alt={title} className="w-full md:w-1/2 object-cover" />
      <div className="p-8 md:w-1/2">
        <h3 className="text-6xl font-bold mb-4 font-sans text-white">
          {title}
        </h3>
        <p className="text-2xl text-white">{text}</p>
      </div>
    </div>
  );
}
