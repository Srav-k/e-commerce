import React from "react";

const ReturnsRefunds = () => {
  return (
    <div className="rr-page-wrapper">
      {/* FULL WIDTH CUSTOM BANNER */}
      <div className="rr-banner">
        <h1 className="rr-banner-title">Returns & Refunds</h1>
        <p className="rr-banner-subtitle">
          Easy returns and quick refunds. We value your satisfaction above all else.
        </p>
      </div>

      {/* PARAGRAPH CONTENT AREA */}
      <div className="rr-container">
        <div className="rr-section">
          <h3 className="rr-heading">Our Return Policy</h3>
          <p className="rr-paragraph">
            We want you to love your purchase, but we understand that sometimes things aren't quite right. 
            You have 30 days from the date of delivery to return any item for a refund or exchange. 
            To be eligible for a return, your item must be in the same condition that you received it: 
            unworn or unused, with original tags attached, and in its original packaging. Please keep your 
            receipt or proof of purchase handy to ensure a smooth processing experience.
          </p>
        </div>

        <div className="rr-section">
          <h3 className="rr-heading">Non-Returnable Items</h3>
          <p className="rr-paragraph">
            While we strive to accept most returns, certain types of items cannot be sent back for hygiene 
            or safety reasons. This includes perishable goods, custom-made or personalized products, and 
            personal care items such as beauty products or intimate apparel. Additionally, items marked as 
            "Final Sale" or purchased using a clearance discount are not eligible for return or exchange. 
          </p>
        </div>

        <div className="rr-section">
          <h3 className="rr-heading">How to Start a Return</h3>
          <p className="rr-paragraph">
            Initiating a return is simple and can be done through our online portal. Simply log into your 
            account, navigate to your "Order History," and select the items you wish to send back. Once 
            your request is approved, we will provide you with a prepaid shipping label and detailed 
            instructions on how and where to send your package.
          </p>
        </div>

        <div className="rr-section">
          <h3 className="rr-heading">The Refund Process</h3>
          <p className="rr-paragraph">
            Once we receive and inspect your returned item, we will notify you via email regarding the 
            status of your refund. If approved, the refund will be automatically processed back to your 
            original payment method. Please keep in mind that it typically takes 5 to 10 business days for 
            your bank or credit card company to process and post the refund to your account.
          </p>
        </div>
      </div>

      <style>{`
        /* =========================================
           1. BASE STYLES (General)
           ========================================= */
        .rr-page-wrapper {
          background-color: #fff;
          font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          color: #333;
        }

        .rr-banner {
          width: 100%;
          background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                      url('https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80');
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

        .rr-banner-title {
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin: 0 0 10px 0;
        }

        .rr-banner-subtitle {
          opacity: 0.9;
          font-weight: 300;
          margin: 0;
        }

        .rr-container {
          margin: auto;
          line-height: 1.8;
        }

        .rr-section {
          margin-bottom: 40px;
        }

        .rr-heading {
          color: #111;
          margin-bottom: 15px;
          border-bottom: 2px solid #f0f0f0;
          padding-bottom: 10px;
          display: block;
        }

        .rr-paragraph {
          color: #555;
          margin: 0;
        }

        /* =========================================
           2. MOBILE VIEW (Up to 767px)
           ========================================= */
        @media (max-width: 767px) {
          .rr-banner { min-height: 250px; }
          .rr-banner-title { font-size: 1.8rem; }
          .rr-banner-subtitle { font-size: 0.95rem; }
          .rr-container { padding: 40px 15px; }
          .rr-heading { font-size: 1.4rem; }
          .rr-paragraph { font-size: 0.95rem; text-align: left; }
        }

        /* =========================================
           3. TABLET VIEW (768px - 1023px)
           ========================================= */
        @media (min-width: 768px) and (max-width: 1023px) {
          .rr-banner { min-height: 300px; }
          .rr-banner-title { font-size: 2.5rem; }
          .rr-container { padding: 50px 30px; max-width: 700px; }
          .rr-heading { font-size: 1.6rem; }
          .rr-paragraph { font-size: 1rem; }
        }

        /* =========================================
           4. LAPTOP VIEW (1024px - 1439px)
           ========================================= */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .rr-banner { min-height: 350px; }
          .rr-banner-title { font-size: 3.2rem; }
          .rr-container { padding: 60px 20px; max-width: 850px; }
          .rr-heading { font-size: 1.8rem; }
          .rr-paragraph { font-size: 1.05rem; text-align: justify; }
        }

        /* =========================================
           5. DESKTOP VIEW (1440px and above)
           ========================================= */
        @media (min-width: 1440px) {
          .rr-banner { min-height: 450px; }
          .rr-banner-title { font-size: 4rem; }
          .rr-banner-subtitle { font-size: 1.4rem; max-width: 800px; }
          .rr-container { padding: 80px 20px; max-width: 1000px; }
          .rr-heading { font-size: 2rem; }
          .rr-paragraph { font-size: 1.1rem; text-align: justify; }
        }
      `}</style>
    </div>
  );
};

export default ReturnsRefunds;