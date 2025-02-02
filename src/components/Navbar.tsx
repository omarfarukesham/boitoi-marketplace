import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FiMenu, FiX, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { selectCartTotalItems } from "@/feature/cart/cartSlice";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const totalItems = useSelector(selectCartTotalItems);
  const { user } = useSelector((state: any) => state.auth);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between  mx-auto max-w-[1350px]">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-gray-800">
        <span className="text-blue-600">E-</span>Boitoi
      </Link>

      {/* Search Bar */}
      <div className="relative hidden md:block">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border rounded-full px-4 py-2 w-64"
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
          <FiSearch size={20} />
        </button>
      </div>

      {/* Menu Items */}
      <div className="hidden md:flex space-x-6 items-center">
        <Link to="/products" className="text-gray-600 hover:text-blue-600">
          Products
        </Link>
        <Link to="/favorite" className="text-gray-600 hover:text-blue-600">
            Favorite
          </Link>
        <Link to="/about" className="text-gray-600 hover:text-blue-600">
          About
        </Link>
        <Link to="/cart" className="relative text-gray-600 hover:text-blue-600">
          <FiShoppingCart size={24} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
              {totalItems}
            </span>
          )}
          
        </Link>
        {user ? (
          <Link to="/profile" className="text-gray-600 hover:text-blue-600">
            <FiUser size={24} />
          </Link>
        ) : (
          <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
            Login
          </Link>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-600" onClick={toggleMenu}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col space-y-4 md:hidden z-50">
          <Link to="/products" className="text-gray-600 hover:text-blue-600" onClick={toggleMenu}>
            Products
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/favorite" className="text-gray-600 hover:text-blue-600" onClick={toggleMenu}>
            Favorite
          </Link>
          <Link to="/cart" className="text-gray-600 hover:text-blue-600" onClick={toggleMenu}>
          Cart ({totalItems})
          </Link>
          {user ? (
            <Link to="/profile" className="text-gray-600 hover:text-blue-600" onClick={toggleMenu}>
              Profile
            </Link>
          ) : (
            <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700" onClick={toggleMenu}>
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
