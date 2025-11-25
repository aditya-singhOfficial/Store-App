import { Routes, Route } from "react-router-dom";
import ProductsSection from "../components/ProductsSection";
import Details from "../components/Details";
import Category from "../components/Category";
import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProduct";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsSection />} />
      <Route path="/products/:id" element={<Details />} />
      <Route path="/category" element={<Category />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/edit-product/:id" element={<EditProduct />} />
    </Routes>
  );
};

export default Routing;
