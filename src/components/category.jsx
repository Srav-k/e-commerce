import { useParams, Link } from "react-router-dom";

/* ========= GROCERIES ========= */
import Vegetables from "../assets/groceries/veg.png";
import Fruits from "../assets/groceries/fruits.png";
import Snacks from "../assets/groceries/snack.png";
import Beverages from "../assets/groceries/bav.png";

/* ========= ELECTRONICS ========= */
import Mobiles from "../assets/electronics/mob.jpeg";
import Laptops from "../assets/electronics/lap.png";
import Headphones from "../assets/electronics/earp.png";
import Cameras from "../assets/electronics/cam.png";

/* ========= CLOTHES ========= */
import Men from "../assets/clothes/menf.png";
import Women from "../assets/clothes/women.jpeg";
import Kids from "../assets/clothes/kids.png";

/* ========= BOOKS ========= */
import Fiction from "../assets/books/fictionalbooks.png";
import Education from "../assets/books/educationalbooks.png";
import Comics from "../assets/books/comicbooks.png";
import Biographies from "../assets/books/biographies.png";

/* ========= TOYS ========= */
import EducationalToys from "../assets/toys/edutoy.png";
import ActionToys from "../assets/toys/actiontoy.png";
import SoftToys from "../assets/toys/soft.png";

/* ========= ACCESSORIES ========= */
import Watches from "../assets/accessories/watch.png";
import Bags from "../assets/accessories/bag.png";
import Belts from "../assets/accessories/belt.png";
import Sunglasses from "../assets/accessories/sunglasses.png";

/* ========= HOME ========= */
import Furniture from "../assets/homefurniture/furniture.png";
import Bathroom from "../assets/homefurniture/bath.png";
import Kitchen from "../assets/homefurniture/kitchen.png";

/* ========= COSMETICS ========= */
import Makeup from "../assets/cosmetics/makeup.png";
import Skincare from "../assets/cosmetics/skin.png";
import Haircare from "../assets/cosmetics/hair.png";
import Fragrances from "../assets/cosmetics/fragranc.png";

/* ========= JEWELLERY ========= */
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
                to={`/${sub.parent || category}/${encodeURIComponent(
                  sub.name
                )}`}
                className="subcategory-card"
              >
                <img
                  src={sub.image}
                  alt={sub.name}
                  className="subcategory-image"
                />
                <span className="subcategory-name">{sub.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* ========= RESPONSIVE CSS ========= */}
      <style>{`
        .category-page {
          padding: 50px 30px;
          background: linear-gradient(135deg, #f8fafc, #e2e8f0);
          min-height: 100vh;
        }

        .category-title {
          text-align: center;
          font-size: clamp(26px, 4vw, 40px);
          margin-bottom: 50px;
          font-weight: 800;
          color: #1e293b;
          text-transform: capitalize;
        }

        .subcategory-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 35px;
          max-width: 1300px;
          margin: auto;
        }

        .subcategory-card {
          background: #fff;
          border-radius: 20px;
          padding: 22px;
          text-decoration: none;
          color: #000;
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
          transition: all 0.35s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .subcategory-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.15);
        }

        .subcategory-image {
          width: 100%;
          height: 320px;
          object-fit: contain;
          border-radius: 16px;
          margin-bottom: 16px;
          transition: transform 0.3s ease;
        }

        .subcategory-card:hover .subcategory-image {
          transform: scale(1.05);
        }

        .subcategory-name {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          text-align: center;
        }

        .no-data {
          text-align: center;
          font-size: 22px;
          padding: 80px;
          color: #64748b;
        }

        /* ========= TABLET ========= */
        @media (max-width: 1024px) {
          .subcategory-image {
            height: 260px;
          }
        }

        /* ========= MOBILE ========= */
        @media (max-width: 768px) {
          .category-page {
            padding: 30px 16px;
          }

          .subcategory-list {
            gap: 24px;
          }

          .subcategory-image {
            height: 200px;
          }

          .subcategory-name {
            font-size: 18px;
          }
        }

        /* ========= SMALL MOBILE ========= */
        @media (max-width: 480px) {
          .subcategory-image {
            height: 170px;
          }

          .subcategory-card {
            padding: 18px;
          }
        }
      `}</style>
    </>
  );
};

export default Category;
