import React from "react";

const TermsConditions = () => {
  const styles = {
    // FULL WIDTH BANNER SECTION
    banner: {
      width: "100%",
      minHeight: "400px",
      // Professional law/agreement themed image from Unsplash
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#ffffff",
      textAlign: "center",
      padding: "0 20px",
    },
    bannerTitle: {
      fontSize: "3.5rem",
      fontWeight: "800",
      margin: "0 0 15px 0",
      textTransform: "uppercase",
      letterSpacing: "2px",
    },
    bannerSubtitle: {
      fontSize: "1.25rem",
      maxWidth: "700px",
      opacity: "0.9",
      fontWeight: "300",
    },
    // CONTENT STYLING
    container: {
      padding: "60px 20px",
      maxWidth: "850px",
      margin: "auto",
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
      lineHeight: "1.9",
      color: "#444",
    },
    section: {
      marginBottom: "30px",
    },
    heading: {
      fontSize: "1.75rem",
      color: "#1a1a1a",
      marginBottom: "20px",
      fontWeight: "700",
      borderLeft: "4px solid #555", // Neutral gray accent for formal terms
      paddingLeft: "15px",
    },
    paragraph: {
      fontSize: "1.1rem",
      textAlign: "justify",
      color: "#555",
      marginBottom: "25px",
    }
  };

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      {/* HERO BANNER SECTION */}
      <div style={styles.banner}>
        <h1 style={styles.bannerTitle}>Terms & Conditions</h1>
        <p style={styles.bannerSubtitle}>
          Please read our terms carefully. These rules govern your use of our services 
          and ensure a safe community for all shoppers.
        </p>
      </div>

      {/* MAIN CONTENT AREA */}
      <div style={styles.container}>
        
        <div style={styles.section}>
          <h3 style={styles.heading}>Agreement of Service</h3>
          <p style={styles.paragraph}>
            By accessing and using this website, you agree to abide by our terms of service, 
            which govern the relationship between you and our online store. We strive to provide 
            accurate product descriptions, pricing, and availability; however, we reserve the right to 
            correct any errors and to modify or update information at any time without prior notice. 
            All content on this site, including text, logos, and images, is our intellectual property, 
            and users are prohibited from reproducing or redistributing any materials for commercial 
            purposes without our express written consent.
          </p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.heading}>User Responsibilities & Liability</h3>
          <p style={styles.paragraph}>
            Your use of our services also signifies your acceptance of our shipping and 
            return policies, which are designed to ensure a fair and transparent transaction for 
            every customer. We prioritize the security of your personal data and use industry-standard 
            encryption to protect your information during the checkout process. Please note that we 
            reserve the right to refuse service, terminate accounts, or cancel orders at our sole 
            discretion if we detect fraudulent activity or a violation of these terms. By continuing 
            to shop with us, you acknowledge that our liability is limited to the purchase price of 
            the items bought and that any disputes will be handled in accordance with local governing laws.
          </p>
        </div>

      </div>
    </div>
  );
};

export default TermsConditions;