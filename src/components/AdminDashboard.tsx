import { Outlet, Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      
      {/* ✅ Links to Nested Routes */}
      <nav className="mt-3">
        <Link to="product-card" className="text-blue-500 underline">
          View Product Card
        </Link>
      </nav>

      {/* ✅ Nested routes will be rendered here */}
      <Outlet />
    </div>
  );
};

export default AdminDashboard;

