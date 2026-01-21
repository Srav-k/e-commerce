import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("USERS")) || [];

    const user = users.find(
      (u) =>
        u.email === email.trim().toLowerCase() &&
        u.password === password
    );

    if (!user) {
      alert("Invalid credentials ❌");
      return;
    }

    localStorage.setItem(
      "LOGGED_IN_USER",
      JSON.stringify(user)
    );

    alert("🎉 You are successfully logged in!");
    navigate("/profile");
  };

  return (
    <div style={styles.page}>
      <form style={styles.card} onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          placeholder="Email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Login</button>
        <p>
          New user? <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg,#43cea2,#185a9d)",
  },
  card: {
    background: "#fff",
    padding: 30,
    borderRadius: 12,
    width: 360,
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
};
