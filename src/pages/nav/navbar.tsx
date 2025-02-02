import  { useState } from 'react';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-500 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/">Anas Portfolio</Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-4">
          <Link to="/home" className="hover:bg-blue-600 px-3 py-2 rounded-md">Home</Link>
          <Link to="/tasks" className="hover:bg-blue-600 px-3 py-2 rounded-md">Tasks</Link>
          <Link to="/about" className="hover:bg-blue-600 px-3 py-2 rounded-md">About</Link>
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={toggleMobileMenu}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <Link to="/home" className="block px-4 py-2 hover:bg-blue-600">Home</Link>
        <Link to="/tasks" className="block px-4 py-2 hover:bg-blue-600">Tasks</Link>
        <Link to="/about" className="block px-4 py-2 hover:bg-blue-600">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
