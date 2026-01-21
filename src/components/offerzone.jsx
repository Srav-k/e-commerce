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
    <>
      <h2 className="section-title">Offers Zone</h2>

      <div className="offer-grid">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="offer-card"
            onClick={() => navigate(`/offers/${offer.id}`)}
          >
            <img src={offer.img} alt={offer.title} />
            <p>{offer.title}</p>
          </div>
        ))}
      </div>

      <style>{`
        .section-title {
          text-align: center;
          font-size: 32px;
          font-weight: 800;
          margin: 50px 0 30px;
        }

        /* ✅ FULL WIDTH GRID */
        .offer-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 30px;
          padding: 0 60px 90px;
        }

        .offer-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 10px 26px rgba(0,0,0,0.15);
          transition: 0.35s;
          text-align: center;
        }

        .offer-card:hover {
          transform: translateY(-10px) scale(1.06);
        }

        .offer-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .offer-card p {
          padding: 16px;
          font-size: 18px;
          font-weight: 600;
        }

        /* RESPONSIVE */
        @media (max-width: 1200px) {
          .offer-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .offer-grid {
            grid-template-columns: repeat(2, 1fr);
            padding: 0 30px 70px;
          }
        }

        @media (max-width: 480px) {
          .offer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default OfferZone;
