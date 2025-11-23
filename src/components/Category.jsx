import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../utils/Axios";
import Loader from "./Loader";

const Category = () => {
  const navigate = useNavigate();
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
    if (productCategory) getCategory();
  }, [productCategory]);

  return productCategoryData ? (
    <div className="w-[80%] h-screen py-6 overflow-x-hidden overflow-y-auto flex flex-col gap-6  ">
      <div className="w-full h-fit flex items-center justify-between pr-10 flex-row-reverse border-b-2 pb-3">
        <button
          className="py-2 px-4 border-2 border-blue-200 text-blue-500 rounded-md hover:bg-blue-300 hover:text-white transition-colors duration-200"
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <h1 className="text-xl font-semibold">Category</h1>
      </div>
      <div className="flex flex-wrap w-full h-full gap-6">
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
