import React from "react";

const TermsConditions = () => {
  return (
    <div className="terms-page-wrapper">
      {/* HERO BANNER SECTION */}
      <div className="terms-banner">
        <h1 className="terms-banner-title">Terms & Conditions</h1>
        <p className="terms-banner-subtitle">
          Please read our terms carefully. These rules govern your use of our services 
          and ensure a safe community for all shoppers.
        </p>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="terms-container">
        <div className="terms-section">
          <h3 className="terms-heading">Agreement of Service</h3>
          <p className="terms-paragraph">
            By accessing and using this website, you agree to abide by our terms of service, 
            which govern the relationship between you and our online store. We strive to provide 
            accurate product descriptions, pricing, and availability; however, we reserve the right to 
            correct any errors and to modify or update information at any time without prior notice. 
            All content on this site, including text, logos, and images, is our intellectual property, 
            and users are prohibited from reproducing or redistributing any materials for commercial 
            purposes without our express written consent.
          </p>
        </div>

        <div className="terms-section">
          <h3 className="terms-heading">User Responsibilities & Liability</h3>
          <p className="terms-paragraph">
            Your use of our services also signifies your acceptance of our shipping and 
            return policies, which are designed to ensure a fair and transparent transaction for 
            every customer. We prioritize the security of your personal data and use industry-standard 
            encryption to protect your information during the checkout process. Please note that we 
            reserve the right to refuse service, terminate accounts, or cancel orders at our sole 
            discretion if we detect fraudulent activity or a violation of these terms.
          </p>
        </div>
      </div>

      <style>{`
        /* =========================================
           1. BASE STYLES (Common)
           ========================================= */
        .terms-page-wrapper {
          background-color: #ffffff;
          font-family: 'Inter', 'Segoe UI', sans-serif;
          color: #444;
          line-height: 1.9;
        }

        .terms-banner {
          width: 100%;
          background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), 
                            url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #ffffff;
          text-align: center;
          padding: 0 20px;
        }

        .terms-banner-title {
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin: 0 0 15px 0;
        }

        .terms-banner-subtitle {
          opacity: 0.9;
          font-weight: 300;
          margin: 0;
        }

        .terms-container {
          margin: auto;
        }

        .terms-section {
          margin-bottom: 30px;
        }

        .terms-heading {
          color: #1a1a1a;
          font-weight: 700;
          border-left: 4px solid #555;
          padding-left: 15px;
          margin-bottom: 20px;
        }

        .terms-paragraph {
          color: #555;
          margin-bottom: 25px;
        }

        /* =========================================
           2. MOBILE VIEW (Up to 480px)
           ========================================= */
        @media (max-width: 480px) {
          .terms-banner { min-height: 250px; }
          .terms-banner-title { font-size: 1.8rem; }
          .terms-banner-subtitle { font-size: 0.95rem; }
          .terms-container { padding: 40px 15px; }
          .terms-heading { font-size: 1.3rem; }
          .terms-paragraph { font-size: 0.95rem; text-align: left; }
        }

        /* =========================================
           3. TABLET VIEW (481px - 768px)
           ========================================= */
        @media (min-width: 481px) and (max-width: 768px) {
          .terms-banner { min-height: 320px; }
          .terms-banner-title { font-size: 2.5rem; }
          .terms-container { padding: 50px 30px; max-width: 90%; }
          .terms-heading { font-size: 1.5rem; }
          .terms-paragraph { font-size: 1rem; }
        }

        /* =========================================
           4. LAPTOP VIEW (769px - 1439px)
           ========================================= */
        @media (min-width: 769px) and (max-width: 1439px) {
          .terms-banner { min-height: 400px; }
          .terms-banner-title { font-size: 3.2rem; }
          .terms-banner-subtitle { font-size: 1.25rem; max-width: 650px; }
          .terms-container { padding: 60px 20px; max-width: 800px; }
          .terms-heading { font-size: 1.7rem; }
          .terms-paragraph { font-size: 1.05rem; text-align: justify; }
        }

        /* =========================================
           5. DESKTOP VIEW (1440px and above)
           ========================================= */
        @media (min-width: 1440px) {
          .terms-banner { min-height: 500px; }
          .terms-banner-title { font-size: 4rem; }
          .terms-banner-subtitle { font-size: 1.4rem; max-width: 800px; }
          .terms-container { padding: 80px 0; max-width: 950px; }
          .terms-heading { font-size: 2rem; }
          .terms-paragraph { font-size: 1.15rem; text-align: justify; }
        }
      `}</style>
    </div>
  );
};

export default TermsConditions;