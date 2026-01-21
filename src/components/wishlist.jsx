import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";

/* ✅ MOVE STYLES TO THE TOP */
const styles = {
  page: {
    padding: "40px",
    background: "linear-gradient(to right, #fceabb, #e8cc80ff)",
    minHeight: "100vh",
  },
  emptyContainer: {
    textAlign: "center",
    padding: "50px",
    background: "#fffbe6",
    minHeight: "100vh",
  },
  backBtn: {
    marginBottom: "20px",
    padding: "10px 20px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },
  title: {
    marginBottom: "30px",
    fontWeight: "bold",
    fontSize: "32px",
    textAlign: "center",
    color: "#333",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "30px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  imageBox: {
    width: "220px",
    height: "220px",
    borderRadius: "12px",
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
    marginBottom: "20px",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  infoBox: {
    textAlign: "center",
  },
  name: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "8px",
  },
  priceTag: {
    fontSize: "22px",
    color: "#e63946",
    fontWeight: "600",
    marginBottom: "15px",
  },
  buttonRow: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  cartBtn: {
    padding: "10px 16px",
    backgroundColor: "#ff6a00",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },
  buyBtn: {
    padding: "10px 16px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },
  removeBtn: {
    padding: "10px 16px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },
};

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (wishlistItems.length === 0) {
    return (
      <div style={styles.emptyContainer}>
        <h2>Your Wishlist is empty</h2>
        <button onClick={() => navigate(-1)} style={styles.backBtn}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <button onClick={() => navigate(-1)} style={styles.backBtn}>
        ← Back
      </button>

      <h1 style={styles.title}>My Wishlist</h1>

      <div style={styles.grid}>
        {wishlistItems.map((item) => (
          <div key={item.id} style={styles.card}>
            <div style={styles.imageBox}>
              <img
                src={item.image}
                alt={item.name}
                style={styles.img}
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/150?text=No+Image")
                }
              />
            </div>

            <div style={styles.infoBox}>
              <h3 style={styles.name}>{item.name}</h3>
              <h4 style={styles.priceTag}>₹{item.price}</h4>

              <div style={styles.buttonRow}>
                <button
                  style={styles.cartBtn}
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>

                <button
                  style={styles.buyBtn}
                  onClick={() => {
                    addToCart(item);
                    removeFromWishlist(item.id);
                    navigate("/payment", {
                      state: {
                        selectedItems: [{ ...item, quantity: 1 }],
                      },
                    });
                  }}
                >
                  Buy Now
                </button>

                <button
                  style={styles.removeBtn}
                  onClick={() => removeFromWishlist(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
