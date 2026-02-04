import React from "react";
import bannerImg from "../../assets/banner.png";
import Products from "./Products";

const Shop = () => {
  return (
    <section className="min-h-screen">
      {/* banner img */}
      <div
        className="w-full h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <h1 className="text-4xl font-bold text-white">Shop Our Products</h1>
      </div>

      <Products heading="What's Your Choice" />
    </section>
  );
};

export default Shop;
