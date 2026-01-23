import React from "react";
import { useNavigate } from "react-router-dom";

import cashback from "../assets/offers/cashback.jpg";
import bogo from "../assets/offers/bogo.jpg";
import festival from "../assets/offers/festival.jpg";
import newuser from "../assets/offers/newuser.jpg";
import clearance from "../assets/offers/clearance.jpg";
import delivery from "../assets/offers/delivery.jpg";

const offers = [
  { id: "cashback", title: "10% Bank Cashback", img: cashback },
  { id: "bogo", title: "Buy 1 Get 1 Free", img: bogo },
  { id: "festival", title: "Festival Special Sale", img: festival },
  { id: "newuser", title: "New User Offer", img: newuser },
  { id: "clearance", title: "Clearance Sale", img: clearance },
  { id: "delivery", title: "Free Delivery Today", img: delivery },
];

const OfferZone = () => {
  const navigate = useNavigate();

  return (
    <div className="offer-zone-container">
      <h2 className="section-title">Offers Zone</h2>

      <div className="offer-grid">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="offer-card"
            onClick={() => navigate(`/offers/${offer.id}`)}
          >
            <div className="offer-image-wrapper">
              <img src={offer.img} alt={offer.title} />
            </div>
            <p className="offer-title">{offer.title}</p>
          </div>
        ))}
      </div>

      <style>{`
        /* =========================================
           1. BASE STYLES (General)
           ========================================= */
        .offer-zone-container {
          width: 100%;
          background-color: #f9f9f9;
        }
        .section-title {
          text-align: center;
          color: #222;
          font-weight: 800;
        }
        .offer-grid {
          display: grid;
          margin: 0 auto;
        }
        .offer-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          text-align: center;
          display: flex;
          flex-direction: column;
        }
        .offer-image-wrapper {
          width: 100%;
          overflow: hidden;
        }
        .offer-image-wrapper img {
          width: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .offer-title {
          font-weight: 600;
          color: #333;
        }

        /* =========================================
           2. MOBILE VIEW (Up to 767px)
           ========================================= */
        @media (max-width: 767px) {
          .section-title { font-size: 24px; margin: 30px 0 20px; }
          .offer-grid { 
            grid-template-columns: repeat(1, 1fr); 
            gap: 20px; 
            padding: 0 20px 50px; 
          }
          .offer-image-wrapper img { height: 180px; }
          .offer-title { font-size: 16px; padding: 12px; }
        }

        /* =========================================
           3. TABLET VIEW (768px - 1023px)
           ========================================= */
        @media (min-width: 768px) and (max-width: 1023px) {
          .section-title { font-size: 28px; margin: 40px 0 25px; }
          .offer-grid { 
            grid-template-columns: repeat(2, 1fr); 
            gap: 25px; 
            padding: 0 40px 60px; 
          }
          .offer-image-wrapper img { height: 200px; }
          .offer-title { font-size: 17px; padding: 14px; }
        }

        /* =========================================
           4. LAPTOP VIEW (1024px - 1439px)
           ========================================= */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .section-title { font-size: 32px; margin: 50px 0 30px; }
          .offer-grid { 
            grid-template-columns: repeat(3, 1fr); 
            gap: 30px; 
            padding: 0 60px 80px;
            max-width: 1200px;
          }
          .offer-image-wrapper img { height: 220px; }
          .offer-title { font-size: 18px; padding: 16px; }
          .offer-card:hover { transform: translateY(-8px); box-shadow: 0 15px 30px rgba(0,0,0,0.15); }
          .offer-card:hover img { transform: scale(1.05); }
        }

        /* =========================================
           5. DESKTOP VIEW (1440px and above)
           ========================================= */
        @media (min-width: 1440px) {
          .section-title { font-size: 36px; margin: 60px 0 40px; }
          .offer-grid { 
            grid-template-columns: repeat(6, 1fr); 
            gap: 30px; 
            padding: 0 80px 100px;
            max-width: 1600px;
          }
          .offer-image-wrapper img { height: 200px; }
          .offer-title { font-size: 19px; padding: 18px; }
          .offer-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
          .offer-card:hover img { transform: scale(1.08); }
        }
      `}</style>
    </div>
  );
};

export default OfferZone;