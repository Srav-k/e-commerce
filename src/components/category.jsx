import { useParams, Link } from "react-router-dom";

/* ========= ASSET IMPORTS ========= */
import Vegetables from "../assets/groceries/veg.png";
import Fruits from "../assets/groceries/fruits.png";
import Snacks from "../assets/groceries/snack.png";
import Beverages from "../assets/groceries/bav.png";
import Mobiles from "../assets/electronics/mob.jpeg";
import Laptops from "../assets/electronics/lap.png";
import Headphones from "../assets/electronics/earp.png";
import Cameras from "../assets/electronics/cam.png";
import Men from "../assets/clothes/menf.png";
import Women from "../assets/clothes/women.jpeg";
import Kids from "../assets/clothes/kids.png";
import Fiction from "../assets/books/fictionalbooks.png";
import Education from "../assets/books/educationalbooks.png";
import Comics from "../assets/books/comicbooks.png";
import Biographies from "../assets/books/biographies.png";
import EducationalToys from "../assets/toys/edutoy.png";
import ActionToys from "../assets/toys/actiontoy.png";
import SoftToys from "../assets/toys/soft.png";
import Watches from "../assets/accessories/watch.png";
import Bags from "../assets/accessories/bag.png";
import Belts from "../assets/accessories/belt.png";
import Sunglasses from "../assets/accessories/sunglasses.png";
import Furniture from "../assets/homefurniture/furniture.png";
import Bathroom from "../assets/homefurniture/bath.png";
import Kitchen from "../assets/homefurniture/kitchen.png";
import Makeup from "../assets/cosmetics/makeup.png";
import Skincare from "../assets/cosmetics/skin.png";
import Haircare from "../assets/cosmetics/hair.png";
import Fragrances from "../assets/cosmetics/fragranc.png";
import Gold from "../assets/jewellery/gold.png";
import Silver from "../assets/jewellery/silver.png";
import Diamond from "../assets/jewellery/diamond.png";
import Imitation from "../assets/jewellery/imitation.png";

const Category = () => {
  const { category } = useParams();

  const normalizedCategory = decodeURIComponent(category || "all")
    .toLowerCase()
    .replace(/[\s&_-]/g, "");

  const subCategoriesMap = {
    groceries: [
      { name: "Vegetables", image: Vegetables },
      { name: "Fruits", image: Fruits },
      { name: "Snacks", image: Snacks },
      { name: "Beverages", image: Beverages },
    ],
    electronics: [
      { name: "Mobiles", image: Mobiles },
      { name: "Laptops", image: Laptops },
      { name: "Headphones", image: Headphones },
      { name: "Cameras", image: Cameras },
    ],
    clothes: [
      { name: "Men", image: Men },
      { name: "Women", image: Women },
      { name: "Kids", image: Kids },
    ],
    books: [
      { name: "Fiction", image: Fiction },
      { name: "Education", image: Education },
      { name: "Comics", image: Comics },
      { name: "Biographies", image: Biographies },
    ],
    toys: [
      { name: "Educational Toys", image: EducationalToys },
      { name: "Action Toys", image: ActionToys },
      { name: "Soft Toys", image: SoftToys },
    ],
    accessories: [
      { name: "Watches", image: Watches },
      { name: "Bags", image: Bags },
      { name: "Belts", image: Belts },
      { name: "Sunglasses", image: Sunglasses },
    ],
    homefurniture: [
      { name: "Furniture", image: Furniture },
      { name: "Bathroom", image: Bathroom },
      { name: "Kitchen", image: Kitchen },
    ],
    cosmetics: [
      { name: "Makeup", image: Makeup },
      { name: "Skincare", image: Skincare },
      { name: "Haircare", image: Haircare },
      { name: "Fragrances", image: Fragrances },
    ],
    jewellery: [
      { name: "Gold", image: Gold },
      { name: "Silver", image: Silver },
      { name: "Diamond", image: Diamond },
      { name: "Imitation", image: Imitation },
    ],
  };

  const allSubCategories = Object.entries(subCategoriesMap).flatMap(
    ([parent, items]) =>
      items.map((item) => ({
        ...item,
        parent,
      }))
  );

  const subCategories =
    normalizedCategory === "all"
      ? allSubCategories
      : subCategoriesMap[normalizedCategory];

  return (
    <>
      <div className="category-page">
        <h1 className="category-title">
          {normalizedCategory === "all"
            ? "All Categories"
            : decodeURIComponent(category).replace("-", " ")}
        </h1>

        {!subCategories ? (
          <p className="no-data">No sub-categories available.</p>
        ) : (
          <div className="subcategory-list">
            {subCategories.map((sub, index) => (
              <Link
                key={index}
                to={`/${sub.parent || category}/${encodeURIComponent(sub.name)}`}
                className="subcategory-card"
              >
                <div className="img-container">
                  <img
                    src={sub.image}
                    alt={sub.name}
                    className="subcategory-image"
                  />
                </div>
                <span className="subcategory-name">{sub.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>

      <style>{`
        /* =========================================
           1. BASE STYLES (Applies to all)
           ========================================= */
        .category-page {
          background: linear-gradient(135deg, #f8fafc, #e2e8f0);
          min-height: 100vh;
          width: 100%;
        }

        .category-title {
          text-align: center;
          font-weight: 800;
          color: #1e293b;
          text-transform: capitalize;
        }

        .subcategory-list {
          display: grid;
          margin: 0 auto;
        }

        .subcategory-card {
          background: #fff;
          border-radius: 20px;
          text-decoration: none;
          color: #000;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .img-container {
          width: 100%;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .subcategory-image {
          width: 90%;
          height: 90%;
          object-fit: contain;
        }

        .subcategory-name {
          font-weight: 700;
          color: #0f172a;
          text-align: center;
        }

        /* =========================================
           2. MOBILE VIEW (Up to 767px)
           ========================================= */
        @media (max-width: 767px) {
          .category-page { padding: 30px 15px; }
          .category-title { font-size: 24px; margin-bottom: 25px; }
          
          .subcategory-list { 
            grid-template-columns: repeat(2, 1fr); 
            gap: 12px; 
          }
          
          .subcategory-card { padding: 10px; }
          .img-container { height: 130px; }
          .subcategory-name { font-size: 14px; margin-top: 8px; }
        }

        /* =========================================
           3. TABLET VIEW (768px - 1023px)
           ========================================= */
        @media (min-width: 768px) and (max-width: 1023px) {
          .category-page { padding: 40px 30px; }
          .category-title { font-size: 32px; margin-bottom: 40px; }

          .subcategory-list { 
            grid-template-columns: repeat(3, 1fr); 
            gap: 25px; 
          }

          .subcategory-card { padding: 15px; }
          .img-container { height: 180px; }
          .subcategory-name { font-size: 18px; margin-top: 12px; }
        }

        /* =========================================
           4. LAPTOP VIEW (1024px - 1439px)
           ========================================= */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .category-page { padding: 50px 60px; }
          .category-title { font-size: 36px; margin-bottom: 50px; }

          .subcategory-list { 
            grid-template-columns: repeat(4, 1fr); 
            gap: 30px; 
          }

          .subcategory-card { padding: 20px; }
          .img-container { height: 220px; }
          .subcategory-name { font-size: 20px; margin-top: 15px; }
          .subcategory-card:hover { transform: translateY(-5px); }
        }

        /* =========================================
           5. DESKTOP VIEW (1440px and above)
           ========================================= */
        @media (min-width: 1440px) {
          .category-page { padding: 60px 0; }
          .category-title { font-size: 42px; margin-bottom: 60px; }

          .subcategory-list { 
            grid-template-columns: repeat(5, 1fr); 
            gap: 35px; 
            max-width: 1400px;
          }

          .subcategory-card { padding: 25px; }
          .img-container { height: 260px; }
          .subcategory-name { font-size: 22px; margin-top: 18px; }
          .subcategory-card:hover { transform: translateY(-10px); }
        }
      `}</style>
    </>
  );
};

export default Category;