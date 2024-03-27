import React from "react";
import Header from "../header/Header";
import BestSeller from "./BestSeller";
import Footer from "../footer/Footer";

function Shop() {
  return (
    <div>
      <Header />
      <main className="main">
        <BestSeller />
      </main>
      <Footer />
    </div>
  );
}

export default Shop;
