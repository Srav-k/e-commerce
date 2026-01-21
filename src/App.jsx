// src/App.jsx
import { Routes, Route } from "react-router-dom";

/* Layout */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import CategoryNavigation from "./data/categoryNavigation";

/* components */
import Home from "./components/home";
import Search from "./components/search";
import SubCategory from "./components/subcategory";
import Cart from "./components/cart";
import Payment from "./components/payment";


import Wishlist from "./components/wishlist";
import Login from "./components/login";
import Signup from "./components/signup";
import Profile from "./components/profile";

import TodaysDeals from "./components/todaydeals";
import DealDetails from "./components/dealsdetails";

import OfferZone from "./components/offerzone";
import OfferDetails from "./components/offerdetails";

import HelpCenter from "./components/helpcenter";
import ReturnsRefunds from "./components/returnsrefund";
import ShippingPolicy from "./components/shippingpolicy";
import PrivacyPolicy from "./components/privacypolicy";
import TermsConditions from "./components/termsconditions";

import ProductDetails from "./components/productdetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      {/* Main content area with some padding */}
      <main style={{ minHeight: "calc(100vh - 160px)", padding: "0 20px" }}>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Categories Navigation */}
          <Route path="/categories" element={<CategoryNavigation />} />

          {/* Search */}
          <Route path="/search" element={<Search />} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />

          {/* Cart */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/wishlist" element={<Wishlist />} />

          {/* Deals */}
          <Route path="/todaydeals" element={<TodaysDeals />} />
          <Route path="/deals/:dealId" element={<DealDetails />} />

          {/* Offers */}
          <Route path="/offer-zone" element={<OfferZone />} />
          <Route path="/offers/:id" element={<OfferDetails />} />

          {/* Policies */}
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/returns-refunds" element={<ReturnsRefunds />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />

          {/* ✅ Category & SubCategory (Single Page Handles All) */}
          <Route path="/category/:category" element={<SubCategory />} />
          <Route path="/category/:category/:subCategory" element={<SubCategory />} />
          <Route path="/subcategory/:subCategory" element={<SubCategory />} />

          {/* Product Details */}
          <Route path="/product/:id" element={<ProductDetails />} />

          {/* 404 Page - Catch all unmatched routes */}
          <Route path="*" element={
            <div style={{ 
              textAlign: "center", 
              padding: "80px 20px",
              minHeight: "60vh"
            }}>
              <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>404</h1>
              <h2 style={{ marginBottom: "20px" }}>Page Not Found</h2>
              <p style={{ marginBottom: "30px", color: "#666" }}>
                The page you are looking for doesn't exist or has been moved.
              </p>
              <a 
                href="/" 
                style={{
                  padding: "12px 30px",
                  background: "#ff6a00",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  display: "inline-block"
                }}
              >
                Go Back Home
              </a>
            </div>
          } />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;