export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between">
        <p>
          &copy; {new Date().getFullYear()} Ngudza Assemblies of God. All rights
          reserved.
        </p>
        <div className="space-x-4">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
        </div>
      </div>
    </footer>
  );
}
