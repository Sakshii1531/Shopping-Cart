import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <nav className="bg-[#181818] px-6 py-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/">
          <img src="../logo.png" className="h-10" alt="Logo" />
        </NavLink>
        
        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <NavLink
            to="/"
            className="text-white font-semibold hover:text-green-400 transition-colors duration-200"
          >
            Home
          </NavLink>
          
          <NavLink to="/cart" className="relative flex items-center text-white">
            <TiShoppingCart className="text-2xl hover:text-green-400 transition-colors duration-200" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {cart.length}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
