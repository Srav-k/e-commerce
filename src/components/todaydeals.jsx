import React from "react";
import { useNavigate } from "react-router-dom";

import cashbackBanner from "../assets/todaydeals/cashback.jpg";
import electronicsImg from "../assets/todaydeals/electro.jpg";
import groceriesImg from "../assets/todaydeals/grocereis.jpg";
import fashionImg from "../assets/todaydeals/fashions.jpg";
import homeImg from "../assets/todaydeals/homeapple.jpg";
import booksImg from "../assets/todaydeals/booksal.jpg";
import toysImg from "../assets/todaydeals/toysale.jpg";

const TodayDeals = () => {
  const navigate = useNavigate();

  const deals = [
    { id: "electronics", title: "Up to 60% off Electronics", img: electronicsImg },
    { id: "groceries", title: "Groceries Combo Offers", img: groceriesImg },
    { id: "fashion", title: "Fashion Mega Sale", img: fashionImg },
    { id: "home", title: "Home Appliances Deals", img: homeImg },
    { id: "books", title: "Books Bestseller Sale", img: booksImg },
    { id: "toys", title: "Toys & Kids Zone", img: toysImg },
  ];

  return (
    <div className="deals-page-container">
      {/* ---------- CSS STYLES ---------- */}
      <style>{`
        /* =========================================
           1. BASE STYLES (Common for all)
           ========================================= */
        .cashback-banner {
          width: 100%;
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .cashback-banner-overlay {
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #fff;
          text-align: center;
          padding: 20px;
        }

        .section-title {
          text-align: center;
          font-weight: 800;
          color: #222;
        }

        .deal-grid {
          display: grid;
          gap: 24px;
        }

        .deal-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 8px 22px rgba(0,0,0,0.12);
          transition: transform 0.3s ease;
          text-align: center;
        }

        .deal-card:hover {
          transform: translateY(-8px);
        }

        .deal-card img {
          width: 100%;
          object-fit: cover;
        }

        .deal-card p {
          padding: 15px;
          font-weight: 600;
          margin: 0;
        }

        /* =========================================
           2. MOBILE DEVICES (up to 480px)
           ========================================= */
        @media (max-width: 480px) {
          .cashback-banner { height: 180px; }
          .cashback-banner-overlay h1 { font-size: 20px; }
          .cashback-banner-overlay p { font-size: 14px; }
          .section-title { margin: 25px 0 15px; font-size: 22px; }
          .deal-grid { 
            grid-template-columns: 1fr; 
            padding: 0 15px 40px; 
          }
          .deal-card img { height: 160px; }
        }

        /* =========================================
           3. TABLET DEVICES (481px to 768px)
           ========================================= */
        @media (min-width: 481px) and (max-width: 768px) {
          .cashback-banner { height: 240px; }
          .section-title { margin: 30px 0 20px; font-size: 26px; }
          .deal-grid { 
            grid-template-columns: repeat(2, 1fr); 
            padding: 0 25px 50px; 
          }
          .deal-card img { height: 170px; }
        }

        /* =========================================
           4. LAPTOP DEVICES (769px to 1200px)
           ========================================= */
        @media (min-width: 769px) and (max-width: 1200px) {
          .cashback-banner { height: 280px; }
          .section-title { margin: 40px 0 24px; font-size: 30px; }
          .deal-grid { 
            grid-template-columns: repeat(3, 1fr); 
            padding: 0 40px 60px; 
          }
          .deal-card img { height: 180px; }
        }

        /* =========================================
           5. DESKTOP DEVICES (1201px and above)
           ========================================= */
        @media (min-width: 1201px) {
          .cashback-banner { height: 350px; }
          .section-title { margin: 50px 0 30px; font-size: 36px; }
          .deal-grid { 
            grid-template-columns: repeat(4, 1fr); 
            padding: 0 80px 80px; 
            max-width: 1400px;
            margin: 0 auto;
          }
          .deal-card img { height: 200px; }
        }
      `}</style>

      {/* ---------- HTML STRUCTURE ---------- */}
      <div
        className="cashback-banner"
        style={{ backgroundImage: `url(${cashbackBanner})` }}
      >
        <div className="cashback-banner-overlay">
          <h1>10% Bank Cashback</h1>
          <p>Get instant 10% cashback on selected bank cards</p>
        </div>
      </div>

      <h2 className="section-title">Today's Deals</h2>

      <div className="deal-grid">
        {deals.map((deal) => (
          <div
            key={deal.id}
            className="deal-card"
            onClick={() => navigate(`/deals/${deal.id}`)}
          >
            <img src={deal.img} alt={deal.title} />
            <p>{deal.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayDeals;