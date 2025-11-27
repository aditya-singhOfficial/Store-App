import React, { useContext, useState } from "react";
import { Link, Links } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {
  const [products] = useContext(ProductContext);
  const [isVisible, setIsVisible] = useState(false);
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
      <nav className="w-full bg-white lg:w-[20%] h-[15vh] lg:h-full lg:px-4 lg:py-6">
        <div className="w-full bg-white fixed lg:hidden px-2 py-3">
          <div className="w-full lg:hidden flex items-center justify-between pr-2">
            <button onClick={() => setIsVisible(!isVisible)}>
              {isVisible ? (
                <IoCloseSharp className="text-2xl" />
              ) : (
                <CiMenuFries className="text-2xl" />
              )}
            </button>
            <Link
              className="py-2 px-4 w-fit border-2 border-blue-200 text-blue-500 rounded-md hover:bg-blue-300 hover:text-white transition-colors duration-200"
              to="/add-product"
            >
              Add a Product
            </Link>
          </div>
          {isVisible && (
            <div className="h-fit bg-white  transition-all lg:hidden w-full">
              <h1 className="flex mt-5 text-xl font-semibold">Category:</h1>
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
                    <Link
                      onClick={() => setIsVisible(!isVisible)}
                      to={`/category/?category=${item}`}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <Link
          className="hidden lg:flex py-2 px-4 w-fit border-2 border-blue-200 text-blue-500 rounded-md hover:bg-blue-300 hover:text-white transition-colors duration-200"
          to="/add-product"
        >
          Add a Product
        </Link>
        <h1 className="hidden lg:flex mt-5 text-xl font-semibold">Category:</h1>
        <ul className="hidden lg:flex lg:flex-col gap-2 mt-2">
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
