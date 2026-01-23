import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

/* ---------- UTILS ---------- */
const normalize = (str) =>
  str?.toLowerCase().replace(/\s|&|-/g, "") || "";

/* ---------- COMPONENT ---------- */
const Search = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const query = params.get("q")?.trim() || "";
  const queryNorm = normalize(query);

  const filteredProducts = products.filter((p) => {
    return (
      normalize(p.name).includes(queryNorm) ||
      normalize(p.category).includes(queryNorm) ||
      normalize(p.subCategory).includes(queryNorm)
    );
  });

  return (
    <div className="search-page">
      {/* BACK BUTTON */}
      <div className="search-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>

      <h2 className="search-title">
        Search results for <span>"{query}"</span>
      </h2>

      {filteredProducts.length === 0 ? (
        <div className="no-results-box">
          <p className="no-results">No products found matching your search.</p>
          <button className="home-link" onClick={() => navigate("/")}>Browse All Products</button>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="product-card"
              onClick={() => navigate(`/product/${p.id}`)}
            >
              <div className="img-container">
                <img
                  src={p.image}
                  alt={p.name}
                  onError={(e) =>
                    (e.target.src = "https://via.placeholder.com/150?text=No+Image")
                  }
                />
              </div>
              <div className="card-content">
                <h4>{p.name}</h4>
                <p className="price">₹{p.price}</p>
                <small className="sub-cat">{p.subCategory}</small>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ---------- STYLES ---------- */}
      <style>{`
        /* =========================================
           1. BASE STYLES (General)
           ========================================= */
        .search-page {
          background: #f9f9f9;
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
        }

        .search-header {
           margin-bottom: 20px;
        }

        .back-btn {
          background: #ffffff;
          border: 1px solid #ddd;
          padding: 10px 18px;
          border-radius: 10px;
          cursor: pointer;
          font-weight: 600;
          transition: 0.3s;
        }

        .back-btn:hover {
          background: #ff6a00;
          color: #fff;
          border-color: #ff6a00;
        }

        .search-title {
          font-weight: 700;
          margin-bottom: 30px;
          color: #222;
        }

        .search-title span {
          color: #ff6a00;
        }

        .product-grid {
          display: grid;
          gap: 25px;
        }

        .product-card {
          background: #fff;
          border-radius: 16px;
          padding: 16px;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .img-container {
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 12px;
        }

        .img-container img {
          width: 100%;
          object-fit: contain;
        }

        .price {
          color: #e63946;
          font-weight: 700;
          margin: 8px 0;
        }

        .sub-cat {
          color: #888;
          text-transform: capitalize;
        }

        /* =========================================
           2. MOBILE VIEW (Up to 480px)
           ========================================= */
        @media (max-width: 480px) {
          .search-page { padding: 15px; }
          .back-btn { width: 100%; }
          .search-title { font-size: 1.2rem; text-align: center; }
          .product-grid { grid-template-columns: 1fr; }
          .img-container img { height: 200px; }
        }

        /* =========================================
           3. TABLET VIEW (481px - 768px)
           ========================================= */
        @media (min-width: 481px) and (max-width: 768px) {
          .search-page { padding: 25px; }
          .search-title { font-size: 1.5rem; }
          .product-grid { grid-template-columns: repeat(2, 1fr); }
          .img-container img { height: 160px; }
        }

        /* =========================================
           4. LAPTOP VIEW (769px - 1439px)
           ========================================= */
        @media (min-width: 769px) and (max-width: 1439px) {
          .search-page { padding: 40px; }
          .search-title { font-size: 1.8rem; }
          .product-grid { grid-template-columns: repeat(3, 1fr); }
          .img-container img { height: 180px; }
        }

        /* =========================================
           5. DESKTOP VIEW (1440px and above)
           ========================================= */
        @media (min-width: 1440px) {
          .search-page { padding: 60px 10%; }
          .search-title { font-size: 2.2rem; }
          .product-grid { grid-template-columns: repeat(4, 1fr); gap: 35px; }
          .img-container img { height: 220px; }
        }
      `}</style>
    </div>
  );
};

export default Search;