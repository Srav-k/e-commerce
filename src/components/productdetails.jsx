import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((item) => String(item.id) === String(id));

  if (!product) {
    return (
      <div className="not-found-container">
        <h2>Product not found</h2>
        <button className="go-back-btn" onClick={() => navigate("/")}>
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="product-details-container">
      {/* Left Side: Product Image */}
      <div className="image-section">
        <img
          src={product.image}
          alt={product.name}
          className="main-image"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/400?text=No+Image+Available'; }}
        />
      </div>

      {/* Right Side: Details */}
      <div className="info-section">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-price">₹{product.price}</p>
        
        {product.description && <p className="product-description">{product.description}</p>}

        {/* --- HIGHLIGHTS SECTION --- */}
        {product.highlights && product.highlights.length > 0 && (
          <div className="content-box">
            <h3 className="sub-heading">Highlights</h3>
            <ul className="highlights-list">
              {product.highlights.map((h, i) => (
                <li key={i} className="list-item">{h}</li>
              ))}
            </ul>
          </div>
        )}

        {/* --- SPECIFICATIONS SECTION --- */}
        {product.specifications && Object.keys(product.specifications).length > 0 && (
          <div className="content-box">
            <h3 className="sub-heading">Specifications</h3>
            {Object.entries(product.specifications).map(([section, values]) => (
              <div key={section} className="spec-group">
                <span className="section-label">{section}</span>
                <div className="spec-table">
                  {Object.entries(values).map(([k, v]) => (
                    <div key={k} className="spec-row">
                      <div className="spec-key">{k}</div>
                      <div className="spec-value">{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="button-group">
          <button className="cart-btn">Add to Cart</button>
          <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
        </div>
      </div>

      <style>{`
        /* =========================================
           1. BASE STYLES (General)
           ========================================= */
        .product-details-container {
          display: flex;
          flex-wrap: wrap;
          margin: 0 auto;
          font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          background-color: #fff;
          color: #212121;
        }

        .image-section {
          flex: 1 1 450px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }

        .main-image {
          width: 100%;
          height: auto;
          object-fit: contain;
          border-radius: 8px;
          border: 1px solid #f0f0f0;
        }

        .info-section {
          flex: 1.2 1 500px;
        }

        .product-title { font-weight: 500; margin-bottom: 8px; }
        .product-price { color: #333; font-weight: 700; }
        .product-description { color: #666; line-height: 1.6; }
        
        .content-box { margin-bottom: 30px; }
        .sub-heading {
          font-size: 1.25rem;
          font-weight: 600;
          border-bottom: 1px solid #eee;
          padding-bottom: 10px;
          margin-bottom: 15px;
        }

        .highlights-list { padding-left: 18px; color: #444; }
        .list-item { margin-bottom: 8px; }

        .section-label {
          text-transform: uppercase;
          font-size: 0.8rem;
          color: #878787;
          font-weight: 600;
          display: block;
          margin-bottom: 10px;
        }

        .spec-table {
          display: flex;
          flex-direction: column;
          border: 1px solid #f0f0f0;
          border-radius: 4px;
        }

        .spec-row {
          display: flex;
          border-bottom: 1px solid #f0f0f0;
          font-size: 0.95rem;
        }

        .spec-key {
          flex: 1;
          padding: 12px;
          color: #878787;
          background-color: #fafafa;
          min-width: 120px;
        }

        .spec-value { flex: 2; padding: 12px; }

        .button-group { display: flex; gap: 15px; margin-top: 20px; }
        .cart-btn {
          background-color: #ff9f00;
          color: #fff;
          border: none;
          cursor: pointer;
          font-weight: 600;
          text-transform: uppercase;
          box-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }

        .back-btn {
          background-color: #fff;
          border: 1px solid #e0e0e0;
          cursor: pointer;
          font-weight: 600;
          text-transform: uppercase;
        }

        .not-found-container { padding: 100px; text-align: center; }
        .go-back-btn { padding: 10px 20px; cursor: pointer; }

        /* =========================================
           2. MOBILE VIEW (Up to 767px)
           ========================================= */
        @media (max-width: 767px) {
          .product-details-container { padding: 20px; gap: 30px; }
          .product-title { font-size: 1.5rem; }
          .product-price { font-size: 22px; }
          .button-group { flex-direction: column; }
          .cart-btn, .back-btn { width: 100%; padding: 14px; }
          .spec-row { flex-direction: column; }
          .spec-key { background-color: #f0f0f0; font-weight: bold; }
        }

        /* =========================================
           3. TABLET VIEW (768px - 1023px)
           ========================================= */
        @media (min-width: 768px) and (max-width: 1023px) {
          .product-details-container { padding: 30px; gap: 40px; }
          .product-title { font-size: 1.8rem; }
          .main-image { max-width: 400px; }
          .cart-btn, .back-btn { padding: 15px 30px; }
        }

        /* =========================================
           4. LAPTOP VIEW (1024px - 1439px)
           ========================================= */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .product-details-container { padding: 40px 5%; gap: 50px; max-width: 1100px; }
          .product-title { font-size: 2.1rem; }
          .product-price { font-size: 26px; }
          .cart-btn, .back-btn { padding: 16px 40px; }
        }

        /* =========================================
           5. DESKTOP VIEW (1440px and above)
           ========================================= */
        @media (min-width: 1440px) {
          .product-details-container { padding: 60px 5%; gap: 80px; max-width: 1400px; }
          .product-title { font-size: 2.4rem; }
          .product-price { font-size: 32px; }
          .main-image { max-width: 550px; }
          .cart-btn, .back-btn { padding: 18px 50px; }
        }
      `}</style>
    </div>
  );
};

export default ProductDetails;