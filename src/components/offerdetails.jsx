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

/* ================= CONTENT (UNCHANGED) ================= */
const offerContent = {
  cashback: {
    title: "10% Bank Cashback",
    banner: cashbackBanner,
    desc: "Get instant 10% cashback on selected bank cards.",
    products: [cashbackP1, cashbackP2, cashbackP3],
  },
  bogo: {
    title: "Buy 1 Get 1 Free",
    banner: bogoBanner,
    desc: "Double the happiness with Buy 1 Get 1 Free deals.",
    products: [bogoP1, bogoP2],
  },
  festival: {
    title: "Festival Special Sale",
    banner: festivalBanner,
    desc: "Celebrate festivals with massive discounts.",
    products: [festivalP1, festivalP2, festivalP3],
  },
  newuser: {
    title: "New User Offer",
    banner: newuserBanner,
    desc: "Exclusive deals specially for new users.",
    products: [newuserP1, newuserP2],
  },
  clearance: {
    title: "Clearance Sale",
    banner: clearanceBanner,
    desc: "Best prices before stocks run out.",
    products: [clearanceP1, clearanceP2, clearanceP3],
  },
  delivery: {
    title: "Free Delivery Today",
    banner: deliveryBanner,
    desc: "Enjoy free delivery on all orders today.",
    products: [deliveryP1, deliveryP2],
  },
};

/* ================= CLICK ROUTE MAP (NEW) ================= */
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

  if (!offer) return <h2>Offer Not Found</h2>;

  return (
    <>
      {/* 🔙 BACK BUTTON */}
      <button
        style={{
          margin: "20px",
          padding: "8px 16px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          background: "#fff",
          cursor: "pointer",
          fontWeight: "500",
        }}
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="offer-banner">
        <div className="banner-overlay">
          <h1>{offer.title}</h1>
        </div>
      </div>

      <p className="offer-desc">{offer.desc}</p>

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

      {/* 🔥 ORIGINAL STYLES – NOT TOUCHED */}
      <style>{`
        .offer-banner {
          height: 420px;
          background: url(${offer.banner}) center/cover no-repeat;
          position: relative;
        }

        .banner-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.25),
            rgba(0,0,0,0.55)
          );
        }

        .banner-overlay h1 {
          color: #fff;
          font-size: 52px;
          font-weight: 800;
          text-align: center;
        }

        .offer-desc {
          text-align: center;
          font-size: 20px;
          margin: 35px auto;
          max-width: 900px;
          background: #ffe9c6;
          padding: 24px;
          border-radius: 16px;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
          margin: 50px;
        }

        .product-card {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
          align-items: stretch;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 14px 32px rgba(0,0,0,0.2);
          cursor: pointer;
        }

        .product-card img {
          width: 100%;
          height: 340px;
          object-fit: contain;
          display: block;
          background: #fff;
          transition: 0.4s ease;
        }

        @media (max-width: 768px) {
          .offer-banner {
            height: 300px;
          }

          .banner-overlay h1 {
            font-size: 34px;
          }

          .product-card img {
            height: 260px;
          }
        }
      `}</style>
    </>
  );
};

export default OfferDetails;
