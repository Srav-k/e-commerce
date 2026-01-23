import { useParams } from "react-router-dom";

const Products = () => {
  const { type } = useParams();

  const products = [
    { id: 1, name: "Product 1", price: 999 },
    { id: 2, name: "Product 2", price: 1499 },
    { id: 3, name: "Product 3", price: 1999 },
    { id: 4, name: "Product 4", price: 2499 },
  ];

  return (
    <>
      <style>{`
        /* 1. GLOBAL RESET & MOBILE BASE (Mobile View) */
        /* These styles apply to screens from 0px to 767px */
        
        main, .App, #root {
          padding: 0 !important; /* Removes parent padding that squashes mobile view */
          margin: 0 !important;
          width: 100% !important;
        }

        .products-page {
          padding: 15px;
          background-color: #f9f9f9;
          min-height: 100vh;
          width: 100%;
          box-sizing: border-box;
        }

        .products-page h2 {
          text-transform: capitalize;
          margin: 10px 0 20px;
          font-size: 20px;
          color: #333;
          text-align: center;
        }

        .product-grid {
          display: grid;
          /* Force 2 columns on mobile so products aren't too wide or too squashed */
          grid-template-columns: repeat(2, 1fr); 
          gap: 10px;
          width: 100%;
        }

        .product-card {
          padding: 12px;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          border: 1px solid #eee;
        }

        .product-image-box {
          width: 100%;
          height: 120px;
          background: #eee;
          margin-bottom: 10px;
          border-radius: 4px;
        }

        .product-card h4 {
          margin: 0 0 5px 0;
          font-size: 14px;
          color: #222;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .product-card p {
          margin: 0;
          font-weight: 700;
          color: #ff3f6c;
          font-size: 14px;
        }

        .product-card button {
          margin-top: 10px;
          padding: 10px;
          background: #ff3f6c;
          color: #fff;
          border: none;
          border-radius: 4px;
          font-weight: 600;
          cursor: pointer;
          font-size: 12px;
          width: 100%;
        }

        /* 2. TABLET VIEW (768px and up) */
        @media (min-width: 768px) {
          .products-page {
            padding: 30px;
          }
          .products-page h2 {
            font-size: 24px;
            text-align: left;
          }
          .product-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
          }
          .product-image-box {
            height: 160px;
          }
        }

        /* 3. LAPTOP VIEW (1024px and up) */
        @media (min-width: 1024px) {
          .product-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }
          .product-card h4 {
            font-size: 16px;
          }
        }

        /* 4. DESKTOP VIEW (1440px and up) */
        @media (min-width: 1440px) {
          .product-grid {
            grid-template-columns: repeat(5, 1fr);
            max-width: 1400px;
            margin: 0 auto; /* Centers the grid on large screens */
          }
          .product-card {
            transition: transform 0.2s ease;
          }
          .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          }
        }
      `}</style>

      <div className="products-page">
        <h2>{type} Products</h2>

        <div className="product-grid">
          {products.map((p) => (
            <div className="product-card" key={p.id}>
              <div className="product-image-box" />
              <h4>{p.name}</h4>
              <p>₹{p.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;