import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";

const AddProduct = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = (data) => {
    const { url, title, category, price, description } = data;
    if (!url || !title || !category || !price || !description) {
      toast.warn(
        "Please Fill Out All The Fields properly! Some Fields Are Missing",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        }
      );
      return;
    }
    if (
      !(url.length > 4) ||
      !(title.length > 4) ||
      !(category.length > 4) ||
      !(price > 0) ||
      !(description.length > 4)
    ) {
      toast.error("Field Must Contain a Value of Minimum Length of 4!", {
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
    console.log(data);
    toast.success("Product Added Successfully!", {
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
  return (
    <>
      <div className="w-[80%] border-l border-gray-300 h-screen py-6 flex justify-center items-center">
        <div className=" w-2/3 p-2">
          <h1 className="font-semibold text-3xl">Add A Product</h1>
          <form
            onSubmit={handleSubmit((data) => handleFormSubmit(data))}
            className="flex flex-col gap-4 mt-4"
          >
            <div className="w-full">
              <input
                {...register("url")}
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
                placeholder="Categroy"
              />
              <input
                {...register("price")}
                className="rounded bg-zinc-100 w-[49%] py-2 px-4 text-zinc-800 placeholder-zinc-900 outline-none border-none text-md"
                type="number"
                placeholder="Price"
              />
            </div>
            <div className="w-full">
              <textarea
                {...register("description")}
                className="rounded bg-zinc-100 w-full py-2 px-4 text-zinc-800 placeholder-zinc-900 outline-none border-none text-md resize-none"
                rows={10}
                type="text"
                placeholder="Description"
              ></textarea>
            </div>
            <div className="w-full flex justify-center items-center">
              <button className="py-2 px-4 border-2 border-blue-200 text-blue-500 rounded-md hover:bg-blue-300 hover:text-white transition-colors duration-200 cursor-pointer">
                Save Product
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  );
};

export default AddProduct;
