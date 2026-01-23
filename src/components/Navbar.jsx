import { Link, useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const Navbar = () => {
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();

  const [search, setSearch] = useState("");
  const [openProfile, setOpenProfile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const profileRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
    setUser(savedUser);

    const syncUser = () => {
      const updatedUser = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
      setUser(updatedUser);
    };

    window.addEventListener("storage", syncUser);

    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setOpenProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("storage", syncUser);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    if (e.key === "Enter" && search.trim()) {
      navigate(`/search?q=${encodeURIComponent(search.trim())}`);
      setSearch("");
      setMenuOpen(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("LOGGED_IN_USER");
    setUser(null);
    setOpenProfile(false);
    setMenuOpen(false);
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* LEFT SECTION */}
          <div className="navbar-left">
            <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
              Shoonu<span>Shop</span>
            </Link>

            <div className="search-box desktop-only">
              <FiSearch />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleSearch}
              />
            </div>
          </div>

          {/* RIGHT SECTION & MENU */}
          <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
            

            <Link to="/wishlist" className="nav-item" onClick={() => setMenuOpen(false)}>
              <FaHeart />
              <span className="nav-text">Wishlist</span>
              {wishlistItems?.length > 0 && <span className="badge">{wishlistItems.length}</span>}
            </Link>

            <Link to="/cart" className="nav-item" onClick={() => setMenuOpen(false)}>
              <FaShoppingCart />
              <span className="nav-text">Cart</span>
              {cartItems?.length > 0 && <span className="badge">{cartItems.length}</span>}
            </Link>

            <div className="profile-wrapper" ref={profileRef}>
              <div
                className="nav-item"
                onClick={() => {
                  if (!user) {
                    navigate("/login");
                    setMenuOpen(false);
                  } else {
                    setOpenProfile(!openProfile);
                  }
                }}
              >
                <FaUser />
                <span className="nav-text">{user ? user.fullName : "Profile"}</span>
              </div>

              {user && openProfile && (
                <div className="profile-dropdown">
                  <p className="name">{user.fullName}</p>
                  <p className="email">{user.email}</p>
                  <button onClick={() => { navigate("/profile"); setOpenProfile(false); }}>
                    View Profile
                  </button>
                  <button className="logout" onClick={handleLogout}>
                    <FaSignOutAlt /> Logout
                  </button>
                </div>
              )}
            </div>

            {!user && (
              <div className="auth-group">
                <Link to="/login" className="auth-btn login" onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
                <Link to="/signup" className="auth-btn signup" onClick={() => setMenuOpen(false)}>
                  Signup
                </Link>
              </div>
            )}
          </div>

          {/* HAMBURGER FOR MOBILE */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>

      <style>{`
        /* =========================================
           1. BASE STYLES & ANIMATION
           ========================================= */
        .navbar {
          height: 80px;
          width: 100%;
          background: linear-gradient(-45deg, #6c63ff, #ff4d4d, #00c9a7, #f9d423);
          background-size: 400% 400%;
          animation: gradientMove 10s linear infinite;
          position: sticky;
          top: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .navbar-container {
          width: 100%;
          max-width: 1800px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
        }

        .navbar-left { display: flex; align-items: center; gap: 30px; }
        .navbar-right { display: flex; align-items: center; gap: 25px; }

        .logo { font-size: 26px; font-weight: 800; color: #fff; text-decoration: none; white-space: nowrap; }
        .logo span { color: #ffd700; }

        .search-box {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #fff;
          padding: 8px 16px;
          border-radius: 25px;
          color: #333;
        }
        .search-box input { border: none; outline: none; flex: 1; font-size: 14px; background: transparent; }

        .nav-item {
          color: #fff;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          position: relative;
          text-decoration: none;
          font-weight: 600;
          transition: opacity 0.3s;
        }
        .nav-item:hover { opacity: 0.8; }

        .badge {
          position: absolute;
          top: -8px;
          right: -12px;
          background: #ff0000;
          color: white;
          font-size: 10px;
          border-radius: 50%;
          padding: 2px 6px;
          border: 1px solid white;
        }

        .profile-wrapper { position: relative; }
        .profile-dropdown {
          position: absolute;
          right: 0;
          top: 45px;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          padding: 15px;
          z-index: 1001;
          min-width: 200px;
          color: #333;
        }
        .profile-dropdown p { margin: 0 0 5px 0; font-size: 14px; }
        .profile-dropdown .name { font-weight: 700; }
        .profile-dropdown .email { color: #666; font-size: 12px; margin-bottom: 10px; }
        .profile-dropdown button { 
          width: 100%; padding: 8px; margin-top: 5px; cursor: pointer; border-radius: 6px; 
          border: 1px solid #ddd; background: #f9f9f9; font-weight: 600;
        }
        .profile-dropdown button.logout { background: #ffeded; color: #ff4d4d; border-color: #ffcccc; display: flex; align-items: center; justify-content: center; gap: 8px; }

        .auth-group { display: flex; align-items: center; gap: 15px; }
        .auth-btn { padding: 8px 20px; border-radius: 25px; text-decoration: none; font-weight: 700; font-size: 14px; transition: 0.3s; }
        .login { background: transparent; color: #fff; border: 2px solid #fff; }
        .signup { background: #ffd700; color: #333; border: 2px solid #ffd700; }

        .hamburger { display: none; font-size: 24px; color: #fff; cursor: pointer; z-index: 1002; }

        /* =========================================
           2. MOBILE VIEW (Up to 767px)
           ========================================= */
        @media (max-width: 767px) {
          .desktop-only { display: none; }
          .mobile-only { display: flex; width: 100%; margin-bottom: 20px; }
          .hamburger { display: block; }

          .navbar-right {
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            height: 100vh;
            background: #1a1a1a;
            flex-direction: column;
            align-items: flex-start;
            padding: 100px 30px;
            transition: 0.4s ease-in-out;
            box-shadow: -5px 0 15px rgba(0,0,0,0.3);
            z-index: 999;
          }
          .navbar-right.open { right: 0; }

          .nav-item { font-size: 18px; margin-bottom: 20px; width: 100%; padding: 10px 0; border-bottom: 1px solid #333; }
          .auth-group { display: flex; flex-direction: column; gap: 15px; width: 100%; margin-top: 10px; }
          .auth-btn { text-align: center; width: 100%; }
          
          .profile-dropdown { position: static; box-shadow: none; width: 100%; padding: 10px 0; background: transparent; color: #fff; }
          .profile-dropdown p, .profile-dropdown .email { color: #ccc; }
          .profile-dropdown button { background: #333; color: #fff; border: none; }
        }

        /* =========================================
           3. TABLET VIEW (768px - 1023px)
           ========================================= */
        @media (min-width: 768px) and (max-width: 1023px) {
          .search-box.desktop-only { width: 180px; }
          .navbar-right { gap: 15px; }
          .nav-text { display: none; }
          .auth-btn { padding: 8px 12px; font-size: 13px; }
          .navbar{ width: 100%;}
        }

        /* =========================================
           4. LAPTOP & DESKTOP (1024px+)
           ========================================= */
        @media (min-width: 1024px) {
          .mobile-only { display: none; }
          .search-box.desktop-only { width: 250px; }
        }

        @media (min-width: 1440px) {
          .search-box.desktop-only { width: 350px; }
        }
      `}</style>
    </>
  );
};

export default Navbar;