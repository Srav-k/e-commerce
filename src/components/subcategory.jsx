import React, { useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

/* ---------------- STYLES ---------------- (NO CHANGES HERE) */

const styles = {
 page: {
  padding: "20px 40px",
  background: "#f9f9f9",
  minHeight: "100vh",
 },

 backBtn: {
  background: "#fff",
  border: "1px solid #ddd",
  padding: "8px 16px",
  borderRadius: "8px",
  cursor: "pointer",
  marginBottom: "12px",
  fontWeight: "500",
 },

 breadcrumb: {
  color: "#777",
  marginBottom: "10px",
  textTransform: "capitalize",
 },

 title: {
  fontSize: "32px",
  fontWeight: "600",
  marginBottom: "12px",
  textTransform: "capitalize",
  textAlign: "center", // ✅ centered
 },

 filterRow: {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
  justifyContent: "center", // ✅ centered pills
  alignItems: "center",
  marginBottom: "35px",
 },

 filterBtn: {
  padding: "8px 18px",
  borderRadius: "20px",
  border: "1px solid #ddd",
  background: "#fff",
  cursor: "pointer",
  fontSize: "14px",
  transition: "all .25s",
 },

 filterActive: {
  background: "#ff6a00",
  color: "#fff",
  borderColor: "#ff6a00",
 },

 layout: {
  display: "flex",
  gap: "30px",
 },

 sidebar: {
  width: "230px",
  background: "#fff",
  borderRadius: "14px",
  padding: "18px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  height: "fit-content",
 },

 sidebarTitle: {
  fontWeight: "600",
  marginBottom: "12px",
 },

 grid: {
  flex: 1,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
  gap: "30px",
 },

 card: {
  background: "#fff",
  borderRadius: "14px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  overflow: "hidden",
 },

 imageContainer: {
  height: "220px",
  padding: "10px",
  cursor: "pointer",
 },

 image: {
  width: "100%",
  height: "100%",
  objectFit: "contain",
 },

 cardInfo: {
  padding: "15px",
  textAlign: "center",
 },

 price: {
  color: "#e63946",
  fontWeight: "600",
  marginBottom: "8px",
 },

 buttons: {
  display: "flex",
  gap: "10px",
  justifyContent: "center",
 },

 addBtn: {
  flex: 1,
  background: "linear-gradient(135deg, #ff6a00, #ff3d00)",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  padding: "10px",
  fontWeight: "600",
  cursor: "pointer",
 },

 wishlistBtn: {
  width: "42px",
  height: "42px",
  borderRadius: "50%",
  border: "none",
  cursor: "pointer",
  background: "#fff",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  fontSize: "18px",
 },

 wishlistActive: {
  background: "#ffe6ea",
 },
};

/* ---------------- LOGIC ---------------- */

const normalize = (str) =>
 str?.toLowerCase().replace(/\s|&|-/g, "") || "";

// ✅ NEW LOGIC: Map the URL slug to the category name in your product data.
const URL_CATEGORY_MAP = {
    'homefurniture': 'homedecor',
    // Add other inconsistent mappings here if needed.
};

const SubCategory = () => {
 const { category, subCategory } = useParams();
 const navigate = useNavigate();
 const { addToCart } = useCart();
 const { wishlistItems, toggleWishlist } = useWishlist();

 const [selectedSub, setSelectedSub] = useState("all");

 // The normalized URL parameter (e.g., 'homefurniture' or 'furniture')
 const paramNormRaw = normalize(category || subCategory);
 
 // ✅ FIX: Check the map for a category match, otherwise use the raw param.
 // This ensures 'homefurniture' is treated as 'homedecor' for filtering.
 const paramNorm = URL_CATEGORY_MAP[paramNormRaw] || paramNormRaw;

 const subCategories = useMemo(() => {
  const subs = products
   .filter((p) => {
    const catNorm = normalize(p.category);
    const subNorm = normalize(p.subCategory);
        // FIX: Use the mapped paramNorm for base matching
    return catNorm === paramNorm || subNorm === paramNorm; 
   })
   .map((p) => p.subCategory)
   .filter(Boolean);

  return ["all", ...new Set(subs)];
 }, [paramNorm]); // FIX: Dependency changed to paramNorm (the mapped value)

 const filteredProducts = useMemo(() => {
  return products.filter((p) => {
   const catNorm = normalize(p.category);
   const subNorm = normalize(p.subCategory);

      // FIX: Use the mapped paramNorm for the base filter check
   const baseMatch = catNorm === paramNorm || subNorm === paramNorm; 
   
   const subMatch =
    selectedSub === "all"
     ? true
     : normalize(p.subCategory) === normalize(selectedSub);

   return baseMatch && subMatch;
  });
 }, [paramNorm, selectedSub]); // FIX: Dependency changed to paramNorm

 return (
  <div style={styles.page}>
   {/* BACK */}
   <button style={styles.backBtn} onClick={() => navigate(-1)}>
    ← Back
   </button>

   <div style={styles.breadcrumb}>
    Home / {(category || subCategory)?.replace("-", " ")}
   </div>

   {/* HEADING */}
   <h2 style={styles.title}>
    {(category || subCategory)?.replace("-", " ")}
   </h2>

   {/* CENTER FILTER PILLS */}
   <div style={styles.filterRow}>
    {subCategories.map((sub, i) => (
     <button
      key={i}
      style={{
       ...styles.filterBtn,
       ...(selectedSub === sub ? styles.filterActive : {}),
      }}
      onClick={() => setSelectedSub(sub)}
     >
      {sub === "all" ? "All" : sub}
     </button>
    ))}
   </div>

   <div style={styles.layout}>
    {/* LEFT SIDEBAR */}
    <aside style={styles.sidebar}>
     <div style={styles.sidebarTitle}>Filter By</div>

     {subCategories.map((sub, i) => (
      <button
       key={i}
       style={{
        ...styles.filterBtn,
        width: "100%",
        marginBottom: "10px",
        ...(selectedSub === sub ? styles.filterActive : {}),
       }}
       onClick={() => setSelectedSub(sub)}
      >
       {sub === "all" ? "All Products" : sub}
      </button>
     ))}
    </aside>

    {/* PRODUCTS */}
    <div style={styles.grid}>
     {filteredProducts.map((p) => {
      const inWishlist = wishlistItems.some((w) => w.id === p.id);

      return (
       <div key={p.id} style={styles.card}>
        <div
         style={styles.imageContainer}
         onClick={() => navigate(`/product/${p.id}`)}
        >
         <img
          src={p.image}
          alt={p.name}
          style={styles.image}
          onError={(e) =>
           (e.target.src =
            "https://via.placeholder.com/150?text=No+Image")
          }
         />
         
        </div>

        <div style={styles.cardInfo}>
         <h4>{p.name}</h4>
         <p style={styles.price}>₹{p.price}</p>

         <div style={styles.buttons}>
          <button
           style={styles.addBtn}
           onClick={() => addToCart(p, 1)}
          >
           🛒 Add to Cart

                  </button>

          <button
           style={{
            ...styles.wishlistBtn,
            ...(inWishlist ? styles.wishlistActive : {}),
           }}
           onClick={() => toggleWishlist(p)}
          >
           {inWishlist ? "❤️" : "🤍"}
          </button>
         </div>
        </div>
       </div>
      );
     })}
    </div>
   </div>
  </div>
 );
};

export default SubCategory;