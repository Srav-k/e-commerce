import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="shipping-policy-page">
      {/* HERO BANNER SECTION */}
      <div className="policy-banner">
        <h1 className="policy-banner-title">Shipping Policy</h1>
        <p className="policy-banner-subtitle">
          Reliable delivery, tracked every step of the way. 
          Bringing our products to your doorstep across the nation.
        </p>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="policy-container">
        <div className="policy-section">
          <h3 className="policy-heading">Order Processing Times</h3>
          <p className="policy-paragraph">
            All orders are processed within 1 to 2 business days (excluding weekends and holidays) 
            after receiving your order confirmation email. You will receive another notification 
            when your order has shipped. We strive to get your items out the door as quickly as 
            possible; however, during high-volume periods or sales events, processing may take 
            up to 3 business days. Please note that processing time is separate from the 
            shipping time you see at checkout.
          </p>
        </div>

        <div className="policy-section">
          <h3 className="policy-heading">Domestic Shipping Rates and Estimates</h3>
          <p className="policy-paragraph">
            We offer a variety of shipping options to meet your needs, ranging from standard 
            ground shipping to expedited overnight services. Shipping charges for your order 
            will be calculated and displayed at checkout based on the weight of your package 
            and your delivery location. We are pleased to offer free standard shipping on all 
            domestic orders over $75. For orders below this amount, a flat-rate shipping fee 
            will apply to ensure reliable and tracked delivery.
          </p>
        </div>

        <div className="policy-section">
          <h3 className="policy-heading">International Shipping</h3>
          <p className="policy-paragraph">
            We currently offer international shipping to select countries worldwide. When ordering 
            from outside the country, please be aware that your shipment may be subject to import 
            duties and taxes (including VAT), which are incurred once a shipment reaches your 
            destination country. These charges are the responsibility of the customer and are 
            not covered by our store.
          </p>
        </div>

        <div className="policy-section">
          <h3 className="policy-heading">How to Track Your Order</h3>
          <p className="policy-paragraph">
            Once your order has shipped, you will receive an email notification from us which 
            will include a tracking number you can use to check its status. Please allow 48 
            hours for the tracking information to become active in the carrier's system.
          </p>
        </div>

        <div className="policy-section">
          <h3 className="policy-heading">P.O. Boxes and Military Addresses</h3>
          <p className="policy-paragraph">
            We understand the importance of flexible delivery options and are happy to ship to 
            P.O. Boxes and APO/FPO/DPO addresses via our standard shipping partner. Please 
            note that expedited shipping methods are generally not available for these address types.
          </p>
        </div>
      </div>

      <style>{`
        /* ---------- BASE STYLES ---------- */
        .shipping-policy-page {
          background-color: #ffffff;
        }

        .policy-banner {
          width: 100%;
          background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), 
                            url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop');
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

        .policy-banner-title {
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          margin: 0 0 15px 0;
        }

        .policy-banner-subtitle {
          opacity: 0.95;
          font-weight: 300;
          line-height: 1.4;
          margin: 0;
        }

        .policy-container {
          margin: auto;
          font-family: 'Inter', 'Segoe UI', sans-serif;
          line-height: 1.8;
          color: #444;
        }

        .policy-section {
          margin-bottom: 40px;
        }

        .policy-heading {
          color: #1a1a1a;
          margin-bottom: 12px;
          font-weight: 700;
          border-left: 4px solid #007bff;
          padding-left: 15px;
        }

        .policy-paragraph {
          color: #555;
          margin: 0;
        }

        /* ---------- MOBILE DEVICES ---------- */
        @media (max-width: 480px) {
          .policy-banner {
            min-height: 250px;
          }
          .policy-banner-title {
            font-size: 1.8rem;
          }
          .policy-banner-subtitle {
            font-size: 0.9rem;
          }
          .policy-container {
            padding: 30px 15px;
          }
          .policy-heading {
            font-size: 1.3rem;
          }
          .policy-paragraph {
            font-size: 0.95rem;
            text-align: left;
          }
        }

        /* ---------- TABLET DEVICES ---------- */
        @media (min-width: 481px) and (max-width: 768px) {
          .policy-banner {
            min-height: 300px;
          }
          .policy-banner-title {
            font-size: 2.5rem;
          }
          .policy-container {
            padding: 40px 20px;
            max-width: 90%;
          }
          .policy-heading {
            font-size: 1.5rem;
          }
        }

        /* ---------- LAPTOP DEVICES ---------- */
        @media (min-width: 769px) and (max-width: 1199px) {
          .policy-banner {
            min-height: 350px;
          }
          .policy-banner-title {
            font-size: 3rem;
          }
          .policy-container {
            padding: 50px 20px;
            max-width: 800px;
          }
          .policy-heading {
            font-size: 1.6rem;
          }
          .policy-paragraph {
            text-align: justify;
          }
        }

        /* ---------- DESKTOP DEVICES ---------- */
        @media (min-width: 1200px) {
          .policy-banner {
            min-height: 400px;
          }
          .policy-banner-title {
            font-size: 3.5rem;
          }
          .policy-banner-subtitle {
            font-size: 1.25rem;
            max-width: 700px;
          }
          .policy-container {
            padding: 60px 20px;
            max-width: 850px;
          }
          .policy-heading {
            font-size: 1.75rem;
          }
          .policy-paragraph {
            font-size: 1.1rem;
            text-align: justify;
          }
        }
      `}</style>
    </div>
  );
};

export default ShippingPolicy;