import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateQty } = useCart();
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .cart-page {
          padding: clamp(16px, 4vw, 40px);
          background: linear-gradient(to right, #f5f6fa, #e0eafc);
          min-height: 100vh;
        }

        .back-btn {
          margin-bottom: 24px;
          padding: 10px 20px;
          background: #333;
          color: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
        }

        .cart-item {
          display: flex;
          gap: 20px;
          padding: 16px;
          margin-bottom: 20px;
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
          align-items: center;
        }

        .cart-image {
          width: 120px;
          height: 120px;
          object-fit: contain;
          border-radius: 10px;
          background: #f0f0f0;
        }

        .cart-details {
          flex: 1;
        }

        .price {
          color: #e63946;
          font-weight: bold;
        }

        .qty-controls {
          display: flex;
          gap: 10px;
          align-items: center;
          margin: 12px 0;
        }

        .qty-controls button {
          padding: 4px 10px;
          font-size: 16px;
          cursor: pointer;
        }

        .cart-actions {
          display: flex;
          gap: 12px;
        }

        .cart-actions button {
          padding: 10px 16px;
          border-radius: 6px;
          border: none;
          font-weight: 600;
          cursor: pointer;
        }

        .remove-btn {
          background: #ff4d4f;
          color: #fff;
        }

        .buy-btn {
          background: #28a745;
          color: #fff;
        }

        @media (max-width: 768px) {
          .cart-item {
            flex-direction: column;
            text-align: center;
          }

          .cart-actions {
            width: 100%;
          }

          .cart-actions button {
            flex: 1;
          }
        }
      `}</style>

      <div className="cart-page">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back to Shop
        </button>

        {cartItems.length === 0 ? (
          <h2 style={{ textAlign: "center", marginTop: "60px" }}>
            Your cart is empty
          </h2>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-image"
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/150?text=No+Image")
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
          ))
        )}
      </div>
    </>
  );
};

export default Cart;
