import { MdShoppingBag, MdDashboard } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="flex flex-col h-full bg-[#121212] text-white w-[80px] lg:w-[250px] fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out">
      <h1 className="text-2xl font-bold text-white p-4 text-center hidden lg:block">
        Ajashia
      </h1>
      <ul className="flex flex-col">
        <Link to="/admin">
          <li className="flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-700 transition duration-200 ease-in-out">
            <MdDashboard size={24} />
            <span className="hidden lg:block">Dashboard</span>
          </li>
        </Link>
        <Link to="/admin/products">
          <li className="flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-700 transition duration-200 ease-in-out">
            <MdShoppingBag size={24} />
            <span className="hidden lg:block">Products</span>
          </li>
        </Link>
        <Link to="/admin/orders">
          <li className="flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-700 transition duration-200 ease-in-out">
            <FaClipboardList size={24} />
            <span className="hidden lg:block">Orders</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default AdminSidebar;
