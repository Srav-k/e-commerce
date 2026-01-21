import groceriesImg from "../assets/categories/groceries.png";
import electronicsImg from "../assets/categories/electronics.png";
import accessoriesImg from "../assets/categories/accessories.png";
import homeImg from "../assets/categories/home.png";
import cosmeticsImg from "../assets/categories/cosmetics.png";
import toysImg from "../assets/categories/toys.png";
import jewelleryImg from "../assets/categories/jewellery.png";
import clothesImg from "../assets/categories/clothes.png";

export const categories = [
  {
    id: 1,
    name: "Groceries",
    slug: "groceries",
    image: groceriesImg,
    subCategories: ["fruits", "vegetables", "beverages", "snacks"],
  },
  {
    id: 2,
    name: "Electronics",
    slug: "electronics",
    image: electronicsImg,
    subCategories: ["mobiles", "laptops", "audio", "accessories"],
  },
  {
    id: 3,
    name: "Accessories",
    slug: "accessories",
    image: accessoriesImg,
    subCategories: ["watches", "bags", "belts", "sunglasses"],
  },
  {
    id: 4,
    name: "Home & Furniture",
    slug: "home-furniture",
    image: homeImg,
    subCategories: ["furniture", "kitchen", "decor", "lighting"],
  },
  {
    id: 5,
    name: "Cosmetics",
    slug: "cosmetics",
    image: cosmeticsImg,
    subCategories: ["skincare", "fragrance", "makeup", "haircare"],
  },
  {
    id: 6,
    name: "Toys",
    slug: "toys",
    image: toysImg,
    subCategories: ["soft-toys", "educational", "remote", "games"],
  },
  {
    id: 7,
    name: "Jewellery",
    slug: "jewellery",
    image: jewelleryImg,
    subCategories: ["necklaces", "rings", "earrings", "bracelets"],
  },
  {
    id: 8,
    name: "Clothes",
    slug: "clothes",
    image: clothesImg,
    subCategories: ["men", "women", "kids"],
  },
];
