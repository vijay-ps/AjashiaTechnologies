import AdminSidebar from "./adminsidebar";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <AdminSidebar />
      <div className="flex-1 p-4 lg:ml-[250px] sm:ml-[80px]">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Admin Dashboard
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold text-gray-700">
              Total Products
            </h2>
            <p className="text-gray-500 mt-2">3 Projects</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold text-gray-700">
              Total Orders
            </h2>
            <p className="text-gray-500 mt-2">12 Orders</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold text-gray-700">Revenue</h2>
            <p className="text-gray-500 mt-2">₹24000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
