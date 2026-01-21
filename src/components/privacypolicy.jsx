import React from "react";

const PrivacyPolicy = () => {
  const styles = {
    // FULL WIDTH BANNER SECTION
    banner: {
      width: "100%",
      minHeight: "400px",
      // High-quality security/privacy themed image
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop')`,
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
      marginBottom: "40px",
    },
    heading: {
      fontSize: "1.75rem",
      color: "#1a1a1a",
      marginBottom: "15px",
      fontWeight: "700",
      borderLeft: "4px solid #28a745", // Green accent for "Security/Privacy"
      paddingLeft: "15px",
    },
    paragraph: {
      fontSize: "1.1rem",
      textAlign: "justify",
      color: "#555",
      margin: "0",
    }
  };

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      {/* HERO BANNER SECTION */}
      <div style={styles.banner}>
        <h1 style={styles.bannerTitle}>Privacy Policy</h1>
        <p style={styles.bannerSubtitle}>
          Your data is safe with Shoonova. We are committed to protecting your privacy 
          and ensuring a secure shopping experience.
        </p>
      </div>

      {/* MAIN CONTENT AREA */}
      <div style={styles.container}>
        
        <div style={styles.section}>
          <h3 style={styles.heading}>Information We Collect</h3>
          <p style={styles.paragraph}>
            When you visit our site, we collect certain information necessary to process your purchases 
            and improve your shopping experience. This includes personal details you provide directly to us, 
            such as your name, billing address, shipping address, email address, and phone number. 
            Additionally, we automatically collect information about your device, including your IP address, 
            browser type, and how you interact with our website through cookies and similar tracking technologies. 
            This helps us understand how our customers use the site so we can make it more user-friendly.
          </p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.heading}>How We Use Your Information</h3>
          <p style={styles.paragraph}>
            We use the information we collect primarily to fulfill any orders placed through the site, which 
            includes processing your payment information, arranging for shipping, and providing you with 
            invoices or order confirmations. Beyond order fulfillment, we use this data to communicate with 
            you, screen our orders for potential risk or fraud, and, when in line with the preferences you 
            have shared with us, provide you with information or advertising relating to our products or 
            services. Our goal is to provide a personalized and efficient shopping experience tailored to 
            your interests.
          </p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.heading}>Sharing Your Personal Information</h3>
          <p style={styles.paragraph}>
            The security of your personal information is a top priority for us. We implement a variety of 
            administrative, technical, and physical security measures to protect your data from 
            unauthorized access, loss, or alteration. When you place an order through the site, we maintain 
            your order information for our records unless and until you ask us to delete this information. 
            While we strive to use commercially acceptable means to protect your personal information, 
            please remember that no method of transmission over the internet is 100% secure.
          </p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.heading}>Your Rights and Choices</h3>
          <p style={styles.paragraph}>
            Depending on where you live, you may have certain rights regarding your personal information, 
            such as the right to access the data we hold about you, to ask that your data be corrected, 
            updated, or deleted, or to opt-out of marketing communications. You can exercise these rights 
            at any time by contacting us through the information provided on our contact page. If you wish 
            to stop receiving promotional emails, you can also click the "unsubscribe" link found at the 
            bottom of any of our marketing messages.
          </p>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;