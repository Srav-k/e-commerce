import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
} from "react-icons/fa";

const categories = [
  "groceries",
  "electronics",
  "accessories",
  "home-furniture",
  "cosmetics",
  "books",
  "toys",
  "jewellery",
  "clothes",
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* Brand */}
        <div className="footer-box">
          <h2 className="brand-title">ShoonuShop</h2>
          <p className="brand-text">
            Quality you can trust, delivered with care. We curate the best in
            daily essentials and lifestyle trends to make your everyday
            extraordinary.
          </p>
        </div>

        {/* Categories */}
        <div className="footer-box">
          <h3 className="footer-title">Categories</h3>
          <ul>
            {categories.map((cat) => (
              <li key={cat}>
                <Link to={`/${cat}`} className="footer-link">
                  {cat.charAt(0).toUpperCase() +
                    cat.slice(1).replace("-", " ")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ✅ SUPPORT LINKS — FIXED ROUTES */}
        <div className="footer-box">
          <h3 className="footer-title">Support</h3>
          <ul>
            <li>
              <Link to="/help-center" className="footer-link">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/returns-refunds" className="footer-link">
                Returns & Refunds
              </Link>
            </li>
            <li>
              <Link to="/shipping-policy" className="footer-link">
                Shipping Policy
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="footer-link">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-conditions" className="footer-link">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="contact-list">
            <li><FaPhone /> +91 9000121343</li>
            <li><FaEnvelope /> support@shoonushop.com</li>
            <li><FaMapMarkerAlt /> 123 Shop Street, Gachibowli, Hyderabad</li>
          </ul>
        </div>
      </div>

      {/* Subscribe */}
      <div className="subscribe">
        <h3>Subscribe for Latest Updates</h3>
        <form onSubmit={handleSubscribe}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <button>Subscribe</button>
        </form>
      </div>

      {/* Social */}
      <div className="social">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
      </div>

      {/* Payments */}
      <div className="payments">
        <FaCcVisa />
        <FaCcMastercard />
        <FaCcPaypal />
        <FaCcAmex />
      </div>

      <hr />

      <p className="copyright">
        © {new Date().getFullYear()} ShoonuShop. All Rights Reserved.
      </p>

      {/* INTERNAL CSS — UNTOUCHED */}
      <style>{`
        .footer {
          background: linear-gradient(135deg, #0f172a, #1f2933);
          color: #e5e7eb;
          padding: 60px;
          position: relative;
          z-index: 1;
          pointer-events: auto;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 50px;
        }
        .brand-title { font-size: 32px; font-weight: 800; color: #fff; }
        .footer-title { font-size: 22px; margin-bottom: 14px; color: #fff; }
        ul { list-style: none; padding: 0; line-height: 2; }
        .footer-link { color: #cbd5e1; text-decoration: none; font-weight: 700; }
        .footer-link:hover { color: #38bdf8; }
        .subscribe { text-align: center; margin: 50px 0; }
        .subscribe form { display: flex; justify-content: center; gap: 12px; }
        .subscribe input { padding: 12px; width: 260px; border-radius: 6px; border: none; }
        .subscribe button { padding: 12px 22px; background: #38bdf8; border: none; border-radius: 6px; font-weight: 700; }
        .social { display: flex; justify-content: center; gap: 30px; font-size: 28px; margin-bottom: 25px; }
        .social a { color: #e5e7eb; transition: transform 0.3s ease, color 0.3s ease; }
        .social a:hover { transform: scale(1.3) translateY(-5px); color: #38bdf8; }
        .payments { display: flex; justify-content: center; gap: 20px; font-size: 34px; margin-bottom: 20px; }
        hr { border: none; height: 2px; background: linear-gradient(to right, transparent, #94a3b8, transparent); margin: 30px 0; }
        .copyright { text-align: center; font-size: 14px; }
      `}</style>
    </footer>
  );
};

export default Footer;
