import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Payment = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [paymentMode, setPaymentMode] = useState("cod");
  const [address, setAddress] = useState("");

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [upiId, setUpiId] = useState("");

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const finalAmount = totalAmount - discount;

  const applyCoupon = () => {
    if (coupon === "SAVE10") {
      setDiscount(100);
      alert("Coupon applied! ₹100 off");
    } else {
      alert("Invalid coupon");
    }
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 16);
    setCardNumber(value);
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) { value = value.slice(0, 2) + '/' + value.slice(2, 4); }
    setExpiryDate(value.slice(0, 5));
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 3);
    setCvv(value);
  };

  const handlePayment = () => {
    if (!address.trim()) {
      alert("⚠️ Please enter a delivery address.");
      return;
    }
    if (paymentMode === "card") {
      if (cardNumber.length !== 16 || expiryDate.length !== 5 || cvv.length !== 3) {
        alert("⚠️ Invalid card details.");
        return;
      }
    } else if (paymentMode === "upi" && !upiId.includes("@")) {
      alert("⚠️ Invalid UPI ID.");
      return;
    }
    alert("🎉 Your Order has been placed!");
    clearCart();
    navigate("/");
  };

  return (
    <div className="payment-page-wrapper">
      <div className="payment-container">
        <h2>Payment</h2>

        <div className="payment-layout">
          {/* Main Form Area */}
          <div className="payment-form-side">
            <div className="payment-card">
              <h3>Delivery Address</h3>
              <textarea
                placeholder="Enter full delivery address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="payment-card">
              <h3>Payment Method</h3>
              <div className="radio-group">
                <label className="radio-label">
                  <input type="radio" checked={paymentMode === "cod"} onChange={() => setPaymentMode("cod")} />
                  Cash on Delivery
                </label>
                <label className="radio-label">
                  <input type="radio" checked={paymentMode === "card"} onChange={() => setPaymentMode("card")} />
                  Credit / Debit Card
                </label>
                {paymentMode === "card" && (
                  <div className="card-details-grid">
                    <input className="full-width" placeholder="Card Number (16 digits)" type="tel" inputMode="numeric" value={cardNumber} onChange={handleCardNumberChange} />
                    <input placeholder="MM/YY" type="tel" inputMode="numeric" value={expiryDate} onChange={handleExpiryChange} />
                    <input placeholder="CVV" type="tel" inputMode="numeric" value={cvv} onChange={handleCvvChange} />
                  </div>
                )}
                <label className="radio-label">
                  <input type="radio" checked={paymentMode === "upi"} onChange={() => setPaymentMode("upi")} />
                  UPI
                </label>
                {paymentMode === "upi" && (
                  <input placeholder="Enter UPI ID (e.g., user@bank)" type="text" value={upiId} onChange={(e) => setUpiId(e.target.value)} />
                )}
              </div>
            </div>
          </div>

          {/* Sidebar Area (Summary & Coupon) */}
          <div className="payment-summary-side">
            <div className="payment-card">
              <h3>Order Summary</h3>
              {cartItems.map((item) => (
                <div className="summary-row" key={item.id}>
                  <span>{item.name} × {item.quantity}</span>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))}
              <hr />
              <div className="summary-row"><span>Subtotal</span><span>₹{totalAmount}</span></div>
              <div className="summary-row discount"><span>Discount</span><span>- ₹{discount}</span></div>
              <div className="summary-row total"><span>Total</span><span>₹{finalAmount}</span></div>
            </div>

            <div className="payment-card">
              <h3>Apply Coupon</h3>
              <div className="coupon-group">
                <input type="text" placeholder="Coupon Code" value={coupon} onChange={(e) => setCoupon(e.target.value)} />
                <button onClick={applyCoupon}>Apply</button>
              </div>
              <p className="hint">Try: <b>SAVE10</b></p>
            </div>

            <button className="pay-btn" onClick={handlePayment} disabled={!address.trim()}>
              Place Order - ₹{finalAmount}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        /* =========================================
           1. BASE STYLES
           ========================================= */
        .payment-page-wrapper {
          min-height: 100vh;
          background: linear-gradient(135deg, #f6d365, #fda085);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .payment-container {
          margin: 0 auto;
          padding: 40px 20px;
        }
        .payment-card {
          background: #fff;
          padding: 25px;
          border-radius: 12px;
          margin-bottom: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .summary-row {
          display: flex;
          justify-content: space-between;
          margin: 10px 0;
        }
        .total { font-weight: bold; font-size: 1.2rem; margin-top: 15px; border-top: 1px solid #eee; padding-top: 10px; }
        .discount { color: #4CAF50; }
        
        input, textarea {
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #ddd;
          outline: none;
          transition: border 0.3s;
        }
        input:focus { border-color: #ff3f6c; }
        
        .radio-label { display: block; margin: 15px 0; cursor: pointer; font-weight: 500; }
        .radio-label input { width: auto; margin-right: 10px; }

        .pay-btn {
          width: 100%;
          padding: 18px;
          background: #ff3f6c;
          color: #fff;
          font-size: 1.1rem;
          font-weight: 800;
          border-radius: 10px;
          border: none;
          cursor: pointer;
        }
        .pay-btn:disabled { background: #ccc; cursor: not-allowed; }

        /* =========================================
           2. MOBILE (Up to 767px)
           ========================================= */
        @media (max-width: 767px) {
          .payment-layout { display: flex; flex-direction: column; }
          .card-details-grid { display: grid; grid-template-columns: 1fr; gap: 10px; }
          .coupon-group { display: flex; flex-direction: column; gap: 10px; }
          .coupon-group button { width: 100%; padding: 12px; background: #4CAF50; color: #fff; border-radius: 8px; }
          h2 { font-size: 1.5rem; text-align: center; }
        }

        /* =========================================
           3. TABLET (768px - 1023px)
           ========================================= */
        @media (min-width: 768px) and (max-width: 1023px) {
          .payment-container { max-width: 700px; }
          .card-details-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 10px; }
          .coupon-group { display: flex; gap: 10px; }
          .coupon-group button { background: #4CAF50; color: #fff; padding: 0 20px; border-radius: 8px; }
        }

        /* =========================================
           4. LAPTOP (1024px - 1439px)
           ========================================= */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .payment-container { max-width: 1000px; }
          .payment-layout { display: grid; grid-template-columns: 1.5fr 1fr; gap: 30px; }
          .card-details-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 10px; }
          .coupon-group { display: flex; gap: 10px; }
          .coupon-group button { background: #4CAF50; color: #fff; padding: 0 20px; border-radius: 8px; }
        }

        /* =========================================
           5. DESKTOP (1440px and above)
           ========================================= */
        @media (min-width: 1440px) {
          .payment-container { max-width: 1200px; }
          .payment-layout { display: grid; grid-template-columns: 1.8fr 1fr; gap: 40px; }
          .card-details-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 15px; }
          .coupon-group { display: flex; gap: 10px; }
          .coupon-group button { background: #4CAF50; color: #fff; padding: 0 25px; border-radius: 8px; font-weight: 600; }
          .payment-card { padding: 35px; }
        }
      `}</style>
    </div>
  );
};

export default Payment;