export default function ImageRow() {
  return (
    <section className="bg-gray-100 py-6 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 w-full">
        {/* Image 1 */}
        <img
          src="/images/Children.jpeg"
          alt="Children group activity"
          className="w-full h-40 sm:h-48 md:h-60 object-cover rounded-lg shadow-md"
        />

        {/* Image 2 */}
        <img
          src="/images/Women.jpeg"
          alt="Women fellowship gathering"
          className="w-full h-40 sm:h-48 md:h-60 object-cover rounded-lg shadow-md"
        />

        {/* Image 3 */}
        <img
          src="/images/ii.jpg"
          alt="Community event"
          className="w-full h-40 sm:h-48 md:h-60 object-cover rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}
