import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <>
      <Link
        to={`/products/${product.id}`}
        className="lg:w-[18%] w-[30%] lg:px-4 px-3 border rounded lg:h-[50%] flex flex-col justify-around flex-wrap items-center lg:gap-4 "
      >
        <div className="lg:h-[45%] h-[35%]">
          <img
            className="object-contain w-full h-full hover:scale-105 transition-all duration-300"
            src={product.image}
            alt=""
          />
        </div>
        <h1 className="lg:text-sm text-xs text-center lg:w-11/12 font-semibold">
          {product.title}
        </h1>
      </Link>
    </>
  );
};

export default ProductCard;
