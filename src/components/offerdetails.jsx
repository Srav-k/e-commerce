import React from "react";
import { useParams, useNavigate } from "react-router-dom";

/* ================= IMAGES (UNCHANGED) ================= */
import cashbackBanner from "../assets/offers/cashback-banner.jpg";
import cashbackP1 from "../assets/offers/cashback-p1.jpg";
import cashbackP2 from "../assets/offers/cashback-p2.jpg";
import cashbackP3 from "../assets/offers/cashback-p3.jpg";

import bogoBanner from "../assets/offers/bogo-banner.jpg";
import bogoP1 from "../assets/offers/bogo-p1.jpg";
import bogoP2 from "../assets/offers/bogo-p2.jpg";

import festivalBanner from "../assets/offers/festival-banner.jpg";
import festivalP1 from "../assets/offers/festival-p1.jpg";
import festivalP2 from "../assets/offers/festival-p2.jpg";
import festivalP3 from "../assets/offers/festival-p3.jpg";

import newuserBanner from "../assets/offers/newuser-banner.jpg";
import newuserP1 from "../assets/offers/newuser-p1.jpg";
import newuserP2 from "../assets/offers/newuser-p2.jpg";

import clearanceBanner from "../assets/offers/clearance-banner.jpg";
import clearanceP1 from "../assets/offers/clearance-p1.jpg";
import clearanceP2 from "../assets/offers/clearance-p2.jpg";
import clearanceP3 from "../assets/offers/clearance-p3.jpg";

import deliveryBanner from "../assets/offers/delivery-banner.jpg";
import deliveryP1 from "../assets/offers/delivery-p1.jpg";
import deliveryP2 from "../assets/offers/delivery-p2.jpg";

const offerContent = {
  cashback: { title: "10% Bank Cashback", banner: cashbackBanner, desc: "Get instant 10% cashback on selected bank cards.", products: [cashbackP1, cashbackP2, cashbackP3] },
  bogo: { title: "Buy 1 Get 1 Free", banner: bogoBanner, desc: "Double the happiness with Buy 1 Get 1 Free deals.", products: [bogoP1, bogoP2] },
  festival: { title: "Festival Special Sale", banner: festivalBanner, desc: "Celebrate festivals with massive discounts.", products: [festivalP1, festivalP2, festivalP3] },
  newuser: { title: "New User Offer", banner: newuserBanner, desc: "Exclusive deals specially for new users.", products: [newuserP1, newuserP2] },
  clearance: { title: "Clearance Sale", banner: clearanceBanner, desc: "Best prices before stocks run out.", products: [clearanceP1, clearanceP2, clearanceP3] },
  delivery: { title: "Free Delivery Today", banner: deliveryBanner, desc: "Enjoy free delivery on all orders today.", products: [deliveryP1, deliveryP2] },
};

const OFFER_CLICK_MAP = {
  bogo: ["clothes", "groceries"],
  festival: ["clothes", "clothes", "clothes"],
  cashback: ["clothes", "home-furniture", "accessories"],
  newuser: ["electronics", "cosmetics"],
  clearance: ["home-furniture", "cosmetics", "accessories"],
  delivery: ["groceries", "groceries"],
};

const OfferDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const offer = offerContent[id];

  if (!offer) return <h2 className="not-found">Offer Not Found</h2>;

  return (
    <div className="offer-details-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="offer-banner" style={{ backgroundImage: `url(${offer.banner})` }}>
        <div className="banner-overlay">
          <h1>{offer.title}</h1>
        </div>
      </div>

      <div className="offer-desc-container">
        <p className="offer-desc">{offer.desc}</p>
      </div>

      <div className="product-grid">
        {offer.products.map((img, i) => (
          <div
            className="product-card"
            key={i}
            onClick={() => {
              const target = OFFER_CLICK_MAP[id]?.[i];
              if (target) navigate(`/category/${target}`);
            }}
          >
            <img src={img} alt="product" />
          </div>
        ))}
      </div>

      <style>{`
        /* =========================================
           1. BASE STYLES (General)
           ========================================= */
        .offer-details-page {
          background: #fdfdfd;
          min-height: 100vh;
        }
        .back-btn {
          margin: 20px;
          padding: 8px 18px;
          border-radius: 8px;
          border: 1px solid #ddd;
          background: #fff;
          cursor: pointer;
          font-weight: 600;
          transition: 0.2s;
        }
        .back-btn:hover { background: #f0f0f0; }
        
        .offer-banner {
          width: 100%;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          position: relative;
        }
        .banner-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6));
        }
        .banner-overlay h1 {
          color: #fff;
          font-weight: 800;
          text-align: center;
          padding: 0 20px;
        }
        .offer-desc-container {
          display: flex;
          justify-content: center;
          padding: 0 20px;
        }
        .offer-desc {
          text-align: center;
          background: #ffe9c6;
          color: #5c4017;
          border-radius: 16px;
          font-weight: 500;
        }
        .product-grid {
          display: grid;
          margin: 0 auto;
        }
        .product-card {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          cursor: pointer;
          background: #fff;
          transition: transform 0.3s ease;
        }
        .product-card img {
          width: 100%;
          object-fit: contain;
          display: block;
        }
        .not-found { text-align: center; padding: 100px; }

        /* =========================================
           2. MOBILE VIEW (Up to 767px)
           ========================================= */
        @media (max-width: 767px) {
          .offer-banner { height: 220px; }
          .banner-overlay h1 { font-size: 28px; }
          .offer-desc { font-size: 16px; margin: 20px auto; padding: 15px; width: 100%; }
          .product-grid { 
            grid-template-columns: 1fr; 
            gap: 20px; 
            padding: 20px;
          }
          .product-card img { height: 250px; }
        }

        /* =========================================
           3. TABLET VIEW (768px - 1023px)
           ========================================= */
        @media (min-width: 768px) and (max-width: 1023px) {
          .offer-banner { height: 320px; }
          .banner-overlay h1 { font-size: 40px; }
          .offer-desc { font-size: 18px; margin: 30px auto; padding: 20px; width: 80%; }
          .product-grid { 
            grid-template-columns: repeat(2, 1fr); 
            gap: 25px; 
            padding: 30px;
          }
          .product-card img { height: 300px; }
        }

        /* =========================================
           4. LAPTOP VIEW (1024px - 1439px)
           ========================================= */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .offer-banner { height: 400px; }
          .banner-overlay h1 { font-size: 50px; }
          .offer-desc { font-size: 20px; margin: 40px auto; padding: 24px; max-width: 800px; }
          .product-grid { 
            grid-template-columns: repeat(3, 1fr); 
            gap: 30px; 
            padding: 40px;
            max-width: 1100px;
          }
          .product-card img { height: 320px; }
          .product-card:hover { transform: translateY(-10px); }
        }

        /* =========================================
           5. DESKTOP VIEW (1440px and above)
           ========================================= */
        @media (min-width: 1440px) {
          .offer-banner { height: 500px; }
          .banner-overlay h1 { font-size: 60px; }
          .offer-desc { font-size: 22px; margin: 50px auto; padding: 30px; max-width: 1000px; }
          .product-grid { 
            grid-template-columns: repeat(3, 1fr); 
            gap: 40px; 
            padding: 50px 0;
            max-width: 1300px;
          }
          .product-card img { height: 380px; }
          .product-card:hover { transform: scale(1.03); box-shadow: 0 20px 40px rgba(0,0,0,0.15); }
        }
      `}</style>
    </div>
  );
};

export default OfferDetails;