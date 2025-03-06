import React from "react";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>DevExam オンラインショップ</h1>
        <p>高品質な商品を厳選してお届けします</p>
      </div>

      <h2>おすすめ商品</h2>
      <ProductList />
    </div>
  );
};

export default Home;
