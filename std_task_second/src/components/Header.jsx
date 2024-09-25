import { useState } from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-gray-100 shadow-md border-b">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Steadfast" className="h-8" />
        </Link>
        <ul className="hidden md:flex space-x-6">
          <Link to="/" className="text-black font-bold hover:text-blue-500">
            Home
          </Link>

          <Link
            to="/about"
            className="text-black font-bold hover:text-blue-500"
          >
            About
          </Link>

          <Link
            to="/services"
            className="text-black font-bold hover:text-blue-500"
          >
            Services
          </Link>

          <Link
            to="/contact"
            className="text-black font-bold hover:text-blue-500"
          >
            Contact
          </Link>
        </ul>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          {isOpen ? (
            <button
              className="text-black text-3xl absolute top-4 right-6 z-50"
              onClick={toggleMenu}
            >
              &times;
            </button>
          ) : (
            <button onClick={toggleMenu} className="focus:outline-none">
              <span className="block w-6 h-0.5 bg-black mb-1"></span>
              <span className="block w-6 h-0.5 bg-black mb-1"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-0 left-0 w-full h-48 mt-16 bg-black bg-opacity-70 flex flex-col justify-center items-center z-50">
            <ul className="flex flex-col gap-5">
              <Link
                to="/"
                className="text-white text-xl"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white text-xl"
                onClick={toggleMenu}
              >
                About
              </Link>

              <Link
                to="/services"
                className="text-white text-xl"
                onClick={toggleMenu}
              >
                Services
              </Link>

              <Link
                to="/contact"
                className="text-white text-xl"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
