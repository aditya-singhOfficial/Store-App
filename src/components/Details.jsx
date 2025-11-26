import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";
import api from "../utils/Axios";
import { Bounce, toast } from "react-toastify";
const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [products, setProducts] = useContext(ProductContext);

  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    const data = await api.get(`/products/${id}`);
    console.log(data.data);
    setProduct(data.data);
  };

  const deleteHandler = () => {
    setProducts(products.filter((item) => item.id != id));
    localStorage.setItem("products", JSON.stringify(products));
    toast.success("Deleted Successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    navigate("/");
  };

  useEffect(() => {
    // getProduct();
    if (!product) {
      setProduct(products.filter((item) => item.id == id)[0]);
    }
  }, []);

  return product ? (
    <>
      <div className="w-[80%]  border-l border-gray-300 items-center justify-center h-screen py-6 flex flex-wrap flex-col gap-4">
        <div className="w-11/12  min-h-[50%] flex items-center justify-center gap-10">
          <img className="w-[20%]" src={product.image} alt="" />
          <div className="flex flex-col gap-2 max-w-[65%]">
            <h1 className="text-md capitalize">
              <span className="font-semibold text-2xl">title:</span>{" "}
              {product.title}
            </h1>
            <h1 className="text-md capitalize">
              <span className="font-semibold text-2xl">Category:</span>{" "}
              {product.category}
            </h1>
            <h1 className="text-md capitalize">
              <span className="font-semibold text-2xl">price:</span> $
              {product.price}
            </h1>
            <h1 className="text-md capitalize">
              <span className="font-semibold text-2xl">description: </span>
              {product.description}
            </h1>
            <div className=" w-full flex gap-6 mt-4">
              <Link
                to={`/edit-product/${id}`}
                className="py-2 px-4 border-2 border-blue-200 text-blue-500 rounded-md hover:bg-blue-300 hover:text-white transition-colors duration-200"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteHandler()}
                className="py-2 px-4 cursor-pointer border-2 border-red-200 text-red-500 rounded-md hover:bg-red-300 hover:text-white transition-colors duration-200"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="py-2 px-4 border-2 border-blue-200 text-blue-500 rounded-md text-2xl hover:bg-blue-500 hover:text-white transition-colors duration-200 cursor-pointer"
        >
          Back
        </button>
      </div>
    </>
  ) : (
    <Loader />
  );
};

export default Details;
