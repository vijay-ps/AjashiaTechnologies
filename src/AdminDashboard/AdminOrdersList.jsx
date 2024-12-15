import AdminSidebar from "./adminsidebar";

const AdminOrdersList = () => {
  const orders = [
    {
      id: 1,
      orderId: "123",
      customer: "John Doe",
      date: "2024-12-10",
      total: 5000,
    },
    {
      id: 2,
      orderId: "124",
      customer: "Alice Smith",
      date: "2024-12-11",
      total: 4500,
    },
    {
      id: 3,
      orderId: "125",
      customer: "Bob Johnson",
      date: "2024-12-12",
      total: 6500,
    },
  ];

  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-1 p-4 lg:ml-[250px] sm:ml-[80px]">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Orders List</h1>
        <div className="bg-white rounded-lg shadow-lg overflow-x-auto">
          <table className="w-full text-left table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border-b font-semibold text-gray-700">
                  Order ID
                </th>
                <th className="px-4 py-2 border-b font-semibold text-gray-700">
                  Customer
                </th>
                <th className="px-4 py-2 border-b font-semibold text-gray-700">
                  Order Date
                </th>
                <th className="px-4 py-2 border-b font-semibold text-gray-700">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{order.orderId}</td>
                  <td className="px-4 py-2 border-b">{order.customer}</td>
                  <td className="px-4 py-2 border-b">{order.date}</td>
                  <td className="px-4 py-2 border-b">₹{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminOrdersList;
