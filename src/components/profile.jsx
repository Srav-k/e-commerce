import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [showDetails, setShowDetails] = useState(true);
  const [activeSection, setActiveSection] = useState("overview");
  const [editMode, setEditMode] = useState(false);
  const [trackId, setTrackId] = useState("");

  const [profileForm, setProfileForm] = useState({
    fullName: "",
    mobile: "",
    address: "",
    payment: "",
  });

  const [passwordForm, setPasswordForm] = useState({
    current: "",
    newPass: "",
    confirm: "",
  });

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
    if (!loggedUser) {
      navigate("/login");
    } else {
      setUser(loggedUser);
      setProfileForm({
        fullName: loggedUser.fullName || "",
        mobile: loggedUser.mobile || "",
        address: loggedUser.address || "",
        payment: loggedUser.payment || "",
      });
    }
  }, [navigate]);

  if (!user) return null;

  const goBack = () => {
    setActiveSection("overview");
    setEditMode(false);
  };

  const saveProfile = () => {
    const updatedUser = { ...user, ...profileForm };
    localStorage.setItem("LOGGED_IN_USER", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setEditMode(false);
    alert("Profile updated successfully ✅");
  };

  const updatePassword = () => {
    if (passwordForm.newPass !== passwordForm.confirm)
      return alert("Passwords do not match ❌");
    if (passwordForm.current !== user.password)
      return alert("Wrong current password ❌");

    const updatedUser = { ...user, password: passwordForm.newPass };
    localStorage.setItem("LOGGED_IN_USER", JSON.stringify(updatedUser));
    setUser(updatedUser);
    alert("Password updated 🔐");
    goBack();
  };

  const logout = () => {
    localStorage.removeItem("LOGGED_IN_USER");
    navigate("/login");
  };

  const showBack = editMode || activeSection !== "overview";

  return (
    <div style={styles.page}>
      <div style={styles.cardWrapper}>
        {showBack && (
          <button style={styles.backNearCard} onClick={goBack}>
            ⬅ Back
          </button>
        )}

        <div style={styles.card}>
          {/* HEADER */}
          <div style={styles.header}>
            <div style={styles.avatar}>
              {user.fullName ? user.fullName[0] : "U"}
            </div>
            <div>
              <h2 style={styles.name}>{user.fullName}</h2>
              <p style={styles.sub}>Premium Customer</p>
            </div>
            <button
              style={styles.toggleBtn}
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? "Collapse" : "Expand"}
            </button>
          </div>

          {/* OVERVIEW */}
          {showDetails && activeSection === "overview" && !editMode && (
            <>
              <div style={styles.infoGrid}>
                <Info label="Email" value={user.email} />
                <Info label="Mobile" value={user.mobile || "Not added"} />
                <Info label="Address" value={user.address || "Not added"} />
                <Info label="Payment" value={user.payment || "Not added"} />
              </div>

              <div style={styles.actions}>
                <button style={styles.actionBtn} onClick={() => setEditMode(true)}>
                  Edit Profile
                </button>
                <button
                  style={styles.actionBtn}
                  onClick={() => setActiveSection("settings")}
                >
                  Settings
                </button>
                <button
                  style={styles.actionBtn}
                  onClick={() => setActiveSection("orders")}
                >
                  My Orders
                </button>
                <button
                  style={{ ...styles.actionBtn, background: "#e53e3e" }}
                  onClick={logout}
                >
                  Logout
                </button>
              </div>
            </>
          )}

          {/* EDIT PROFILE */}
          {editMode && (
            <Section title="Edit Profile">
              <Input
                value={profileForm.fullName}
                onChange={(v) => setProfileForm({ ...profileForm, fullName: v })}
                placeholder="Full Name"
              />
              <Input
                value={profileForm.mobile}
                onChange={(v) => setProfileForm({ ...profileForm, mobile: v })}
                placeholder="Mobile"
              />
              <Input
                value={profileForm.address}
                onChange={(v) => setProfileForm({ ...profileForm, address: v })}
                placeholder="Address"
              />
              <PrimaryBtn text="Save Profile" onClick={saveProfile} />
            </Section>
          )}

          {/* SETTINGS */}
          {activeSection === "settings" && (
            <Section title="Settings">
              <Option
                text="Change Password"
                onClick={() => setActiveSection("password")}
              />
              <Option
                text="Help & Support"
                onClick={() => setActiveSection("help")}
              />
            </Section>
          )}

          {/* PASSWORD */}
          {activeSection === "password" && (
            <Section title="Change Password">
              <Input
                type="password"
                placeholder="Current Password"
                value={passwordForm.current}
                onChange={(v) =>
                  setPasswordForm({ ...passwordForm, current: v })
                }
              />
              <Input
                type="password"
                placeholder="New Password"
                value={passwordForm.newPass}
                onChange={(v) =>
                  setPasswordForm({ ...passwordForm, newPass: v })
                }
              />
              <Input
                type="password"
                placeholder="Confirm New Password"
                value={passwordForm.confirm}
                onChange={(v) =>
                  setPasswordForm({ ...passwordForm, confirm: v })
                }
              />
              <PrimaryBtn text="Update Password" onClick={updatePassword} />
            </Section>
          )}

          {/* ORDERS */}
          {activeSection === "orders" && (
            <Section title="My Orders">
              <p>You have {user.orders || 0} recent orders.</p>
              <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
                <input
                  style={styles.input}
                  placeholder="Order ID"
                  value={trackId}
                  onChange={(e) => setTrackId(e.target.value)}
                />
                <button style={{ ...styles.primaryBtn, height: 42 }}>
                  Track
                </button>
              </div>
            </Section>
          )}
        </div>
      </div>
    </div>
  );
};

/* COMPONENTS */
const Section = ({ title, children }) => (
  <div style={styles.section}>
    <h3 style={{ marginBottom: 15 }}>{title}</h3>
    {children}
  </div>
);

const Input = ({ value, onChange, placeholder, type = "text" }) => (
  <input
    style={styles.input}
    type={type}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
  />
);

const PrimaryBtn = ({ text, onClick }) => (
  <button style={styles.primaryBtn} onClick={onClick}>
    {text}
  </button>
);

const Option = ({ text, onClick }) => (
  <div style={styles.option} onClick={onClick}>
    {text}
  </div>
);

const Info = ({ label, value }) => (
  <div style={styles.infoCard}>
    <strong>{label}</strong>
    <div style={{ fontSize: 14, marginTop: 5 }}>{value}</div>
  </div>
);

/* STYLES */
const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#fff7d1,#f4f6fb,#ffeaa7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "80px 15px",
    fontFamily: "Arial, sans-serif",
  },
  cardWrapper: {
    position: "relative",
    width: "100%",
    maxWidth: 700,
  },
  backNearCard: {
    position: "absolute",
    top: -45,
    left: 0,
    background: "#fff",
    border: "1px solid #ddd",
    padding: "8px 14px",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
  },
  card: {
    background: "#fff",
    padding: 25,
    borderRadius: 20,
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
  header: {
    display: "flex",
    gap: 15,
    alignItems: "center",
    borderBottom: "1px solid #eee",
    paddingBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    background: "#d4af37",
    color: "#fff",
    fontSize: 28,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  name: { fontSize: 24, margin: 0 },
  sub: { opacity: 0.6, margin: 0 },
  toggleBtn: {
    marginLeft: "auto",
    background: "#f5f5f5",
    border: "none",
    padding: "6px 12px",
    borderRadius: 6,
    cursor: "pointer",
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 15,
    marginTop: 25,
  },
  infoCard: {
    background: "#fff9e6",
    padding: 15,
    borderRadius: 12,
  },
  actions: {
    display: "flex",
    gap: 10,
    marginTop: 25,
    flexWrap: "wrap",
  },
  actionBtn: {
    padding: "10px 20px",
    borderRadius: 10,
    background: "#d4af37",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },
  section: {
    background: "#fdfdfd",
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
    border: "1px solid #f0f0f0",
  },
  option: {
    padding: 12,
    borderRadius: 10,
    background: "#fff4d1",
    cursor: "pointer",
    marginBottom: 10,
    fontWeight: 500,
  },
  input: {
    width: "100%",
    padding: 12,
    borderRadius: 8,
    border: "1px solid #ddd",
    marginBottom: 12,
    boxSizing: "border-box",
  },
  primaryBtn: {
    background: "#d4af37",
    color: "#fff",
    padding: "12px 25px",
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Profile;
