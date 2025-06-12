import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-blend shadow-sm">
      {/* Logo */}
      <div className="text-xl font-semibold text-white">
        <Link href="/">izband</Link>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-white font-semibold text-sm">
        <li>
          <Link href="#services" className="hover:text-blue-600 transition">Services</Link>
        </li>
        <li>
          <Link href="#technologies" className="hover:text-blue-600 transition">Technologies</Link>
        </li>
        <li>
          <Link href="#about" className="hover:text-blue-600 transition">About</Link>
        </li>
        <li>
          <Link href="#work" className="hover:text-blue-600 transition">Work</Link>
        </li>
      </ul>

      {/* Button */}
      <div>
        <Link href="#booking">
          <button className="bg-green-800 text-white px-5 py-2 text-sm rounded-full hover:bg-green-900 transition">
            Free Booking
          </button>
        </Link>
      </div>
    </nav>
  );
}
