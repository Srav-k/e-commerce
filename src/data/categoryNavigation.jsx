// ======================= IMAGE IMPORTS =======================

// GROCERIES
import Banana from "../assets/sgroceries/sfruits/banana.jpg";
import Apple from "../assets/sgroceries/sfruits/apple.jpg";
import Grape from "../assets/sgroceries/sfruits/grape.jpg";
import Guava from "../assets/sgroceries/sfruits/guava.jpg";
import Orange from "../assets/sgroceries/sfruits/orange.jpg";
import Kiwi from "../assets/sgroceries/sfruits/kiwi.jpg";
import Papaya from "../assets/sgroceries/sfruits/papaya.jpg";
import Pomogranate from "../assets/sgroceries/sfruits/pomo.jpg";
import Sapota from "../assets/sgroceries/sfruits/sapota.jpg";
import Wmelon from "../assets/sgroceries/sfruits/wmelone.jpg";

import Bnana from "../assets/sgroceries/sbevrages/bananaj.jpg";
import Blue from "../assets/sgroceries/sbevrages/bluemoj.jpg";
import Grpe from "../assets/sgroceries/sbevrages/grapej.jpg";
import Kiw from "../assets/sgroceries/sbevrages/kiwij.jpg";
import Lemons from "../assets/sgroceries/sbevrages/lemonsoda.jpg";
import Mintlem from "../assets/sgroceries/sbevrages/mintmoj.jpg";
import Orang from "../assets/sgroceries/sbevrages/orangej.jpg";
import Pomo from "../assets/sgroceries/sbevrages/pomoj.jpg";
import Thumb from "../assets/sgroceries/sbevrages/thumbs.jpg";
import Water from "../assets/sgroceries/sbevrages/water.jpg";

import bitter from "../assets/sgroceries/svegetables/bitterg.jpg";
import bottle from "../assets/sgroceries/svegetables/bottleguard.jpg";
import brinj from "../assets/sgroceries/svegetables/brinjal.jpg";
import chillis from "../assets/sgroceries/svegetables/chillis.jpg";
import coco from "../assets/sgroceries/svegetables/coco.jpg";
import ladies from "../assets/sgroceries/svegetables/ladiesf.jpg";
import onion from "../assets/sgroceries/svegetables/onion.jpg";
import potato from "../assets/sgroceries/svegetables/potato.jpg";
import tomato from "../assets/sgroceries/svegetables/tomato.jpg";

import bhelpuri from "../assets/sgroceries/ssnacks/bhelpuri.jpg";
import burger from "../assets/sgroceries/ssnacks/burger.jpg";
import noodles from "../assets/sgroceries/ssnacks/noodles.jpg";
import pakoda from "../assets/sgroceries/ssnacks/pakoda.jpg";
import panipuri from "../assets/sgroceries/ssnacks/panipuri.jpg";
import pizza from "../assets/sgroceries/ssnacks/pizza.jpg";
import poha from "../assets/sgroceries/ssnacks/poha.jpg";
import samosa from "../assets/sgroceries/ssnacks/samosa.jpg";
import sandwich from "../assets/sgroceries/ssnacks/sandwich.jpg";
import vada from "../assets/sgroceries/ssnacks/vada.jpg";

// ============================================================
// CATEGORY NAVIGATION DATA (DEFAULT EXPORT)
// ============================================================

const CATEGORY_NAVIGATION = [
  {
    category: "groceries",
    label: "Groceries",
    subCategories: [
      { key: "fruits", label: "Fruits" },
      { key: "beverages", label: "Beverages" },
      { key: "vegetables", label: "Vegetables" },
      { key: "snacks", label: "Snacks" },
    ],
  },
  {
    category: "electronics",
    label: "Electronics",
    subCategories: [
      { key: "laptops", label: "Laptops" },
      { key: "cameras", label: "Cameras" },
      { key: "mobiles", label: "Mobiles" },
      { key: "headphones", label: "Headphones" },
    ],
  },
  {
    category: "toys",
    label: "Toys",
    subCategories: [
      { key: "actiontoys", label: "Action Toys" },
      { key: "educationaltoys", label: "Educational Toys" },
      { key: "softtoys", label: "Soft Toys" },
    ],
  },
  {
    category: "books",
    label: "Books",
    subCategories: [
      { key: "biographies", label: "Biographies" },
      { key: "comics", label: "Comics" },
      { key: "educational", label: "Educational" },
      { key: "fictional", label: "Fictional" },
    ],
  },
  {
    category: "cosmetics",
    label: "Cosmetics",
    subCategories: [
      { key: "fragrance", label: "Fragrance" },
      { key: "haircare", label: "Hair Care" },
      { key: "makeup", label: "Makeup" },
      { key: "skincare", label: "Skin Care" },
    ],
  },
  {
    category: "clothes",
    label: "Clothes",
    subCategories: [
      { key: "kids", label: "Kids" },
      { key: "men", label: "Men" },
      { key: "women", label: "Women" },
    ],
  },
  {
    category: "jewellery",
    label: "Jewellery",
    subCategories: [
      { key: "diamonds", label_toggle: "Diamonds" },
      { key: "golds", label: "Gold" },
      { key: "imitations", label: "Imitation" },
      { key: "silvers", label: "Silver" },
    ],
  },
  {
    category: "homedecor",
    label: "Home & Decor",
    subCategories: [
      { key: "bathroom", label: "Bathroom" },
      { key: "furniture", label: "Furniture" },
      { key: "kitchen", label: "Kitchen" },
    ],
  },
  {
    category: "accessories",
    label: "Accessories",
    subCategories: [
      { key: "bags", label: "Bags" },
      { key: "belts", label: "Belts" },
      { key: "sunglasses", label: "Sunglasses" },
      { key: "watches", label: "Watches" },
    ],
  },
];

// ✅ DEFAULT EXPORT (FIXES YOUR ERROR)
export default CATEGORY_NAVIGATION;

// ✅ OPTIONAL NAMED EXPORT (SAFE)
export { CATEGORY_NAVIGATION };
