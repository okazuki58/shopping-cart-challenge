import React, { useState } from "react";
import { useCart } from "../hooks/useCart";

const CartItem = ({ item }) => {
  const { removeItem, updateQuantity } = useCart();
  const [localQuantity, setLocalQuantity] = useState(item.quantity);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (isNaN(newQuantity) || newQuantity < 1) return;

    setLocalQuantity(newQuantity);
    // 数量変更をカートに反映させる
    updateQuantity(item.id, newQuantity);
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
              value={localQuantity}
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
        <p>小計: ¥{(item.price * localQuantity).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default CartItem;
