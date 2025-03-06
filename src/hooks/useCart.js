import { useContext } from "react";
import { CartContext } from "../context/CartContext";

// バグを含むhook - 削除機能に問題あり
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
  } = context;

  // バグ: 商品削除時にエラーが発生するバグ
  // 原因: 配列操作に関する問題（削除後に存在しない要素にアクセスしようとしている）
  const removeItem = (productId) => {
    removeFromCart(productId);
    const remainingItem = cartItems.find((item) => item.id === productId);
    console.log(`Removed item status: ${remainingItem.name}`); // ここでエラー
  };

  // カート内の商品数を計算
  const getCartItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return {
    cartItems,
    addToCart,
    removeItem, // バグのある関数を提供
    updateQuantity,
    getTotalPrice,
    getCartItemCount,
  };
};

export default useCart;
