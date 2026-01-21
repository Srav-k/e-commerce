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
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2 className="search-title">
        Search results for <span>"{query}"</span>
      </h2>

      {filteredProducts.length === 0 ? (
        <p className="no-results">No products found.</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="product-card"
              onClick={() => navigate(`/product/${p.id}`)}
            >
              <img
                src={p.image}
                alt={p.name}
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/150?text=No+Image")
                }
              />
              <h4>{p.name}</h4>
              <p className="price">₹{p.price}</p>
              <small>{p.subCategory}</small>
            </div>
          ))}
        </div>
      )}

      {/* ---------- STYLES ---------- */}
      <style>{`
        .search-page {
          padding: 30px 40px;
          background: #f9f9f9;
          min-height: 100vh;
        }

        /* ---------- BACK BUTTON ---------- */
        .back-btn {
          background: #ffffff;
          border: 1px solid #ddd;
          padding: 10px 18px;
          border-radius: 10px;
          cursor: pointer;
          font-weight: 600;
          margin-bottom: 20px;
          transition: 0.3s;
        }

        .back-btn:hover {
          background: #ff6a00;
          color: #fff;
          border-color: #ff6a00;
        }

        /* ---------- TITLE ---------- */
        .search-title {
          font-size: 26px;
          margin-bottom: 25px;
          line-height: 1.3;
        }

        .search-title span {
          color: #ff6a00;
        }

        /* ---------- EMPTY STATE ---------- */
        .no-results {
          margin-top: 30px;
          font-size: 18px;
          color: #555;
        }

        /* ---------- GRID ---------- */
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 25px;
        }

        /* ---------- CARD ---------- */
        .product-card {
          background: #fff;
          border-radius: 16px;
          padding: 16px;
          text-align: center;
          box-shadow: 0 6px 16px rgba(0,0,0,0.12);
          transition: 0.3s;
          cursor: pointer;
        }

        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.18);
        }

        .product-card img {
          width: 100%;
          height: 180px;
          object-fit: contain;
          border-radius: 12px;
          margin-bottom: 10px;
        }

        .product-card h4 {
          font-size: 16px;
          margin: 8px 0 4px;
          font-weight: 600;
        }

        .price {
          color: #e63946;
          font-weight: 700;
          margin: 6px 0;
          font-size: 15px;
        }

        .product-card small {
          color: #888;
          text-transform: capitalize;
          font-size: 13px;
        }

        /* ---------- TABLET ---------- */
        @media (max-width: 768px) {
          .search-page {
            padding: 20px;
          }

          .search-title {
            font-size: 22px;
          }

          .product-grid {
            gap: 20px;
          }
        }

        /* ---------- MOBILE ---------- */
        @media (max-width: 480px) {
          .search-page {
            padding: 16px;
          }

          .back-btn {
            width: 100%;
            text-align: center;
            padding: 12px;
          }

          .search-title {
            font-size: 20px;
            margin-bottom: 18px;
          }

          .product-card img {
            height: 150px;
          }

          .product-card h4 {
            font-size: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default Search;
