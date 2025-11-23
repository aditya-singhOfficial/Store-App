import React, { createContext, useEffect, useState } from "react";
import api from "./Axios";
const ProudctContext = createContext();

const Context = (props) => {
  const [product, setProduct] = useState(null);

  const getProducts = async () => {
    const data = await api.get("/products");
    setProduct(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    getProducts();
  },[]);

  return (
    <ProudctContext.Provider value={product}>
      {props.children}
    </ProudctContext.Provider>
  );
};

export default Context;
