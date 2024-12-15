import AdminSidebar from "./adminsidebar";

const AdminProductsList = () => {
  const products = [
    { id: 1, name: "Water IoT Project", price: 2000, qty: 5 },
    { id: 2, name: "Alarm IoT Project", price: 2000, qty: 5 },
    { id: 3, name: "Emergency IoT Project", price: 2000, qty: 5 },
  ];

  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-1 p-4 lg:ml-[250px] sm:ml-[80px]">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Products List</h1>
        <div className="bg-white rounded-lg shadow-lg overflow-x-auto">
          <table className="w-full text-left table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border-b font-semibold text-gray-700">
                  ID
                </th>
                <th className="px-4 py-2 border-b font-semibold text-gray-700">
                  Product
                </th>
                <th className="px-4 py-2 border-b font-semibold text-gray-700">
                  Price
                </th>
                <th className="px-4 py-2 border-b font-semibold text-gray-700">
                  Quantity
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{product.id}</td>
                  <td className="px-4 py-2 border-b">{product.name}</td>
                  <td className="px-4 py-2 border-b">₹{product.price}</td>
                  <td className="px-4 py-2 border-b">{product.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminProductsList;
