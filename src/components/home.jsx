import React from "react";
import { useNavigate } from "react-router-dom";
import TodayDeals from "../components/todaydeals";

// Category images
import groceries from "../assets/groceries.jpg";
import electronics from "../assets/electronics.jpg";
import clothes from "../assets/clothes.jpg";
import cosmetics from "../assets/cosmetics.jpg";
import books from "../assets/books.jpg";
import toys from "../assets/toys.jpg";
import jewellery from "../assets/jewellery.jpg";
import accessories from "../assets/accessories.jpg";
import homeFurniture from "../assets/homefurniture.jpg";

// Hero video
import heroVideo from "../assets/shopbannerh.mp4";

// Offers Zone Component
import OfferZone from "./offerzone";

const Home = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Groceries", slug: "groceries", img: groceries },
    { name: "Electronics", slug: "electronics", img: electronics },
    { name: "Accessories", slug: "accessories", img: accessories },
    { name: "Home & Furniture", slug: "home-furniture", img: homeFurniture },
    { name: "Cosmetics", slug: "cosmetics", img: cosmetics },
    { name: "Books", slug: "books", img: books },
    { name: "Toys", slug: "toys", img: toys },
    { name: "Jewellery", slug: "jewellery", img: jewellery },
    { name: "Clothes", slug: "clothes", img: clothes },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <div className="carousel">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="carousel-video"
        />

        <div className="video-overlay">
          <div className="video-content">
            <h1>Welcome to Shoonu-Shop</h1>
            <p>Shop with us & grab the best deals everyday</p>

            <div className="hero-buttons">
              <button onClick={() => navigate("/subcategory/groceries")}>
                Explore Now
              </button>
              <button
                className="secondary"
                onClick={() => navigate("/todaydeals")}
              >
                Today's Deals
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CATEGORIES */}
      <h2 className="section-title">Shop by Category</h2>
      <div className="category-grid">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="category-card"
            onClick={() => navigate(`/subcategory/${cat.slug}`)}
          >
            <img src={cat.img} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>

      <TodayDeals />
      <OfferZone />

      {/* ========= RESPONSIVE INTERNAL CSS ========= */}
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        .carousel {
          position: relative;
          width: 100%;
          min-height: 60vh;
        }

        .carousel-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .video-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          text-align: center;
        }

        .video-content {
          width: 100%;
          max-width: 900px;
          color: #fff;
        }

        .video-content h1 {
          font-size: clamp(24px, 6vw, 60px);
          font-weight: 800;
          line-height: 1.2;
        }

        .video-content p {
          font-size: clamp(14px, 3.5vw, 24px);
          margin: 14px 0 24px;
        }

        .hero-buttons {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .hero-buttons button {
          padding: 12px 24px;
          border-radius: 24px;
          border: none;
          font-weight: bold;
          cursor: pointer;
          background: #ffd700;
          font-size: 15px;
          min-width: 150px;
        }

        .secondary {
          background: #ffffff;
          color: #333;
        }

        .section-title {
          text-align: center;
          margin: 40px 16px 24px;
          font-size: clamp(22px, 4vw, 34px);
          font-weight: 800;
        }

        .category-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
          padding: 0 16px;
          margin-bottom: 60px;
        }

        .category-card {
          background: #fff;
          border-radius: 18px;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          transition: transform 0.3s ease;
          text-align: center;
          overflow: hidden;
        }

        .category-card:hover {
          transform: translateY(-6px);
        }

        .category-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .category-card p {
          padding: 14px;
          font-size: 16px;
          font-weight: bold;
        }

        /* ===== TABLET ===== */
        @media (min-width: 600px) {
          .category-grid {
            grid-template-columns: repeat(2, 1fr);
            padding: 0 24px;
          }
        }

        @media (min-width: 768px) {
          .carousel {
            min-height: 65vh;
          }

          .category-grid {
            grid-template-columns: repeat(3, 1fr);
            padding: 0 40px;
            margin-bottom: 80px;
          }

          .category-card img {
            height: 220px;
          }
        }

        /* ===== DESKTOP ===== */
        @media (min-width: 1024px) {
          .carousel {
            min-height: 80vh;
          }

          .category-grid {
            grid-template-columns: repeat(4, 1fr);
            padding: 0 60px;
            margin-bottom: 100px;
          }

          .category-card img {
            height: 260px;
          }
        }

        /* ===== LARGE SCREENS ===== */
        @media (min-width: 1400px) {
          .category-grid {
            max-width: 1400px;
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
