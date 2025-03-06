import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

// 機能追加対象: お気に入りボタンを追加する
const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    alert(`${product.name}をカートに追加しました`);
  };

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-link">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">¥{product.price.toLocaleString()}</p>
          <p className="product-category">{product.category}</p>
        </div>
      </Link>
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        カートに追加
      </button>

      {/* TODO: ここにお気に入りボタンを追加 */}
    </div>
  );
};

export default ProductCard;
