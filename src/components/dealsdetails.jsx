import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

/* ASSET IMPORTS */
import laptopImg from "../assets/todaydeals/deals/dele/laptop.jpg";
import mobileImg from "../assets/todaydeals/deals/dele/mobile.jpg";
import headphonesImg from "../assets/todaydeals/deals/dele/headph.jpg";
import riceImg from "../assets/todaydeals/deals/dgro/rice.jpg";
import applesImg from "../assets/todaydeals/deals/dgro/apple.jpg";
import oilImg from "../assets/todaydeals/deals/dgro/oil.jpg";
import menShirtImg from "../assets/todaydeals/deals/dfash/mshir.jpg";
import womenDressImg from "../assets/todaydeals/deals/dfash/wkurt.jpg";
import jeansImg from "../assets/todaydeals/deals/dfash/mjean.jpg";
import mixerImg from "../assets/todaydeals/deals/dhome/mixer.jpg";
import vacuumImg from "../assets/todaydeals/deals/dhome/vacum.jpg";
import kettleImg from "../assets/todaydeals/deals/dhome/kettle.jpg";
import atomicImg from "../assets/todaydeals/deals/dbook/atb.jpg";
import richDadImg from "../assets/todaydeals/deals/dbook/hgb.jpg";
import monkImg from "../assets/todaydeals/deals/dbook/tlmb.jpg";
import carImg from "../assets/todaydeals/deals/dtoy/rem.jpg";
import teddyImg from "../assets/todaydeals/deals/dtoy/tbt.jpg";
import blocksImg from "../assets/todaydeals/deals/dtoy/bbt.jpg";

const DealDetails = () => {
  const { dealId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist } = useWishlist();

  const DEAL_TO_CATEGORY_MAP = {
    electronics: "electronics",
    groceries: "groceries",
    fashion: "clothes",
    home: "home-furniture",
    books: "books",
    toys: "toys",
  };

  const deals = {
    electronics: {
      title: "Up to 60% off Electronics",
      products: [
        { id: 101, title: "Asus Laptop", price: 55999, image: laptopImg },
        { id: 102, title: "Realme X2 Pro", price: 28999, image: mobileImg },
        { id: 103, title: "Boat Headphones", price: 3999, image: headphonesImg },
      ],
    },
    groceries: {
      title: "Groceries Combo Offers",
      products: [
        { id: 201, title: "Rice 5kg", price: 699, image: riceImg },
        { id: 202, title: "Fresh Apples", price: 199, image: applesImg },
        { id: 203, title: "Cooking Oil", price: 349, image: oilImg },
      ],
    },
    fashion: {
      title: "Fashion Mega Sale",
      products: [
        { id: 301, title: "Men Shirt", price: 899, image: menShirtImg },
        { id: 302, title: "Women Dress", price: 1299, image: womenDressImg },
        { id: 303, title: "Jeans", price: 1199, image: jeansImg },
      ],
    },
    home: {
      title: "Home Appliances Deals",
      products: [
        { id: 401, title: "Mixer Grinder", price: 2499, image: mixerImg },
        { id: 402, title: "Vacuum Cleaner", price: 8999, image: vacuumImg },
        { id: 403, title: "Electric Kettle", price: 1499, image: kettleImg },
      ],
    },
    books: {
      title: "Books Bestseller Sale",
      products: [
        { id: 501, title: "Atomic Habits", price: 499, image: atomicImg },
        { id: 502, title: "Rich Dad Poor Dad", price: 399, image: richDadImg },
        { id: 503, title: "Think Like a Monk", price: 459, image: monkImg },
      ],
    },
    toys: {
      title: "Toys & Kids Zone",
      products: [
        { id: 601, title: "Remote Car", price: 899, image: carImg },
        { id: 602, title: "Teddy Bear", price: 599, image: teddyImg },
        { id: 603, title: "Building Blocks", price: 999, image: blocksImg },
      ],
    },
  };

  const deal = deals[dealId];
  if (!deal) return <h2 className="not-found">Deal not found</h2>;
  const targetCategory = DEAL_TO_CATEGORY_MAP[dealId];

  return (
    <div className="deal-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2 className="deal-title">{deal.title}</h2>

      <div className="deal-grid">
        {deal.products.map((product) => (
          <div
            key={product.id}
            className="deal-card"
            onClick={() => navigate(`/category/${targetCategory}`)}
          >
            <div className="image-container">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="card-info">
              <h4>{product.title}</h4>
              <p className="price">₹{product.price}</p>
              <button
                className="cart-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
              >
                🛒 Add to Cart
              </button>
              <button
                className="wishlist-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleWishlist(product);
                }}
              >
                ❤️ Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        /* =========================================
           1. BASE STYLES (Shared across all)
           ========================================= */
        .deal-page {
          background: #f4f6f9;
          min-height: 100vh;
          width: 100%;
        }
        .back-btn {
          background: #333;
          color: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
        }
        .deal-title {
          font-weight: 800;
          color: #1a1a1a;
          text-align: center;
        }
        .deal-grid {
          display: grid;
          margin: 0 auto;
        }
        .deal-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          transition: 0.3s ease;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .image-container {
          width: 100%;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .image-container img {
          width: 90%;
          height: 90%;
          object-fit: contain;
        }
        .price {
          font-weight: 700;
          color: #e63946;
        }
        .cart-btn, .wishlist-btn {
          width: 100%;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          padding: 10px;
        }
        .cart-btn { background: #ff6a00; color: #fff; border: none; margin-bottom: 8px; }
        .wishlist-btn { background: #fff; border: 1px solid #ddd; color: #333; }
        .not-found { text-align: center; padding: 50px; }

        /* =========================================
           2. MOBILE VIEW (Up to 767px)
           ========================================= */
        @media (max-width: 767px) {
          .deal-page { padding: 16px; }
          .back-btn { padding: 8px 14px; margin-bottom: 15px; font-size: 14px; }
          .deal-title { font-size: 22px; margin-bottom: 20px; }
          .deal-grid { 
            grid-template-columns: repeat(2, 1fr); 
            gap: 12px; 
          }
          .image-container { height: 140px; }
          .card-info { padding: 10px; }
          .card-info h4 { font-size: 14px; height: 35px; overflow: hidden; margin: 5px 0; }
          .cart-btn, .wishlist-btn { font-size: 12px; padding: 8px; }
        }

        /* =========================================
           3. TABLET VIEW (768px - 1023px)
           ========================================= */
        @media (min-width: 768px) and (max-width: 1023px) {
          .deal-page { padding: 30px; }
          .deal-title { font-size: 28px; margin-bottom: 30px; }
          .deal-grid { 
            grid-template-columns: repeat(3, 1fr); 
            gap: 20px; 
          }
          .image-container { height: 180px; }
          .card-info { padding: 15px; }
          .cart-btn, .wishlist-btn { font-size: 14px; }
        }

        /* =========================================
           4. LAPTOP VIEW (1024px - 1439px)
           ========================================= */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .deal-page { padding: 40px 60px; }
          .deal-title { font-size: 32px; margin-bottom: 40px; }
          .deal-grid { 
            grid-template-columns: repeat(4, 1fr); 
            gap: 25px; 
            max-width: 1200px;
          }
          .image-container { height: 200px; }
          .card-info { padding: 20px; }
          .deal-card:hover { transform: translateY(-5px); }
        }

        /* =========================================
           5. DESKTOP VIEW (1440px and above)
           ========================================= */
        @media (min-width: 1440px) {
          .deal-page { padding: 60px 0; }
          .deal-title { font-size: 36px; margin-bottom: 50px; }
          .deal-grid { 
            grid-template-columns: repeat(5, 1fr); 
            gap: 30px; 
            max-width: 1400px;
          }
          .image-container { height: 240px; }
          .card-info { padding: 25px; }
          .deal-card:hover { transform: translateY(-8px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
        }
      `}</style>
    </div>
  );
};

export default DealDetails;