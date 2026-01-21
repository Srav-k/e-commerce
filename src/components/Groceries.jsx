import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

/* ================= IMAGES ================= */

/* Fruits */
import Banana from "../assets/sgroceries/sfruits/banana.png";
import Apple from "../assets/sgroceries/sfruits/apple.png";
import Grape from "../assets/sgroceries/sfruits/grape.png";
import Guava from "../assets/sgroceries/sfruits/guava.png";
import Orange from "../assets/sgroceries/sfruits/orange.png";
import Kiwi from "../assets/sgroceries/sfruits/kiwi.png";
import Papaya from "../assets/sgroceries/sfruits/papaya.png";
import Pomogranate from "../assets/sgroceries/sfruits/pomo.png";
import Sapota from "../assets/sgroceries/sfruits/sapota.png";
import Wmelon from "../assets/sgroceries/sfruits/wmelone.png";

/* Beverages */
import Bnana from "../assets/sgroceries/sbevrages/bananaj.png";
import Blue from "../assets/sgroceries/sbevrages/bluemoj.jpeg";
import Grpe from "../assets/sgroceries/sbevrages/grapej.jpeg";
import Kiw from "../assets/sgroceries/sbevrages/kiwij.jpeg";
import Lemons from "../assets/sgroceries/sbevrages/lemonsoda.jpeg";
import Mintlem from "../assets/sgroceries/sbevrages/mintmoj.jpeg";
import Orang from "../assets/sgroceries/sbevrages/orangej.jpeg";
import Pomo from "../assets/sgroceries/sbevrages/pomoj.jpeg";
import Thumb from "../assets/sgroceries/sbevrages/thumbs.png";
import Water from "../assets/sgroceries/sbevrages/water.png";

/* Vegetables */
import bitter from "../assets/sgroceries/svegetables/bitterg.png";
import bottle from "../assets/sgroceries/svegetables/bottleguard.png";
import brinj from "../assets/sgroceries/svegetables/brinjal.png";
import chillis from "../assets/sgroceries/svegetables/chillis.png";
import coco from "../assets/sgroceries/svegetables/coco.png";
import ladies from "../assets/sgroceries/svegetables/ladiesf.png";
import onion from "../assets/sgroceries/svegetables/onion.png";
import potato from "../assets/sgroceries/svegetables/potato.png";
import tomato from "../assets/sgroceries/svegetables/tomato.png";

/* Snacks */
import bhelpuri from "../assets/sgroceries/ssnacks/bhelpuri.png";
import burger from "../assets/sgroceries/ssnacks/burger.png";
import noodles from "../assets/sgroceries/ssnacks/noodles.png";
import pakoda from "../assets/sgroceries/ssnacks/pakoda.png";
import panipuri from "../assets/sgroceries/ssnacks/panipuri.png";
import pizza from "../assets/sgroceries/ssnacks/pizza.png";
import poha from "../assets/sgroceries/ssnacks/poha.png";
import samosa from "../assets/sgroceries/ssnacks/samosa.png";
import sandwich from "../assets/sgroceries/ssnacks/sandwich.png";
import vada from "../assets/sgroceries/ssnacks/vada.png";

/* ================= PRODUCTS ================= */

const products = [
   { id: 1, subCategory: "fruits", name: "Banana", price: 20, image: Banana },
  { id: 2, subCategory: "fruits", name: "Apple", price: 150, image: Apple },
  { id: 3, subCategory: "fruits", name: "Grape", price: 80, image: Grape },
  { id: 4, subCategory: "fruits", name: "Guava", price: 50, image: Guava },
  { id: 5, subCategory: "fruits", name: "Orange", price: 60, image: Orange },
  { id: 6, subCategory: "fruits", name: "Kiwi", price: 100, image: Kiwi },
  { id: 7, subCategory: "fruits", name: "Papaya", price: 45, image: Papaya },
  { id: 8, subCategory: "fruits", name: "Pomegranate", price: 180, image: Pomogranate },
  { id: 9, subCategory: "fruits", name: "Watermelon", price: 70, image: Wmelon },
  { id: 10, subCategory: "fruits", name: "Sapota", price: 40, image: Sapota },

  /* Beverages */
  { id: 11, subCategory: "beverages", name: "Banana Juice", price: 35, image: Bnana },
  { id: 12, subCategory: "beverages", name: "Blue Mojito", price: 90, image: Blue },
  { id: 13, subCategory: "beverages", name: "Grape Juice", price: 45, image: Grpe },
  { id: 14, subCategory: "beverages", name: "Kiwi Juice", price: 55, image: Kiw },
  { id: 15, subCategory: "beverages", name: "Lemon Soda", price: 25, image: Lemons },
  { id: 16, subCategory: "beverages", name: "Mint Mojito", price: 95, image: Mintlem },
  { id: 17, subCategory: "beverages", name: "Orange Juice", price: 40, image: Orang },
  { id: 18, subCategory: "beverages", name: "Pomegranate Juice", price: 60, image: Pomo },
  { id: 19, subCategory: "beverages", name: "Thumbs Up", price: 20, image: Thumb },
  { id: 20, subCategory: "beverages", name: "Mineral Water", price: 15, image: Water },

  /* Vegetables */
  { id: 21, subCategory: "vegetables", name: "Bitter Gourd", price: 30, image: bitter },
  { id: 22, subCategory: "vegetables", name: "Bottle Gourd", price: 25, image: bottle },
  { id: 23, subCategory: "vegetables", name: "Brinjal", price: 35, image: brinj },
  { id: 24, subCategory: "vegetables", name: "Chillis", price: 10, image: chillis },
  { id: 25, subCategory: "vegetables", name: "Coconut", price: 40, image: coco },
  { id: 26, subCategory: "vegetables", name: "Ladies Finger", price: 30, image: ladies },
  { id: 27, subCategory: "vegetables", name: "Onion", price: 50, image: onion },
  { id: 28, subCategory: "vegetables", name: "Potato", price: 40, image: potato },
  { id: 29, subCategory: "vegetables", name: "Tomato", price: 40, image: tomato },

  /* Snacks */
  { id: 30, subCategory: "snacks", name: "Bhel Puri", price: 40, image: bhelpuri },
  { id: 31, subCategory: "snacks", name: "Burger", price: 80, image: burger },
  { id: 32, subCategory: "snacks", name: "Noodles", price: 60, image: noodles },
  { id: 33, subCategory: "snacks", name: "Pakoda", price: 35, image: pakoda },
  { id: 34, subCategory: "snacks", name: "Pani Puri", price: 30, image: panipuri },
  { id: 35, subCategory: "snacks", name: "Pizza", price: 120, image: pizza },
  { id: 36, subCategory: "snacks", name: "Poha", price: 40, image: poha },
  { id: 37, subCategory: "snacks", name: "Samosa", price: 20, image: samosa },
  { id: 38, subCategory: "snacks", name: "Sandwich", price: 50, image: sandwich },
  { id: 39, subCategory: "snacks", name: "Vada", price: 25, image: vada },
];

/* ================= COMPONENT ================= */

const SubCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { wishlistItems, toggleWishlist } = useWishlist();

  const [selectedSub, setSelectedSub] = useState("All");
  const [sort, setSort] = useState("default");

  let filtered = selectedSub === "All"
    ? products
    : products.filter(p => p.subCategory === selectedSub);

  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "high") filtered.sort((a, b) => b.price - a.price);

  return (
    <>
      <style>{`
        .container { padding:20px; }
        .filters { display:flex; gap:15px; margin-bottom:20px; }
        select { padding:8px; }
        .grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(200px,1fr)); gap:20px; }
        .card { border:1px solid #ddd; padding:12px; border-radius:8px; transition:.3s; }
        .card:hover { box-shadow:0 8px 18px rgba(0,0,0,.15); transform:translateY(-4px); }
        img { max-height:160px; display:block; margin:auto; cursor:pointer; }
        button { width:100%; padding:8px; margin-top:6px; cursor:pointer; }
        .cart { background:#ffd814; border:none; }
        .wish.active { color:red; }
      `}</style>

      <div className="container">
        <div className="filters">
          <select onChange={e => setSelectedSub(e.target.value)}>
            <option>All</option>
            <option value="fruits">Fruits</option>
            <option value="vegetables">Vegetables</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
          </select>

          <select onChange={e => setSort(e.target.value)}>
            <option value="default">Sort By</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
          </select>
        </div>

        <div className="grid">
          {filtered.map(p => {
            const wish = wishlistItems.some(w => w.id === p.id);
            return (
              <div className="card" key={p.id}>
                <img src={p.image} alt={p.name} onClick={() => navigate(`/${category}/${p.subCategory}/${p.id}`)} />
                <h4>{p.name}</h4>
                <p>₹{p.price}</p>
                <button className="cart" onClick={() => addToCart(p,1)}>Add to Cart</button>
                <button className={`wish ${wish ? "active" : ""}`} onClick={() => toggleWishlist(p)}>
                  ❤️ Wishlist
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SubCategory;
