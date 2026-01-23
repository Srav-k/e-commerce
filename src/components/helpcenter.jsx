import React from "react";

const HelpCenter = () => {
  return (
    <div className="help-center-wrapper">
      {/* Full Width Banner */}
      <div className="help-banner">
        <div className="banner-overlay">
          <h1 className="banner-title">Help Center</h1>
          <p className="banner-subtitle">
            We are here to help you with your shopping experience. Find answers to our most common questions below.
          </p>
        </div>
      </div>

      <div className="help-content-container">
        <h2 className="main-heading">How can we help?</h2>

        <div className="help-section">
          <p>
            <span className="help-label">1. Orders & Tracking: </span> 
            Where is my order? Provide a link to your "Track Order" page. Explain how long it takes for tracking numbers to become active (usually 24–48 hours). 
            Can I change or cancel my order? Explain your window for changes (e.g., "Orders can only be canceled within 30 minutes of placement"). 
            Missing or damaged items: Instructions on how to report a problem and the timeframe required (e.g., "Report within 48 hours of delivery").
          </p>
        </div>

        <div className="help-section">
          <p>
            <span className="help-label">2. Shipping & Delivery: </span> 
            Shipping Rates & Timelines: Standard shipping takes 5–7 Business Days and costs $5.99 (Free over $50). Express shipping takes 2–3 Business Days for $14.99, and Overnight delivery is available for the next business day at $25.00. 
            International Shipping: List the countries you ship to and mention that customs/duties are the responsibility of the customer. 
            P.O. Boxes & APO/FPO: Clarify if you ship to these addresses.
          </p>
        </div>

        <div className="help-section">
          <p>
            <span className="help-label">3. Returns & Refunds: </span> 
            What is your return policy? Clearly state the timeframe (e.g., "30-day hassle-free returns"). Mention that items must be unworn/unused with tags. 
            How do I start a return? Step-by-step guide (e.g., "Log into your account &rarr; Order History &rarr; Request Return"). 
            When will I get my refund? Expected processing time (e.g., "5–10 business days after we receive the item").
          </p>
        </div>

        <div className="help-section">
          <p>
            <span className="help-label">4. Payments & Promos: </span> 
            Accepted Payment Methods: List logos or names (Visa, Mastercard, PayPal, Apple Pay, Klarna/Afterpay). 
            Promo Codes: Explain where to enter the code at checkout and why a code might not be working (e.g., "Excludes sale items"). 
            Sales Tax: Briefly explain that tax is calculated based on the shipping address.
          </p>
        </div>

        <div className="help-section">
          <p>
            <span className="help-label">5. Account & Security: </span> 
            Resetting your password: A quick link to the "Forgot Password" flow. 
            Managing your data: How customers can update their email, address, or delete their account. 
            Is my information safe? A brief note on SSL encryption and data privacy.
          </p>
        </div>
      </div>

      <style>{`
        /* =========================================
           1. BASE STYLES (Shared)
           ========================================= */
        .help-center-wrapper {
          background-color: #ffffff;
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          color: #444;
        }
        .help-banner {
          width: 100%;
          background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                      url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80');
          background-size: cover;
          background-position: center;
          color: #fff;
          text-align: center;
        }
        .banner-overlay {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 40px 20px;
        }
        .banner-title {
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 15px;
        }
        .banner-subtitle {
          line-height: 1.5;
          opacity: 0.9;
          margin: 0 auto;
        }
        .help-content-container {
          margin: 0 auto;
          line-height: 1.8;
        }
        .main-heading {
          color: #222;
          text-align: center;
        }
        .help-section {
          margin-bottom: 30px;
          font-size: 1.05rem;
        }
        .help-label {
          color: #000;
          font-weight: bold;
          font-size: 1.1rem;
        }

        /* =========================================
           2. MOBILE VIEW (Up to 767px)
           ========================================= */
        @media (max-width: 767px) {
          .help-banner { min-height: 250px; }
          .banner-title { font-size: 1.8rem; }
          .banner-subtitle { font-size: 0.95rem; }
          .help-content-container { padding: 30px 20px; }
          .main-heading { font-size: 1.5rem; margin-bottom: 20px; }
          .help-section { text-align: left; }
        }

        /* =========================================
           3. TABLET VIEW (768px - 1023px)
           ========================================= */
        @media (min-width: 768px) and (max-width: 1023px) {
          .help-banner { min-height: 300px; }
          .banner-title { font-size: 2.5rem; }
          .help-content-container { padding: 40px 40px; }
          .main-heading { font-size: 1.8rem; }
        }

        /* =========================================
           4. LAPTOP VIEW (1024px - 1439px)
           ========================================= */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .help-banner { min-height: 350px; }
          .banner-title { font-size: 3rem; }
          .banner-subtitle { font-size: 1.1rem; max-width: 600px; }
          .help-content-container { max-width: 800px; padding: 60px 0; }
          .help-section { text-align: justify; }
        }

        /* =========================================
           5. DESKTOP VIEW (1440px and above)
           ========================================= */
        @media (min-width: 1440px) {
          .help-banner { min-height: 400px; }
          .banner-title { font-size: 3.5rem; }
          .banner-subtitle { font-size: 1.2rem; max-width: 750px; }
          .help-content-container { max-width: 900px; padding: 80px 0; }
          .help-section { text-align: justify; }
        }
      `}</style>
    </div>
  );
};

export default HelpCenter;