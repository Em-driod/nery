import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../components/AdminDashboard";
import ProductCard from "../components/ProductCard";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/product-card" element={<ProductCard id={0} name={""} price={0} image={""} />} />
    </Routes>
  );
};

export default AdminRoutes;
