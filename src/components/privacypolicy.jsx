import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      {/* HERO BANNER SECTION */}
      <div className="privacy-banner">
        <div className="banner-overlay">
          <h1 className="banner-title">Privacy Policy</h1>
          <p className="banner-subtitle">
            Your data is safe with Shoonova. We are committed to protecting your privacy 
            and ensuring a secure shopping experience.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="privacy-container">
        <div className="privacy-section">
          <h3 className="section-heading">Information We Collect</h3>
          <p className="privacy-paragraph">
            When you visit our site, we collect certain information necessary to process your purchases 
            and improve your shopping experience. This includes personal details you provide directly to us, 
            such as your name, billing address, shipping address, email address, and phone number. 
            Additionally, we automatically collect information about your device, including your IP address, 
            browser type, and how you interact with our website through cookies and similar tracking technologies. 
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="section-heading">How We Use Your Information</h3>
          <p className="privacy-paragraph">
            We use the information we collect primarily to fulfill any orders placed through the site, which 
            includes processing your payment information, arranging for shipping, and providing you with 
            invoices or order confirmations. Beyond order fulfillment, we use this data to communicate with 
            you, screen our orders for potential risk or fraud, and provide you with information or advertising 
            relating to our products or services.
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="section-heading">Sharing Your Personal Information</h3>
          <p className="privacy-paragraph">
            The security of your personal information is a top priority for us. We implement a variety of 
            administrative, technical, and physical security measures to protect your data from 
            unauthorized access, loss, or alteration. While we strive to use commercially acceptable 
            means to protect your personal information, please remember that no method of transmission 
            over the internet is 100% secure.
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="section-heading">Your Rights and Choices</h3>
          <p className="privacy-paragraph">
            Depending on where you live, you may have certain rights regarding your personal information, 
            such as the right to access the data we hold about you, to ask that your data be corrected, 
            updated, or deleted. You can exercise these rights at any time by contacting us through 
            the information provided on our contact page.
          </p>
        </div>
      </div>

      <style>{`
        /* =========================================
           1. BASE STYLES (General)
           ========================================= */
        .privacy-page {
          background-color: #ffffff;
          font-family: 'Inter', 'Segoe UI', sans-serif;
          line-height: 1.9;
          color: #444;
        }

        .privacy-banner {
          width: 100%;
          background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), 
                            url('https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          color: #ffffff;
          text-align: center;
        }

        .banner-overlay {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          padding: 0 20px;
        }

        .banner-title {
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin: 0 0 15px 0;
        }

        .banner-subtitle {
          opacity: 0.9;
          font-weight: 300;
          margin: 0;
        }

        .privacy-container {
          margin: auto;
          padding: 60px 20px;
        }

        .privacy-section {
          margin-bottom: 40px;
        }

        .section-heading {
          color: #1a1a1a;
          margin-bottom: 15px;
          font-weight: 700;
          border-left: 4px solid #28a745;
          padding-left: 15px;
        }

        .privacy-paragraph {
          color: #555;
          text-align: justify;
        }

        /* =========================================
           2. MOBILE VIEW (Up to 767px)
           ========================================= */
        @media (max-width: 767px) {
          .privacy-banner { min-height: 250px; }
          .banner-title { font-size: 2rem; }
          .banner-subtitle { font-size: 1rem; }
          .privacy-container { padding: 30px 15px; }
          .section-heading { font-size: 1.4rem; }
          .privacy-paragraph { font-size: 1rem; text-align: left; }
        }

        /* =========================================
           3. TABLET VIEW (768px - 1023px)
           ========================================= */
        @media (min-width: 768px) and (max-width: 1023px) {
          .privacy-banner { min-height: 350px; }
          .banner-title { font-size: 3rem; }
          .banner-subtitle { font-size: 1.15rem; max-width: 600px; }
          .privacy-container { max-width: 700px; }
          .section-heading { font-size: 1.6rem; }
        }

        /* =========================================
           4. LAPTOP VIEW (1024px - 1439px)
           ========================================= */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .privacy-banner { min-height: 400px; }
          .banner-title { font-size: 3.5rem; }
          .banner-subtitle { font-size: 1.25rem; max-width: 700px; }
          .privacy-container { max-width: 850px; }
          .section-heading { font-size: 1.75rem; }
        }

        /* =========================================
           5. DESKTOP VIEW (1440px and above)
           ========================================= */
        @media (min-width: 1440px) {
          .privacy-banner { min-height: 500px; }
          .banner-title { font-size: 4rem; }
          .banner-subtitle { font-size: 1.4rem; max-width: 800px; }
          .privacy-container { max-width: 1000px; }
          .section-heading { font-size: 2rem; }
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;