import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateQty } = useCart();
  const navigate = useNavigate();

  return (
    <>
      <div className="cart-page">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back to Shop
        </button>

        {cartItems.length === 0 ? (
          <h2 className="empty-msg">Your cart is empty</h2>
        ) : (
          <div className="cart-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-image"
                  onError={(e) =>
                    (e.target.src = "https://via.placeholder.com/150?text=No+Image")
                  }
                />

                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p className="price">₹{item.price}</p>

                  <div className="qty-controls">
                    <button onClick={() => updateQty(item.id, "dec")}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQty(item.id, "inc")}>+</button>
                  </div>

                  <div className="cart-actions">
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>

                    <button
                      className="buy-btn"
                      onClick={() =>
                        navigate("/payment", {
                          state: { selectedItems: [item] },
                        })
                      }
                    >
                      Buy now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        /* =========================================
           1. BASE STYLES (Applies to all)
           ========================================= */
        .cart-page {
          background: linear-gradient(to right, #f5f6fa, #e0eafc);
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
          transition: background 0.3s;
        }

        .cart-item {
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
          display: flex;
          align-items: center;
        }

        .cart-image {
          object-fit: contain;
          border-radius: 10px;
          background: #f0f0f0;
        }

        .price {
          color: #e63946;
          font-weight: bold;
        }

        .qty-controls {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .qty-controls button {
          width: 32px;
          height: 32px;
          border: 1px solid #ddd;
          background: #fff;
          border-radius: 4px;
          cursor: pointer;
        }

        .cart-actions {
          display: flex;
        }

        .remove-btn { background: #ff4d4f; color: #fff; border: none; cursor: pointer; }
        .buy-btn { background: #28a745; color: #fff; border: none; cursor: pointer; }
        .empty-msg { text-align: center; margin-top: 60px; color: #555; }

        /* =========================================
           2. MOBILE VIEW (Up to 767px)
           ========================================= */
        @media (max-width: 767px) {
          .cart-page { padding: 16px; }
          .back-btn { width: 100%; padding: 12px; margin-bottom: 20px; }
          
          .cart-item { 
            flex-direction: column; 
            padding: 16px; 
            text-align: center; 
            gap: 15px;
          }
          
          .cart-image { width: 100%; height: 180px; }
          
          .qty-controls { justify-content: center; margin: 15px 0; }
          
          .cart-actions { width: 100%; gap: 10px; }
          .cart-actions button { flex: 1; padding: 12px; border-radius: 6px; font-size: 14px; }
        }

        /* =========================================
           3. TABLET VIEW (768px - 1023px)
           ========================================= */
        @media (min-width: 768px) and (max-width: 1023px) {
          .cart-page { padding: 30px; }
          .back-btn { padding: 10px 20px; margin-bottom: 24px; }
          
          .cart-item { padding: 20px; gap: 20px; }
          .cart-image { width: 140px; height: 140px; }
          
          .cart-actions { gap: 12px; margin-top: 15px; }
          .cart-actions button { padding: 10px 20px; border-radius: 6px; }
        }

        /* =========================================
           4. LAPTOP VIEW (1024px - 1439px)
           ========================================= */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .cart-page { padding: 40px 80px; }
          
          .cart-list { max-width: 900px; margin: 0 auto; }
          .cart-item { padding: 20px; gap: 30px; }
          .cart-image { width: 150px; height: 150px; }
          
          .cart-actions button { padding: 10px 25px; border-radius: 8px; }
        }

        /* =========================================
           5. DESKTOP VIEW (1440px and above)
           ========================================= */
        @media (min-width: 1440px) {
          .cart-page { padding: 60px 0; }
          
          .cart-list { max-width: 1100px; margin: 0 auto; }
          .cart-item { padding: 24px; gap: 40px; margin-bottom: 25px; }
          .cart-image { width: 180px; height: 180px; }
          
          .cart-details h3 { font-size: 22px; }
          .price { font-size: 20px; }
          
          .cart-actions button { padding: 12px 30px; border-radius: 8px; font-size: 16px; transition: transform 0.2s; }
          .cart-actions button:hover { transform: translateY(-2px); opacity: 0.9; }
        }
      `}</style>
    </>
  );
};

export default Cart;