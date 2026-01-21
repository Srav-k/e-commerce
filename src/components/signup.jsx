import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSignup = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("USERS")) || [];

    const email = form.email.trim().toLowerCase();

    const exists = users.some((u) => u.email === email);
    if (exists) {
      alert("User already exists ❌");
      return;
    }

    const newUser = {
      fullName: form.fullName.trim(),
      email,
      password: form.password,
    };

    users.push(newUser);
    localStorage.setItem("USERS", JSON.stringify(users));

    alert("Signup successful 🎉 Please login");
    navigate("/login");
  };

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSignup}>
        <h2>Create Account</h2>

        <input
          placeholder="Full Name"
          required
          onChange={(e) =>
            setForm({ ...form, fullName: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button type="submit">Signup</button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
