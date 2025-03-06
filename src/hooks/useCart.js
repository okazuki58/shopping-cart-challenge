import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    clearCart,
  } = context;

  const removeItem = (productId) => {
    const itemToRemove = cartItems.find((item) => item.id === productId);

    if (itemToRemove) {
      removeFromCart(productId);
      console.log(`${itemToRemove.name}を削除しました`);

      const remainingItemCount = cartItems.length - 1;
      alert(
        `${itemToRemove.name}を削除しました。カートには${remainingItemCount}個の商品があります`
      );
    }
  };

  const getCartItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  const getCartTotal = () => {
    return getTotalPrice();
  };

  return {
    cartItems,
    addToCart,
    removeItem,
    updateQuantity,
    getTotalPrice,
    getCartItemCount,
    getCartTotal,
    clearCart,
  };
};

export default useCart;
