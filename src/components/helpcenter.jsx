import React from "react";

const HelpCenter = () => {
  const styles = {
    // Full-Width Hero Banner
    banner: {
      width: "100%",
      minHeight: "350px",
      background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      textAlign: "center",
      margin: "0 0 40px 0",
    },
    bannerTitle: {
      fontSize: "3rem",
      fontWeight: "800",
      marginBottom: "15px",
      textTransform: "uppercase",
      letterSpacing: "2px",
    },
    bannerSubtitle: {
      fontSize: "1.2rem",
      maxWidth: "700px",
      lineHeight: "1.5",
      opacity: "0.9",
    },
    // Main Content Area
    contentContainer: {
      padding: "0 20px 60px 20px",
      maxWidth: "850px",
      margin: "auto",
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      color: "#444",
      lineHeight: "1.8",
    },
    mainHeading: {
      fontSize: "2rem",
      color: "#222",
      marginBottom: "30px",
      textAlign: "center",
    },
    sectionParagraph: {
      marginBottom: "30px",
      fontSize: "1.05rem",
      textAlign: "justify",
    },
    label: {
      color: "#000",
      fontWeight: "bold",
      fontSize: "1.1rem",
    },
    ctaSection: {
      marginTop: "50px",
      paddingTop: "30px",
      borderTop: "1px solid #eee",
      textAlign: "center",
    },
    button: {
      backgroundColor: "#222",
      color: "#fff",
      padding: "12px 30px",
      border: "none",
      borderRadius: "4px",
      fontSize: "1rem",
      cursor: "pointer",
      marginTop: "15px",
      transition: "background 0.3s ease"
    }
  };

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      {/* Full Width Banner */}
      <div style={styles.banner}>
        <h1 style={styles.bannerTitle}>Help Center</h1>
        <p style={styles.bannerSubtitle}>
          We are here to help you with your shopping experience. Find answers to our most common questions below.
        </p>
      </div>

      <div style={styles.contentContainer}>
        <h2 style={styles.mainHeading}>How can we help?</h2>

        <p style={styles.sectionParagraph}>
          <span style={styles.label}>1. Orders & Tracking: </span> 
          Where is my order? Provide a link to your "Track Order" page. Explain how long it takes for tracking numbers to become active (usually 24–48 hours). 
          Can I change or cancel my order? Explain your window for changes (e.g., "Orders can only be canceled within 30 minutes of placement"). 
          Missing or damaged items: Instructions on how to report a problem and the timeframe required (e.g., "Report within 48 hours of delivery").
        </p>

        <p style={styles.sectionParagraph}>
          <span style={styles.label}>2. Shipping & Delivery: </span> 
          Shipping Rates & Timelines: Standard shipping takes 5–7 Business Days and costs $5.99 (Free over $50). Express shipping takes 2–3 Business Days for $14.99, and Overnight delivery is available for the next business day at $25.00. 
          International Shipping: List the countries you ship to and mention that customs/duties are the responsibility of the customer. 
          P.O. Boxes & APO/FPO: Clarify if you ship to these addresses.
        </p>

        <p style={styles.sectionParagraph}>
          <span style={styles.label}>3. Returns & Refunds: </span> 
          What is your return policy? Clearly state the timeframe (e.g., "30-day hassle-free returns"). Mention that items must be unworn/unused with tags. 
          How do I start a return? Step-by-step guide (e.g., "Log into your account &rarr; Order History &rarr; Request Return"). 
          When will I get my refund? Expected processing time (e.g., "5–10 business days after we receive the item").
        </p>

        <p style={styles.sectionParagraph}>
          <span style={styles.label}>4. Payments & Promos: </span> 
          Accepted Payment Methods: List logos or names (Visa, Mastercard, PayPal, Apple Pay, Klarna/Afterpay). 
          Promo Codes: Explain where to enter the code at checkout and why a code might not be working (e.g., "Excludes sale items"). 
          Sales Tax: Briefly explain that tax is calculated based on the shipping address.
        </p>

        <p style={styles.sectionParagraph}>
          <span style={styles.label}>5. Account & Security: </span> 
          Resetting your password: A quick link to the "Forgot Password" flow. 
          Managing your data: How customers can update their email, address, or delete their account. 
          Is my information safe? A brief note on SSL encryption and data privacy.
        </p>

      </div>
    </div>
  );
};

export default HelpCenter;