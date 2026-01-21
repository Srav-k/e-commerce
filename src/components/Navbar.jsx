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

    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setOpenProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
        {/* LEFT */}
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

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* RIGHT */}
        <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
          <div className="search-box mobile-only">
            <FiSearch />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>

          <Link to="/wishlist" className="nav-item" onClick={() => setMenuOpen(false)}>
            <FaHeart />
            Wishlist
            {wishlistItems?.length > 0 && (
              <span className="badge">{wishlistItems.length}</span>
            )}
          </Link>

          <Link to="/cart" className="nav-item" onClick={() => setMenuOpen(false)}>
            <FaShoppingCart />
            Cart
            {cartItems?.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}
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
              {user ? user.fullName : "Profile"}
            </div>

            {user && openProfile && (
              <div className="profile-dropdown">
                <p className="name">{user.fullName}</p>
                <p className="email">{user.email}</p>

                <button onClick={() => navigate("/profile")}>
                  View Profile
                </button>

                <button className="logout" onClick={handleLogout}>
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            )}
          </div>

          {!user && (
            <>
              <Link to="/login" className="auth-btn login" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
              <Link to="/signup" className="auth-btn signup" onClick={() => setMenuOpen(false)}>
                Signup
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* STYLES */}
      <style>{`
        .navbar {
          height: 80px;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: linear-gradient(-45deg,#6c63ff,#ff4d4d,#00c9a7,#f9d423);
          background-size: 400% 400%;
          animation: gradientMove 10s linear infinite;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .navbar-left {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .logo {
          font-size: 26px;
          font-weight: 800;
          color: #fff;
          text-decoration: none;
        }

        .logo span {
          color: #ffd700;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          padding: 8px 14px;
          border-radius: 25px;
          width: 300px;
        }

        .search-box input {
          border: none;
          outline: none;
          flex: 1;
        }

        .navbar-right {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .nav-item {
          color: #fff;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          position: relative;
          text-decoration: none;
          font-weight: 600;
        }

        .badge {
          position: absolute;
          top: -6px;
          right: -10px;
          background: red;
          color: white;
          font-size: 11px;
          border-radius: 50%;
          padding: 2px 6px;
        }

        .auth-btn {
          padding: 8px 18px;
          border-radius: 20px;
          font-weight: bold;
          text-decoration: none;
        }

        .login {
          background: #fff;
          color: #333;
        }

        .signup {
          background: #ffd700;
          color: #333;
        }

        .profile-wrapper {
          position: relative;
        }

        .profile-dropdown {
          position: absolute;
          right: 0;
          top: 45px;
          background: #fff;
          width: 220px;
          padding: 14px;
          border-radius: 10px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          color: #333;
        }

        .profile-dropdown .name {
          font-weight: bold;
        }

        .profile-dropdown .email {
          font-size: 13px;
          color: #666;
          margin-bottom: 10px;
        }

        .profile-dropdown button {
          width: 100%;
          padding: 8px;
          border: none;
          border-radius: 6px;
          background: #ff4d4d;
          color: #fff;
          cursor: pointer;
          margin-top: 8px;
        }

        .hamburger {
          display: none;
          font-size: 26px;
          color: #fff;
          cursor: pointer;
        }

        .mobile-only {
          display: none;
          width: 100%;
        }

        @media (max-width: 900px) {
          .hamburger {
            display: block;
          }

          .desktop-only {
            display: none;
          }

          .navbar-right {
            position: fixed;
            top: 80px;
            left: 0;
            width: 100%;
            background: #111;
            flex-direction: column;
            padding: 20px;
            display: none;
          }

          .navbar-right.open {
            display: flex;
          }

          .nav-item,
          .auth-btn {
            width: 100%;
            justify-content: center;
          }

          .mobile-only {
            display: flex;
          }

          .search-box {
            width: 100%;
          }

          .profile-dropdown {
            left: 50%;
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
