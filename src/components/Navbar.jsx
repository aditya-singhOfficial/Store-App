import React, { useContext } from "react";
import { Link, Links } from "react-router-dom";
import { ProductContext } from "../utils/Context";

const Navbar = () => {
  const [products] = useContext(ProductContext);
  const distinct_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  const unique_category = [...new Set(distinct_category)];
  const randomColor = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},0.5)`;
  };
  return (
    <>
      <nav className="w-[20%] h-full px-4 py-6">
        <Link
          className="py-2 px-4 border-2 border-blue-200 text-blue-500 rounded-md hover:bg-blue-300 hover:text-white transition-colors duration-200"
          to="/add-product"
        >
          Add a Product
        </Link>
        <h1 className="mt-5 text-xl font-semibold">Category:</h1>
        <ul className="flex flex-col gap-2 mt-2">
          {unique_category.map((item, index) => (
            <li
              key={index}
              className="flex capitalize items-center cursor-pointer gap-1"
            >
              <span
                style={{ backgroundColor: randomColor() }}
                className="w-[13px] h-[13px] inline-block rounded-full
            bg-violet-400"
              ></span>
              <Link to={`/category/?category=${item}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
