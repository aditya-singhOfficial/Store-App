import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <>
      <Link
        to={`/products/${product.id}`}
        className="w-[18%] px-4 border rounded h-[50%] flex flex-col justify-around flex-wrap items-center gap-4 "
      >
        <div className="h-[45%]">
          <img
            className="object-contain w-full h-full hover:scale-105 transition-all duration-300"
            src={product.image}
            alt=""
          />
        </div>
        <h1 className="text-sm w-11/12 font-semibold">{product.title}</h1>
        <h2 className="text-md font-semibold w-11/12">$ {product.price}</h2>
      </Link>
    </>
  );
};

export default ProductCard;
