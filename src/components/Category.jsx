import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../utils/Axios";
import Loader from "./Loader";
import { ProductContext } from "../utils/Context";

const Category = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const { search } = useLocation();
  const category = search.split("=")[1];
  const productCategory = decodeURIComponent(category);
  const [productCategoryData, setProductCategorydata] = useState(null);
  const getCategory = async () => {
    const { data } = await api.get(`/products/category/${productCategory}`);
    console.log(data);
    setProductCategorydata(data);
  };

  useEffect(() => {
    // if (productCategory) getCategory();
    if (productCategory) {
      setProductCategorydata(
        products.filter((item) => item.category == productCategory)
      );
    }
  }, [productCategory]);

  return productCategoryData ? (
    <div className="w-full h-full lg:w-[80%] lg:h-screen py-6 overflow-x-hidden overflow-y-auto flex flex-col lg:gap-6  ">
      <div className="w-full h-fit flex items-center justify-between px-2 lg:pr-10 flex-row-reverse border-b-2 pb-3">
        <button
          className="py-2 px-4 border-2 border-blue-200 text-blue-500 rounded-md hover:bg-blue-300 hover:text-white transition-colors duration-200"
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <h1 className="text-xl font-semibold">Category</h1>
      </div>
      <div className="flex flex-wrap w-full h-full lg:gap-6 gap-3 justify-around mt-4">
        {productCategoryData.map((item, index) => (
          <ProductCard product={item} />
        ))}
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Category;
