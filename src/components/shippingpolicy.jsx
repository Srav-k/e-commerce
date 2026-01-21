import React from "react";

const ShippingPolicy = () => {
  const styles = {
    // FULL WIDTH BANNER WITH EXTERNAL IMAGE URL
    banner: {
      width: "100%",
      minHeight: "400px",
      // Using a high-quality logistics/delivery image from Unsplash
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')`,
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
      textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
    },
    bannerSubtitle: {
      fontSize: "1.25rem",
      maxWidth: "700px",
      opacity: "0.95",
      fontWeight: "300",
      lineHeight: "1.4",
    },
    // CONTENT STYLING
    container: {
      padding: "60px 20px",
      maxWidth: "850px",
      margin: "auto",
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
      lineHeight: "1.8",
      color: "#444",
    },
    section: {
      marginBottom: "40px",
    },
    heading: {
      fontSize: "1.75rem",
      color: "#1a1a1a",
      marginBottom: "12px",
      fontWeight: "700",
      borderLeft: "4px solid #007bff", // Added a small accent line
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
        <h1 style={styles.bannerTitle}>Shipping Policy</h1>
        <p style={styles.bannerSubtitle}>
          Reliable delivery, tracked every step of the way. 
          Bringing our products to your doorstep across the nation.
        </p>
      </div>

      {/* MAIN CONTENT AREA */}
      <div style={styles.container}>
        
        <div style={styles.section}>
          <h3 style={styles.heading}>Order Processing Times</h3>
          <p style={styles.paragraph}>
            All orders are processed within 1 to 2 business days (excluding weekends and holidays) 
            after receiving your order confirmation email. You will receive another notification 
            when your order has shipped. We strive to get your items out the door as quickly as 
            possible; however, during high-volume periods or sales events, processing may take 
            up to 3 business days. Please note that processing time is separate from the 
            shipping time you see at checkout.
          </p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.heading}>Domestic Shipping Rates and Estimates</h3>
          <p style={styles.paragraph}>
            We offer a variety of shipping options to meet your needs, ranging from standard 
            ground shipping to expedited overnight services. Shipping charges for your order 
            will be calculated and displayed at checkout based on the weight of your package 
            and your delivery location. We are pleased to offer free standard shipping on all 
            domestic orders over $75. For orders below this amount, a flat-rate shipping fee 
            will apply to ensure reliable and tracked delivery.
          </p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.heading}>International Shipping</h3>
          <p style={styles.paragraph}>
            We currently offer international shipping to select countries worldwide. When ordering 
            from outside the country, please be aware that your shipment may be subject to import 
            duties and taxes (including VAT), which are incurred once a shipment reaches your 
            destination country. These charges are the responsibility of the customer and are 
            not covered by our store. Shipping times for international orders vary significantly 
            by location but typically range from 7 to 21 business days.
          </p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.heading}>How to Track Your Order</h3>
          <p style={styles.paragraph}>
            Once your order has shipped, you will receive an email notification from us which 
            will include a tracking number you can use to check its status. Please allow 48 
            hours for the tracking information to become active in the carrier's system. If 
            you haven’t received your order within the estimated delivery window provided at 
            checkout, please contact us with your name and order number, and we will look 
            into it for you.
          </p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.heading}>Shipping to P.O. Boxes and Military Addresses</h3>
          <p style={styles.paragraph}>
            We understand the importance of flexible delivery options and are happy to ship to 
            P.O. Boxes and APO/FPO/DPO addresses via our standard shipping partner. Please 
            note that expedited shipping methods (such as Express or Overnight) are generally 
            not available for these address types due to carrier restrictions. Deliveries to 
            military addresses may also experience longer transit times depending on the 
            destination's postal regulations.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ShippingPolicy;