import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "../utils/Context";
import Loader from "./Loader";
const ProductsSection = () => {
  const [products] = useContext(ProductContext);
  
  return products ? (
    <>
      <div className="w-[80%] h-screen py-6 overflow-x-hidden overflow-y-auto flex flex-wrap gap-4 justify-around">
        {products.map((item, index) => (
          <ProductCard product={item} key={index} />
        ))}
      </div>
    </>
  ) : (
    <Loader />
  );
};

export default ProductsSection;
