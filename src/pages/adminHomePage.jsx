import { Link } from 'react-router-dom'
import { MdDashboardCustomize, MdProductionQuantityLimits, MdShoppingCart, MdPeople, MdAssessment, MdSettings, MdLogout } from "react-icons/md";
import { Routes, Route } from 'react-router-dom';
import AdminProductPage from './admin/adminProductPage';
export default function AdminHomePage() {
    return (
        <div className="bg-blue-200 w-full h-screen flex">
            
        <div className="w-[20%] h-screen bg-blue-700 flex flex-col items-center justify-center gap-6">
         <Link to="/admin/dashboard" className="text-white font-semibold hover:bg-blue-300 px-4 py-2 rounded flex flex-row items-center gap-2"> <MdDashboardCustomize size={20} />
Dashboard</Link>
         <Link to="/admin/products" className="text-white font-semibold hover:bg-blue-300 px-4 py-2 rounded flex flex-row items-center gap-2"><MdProductionQuantityLimits size={20} />Products</Link>
         <Link to="/admin/orders" className="text-white font-semibold hover:bg-blue-300 px-4 py-2 rounded flex flex-row items-center gap-2"><MdShoppingCart size={20} />Orders</Link>
         <Link to="/admin/customers" className="text-white font-semibold hover:bg-blue-300 px-4 py-2 rounded flex flex-row items-center gap-2"><MdPeople size={20} />Customers</Link>
         <Link to="/admin/reports" className="text-white font-semibold hover:bg-blue-300 px-4 py-2 rounded flex flex-row items-center gap-2"><MdAssessment size={20} />Reports</Link>
         <Link to="/admin/settings" className="text-white font-semibold hover:bg-blue-300 px-4 py-2 rounded flex flex-row items-center gap-2"><MdSettings size={20} />Settings</Link>
         <Link to="/" className="text-white font-semibold hover:bg-red-500 px-4 py-2 rounded flex flex-row items-center gap-2 mt-4"><MdLogout size={20} />Logout</Link>
        </div>

       <div className="w-[80%] h-screen bg-red-300 flex items-center justify-center">

      <Routes>
       <Route path="/dashboard" element={<h1 className="text-4xl font-bold text-white">Admin Dashboard</h1>} />
       <Route path="/products" element={<AdminProductPage/>} />
       <Route path="/orders" element={<h1 className="text-4xl font-bold text-white">Orders Management</h1>} />
       <Route path="/customers" element={<h1 className="text-4xl font-bold text-white">Customers Management</h1>} />
       <Route path="/reports" element={<h1 className="text-4xl font-bold text-white">Reports and Analytics</h1>} />
       <Route path="/settings" element={<h1 className="text-4xl font-bold text-white">Admin Settings</h1>} />
       <Route path="/*" element={<h1 className="text-4xl font-bold text-white">404 not Found Admin </h1>} />
       
      </Routes>

         
       </div>

       </div>
            )

       
            
        
    }