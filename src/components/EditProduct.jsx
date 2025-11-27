import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import { Bounce, toast, ToastContainer } from "react-toastify";

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [products, setProducts] = useContext(ProductContext);
  const [product, setProduct] = useState(null);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (products && products.length > 0) {
      const foundProduct = products.filter((item) => item.id == id)[0];
      setProduct(foundProduct);
      reset(foundProduct);
    }
  }, [id, products, reset]);

  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  const handleFormSubmit = (data) => {
    const { image, title, category, price, description } = data;

    if (!image || !title || !category || !price || !description) {
      toast.warn("Please Fill Out All The Fields!", {
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
      return;
    }
    if (
      image.length <= 4 ||
      title.length < 3 ||
      category.length < 3 ||
      price < 0 ||
      description.length < 3
    ) {
      toast.error("Invalid Input: Check lengths and price!", {
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
      return;
    }

    const updatedProductsArray = products.map((item) => {
      if (item.id == id) {
        return { ...item, ...data };
      }
      return item;
    });
    toast.success("Product Updated Successfully!", {
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
    setProducts(updatedProductsArray);

    navigate(-1);
  };

  return (
    product && (
      <>
        <div className="lg:w-[80%] w-full border-l border-gray-300 lg:h-screen py-6 flex justify-center items-center">
          <div className="w-[95%] lg:w-2/3 p-2">
            <h1 className="font-semibold text-3xl">Edit Product</h1>
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="flex flex-col gap-4 mt-4"
            >
              <div className="w-full">
                <input
                  {...register("image")}
                  className="rounded bg-zinc-100 w-full py-2 px-4 text-zinc-800 placeholder-zinc-900 outline-none border-none text-md"
                  type="url"
                  placeholder="Product Link"
                />
              </div>
              <div className="w-full">
                <input
                  {...register("title")}
                  className="rounded bg-zinc-100 w-full py-2 px-4 text-zinc-800 placeholder-zinc-900 outline-none border-none text-md"
                  type="text"
                  placeholder="Title"
                />
              </div>
              <div className="w-full flex justify-between">
                <input
                  {...register("category")}
                  className="rounded bg-zinc-100 w-[49%] py-2 px-4 text-zinc-800 placeholder-zinc-900 outline-none border-none text-md"
                  type="text"
                  placeholder="Category"
                />
                <input
                  {...register("price", { valueAsNumber: true })}
                  className="rounded bg-zinc-100 w-[49%] py-2 px-4 text-zinc-800 placeholder-zinc-900 outline-none border-none text-md"
                  type="number"
                  placeholder="Price"
                  step="any"
                />
              </div>
              <div className="w-full">
                <textarea
                  {...register("description")}
                  className="rounded bg-zinc-100 w-full py-2 px-4 text-zinc-800 placeholder-zinc-900 outline-none border-none text-md resize-none"
                  rows={10}
                  placeholder="Description"
                ></textarea>
              </div>
              <div className="w-full flex justify-center items-center">
                <button className="py-2 px-4 border-2 border-blue-200 text-blue-500 rounded-md hover:bg-blue-300 hover:text-white transition-colors duration-200 cursor-pointer">
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer position="top-center" theme="dark" />
      </>
    )
  );
};

export default EditProduct;
