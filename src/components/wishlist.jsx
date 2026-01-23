import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (wishlistItems.length === 0) {
    return (
      <div className="wishlist-empty-container">
        <h2>Your Wishlist is empty</h2>
        <button onClick={() => navigate(-1)} className="back-btn">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <button onClick={() => navigate(-1)} className="back-btn">
        ← Back
      </button>

      <h1 className="wishlist-title">My Wishlist</h1>

      <div className="wishlist-grid">
        {wishlistItems.map((item) => (
          <div key={item.id} className="wishlist-card">
            <div className="wishlist-image-box">
              <img
                src={item.image}
                alt={item.name}
                className="wishlist-img"
                onError={(e) =>
                  (e.target.src = "https://via.placeholder.com/150?text=No+Image")
                }
              />
            </div>

            <div className="wishlist-info-box">
              <h3 className="wishlist-item-name">{item.name}</h3>
              <h4 className="wishlist-price-tag">₹{item.price}</h4>

              <div className="wishlist-button-row">
                <button className="wishlist-cart-btn" onClick={() => addToCart(item)}>
                  Add to Cart
                </button>

                <button
                  className="wishlist-buy-btn"
                  onClick={() => {
                    addToCart(item);
                    removeFromWishlist(item.id);
                    navigate("/payment", {
                      state: { selectedItems: [{ ...item, quantity: 1 }] },
                    });
                  }}
                >
                  Buy Now
                </button>

                <button
                  className="wishlist-remove-btn"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        /* =========================================
           1. BASE STYLES (Common)
           ========================================= */
        .wishlist-page {
          background: linear-gradient(to right, #fceabb, #e8cc80ff);
          min-height: 100vh;
        }

        .wishlist-empty-container {
          text-align: center;
          background: #fffbe6;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .back-btn {
          background-color: #fff;
          border: 1px solid #ccc;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: 0.3s;
        }

        .wishlist-title {
          font-weight: bold;
          text-align: center;
          color: #333;
        }

        .wishlist-grid {
          display: grid;
          margin: 0 auto;
        }

        .wishlist-card {
          background-color: #ffffff;
          border-radius: 16px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }

        .wishlist-image-box {
          border-radius: 12px;
          overflow: hidden;
          background-color: #f0f0f0;
        }

        .wishlist-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .wishlist-item-name {
          font-weight: 600;
          color: #222;
        }

        .wishlist-price-tag {
          color: #e63946;
          font-weight: 600;
        }

        .wishlist-button-row {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Shared Button Styles */
        .wishlist-cart-btn, .wishlist-buy-btn, .wishlist-remove-btn {
          padding: 10px 16px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          flex: 1;
          min-width: 100px;
        }

        .wishlist-cart-btn { background-color: #ff6a00; color: #fff; }
        .wishlist-buy-btn { background-color: #28a745; color: #fff; }
        .wishlist-remove-btn { background-color: #dc3545; color: #fff; }

        /* =========================================
           2. MOBILE (up to 480px)
           ========================================= */
        @media (max-width: 480px) {
          .wishlist-page { padding: 15px; }
          .wishlist-title { font-size: 24px; margin-bottom: 20px; }
          .wishlist-grid { grid-template-columns: 1fr; gap: 15px; }
          .wishlist-image-box { width: 100%; height: 180px; }
          .back-btn { padding: 8px 15px; font-size: 14px; }
          .wishlist-button-row { flex-direction: column; width: 100%; }
        }

        /* =========================================
           3. TABLET (481px to 768px)
           ========================================= */
        @media (min-width: 481px) and (max-width: 768px) {
          .wishlist-page { padding: 25px; }
          .wishlist-title { font-size: 28px; }
          .wishlist-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .wishlist-image-box { width: 180px; height: 180px; }
        }

        /* =========================================
           4. LAPTOP (769px to 1200px)
           ========================================= */
        @media (min-width: 769px) and (max-width: 1200px) {
          .wishlist-page { padding: 35px; }
          .wishlist-grid { grid-template-columns: repeat(2, 1fr); gap: 25px; max-width: 900px; }
          .wishlist-image-box { width: 200px; height: 200px; }
        }

        /* =========================================
           5. DESKTOP (1201px +)
           ========================================= */
        @media (min-width: 1201px) {
          .wishlist-page { padding: 40px; }
          .wishlist-title { font-size: 32px; margin-bottom: 30px; }
          .wishlist-grid { 
            grid-template-columns: repeat(3, 1fr); 
            gap: 30px; 
            max-width: 1200px; 
          }
          .wishlist-image-box { width: 220px; height: 220px; }
        }
      `}</style>
    </div>
  );
};

export default Wishlist;