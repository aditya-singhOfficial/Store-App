import React, { createContext, useEffect, useState } from "react";
import api from "./Axios";
export const ProductContext = createContext();

const Context = (props) => {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products"))||null);

  const getProducts = async () => {
    const data = await api.get(`/products`);
    setProducts(data.data);
  };

  useEffect(() => {
    if(!products)
      getProducts();
  }, []);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;
