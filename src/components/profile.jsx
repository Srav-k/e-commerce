import { useEffect, useState } from "react";
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
    if (!loggedUser) return navigate("/login");
    setUser(loggedUser);
    setProfileForm(loggedUser);
  }, [navigate]);

  if (!user) return null;

  const goBack = () => {
    setActiveSection("overview");
    setEditMode(false);
  };

  const saveProfile = () => {
    const users = JSON.parse(localStorage.getItem("USERS")) || [];
    const updatedUsers = users.map((u) =>
      u.email === user.email ? { ...u, ...profileForm } : u
    );

    const updatedUser = { ...user, ...profileForm };
    localStorage.setItem("USERS", JSON.stringify(updatedUsers));
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

    const users = JSON.parse(localStorage.getItem("USERS")) || [];
    const updatedUsers = users.map((u) =>
      u.email === user.email ? { ...u, password: passwordForm.newPass } : u
    );

    const updatedUser = { ...user, password: passwordForm.newPass };
    localStorage.setItem("USERS", JSON.stringify(updatedUsers));
    localStorage.setItem("LOGGED_IN_USER", JSON.stringify(updatedUser));
    setUser(updatedUser);
    alert("Password updated 🔐");
    goBack();
  };

  const logout = () => {
    localStorage.removeItem("LOGGED_IN_USER");
    navigate("/login");
  };

  const orders = JSON.parse(localStorage.getItem("ORDERS")) || [];

  const showBack = editMode || activeSection !== "overview";

  return (
    <div style={styles.page}>
      {/* 🌍 GLOBAL BACK BUTTON */}
      {showBack && (
        <button style={styles.globalBack} onClick={goBack}>
          ⬅ Back
        </button>
      )}

      <div style={styles.card}>
        {/* HEADER */}
        <div style={styles.header}>
          <div style={styles.avatar}>{user.fullName[0]}</div>
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
        {showDetails && activeSection === "overview" && (
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
            </div>
          </>
        )}

        {/* EDIT PROFILE */}
        {editMode && (
          <Section title="Edit Profile">
            <Input
              value={profileForm.fullName}
              onChange={(v) =>
                setProfileForm({ ...profileForm, fullName: v })
              }
              placeholder="Full Name"
            />
            <Input
              value={profileForm.mobile}
              onChange={(v) =>
                setProfileForm({ ...profileForm, mobile: v })
              }
              placeholder="Mobile"
            />
            <Input
              value={profileForm.address}
              onChange={(v) =>
                setProfileForm({ ...profileForm, address: v })
              }
              placeholder="Address"
            />
            <PrimaryBtn text="Save Profile" onClick={saveProfile} />
          </Section>
        )}

        {/* SETTINGS */}
        {activeSection === "settings" && (
          <Section title="Settings">
            <Option text="Change Password" onClick={() => setActiveSection("password")} />
            <Option text="Alerts" onClick={() => setActiveSection("alerts")} />
            <Option text="Help" onClick={() => setActiveSection("help")} />
            <Option text="Logout" onClick={logout} />
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
              placeholder="Confirm Password"
              value={passwordForm.confirm}
              onChange={(v) =>
                setPasswordForm({ ...passwordForm, confirm: v })
              }
            />
            <PrimaryBtn text="Update Password" onClick={updatePassword} />
          </Section>
        )}

        {/* ALERTS */}
        {activeSection === "alerts" && (
          <Section title="Alerts">
            <p>🔔 Email & order notifications enabled</p>
          </Section>
        )}

        {/* HELP */}
        {activeSection === "help" && (
          <Section title="Help">
            <p>📧 support@shoonushop.com</p>
            <p>📞 +91 9000000009</p>
          </Section>
        )}

        {/* MY ORDERS */}
        {activeSection === "orders" && (
          <Section title="My Orders">
            <Input
              placeholder="Enter Order ID"
              value={trackId}
              onChange={setTrackId}
            />
            <PrimaryBtn text="Track Order" />

            {orders.length === 0 ? (
              <p style={{ marginTop: 10 }}>No orders yet 📦</p>
            ) : (
              orders.map((o) => (
                <div key={o.id} style={styles.orderItem}>
                  <strong>Order #{o.id}</strong>
                  <div>Status: {o.status || "Processing"}</div>
                </div>
              ))
            )}
          </Section>
        )}
      </div>
    </div>
  );
};

/* UI HELPERS */
const Section = ({ title, children }) => (
  <div style={styles.section}>
    <h3>{title}</h3>
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
    <div>{value}</div>
  </div>
);

export default Profile;

/* 🎨 FIXED AUTO HEIGHT + GLOBAL BACK */
const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#fff7d1,#f4f6fb,#ffeaa7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start", // 🔥 FIX
    padding: "80px 12px 30px",
  },

  globalBack: {
    position: "fixed", // 🔥 FIX
    top: 90,
    left: 20,
    background: "#fff",
    border: "1px solid #ddd",
    padding: "8px 14px",
    borderRadius: 8,
    cursor: "pointer",
    zIndex: 1000,
  },

  card: {
    width: "80vh",
    maxWidth: 720,
    background: "#fff",
    padding: 22,
    borderRadius: 18,
    boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
  },

  header: { display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: "50%",
    background: "#d4af37",
    color: "#fff",
    fontSize: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  name: { fontSize: 22 },
  sub: { opacity: 0.7 },
  toggleBtn: { marginLeft: "auto" },

  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
    gap: 14,
    marginTop: 18,
  },

  infoCard: {
    background: "#fff6d8",
    padding: 14,
    borderRadius: 12,
  },

  actions: { display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" },

  actionBtn: {
    padding: "10px 18px",
    borderRadius: 10,
    background: "#d4af37",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },

  section: {
    background: "#fffdf2",
    padding: 18,
    borderRadius: 14,
    marginTop: 18,
  },

  option: {
    padding: 12,
    borderRadius: 10,
    background: "#fff3c4",
    cursor: "pointer",
    marginBottom: 10,
  },

  orderItem: {
    background: "#fff3c4",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
  },

  input: {
    width: "100%",
    padding: 12,
    borderRadius: 8,
    border: "1px solid #ddd",
    marginBottom: 10,
  },

  primaryBtn: {
    background: "#d4af37",
    color: "#fff",
    padding: "12px 18px",
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
  },
};
