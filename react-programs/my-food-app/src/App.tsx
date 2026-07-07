import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaHome, FaUserPlus } from "react-icons/fa";
import { GiCarrot, GiChickenLeg, GiMilkCarton } from "react-icons/gi";

import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Milk from "./Milk";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav className="bg-gray-900 text-white shadow-lg flex justify-center gap-8 py-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              isActive ? "bg-blue-600 text-white" : "hover:bg-gray-700"
            }`
          }
        >
          <FaHome className="text-xl" />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/veg"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              isActive ? "bg-green-600 text-white" : "hover:bg-gray-700"
            }`
          }
        >
          <GiCarrot className="text-xl" />
          <span>Veg Items</span>
        </NavLink>

        <NavLink
          to="/nonveg"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              isActive ? "bg-red-600 text-white" : "hover:bg-gray-700"
            }`
          }
        >
          <GiChickenLeg className="text-xl" />
          <span>Non Veg Items</span>
        </NavLink>

        <NavLink
          to="/milk"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              isActive ? "bg-yellow-500 text-black" : "hover:bg-gray-700"
            }`
          }
        >
          <GiMilkCarton className="text-xl" />
          <span>Milk Items</span>
        </NavLink>

        <NavLink
          to="/register"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              isActive ? "bg-purple-600 text-white" : "hover:bg-gray-700"
            }`
          }
        >
          <FaUserPlus className="text-xl" />
          <span>Register</span>
        </NavLink>
      </nav>

      {/* Pages */}
      <main className="min-h-screen bg-gray-100 p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<NonVeg />} />
          <Route path="/milk" element={<Milk />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="colored"
      />
    </BrowserRouter>
  );
}

export default App;