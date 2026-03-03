export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p className="text-sm sm:text-base mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} Ngudza Assemblies of God. All rights
          reserved.
        </p>
        <div className="flex gap-4 text-sm sm:text-base">
          <a href="#" className="hover:text-red-500 transition">
            Facebook
          </a>
          <a href="#" className="hover:text-red-500 transition">
            Instagram
          </a>
          <a href="#" className="hover:text-red-500 transition">
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}
