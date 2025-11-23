import { Routes, Route } from "react-router-dom";
import ProductsSection from "../components/ProductsSection";
import Details from "../components/Details";
import Category from "../components/Category";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsSection />} />
      <Route path="/products/:id" element={<Details />} />
      <Route path="/category" element={<Category />} />
    </Routes>
  );
};

export default Routing;
