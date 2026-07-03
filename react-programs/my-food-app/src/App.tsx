import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaHome } from "react-icons/fa";
import { GiCarrot, GiChickenLeg, GiMilkCarton } from "react-icons/gi";

import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Milk from "./Milk";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      {/* Navbar */}
      <nav className="navbar">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-item active-home" : "nav-item"
          }
        >
          <FaHome />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/veg"
          className={({ isActive }) =>
            isActive ? "nav-item active-veg" : "nav-item"
          }
        >
          <GiCarrot />
          <span>Veg Items</span>
        </NavLink>

        <NavLink
          to="/nonveg"
          className={({ isActive }) =>
            isActive ? "nav-item active-nonveg" : "nav-item"
          }
        >
          <GiChickenLeg />
          <span>Non Veg Items</span>
        </NavLink>

        <NavLink
          to="/milk"
          className={({ isActive }) =>
            isActive ? "nav-item active-milk" : "nav-item"
          }
        >
          <GiMilkCarton />
          <span>Milk Items</span>
        </NavLink>

      </nav>

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<NonVeg />} />
        <Route path="/milk" element={<Milk />} />
      </Routes>

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