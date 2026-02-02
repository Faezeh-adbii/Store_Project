import { createContext, useEffect, useState } from "react";
import api from "../Services/config";

const ProductContext = createContext();
function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get("/product");
        setProducts(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProduct();
  }, []);
  return <ProductContext.Provider value={products}>{children}</ProductContext.Provider>;
}

export default ProductProvider;
