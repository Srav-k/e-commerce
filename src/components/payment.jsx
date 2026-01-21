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

// --- New States for Card/UPI Details ---
const [cardNumber, setCardNumber] = useState("");
const [expiryDate, setExpiryDate] = useState("");
const [cvv, setCvv] = useState("");
const [upiId, setUpiId] = useState("");
// ----------------------------------------

const totalAmount = cartItems.reduce(
 (sum, item) => sum + item.price * item.quantity,
 0
);

const finalAmount = totalAmount - discount;

const applyCoupon = () => {
 if (coupon === "SAVE10") {
 setDiscount(100);
 alert("Coupon applied! ₹100 off");
 } else {
 alert("Invalid coupon");
 }
};

// --- Input Change Handlers for Validation/Formatting ---

// Card Number: Limit to 16 digits
const handleCardNumberChange = (e) => {
 // Only allow digits and limit to 16 characters
 const value = e.target.value.replace(/\D/g, '').slice(0, 16);
 setCardNumber(value);
};

// Expiry Date: Auto-separate with '/' and limit to MM/YY (5 characters)
const handleExpiryChange = (e) => {
 let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
 
 if (value.length > 2) {
  value = value.slice(0, 2) + '/' + value.slice(2, 4); // Add '/' after 2 digits, limit to 4 total
 }
 setExpiryDate(value.slice(0, 5)); // Limit total length to 5 (MM/YY)
};

// CVV: Limit to 3 digits
const handleCvvChange = (e) => {
 // Only allow digits and limit to 3 characters
 const value = e.target.value.replace(/\D/g, '').slice(0, 3);
 setCvv(value);
};

// UPI ID: Update state for input field
const handleUpiIdChange = (e) => {
 setUpiId(e.target.value);
}
// -----------------------------------------------------------

const handlePayment = () => {
 // 1. Check if address is provided
 if (!address.trim()) {
 alert("⚠️ Please enter a delivery address before placing the order.");
 return;
 }
 
 // 2. Perform validation for selected payment modes (minimal validation to meet request)
 if (paymentMode === "card") {
 if (cardNumber.length !== 16 || expiryDate.length !== 5 || cvv.length !== 3) {
  alert("⚠️ Please enter valid Credit/Debit Card details (Card Number: 16 digits, MM/YY: MM/YY format, CVV: 3 digits).");
  return;
 }
 } else if (paymentMode === "upi") {
 if (!upiId.includes("@")) { // Simple check for an @ symbol in UPI ID
  alert("⚠️ Please enter a valid UPI ID (it should contain '@').");
  return;
 }
 }

 // If all checks pass, proceed with payment
 alert("🎉 Your Order has been placed!");
 clearCart();
 navigate("/");
};

// Determine if the Pay button should be disabled (Only checks address for overall payment status)
const isPayDisabled = !address.trim();

return (
 <>
 <div className="payment-page">
  <h2>Payment</h2>

  {/* ORDER SUMMARY (NO CHANGES) */}
  <div className="card">
  <h3>Order Summary</h3>
  {cartItems.map((item) => (
   <p key={item.id}>
   {item.name} × {item.quantity}
   <span>₹{item.price * item.quantity}</span>
   </p>
  ))}
  <hr />
  <p>Subtotal <span>₹{totalAmount}</span></p>
  <p>Discount <span>- ₹{discount}</span></p>
  <h4>Total <span>₹{finalAmount}</span></h4>
  </div>

  {/* COUPON (NO CHANGES) */}
  <div className="card">
  <h3>Apply Coupon</h3>
  <div className="coupon-input-group">
   <input
   type="text"
   placeholder="Enter coupon code"
   value={coupon}
   onChange={(e) => setCoupon(e.target.value)}
   />
   <button onClick={applyCoupon}>Apply</button>
  </div>
  <p className="hint">Try: <b>SAVE10</b></p>
  </div>

  {/* ADDRESS (NO CHANGES) */}
  <div className="card">
  <h3>Delivery Address</h3>
  <textarea
   placeholder="Enter delivery address"
   required
   value={address}
   onChange={(e) => setAddress(e.target.value)}
  />
  </div>

  {/* PAYMENT OPTIONS (UPDATED INPUTS) */}
  <div className="card">
  <h3>Payment Method</h3>

  <label>
   <input
   type="radio"
   checked={paymentMode === "cod"}
   onChange={() => setPaymentMode("cod")}
   />
   Cash on Delivery
  </label>

  <label>
   <input
   type="radio"
   checked={paymentMode === "card"}
   onChange={() => setPaymentMode("card")}
   />
   Credit / Debit Card
  </label>

  {paymentMode === "card" && 
   <div className="card-details">
   <input 
    placeholder="Card Number (16 digits)"
    type="tel" // Use tel type for better mobile keyboard experience
    inputMode="numeric"
    value={cardNumber}
    onChange={handleCardNumberChange}
   />
   <input 
    placeholder="MM/YY"
    type="tel"
    inputMode="numeric"
    value={expiryDate}
    onChange={handleExpiryChange}
   />
   <input 
    placeholder="CVV (3 digits)" 
    type="tel"
    inputMode="numeric"
    value={cvv}
    onChange={handleCvvChange}
   />
   </div>
  }

  <label>
   <input
   type="radio"
   checked={paymentMode === "upi"}
   onChange={() => setPaymentMode("upi")}
   />
   UPI
  </label>

  {paymentMode === "upi" && (
   <input 
   placeholder="Enter UPI ID (e.g., user@bank)" 
   type="text"
   value={upiId}
   onChange={handleUpiIdChange}
   />
  )}
  </div>

  {/* PAY BUTTON (ADDED PAYMENT MODE VALIDATION IN handlePayment) */}
  <button 
  className="pay-btn" 
  onClick={handlePayment}
  disabled={isPayDisabled}
  >
  Pay ₹{finalAmount}
  </button>
 </div>

 {/* INTERNAL CSS (NO CHANGES) */}
 <style>{`
  .payment-page {
  padding: 40px;
  background: linear-gradient(135deg, #f6d365, #fda085);
  min-height: 100vh;
  }

  h2 {
  margin-bottom: 20px;
  }

  .card {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  }

  .card h3 {
  margin-bottom: 10px;
  }

  .card p {
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  }

  .card h4 {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  }

  input, textarea {
  width: 100%;
  padding: 10px;
  margin-top: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  }

  textarea {
  min-height: 80px;
  }

  label {
  display: block;
  margin-top: 10px;
  }

  .card-details {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 10px;
  }

  button {
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: opacity 0.3s;
  }

  .pay-btn {
  width: 100%;
  padding: 15px;
  background: #ff3f6c;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  border-radius: 8px;
  }
    
    .pay-btn:disabled {
      background: #ccc;
      cursor: not-allowed;
    }

  .hint {
  font-size: 13px;
  color: #666;
  }
    
    /* CSS for the gap in the coupon section */
    .coupon-input-group {
      display: flex;
      gap: 10px;
      margin-top: 8px;
    }
    
    .coupon-input-group input {
      flex-grow: 1;
      margin-top: 0;
    }
    
    .coupon-input-group button {
      white-space: nowrap;
      background: #4CAF50;
      color: white;
      padding: 10px 15px;
    }
 `}</style>
 </>
);
};

export default Payment;