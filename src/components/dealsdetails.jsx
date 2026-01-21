import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

/* 🔥 ELECTRONICS */
import laptopImg from "../assets/todaydeals/deals/dele/laptop.jpg";
import mobileImg from "../assets/todaydeals/deals/dele/mobile.jpg";
import headphonesImg from "../assets/todaydeals/deals/dele/headph.jpg";

/* 🔥 GROCERIES */
import riceImg from "../assets/todaydeals/deals/dgro/rice.jpg";
import applesImg from "../assets/todaydeals/deals/dgro/apple.jpg";
import oilImg from "../assets/todaydeals/deals/dgro/oil.jpg";

/* 🔥 FASHION */
import menShirtImg from "../assets/todaydeals/deals/dfash/mshir.jpg";
import womenDressImg from "../assets/todaydeals/deals/dfash/wkurt.jpg";
import jeansImg from "../assets/todaydeals/deals/dfash/mjean.jpg";

/* 🔥 HOME */
import mixerImg from "../assets/todaydeals/deals/dhome/mixer.jpg";
import vacuumImg from "../assets/todaydeals/deals/dhome/vacum.jpg";
import kettleImg from "../assets/todaydeals/deals/dhome/kettle.jpg";

/* 🔥 BOOKS */
import atomicImg from "../assets/todaydeals/deals/dbook/atb.jpg";
import richDadImg from "../assets/todaydeals/deals/dbook/hgb.jpg";
import monkImg from "../assets/todaydeals/deals/dbook/tlmb.jpg";

/* 🔥 TOYS */
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
  if (!deal) return <h2 style={{ textAlign: "center" }}>Deal not found</h2>;
  const targetCategory = DEAL_TO_CATEGORY_MAP[dealId];

  return (
    <>
      <style>{`
        .deal-page {
          padding: clamp(16px, 4vw, 40px);
          background: #f9f9f9;
        }

        .back-btn {
          background: #fff;
          border: 1px solid #ddd;
          padding: 8px 16px;
          border-radius: 8px;
          cursor: pointer;
          margin-bottom: 20px;
        }

        .deal-title {
          font-size: clamp(22px, 4vw, 28px);
          text-align: center;
          margin-bottom: 30px;
        }

        .deal-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
        }

        .deal-card {
          background: #fff;
          border-radius: 16px;
          padding: 18px;
          text-align: center;
          box-shadow: 0 6px 18px rgba(0,0,0,0.1);
          cursor: pointer;
          transition: 0.3s;
        }

        .deal-card:hover {
          transform: translateY(-6px);
        }

        .deal-card img {
          width: 100%;
          height: 180px;
          object-fit: contain;
        }

        .deal-card h4 {
          font-size: 17px;
          margin: 10px 0 6px;
        }

        .price {
          font-weight: 700;
          color: #e63946;
          margin-bottom: 10px;
        }

        .cart-btn,
        .wishlist-btn {
          width: 100%;
          border-radius: 8px;
          padding: 10px;
          font-weight: 600;
          cursor: pointer;
        }

        .cart-btn {
          background: #ff6a00;
          border: none;
          color: #fff;
          margin-bottom: 8px;
        }

        .wishlist-btn {
          background: #fff;
          border: 1px solid #ddd;
        }

        @media (max-width: 480px) {
          .deal-card img {
            height: 140px;
          }
        }
      `}</style>

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
              <img src={product.image} alt={product.title} />
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
                ❤️ Add to Wishlist
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DealDetails;
