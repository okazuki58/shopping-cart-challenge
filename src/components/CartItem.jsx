import React from "react";
import { useCart } from "../hooks/useCart";

// バグを含むコンポーネント - 数量更新が合計金額に反映されないバグあり
const CartItem = ({ item }) => {
  const { removeItem, updateQuantity } = useCart();

  // バグ: 数量更新が合計金額に反映されない
  // 原因: onChangeイベントハンドラの実装に問題がある
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (isNaN(newQuantity)) return;

    // バグ部分: updateQuantityを呼び出すが、値を更新するだけで合計には反映されない
    e.target.value = newQuantity; // DOMを直接操作しているが、Reactの状態は更新されていない
    console.log(`数量を${newQuantity}に変更しました`);
    // 正しくは: updateQuantity(item.id, newQuantity); を呼び出すべき
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p className="cart-item-price">¥{item.price.toLocaleString()}</p>
        <div className="cart-item-controls">
          <div className="quantity-control">
            <label htmlFor={`quantity-${item.id}`}>数量:</label>
            <input
              id={`quantity-${item.id}`}
              type="number"
              min="1"
              value={item.quantity}
              onChange={handleQuantityChange}
              className="quantity-input"
            />
          </div>
          <button className="remove-button" onClick={() => removeItem(item.id)}>
            削除
          </button>
        </div>
      </div>
      <div className="cart-item-subtotal">
        <p>小計: ¥{(item.price * item.quantity).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default CartItem;
