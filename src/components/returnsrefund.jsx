import React from "react";

const ReturnsRefunds = () => {
  const styles = {
    // 1. Full-Width Banner Styling
    banner: {
      width: "100%",
      minHeight: "350px",
      background: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
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
      margin: "0 0 10px 0",
      letterSpacing: "1px",
      textTransform: "uppercase",
    },
    bannerSubtitle: {
      fontSize: "1.2rem",
      maxWidth: "600px",
      opacity: "0.9",
      fontWeight: "300",
    },
    // 2. Content Container
    container: {
      padding: "60px 20px",
      maxWidth: "850px",
      margin: "auto",
      fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      lineHeight: "1.8",
      color: "#333",
    },
    section: {
      marginBottom: "40px",
    },
    heading: {
      fontSize: "1.8rem",
      color: "#111",
      marginBottom: "15px",
      borderBottom: "2px solid #f0f0f0",
      paddingBottom: "10px",
      display: "block"
    },
    paragraph: {
      fontSize: "1.05rem",
      textAlign: "justify",
      color: "#555",
      margin: "0"
    }
  };

  return (
    <div style={{ backgroundColor: "#fff" }}>
      {/* FULL WIDTH CUSTOM BANNER */}
      <div style={styles.banner}>
        <h1 style={styles.bannerTitle}>Returns & Refunds</h1>
        <p style={styles.bannerSubtitle}>
          Easy returns and quick refunds. We value your satisfaction above all else.
        </p>
      </div>

      {/* PARAGRAPH CONTENT AREA */}
      <div style={styles.container}>
        
        <div style={styles.section}>
          <h3 style={styles.heading}>Our Return Policy</h3>
          <p style={styles.paragraph}>
            We want you to love your purchase, but we understand that sometimes things aren't quite right. 
            You have 30 days from the date of delivery to return any item for a refund or exchange. 
            To be eligible for a return, your item must be in the same condition that you received it: 
            unworn or unused, with original tags attached, and in its original packaging. Please keep your 
            receipt or proof of purchase handy to ensure a smooth processing experience.
          </p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.heading}>Non-Returnable Items</h3>
          <p style={styles.paragraph}>
            While we strive to accept most returns, certain types of items cannot be sent back for hygiene 
            or safety reasons. This includes perishable goods, custom-made or personalized products, and 
            personal care items such as beauty products or intimate apparel. Additionally, items marked as 
            "Final Sale" or purchased using a clearance discount are not eligible for return or exchange. 
            If you are unsure if your item qualifies, please reach out to our support team before initiating the process.
          </p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.heading}>How to Start a Return</h3>
          <p style={styles.paragraph}>
            Initiating a return is simple and can be done through our online portal. Simply log into your 
            account, navigate to your "Order History," and select the items you wish to send back. Once 
            your request is approved, we will provide you with a prepaid shipping label and detailed 
            instructions on how and where to send your package. Please note that items sent back to us 
            without first requesting a return will not be accepted.
          </p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.heading}>Damaged or Incorrect Items</h3>
          <p style={styles.paragraph}>
            Please inspect your order as soon as it arrives. If the item is defective, damaged, or if you 
            received the wrong product entirely, contact us immediately at support@yourstore.com. We 
            prioritize these cases and will arrange for a replacement or a full refund at no additional 
            cost to you. Including a photo of the damage in your initial email will help our team resolve 
            the issue much faster.
          </p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.heading}>The Refund Process</h3>
          <p style={styles.paragraph}>
            Once we receive and inspect your returned item, we will notify you via email regarding the 
            status of your refund. If approved, the refund will be automatically processed back to your 
            original payment method. Please keep in mind that it typically takes 5 to 10 business days for 
            your bank or credit card company to process and post the refund to your account. Original 
            shipping charges are non-refundable unless the return is a result of our error.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ReturnsRefunds;