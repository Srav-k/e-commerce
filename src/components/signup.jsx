import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      {/* Internal CSS */}
      <style>
        {`
          .signup-container {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #667eea, #764ba2);
            font-family: Arial, sans-serif;
          }

          .signup-card {
            background: #ffffff;
            padding: 30px;
            width: 100%;
            max-width: 400px;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          }

          .signup-card h2 {
            text-align: center;
            margin-bottom: 20px;
            color: #333;
          }

          .signup-card input {
            width: 100%;
            padding: 12px;
            margin-bottom: 15px;
            border-radius: 6px;
            border: 1px solid #ccc;
            font-size: 14px;
          }

          .signup-card input:focus {
            outline: none;
            border-color: #667eea;
          }

          .signup-card button {
            width: 100%;
            padding: 12px;
            background: #667eea;
            border: none;
            border-radius: 6px;
            color: #fff;
            font-size: 16px;
            cursor: pointer;
            transition: background 0.3s ease;
          }

          .signup-card button:hover {
            background: #5a67d8;
          }

          .login-link {
            text-align: center;
            margin-top: 15px;
            font-size: 14px;
          }

          .login-link a {
            color: #667eea;
            text-decoration: none;
            font-weight: bold;
          }

          .login-link a:hover {
            text-decoration: underline;
          }
        `}
      </style>

      <div className="signup-container">
        <div className="signup-card">
          <h2>Create Account</h2>

          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />

            <button type="submit">Sign Up</button>
          </form>

          <div className="login-link">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
