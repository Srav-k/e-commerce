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
    <div className="profile-page">
      <div className="card-wrapper">
        {showBack && (
          <button className="back-near-card" onClick={goBack}>
            ⬅ Back
          </button>
        )}

        <div className="profile-card">
          {/* HEADER */}
          <div className="profile-header">
            <div className="avatar">
              {user.fullName ? user.fullName[0] : "U"}
            </div>
            <div className="header-text">
              <h2 className="user-name">{user.fullName}</h2>
              <p className="user-sub">Premium Customer</p>
            </div>
            <button
              className="toggle-btn"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? "Collapse" : "Expand"}
            </button>
          </div>

          {/* OVERVIEW */}
          {showDetails && activeSection === "overview" && !editMode && (
            <>
              <div className="info-grid">
                <Info label="Email" value={user.email} />
                <Info label="Mobile" value={user.mobile || "Not added"} />
                <Info label="Address" value={user.address || "Not added"} />
                <Info label="Payment" value={user.payment || "Not added"} />
              </div>

              <div className="profile-actions">
                <button className="action-btn" onClick={() => setEditMode(true)}>
                  Edit Profile
                </button>
                <button
                  className="action-btn"
                  onClick={() => setActiveSection("settings")}
                >
                  Settings
                </button>
                <button
                  className="action-btn"
                  onClick={() => setActiveSection("orders")}
                >
                  My Orders
                </button>
                <button
                  className="action-btn logout-btn"
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
              <div className="track-order-group">
                <input
                  className="profile-input"
                  placeholder="Order ID"
                  value={trackId}
                  onChange={(e) => setTrackId(e.target.value)}
                />
                <button className="profile-primary-btn track-btn">
                  Track
                </button>
              </div>
            </Section>
          )}
        </div>
      </div>

      <style>{`
        /* =========================================
           1. BASE STYLES
           ========================================= */
        .profile-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #fff7d1, #f4f6fb, #ffeaa7);
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 80px 15px;
          font-family: 'Segoe UI', Arial, sans-serif;
        }

        .card-wrapper {
          position: relative;
          width: 100%;
          max-width: 700px;
        }

        .back-near-card {
          position: absolute;
          top: -45px;
          left: 0;
          background: #fff;
          border: 1px solid #ddd;
          padding: 8px 14px;
          borderRadius: 8px;
          cursor: pointer;
          font-weight: bold;
          box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }

        .profile-card {
          background: #fff;
          padding: 25px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .profile-header {
          display: flex;
          gap: 15px;
          align-items: center;
          border-bottom: 1px solid #eee;
          padding-bottom: 20px;
        }

        .avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #d4af37;
          color: #fff;
          font-size: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        .user-name { font-size: 24px; margin: 0; }
        .user-sub { opacity: 0.6; margin: 0; font-size: 14px; }

        .toggle-btn {
          margin-left: auto;
          background: #f5f5f5;
          border: none;
          padding: 6px 12px;
          border-radius: 6px;
          cursor: pointer;
        }

        .info-grid {
          display: grid;
          gap: 15px;
          margin-top: 25px;
        }

        .info-card {
          background: #fff9e6;
          padding: 15px;
          border-radius: 12px;
        }

        .profile-actions {
          display: flex;
          gap: 10px;
          margin-top: 25px;
          flex-wrap: wrap;
        }

        .action-btn {
          padding: 10px 20px;
          border-radius: 10px;
          background: #d4af37;
          color: #fff;
          border: none;
          cursor: pointer;
          font-weight: bold;
          flex: 1 1 auto;
          text-align: center;
        }

        .logout-btn { background: #e53e3e; }

        .profile-section {
          background: #fdfdfd;
          padding: 20px;
          border-radius: 15px;
          margin-top: 20px;
          border: 1px solid #f0f0f0;
        }

        .profile-option {
          padding: 12px;
          border-radius: 10px;
          background: #fff4d1;
          cursor: pointer;
          margin-bottom: 10px;
          font-weight: 500;
          transition: 0.2s;
        }
        .profile-option:hover { background: #ffeaa7; }

        .profile-input {
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #ddd;
          margin-bottom: 12px;
          box-sizing: border-box;
        }

        .profile-primary-btn {
          background: #d4af37;
          color: #fff;
          padding: 12px 25px;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-weight: bold;
          width: 100%;
        }

        /* =========================================
           2. MOBILE (Up to 480px)
           ========================================= */
        @media (max-width: 480px) {
          .profile-page { padding: 60px 10px; }
          .profile-header { flex-direction: column; text-align: center; }
          .toggle-btn { margin: 10px 0 0 0; width: 100%; }
          .info-grid { grid-template-columns: 1fr; }
          .action-btn { width: 100%; }
          .track-order-group { flex-direction: column; }
        }

        /* =========================================
           3. TABLET (481px - 768px)
           ========================================= */
        @media (min-width: 481px) and (max-width: 768px) {
          .info-grid { grid-template-columns: 1fr 1fr; }
          .track-order-group { display: flex; gap: 10px; }
          .track-btn { width: auto; height: 42px; }
        }

        /* =========================================
           4. LAPTOP (769px - 1200px)
           ========================================= */
        @media (min-width: 769px) {
          .info-grid { grid-template-columns: repeat(2, 1fr); }
          .track-order-group { display: flex; gap: 10px; }
          .track-btn { width: auto; height: 42px; }
        }

        /* =========================================
           5. DESKTOP (1201px and above)
           ========================================= */
        @media (min-width: 1201px) {
          .card-wrapper { max-width: 800px; }
          .profile-card { padding: 40px; }
        }
      `}</style>
    </div>
  );
};

/* HELPER COMPONENTS */
const Section = ({ title, children }) => (
  <div className="profile-section">
    <h3 style={{ marginBottom: 15 }}>{title}</h3>
    {children}
  </div>
);

const Input = ({ value, onChange, placeholder, type = "text" }) => (
  <input
    className="profile-input"
    type={type}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
  />
);

const PrimaryBtn = ({ text, onClick }) => (
  <button className="profile-primary-btn" onClick={onClick}>
    {text}
  </button>
);

const Option = ({ text, onClick }) => (
  <div className="profile-option" onClick={onClick}>
    {text}
  </div>
);

const Info = ({ label, value }) => (
  <div className="info-card">
    <strong>{label}</strong>
    <div style={{ fontSize: 14, marginTop: 5 }}>{value}</div>
  </div>
);

export default Profile;