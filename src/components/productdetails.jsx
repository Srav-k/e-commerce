import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find product by ID (handles both string and number IDs)
  const product = products.find((item) => String(item.id) === String(id));

  if (!product) {
    return (
      <div style={{ padding: "100px", textAlign: "center" }}>
        <h2>Product not found</h2>
        <button 
          onClick={() => navigate("/")} 
          style={{ padding: "10px 20px", cursor: "pointer" }}
        >
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div style={detailStyles.container}>
      {/* Left Side: Product Image */}
      <div style={detailStyles.imageSection}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={detailStyles.mainImage} 
          onError={(e) => { e.target.src = 'https://via.placeholder.com/400?text=No+Image+Available'; }}
        />
      </div>

      {/* Right Side: Details */}
      <div style={detailStyles.infoSection}>
        <h1 style={detailStyles.title}>{product.name}</h1>
        <p style={detailStyles.price}>₹{product.price}</p>
        
        {product.description && <p style={detailStyles.description}>{product.description}</p>}

        {/* --- HIGHLIGHTS SECTION --- */}
        {product.highlights && product.highlights.length > 0 && (
          <div style={detailStyles.contentBox}>
            <h3 style={detailStyles.subHeading}>Highlights</h3>
            <ul style={detailStyles.list}>
              {product.highlights.map((h, i) => (
                <li key={i} style={detailStyles.listItem}>{h}</li>
              ))}
            </ul>
          </div>
        )}

        {/* --- SPECIFICATIONS SECTION (Table Style) --- */}
        {product.specifications && Object.keys(product.specifications).length > 0 && (
          <div style={detailStyles.contentBox}>
            <h3 style={detailStyles.subHeading}>Specifications</h3>
            {Object.entries(product.specifications).map(([section, values]) => (
              <div key={section} style={{ marginBottom: "20px" }}>
                <span style={detailStyles.sectionLabel}>{section}</span>
                <div style={detailStyles.specTable}>
                  {Object.entries(values).map(([k, v]) => (
                    <div key={k} style={detailStyles.specRow}>
                      <div style={detailStyles.specKey}>{k}</div>
                      <div style={detailStyles.specValue}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={detailStyles.buttonGroup}>
          <button style={detailStyles.cartBtn}>Add to Cart</button>
          <button style={detailStyles.backBtn} onClick={() => navigate(-1)}>← Back</button>
        </div>
      </div>
    </div>
  );
};

/* Updated Styles for a Professional Layout */
const detailStyles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    padding: "40px 5%",
    gap: "60px",
    maxWidth: "1300px",
    margin: "0 auto",
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    backgroundColor: "#fff"
  },
  imageSection: { 
    flex: "1 1 450px", 
    textAlign: "center",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  mainImage: { 
    width: "100%", 
    maxWidth: "500px",
    height: "auto", 
    objectFit: "contain", 
    borderRadius: "8px",
    border: "1px solid #f0f0f0"
  },
  infoSection: { flex: "1.2 1 500px" },
  title: { fontSize: "2.4rem", marginBottom: "8px", color: "#212121", fontWeight: "500" },
  price: { fontSize: "28px", color: "#333", fontWeight: "700", margin: "10px 0" },
  description: { color: "#666", lineHeight: "1.6", marginBottom: "25px", fontSize: "1.05rem" },
  contentBox: { marginBottom: "30px" },
  subHeading: { 
    fontSize: "1.25rem", 
    fontWeight: "600", 
    color: "#212121", 
    marginBottom: "15px",
    borderBottom: "1px solid #eee",
    paddingBottom: "10px"
  },
  list: { paddingLeft: "18px", color: "#444" },
  listItem: { marginBottom: "8px", lineHeight: "1.5" },
  sectionLabel: { 
    textTransform: "uppercase", 
    fontSize: "0.8rem", 
    color: "#878787", 
    fontWeight: "600",
    display: "block", 
    marginBottom: "10px" 
  },
  specTable: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid #f0f0f0",
    borderRadius: "4px"
  },
  specRow: {
    display: "flex",
    borderBottom: "1px solid #f0f0f0",
    fontSize: "0.95rem",
    lineHeight: "1.5"
  },
  specKey: {
    flex: "1",
    padding: "12px",
    color: "#878787",
    backgroundColor: "#fafafa",
    minWidth: "120px"
  },
  specValue: {
    flex: "2",
    padding: "12px",
    color: "#212121"
  },
  buttonGroup: { marginTop: "20px", display: "flex", gap: "15px" },
  cartBtn: { 
    padding: "16px 40px", 
    backgroundColor: "#ff9f00", 
    color: "#fff", 
    border: "none", 
    borderRadius: "2px", 
    cursor: "pointer", 
    fontWeight: "600", 
    fontSize: "1rem",
    textTransform: "uppercase",
    boxShadow: "0 1px 2px rgba(0,0,0,0.2)" 
  },
  backBtn: { 
    padding: "16px 40px", 
    backgroundColor: "#fff", 
    border: "1px solid #e0e0e0", 
    borderRadius: "2px", 
    cursor: "pointer", 
    fontWeight: "600",
    textTransform: "uppercase",
    color: "#212121"
  }
};

export default ProductDetails;