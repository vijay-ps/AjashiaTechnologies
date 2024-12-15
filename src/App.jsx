import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AdminHome from "./AdminDashboard/adminhome";
import AdminProductsList from "./AdminDashboard/AdminProductsList";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import AdminOrdersList from "./AdminDashboard/AdminOrdersList";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="admin" element={<AdminHome />}>
        <Route index element={<AdminDashboard />} />
        <Route path="products" element={<AdminProductsList />} />
        <Route path="orders" element={<AdminOrdersList />} />
      </Route>
    </Routes>
  );
}

export default App;
