export default function ImageRow() {
  return (
    <section className=" bg-gray-100 p-0">
      <div className="grid grid-cols-3 w-full">
        {/* Image 1 */}
        <img
          src="/images/Children.jpeg" // ✅ replace with your image
          alt=""
          className="w-full h-60 object-cover"
        />

        {/* Image 2 */}
        <img
          src="/images/Women.jpeg" // ✅ replace with your image
          alt=""
          className="w-full h-60 object-cover"
        />

        {/* Image 3 */}
        <img
          src="/images/ii.jpg" // ✅ replace with your image
          alt=""
          className="w-full h-60 object-cover"
        />
      </div>
    </section>
  );
}
