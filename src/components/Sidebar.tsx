// components/Sidebar.tsx
import { FaHome, FaBox, FaUser } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-[#0D1321] text-white p-5 ">
      <h2 className="text-xl font-bold">Admin Panel</h2>
      <ul className="mt-5 space-y-3">
        <li className="flex items-center gap-2 p-2 bg-gray-800 rounded-lg cursor-pointer">
          <FaHome /> Dashboard
        </li>
        <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          <FaBox /> Products
        </li>
        <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          <FaUser /> Users
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
