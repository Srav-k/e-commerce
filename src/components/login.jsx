import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Matching your specific credentials
    if (email === "srav@gmail.com" && password === "123456") {
      const userData = {
        fullName: "Sravani",
        email: email,
        password: password, // Saved to allow password change simulation
        orders: 4,
        mobile: "9000000000",
        address: "Hyderabad, Telangana – 500001",
        payment: "Credit Card",
        avatar: "https://i.pravatar.cc/150?img=3",
      };

      // CRITICAL: This key must match Profile.jsx
      localStorage.setItem("LOGGED_IN_USER", JSON.stringify(userData));
      navigate("/profile");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <>
      <style>
        {`
          .login-container {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #667eea, #764ba2);
            font-family: Arial, sans-serif;
          }
          .login-card {
            background: #fff;
            padding: 30px;
            width: 100%;
            max-width: 380px;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          }
          .login-card h2 {
            text-align: center;
            margin-bottom: 20px;
            color: #333;
          }
          .login-card input {
            width: 100%;
            padding: 12px;
            margin-bottom: 15px;
            border-radius: 6px;
            border: 1px solid #ccc;
            font-size: 14px;
            box-sizing: border-box;
          }
          .login-card button {
            width: 100%;
            padding: 12px;
            background: #667eea;
            border: none;
            border-radius: 6px;
            color: #fff;
            font-size: 16px;
            cursor: pointer;
          }
          .signup-link {
            text-align: center;
            margin-top: 15px;
            font-size: 14px;
          }
        `}
      </style>

      <div className="login-container">
        <div className="login-card">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
          <div className="signup-link">
            Don’t have an account? <Link to="/signup" style={{color: '#667eea', fontWeight: 'bold', textDecoration: 'none'}}>Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;