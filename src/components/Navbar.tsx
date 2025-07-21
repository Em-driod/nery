import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { CiShoppingCart } from "react-icons/ci";
import useAuthStore from "../store/authStore"; // Import Zustand Auth store
import useCartStore from "../store"; // Import Zustand Cart store

const Navbar = () => {
  const { user, logout } = useAuthStore();
  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); // Calculate total cart count

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 bg-black backdrop-blur-md border border-white/40">
      {/* Logo */}
      <div className="text-sm font-semibold tracking-widest px-3 text-white">
        <Link to="/" className="text-white">
          <img className="w-10" src="/yu.webp" alt="Logo" />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="space-x-6 text-sm font-semibold flex">
        <Link to="/Product" className="text-white no-underline">SHOP</Link>

      <Link to="/Product" className="text-white no-underline">SALE</Link>
        <p className="text-white hover:underline-none">HELP</p>
      </div>

      {/* User Auth & Cart */}
      <div className="flex justify-center gap-4 items-center">
        {user ? (
          <>
            <span className="text-white">Welcome, {user.name}</span>
            <button onClick={logout} className="flex items-center gap-2 text-sm px-3 text-white">
              Logout
            </button>
          </>
        ) : (
          <Link to="/Register" className="flex items-center gap-2 text-sm px-3 text-white">
            <FiLogIn />
            Log In
          </Link>
        )}

        {/* Cart Icon with Badge */}
        <Link to="/Cart" className="relative">
          <CiShoppingCart size={34} color="white" />
          {totalItems > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;






