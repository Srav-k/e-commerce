import { useParams } from "react-router-dom";

const Products = () => {
  const { type } = useParams();

  const products = [
    { id: 1, name: "Product 1", price: 999 },
    { id: 2, name: "Product 2", price: 1499 },
    { id: 3, name: "Product 3", price: 1999 },
  ];

  return (
    <>
      <div className="products-page">
        <h2>{type} Products</h2>

        <div className="product-grid">
          {products.map(p => (
            <div className="product-card" key={p.id}>
              <h4>{p.name}</h4>
              <p>₹{p.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .products-page {
          padding: 40px;
        }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
        }
        .product-card {
          padding: 20px;
          background: #fff;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .product-card button {
          margin-top: 10px;
          padding: 8px;
          background: #ff3f6c;
          color: #fff;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default Products;
