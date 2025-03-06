import { useState, useEffect } from "react";
import productsData from "../data/products.json";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 実際のAPIからデータを取得する代わりに、JSONファイルからデータを読み込む
    try {
      setProducts(productsData);
      setLoading(false);
    } catch (err) {
      setError("商品データの取得に失敗しました");
      setLoading(false);
    }
  }, []);

  const getProductById = (id) => {
    return products.find((product) => product.id === Number(id)) || null;
  };

  return {
    products,
    loading,
    error,
    getProductById,
  };
};

export default useProducts;
