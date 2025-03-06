import React from "react";
import ProductCard from "./ProductCard";
import { useProducts } from "../hooks/useProducts";

const ProductList = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <div className="loading">商品情報を読み込み中...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
