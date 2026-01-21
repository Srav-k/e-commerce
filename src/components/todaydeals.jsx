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
    <>
      <style>{`
        .cashback-banner {
          width: 100%;
          height: clamp(200px, 40vw, 320px);
          background-size: cover;
          background-position: center;
        }

        .cashback-banner-overlay {
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.45);
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
          margin: 40px 0 24px;
          font-size: clamp(22px, 4vw, 32px);
          font-weight: 800;
        }

        .deal-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
          padding: 0 clamp(16px, 4vw, 60px) 60px;
        }

        .deal-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 8px 22px rgba(0,0,0,0.12);
          transition: 0.3s;
          text-align: center;
        }

        .deal-card:hover {
          transform: translateY(-8px);
        }

        .deal-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .deal-card p {
          padding: 14px;
          font-size: 17px;
          font-weight: 600;
        }
      `}</style>

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
    </>
  );
};

export default TodayDeals;
