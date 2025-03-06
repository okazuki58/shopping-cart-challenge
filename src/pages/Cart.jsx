import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useCart } from "../hooks/useCart";

// 機能追加対象: カートを空にするボタンを追加する
const Cart = () => {
  const { cartItems, getTotalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>カートは空です</h2>
        <p>商品を追加してください。</p>
        <Link to="/" className="continue-shopping">
          お買い物を続ける
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>ショッピングカート</h2>

      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="cart-summary">
        <div className="cart-total">
          <span>合計:</span>
          <span>¥{getTotalPrice().toLocaleString()}</span>
        </div>

        <div className="cart-actions">
          <Link to="/" className="continue-shopping">
            お買い物を続ける
          </Link>
          <button className="checkout-button">レジに進む</button>

          {/* TODO: ここにカートを空にするボタンを追加 */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
