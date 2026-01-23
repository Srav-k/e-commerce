import React, { useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

/* ---------------- LOGIC ---------------- */
const normalize = (str) =>
  str?.toLowerCase().replace(/\s|&|-/g, "") || "";

const URL_CATEGORY_MAP = {
    'homefurniture': 'homedecor',
};

const SubCategory = () => {
  const { category, subCategory } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { wishlistItems, toggleWishlist } = useWishlist();

  const [selectedSub, setSelectedSub] = useState("all");

  const paramNormRaw = normalize(category || subCategory);
  const paramNorm = URL_CATEGORY_MAP[paramNormRaw] || paramNormRaw;

  const subCategories = useMemo(() => {
    const subs = products
      .filter((p) => {
        const catNorm = normalize(p.category);
        const subNorm = normalize(p.subCategory);
        return catNorm === paramNorm || subNorm === paramNorm; 
      })
      .map((p) => p.subCategory)
      .filter(Boolean);

    return ["all", ...new Set(subs)];
  }, [paramNorm]);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const catNorm = normalize(p.category);
      const subNorm = normalize(p.subCategory);
      const baseMatch = catNorm === paramNorm || subNorm === paramNorm; 
      const subMatch =
        selectedSub === "all"
          ? true
          : normalize(p.subCategory) === normalize(selectedSub);
      return baseMatch && subMatch;
    });
  }, [paramNorm, selectedSub]);

  return (
    <div className="subcategory-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="breadcrumb">
        Home / {(category || subCategory)?.replace("-", " ")}
      </div>

      <h2 className="page-title">
        {(category || subCategory)?.replace("-", " ")}
      </h2>

      {/* TOP FILTER PILLS (Visible on Mobile/Tablet) */}
      <div className="top-filter-row">
        {subCategories.map((sub, i) => (
          <button
            key={i}
            className={`filter-pill ${selectedSub === sub ? "active" : ""}`}
            onClick={() => setSelectedSub(sub)}
          >
            {sub === "all" ? "All" : sub}
          </button>
        ))}
      </div>

      <div className="main-layout">
        {/* LEFT SIDEBAR (Hidden on Mobile) */}
        <aside className="sidebar">
          <div className="sidebar-title">Filter By</div>
          {subCategories.map((sub, i) => (
            <button
              key={i}
              className={`sidebar-filter-btn ${selectedSub === sub ? "active" : ""}`}
              onClick={() => setSelectedSub(sub)}
            >
              {sub === "all" ? "All Products" : sub}
            </button>
          ))}
        </aside>

        {/* PRODUCT GRID */}
        <div className="product-grid">
          {filteredProducts.map((p) => {
            const inWishlist = wishlistItems.some((w) => w.id === p.id);
            return (
              <div key={p.id} className="product-card">
                <div className="image-wrapper" onClick={() => navigate(`/product/${p.id}`)}>
                  <img
                    src={p.image}
                    alt={p.name}
                    className="product-img"
                    onError={(e) => (e.target.src = "https://via.placeholder.com/150?text=No+Image")}
                  />
                </div>

                <div className="product-info">
                  <h4>{p.name}</h4>
                  <p className="product-price">₹{p.price}</p>
                  <div className="card-buttons">
                    <button className="add-to-cart-btn" onClick={() => addToCart(p, 1)}>
                      🛒 Add
                    </button>
                    <button 
                      className={`wishlist-toggle-btn ${inWishlist ? "active" : ""}`}
                      onClick={() => toggleWishlist(p)}
                    >
                      {inWishlist ? "❤️" : "🤍"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        /* =========================================
           1. BASE STYLES
           ========================================= */
        .subcategory-page {
          background: #f9f9f9;
          min-height: 100vh;
          font-family: sans-serif;
        }

        .back-button {
          background: #fff;
          border: 1px solid #ddd;
          padding: 8px 16px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
        }

        .breadcrumb {
          color: #777;
          text-transform: capitalize;
          margin: 10px 0;
        }

        .page-title {
          font-weight: 600;
          text-transform: capitalize;
          text-align: center;
          color: #222;
        }

        .top-filter-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 25px;
        }

        .filter-pill {
          padding: 8px 18px;
          border-radius: 20px;
          border: 1px solid #ddd;
          background: #fff;
          cursor: pointer;
          transition: 0.3s;
        }

        .filter-pill.active {
          background: #ff6a00;
          color: #fff;
          border-color: #ff6a00;
        }

        .main-layout {
          display: flex;
          gap: 30px;
        }

        .sidebar {
          width: 230px;
          background: #fff;
          border-radius: 14px;
          padding: 18px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
          height: fit-content;
        }

        .sidebar-title {
          font-weight: 600;
          margin-bottom: 12px;
          padding-bottom: 8px;
          border-bottom: 1px solid #eee;
        }

        .sidebar-filter-btn {
          width: 100%;
          padding: 10px;
          margin-bottom: 8px;
          border: 1px solid transparent;
          background: transparent;
          text-align: left;
          cursor: pointer;
          border-radius: 8px;
        }

        .sidebar-filter-btn.active {
          background: #fff5ee;
          color: #ff6a00;
          border-color: #ff6a00;
          font-weight: 600;
        }

        .product-grid {
          flex: 1;
          display: grid;
          gap: 20px;
        }

        .product-card {
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
          overflow: hidden;
          transition: 0.3s;
        }

        .image-wrapper {
          height: 200px;
          padding: 10px;
          cursor: pointer;
        }

        .product-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .product-info {
          padding: 15px;
          text-align: center;
        }

        .product-price {
          color: #e63946;
          font-weight: 600;
          margin: 8px 0;
        }

        .card-buttons {
          display: flex;
          gap: 10px;
        }

        .add-to-cart-btn {
          flex: 1;
          background: linear-gradient(135deg, #ff6a00, #ff3d00);
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 10px;
          font-weight: 600;
          cursor: pointer;
        }

        .wishlist-toggle-btn {
          width: 40px;
          border: 1px solid #eee;
          background: #fff;
          border-radius: 10px;
          cursor: pointer;
        }

        .wishlist-toggle-btn.active {
          background: #ffe6ea;
        }

        /* =========================================
           2. MOBILE (up to 480px)
           ========================================= */
        @media (max-width: 480px) {
          .subcategory-page { padding: 15px; }
          .sidebar { display: none; } /* Hide sidebar on mobile */
          .product-grid { grid-template-columns: 1fr; }
          .page-title { font-size: 24px; }
          .image-wrapper { height: 180px; }
        }

        /* =========================================
           3. TABLET (481px to 768px)
           ========================================= */
        @media (min-width: 481px) and (max-width: 768px) {
          .subcategory-page { padding: 20px; }
          .sidebar { display: none; } /* Still hide sidebar */
          .product-grid { grid-template-columns: repeat(2, 1fr); }
          .page-title { font-size: 28px; }
        }

        /* =========================================
           4. LAPTOP (769px to 1200px)
           ========================================= */
        @media (min-width: 769px) and (max-width: 1200px) {
          .subcategory-page { padding: 30px; }
          .top-filter-row { display: none; } /* Show sidebar instead */
          .product-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* =========================================
           5. DESKTOP (1201px +)
           ========================================= */
        @media (min-width: 1201px) {
          .subcategory-page { padding: 40px 10%; }
          .top-filter-row { display: none; }
          .product-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </div>
  );
};

export default SubCategory;