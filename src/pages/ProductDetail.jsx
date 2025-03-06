import React from "react";
import { useParams, Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { useCart } from "../hooks/useCart";

const ProductDetail = () => {
  const { id } = useParams();
  const { getProductById, loading, error } = useProducts();
  const { addToCart } = useCart();

  const product = getProductById(id);

  if (loading) return <div className="loading">商品情報を読み込み中...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!product) return <div className="error">商品が見つかりません</div>;

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name}をカートに追加しました`);
  };

  return (
    <div className="product-detail">
      <Link to="/" className="back-button">
        ← 商品一覧に戻る
      </Link>

      <div className="product-content">
        <div className="product-image-large">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-info-detail">
          <h2>{product.name}</h2>
          <p className="product-price-large">
            ¥{product.price.toLocaleString()}
          </p>
          <p className="product-category-detail">
            カテゴリ: {product.category}
          </p>
          <p className="product-description">{product.description}</p>

          <button
            className="add-to-cart-button-large"
            onClick={handleAddToCart}
          >
            カートに追加
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
