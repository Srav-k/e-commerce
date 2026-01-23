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
        /* 1. BASE STYLES (Applies to all) */
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          background-color: transparent;
        }

        .carousel {
          position: relative;
          width: 100%;
          display: flex;
          overflow: hidden;
          background-color: rgba(0,0,0,0.8);
        }

        .carousel-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          background-color: rgba(0,0,0,0.8);
        }

        .video-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .video-content {
          color: #fff;
          width: 100%;
        }

        .video-content h1 {
          font-weight: 800;
          margin: 0;
        }

        .hero-buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap:10px;
          margin-top:15px;
                  }

        .hero-buttons button {
          border: none;
          font-weight: bold;
          cursor: pointer;
          background: #ffd700;
          transition: 0.3s;
        }

        .secondary {
          background: #ffffff !important;
          color: #333;
        }

        .section-title {
          font-weight: 800;
          color: #222;
        }

        .category-grid {
          display: grid;
          width: 100%;
        }

        .category-card {
          background: #fff;
          border-radius: 12px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          text-align: center;
          border: 1px solid #eee;
        }

        .category-card img {
          width: 100%;
          object-fit: cover;
        }

        /* 2. MOBILE VIEW (Up to 767px) */
        @media (max-width: 767px) {
          /* Overriding parent containers that might squeeze mobile view */
          main, .App, #root { padding: 0 !important; margin: 0 !important; }

          .carousel { height: 50vh; }
          
          .video-content { padding: 0 20px; }
          .video-content h1 { font-size: 26px; }
          .video-content p { font-size: 14px; margin: 10px 0 20px; }

          .hero-buttons { gap: 10px; flex-direction: column; align-items: center; }
          .hero-buttons button { width: 85%; padding: 12px; border-radius: 8px; }

          .section-title { margin: 30px 20px 15px; font-size: 22px; text-align: left; }

          .category-grid { 
            grid-template-columns: repeat(2, 1fr); 
            gap: 12px; 
            padding: 0 20px 40px; /* LEFT & RIGHT SIDE SPACING */
          }
          .category-card img { height: 120px; }
          .category-card p { padding: 10px; font-size: 14px; margin: 0; }
        }

        /* 3. TABLET VIEW (768px to 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .carousel { height: 60vh; width: 100vw; }
          
          .video-content h1 { font-size: 40px; }
          
          .hero-buttons { gap: 15px; }
          .hero-buttons button { padding: 14px 30px; border-radius: 10px; }

          .section-title { margin: 40px 30px 20px; font-size: 28px; }

          .category-grid { 
            grid-template-columns: repeat(3, 1fr); 
            gap: 20px; 
            width: 100vw;
            padding: 0 30px 60px; /* MODERATE SIDE SPACING */
          }   
          .category-card img { height: 180px; }
        }

        /* 4. LAPTOP VIEW (1024px to 1439px) */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .carousel { height: 75vh; }

          .video-content h1 { font-size: 50px; }

          .category-grid { 
            grid-template-columns: repeat(4, 1fr); 
            gap: 25px; 
            padding: 0 60px 80px; 
          }
          .category-card img { height: 220px; }
        }

        /* 5. DESKTOP VIEW (1440px and above) */
        @media (min-width: 1440px) {
          .carousel { height: 85vh; }

          .video-content h1 { font-size: 60px; }

          .category-grid { 
            grid-template-columns: repeat(5, 1fr); 
            gap: 30px; 
            padding: 0;
            max-width: 1350px; /* Centers content on huge screens */
            margin: 0 auto 100px;
          }
          .category-card img { height: 260px; }
          .category-card:hover { transform: translateY(-8px); transition: 0.3s; }
        }
      `}</style>
    </>
  );
};

export default Home;