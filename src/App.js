
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

import Home from "./pages/Home";
import Flights from "./pages/Flights";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Bank from "./pages/Bank";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Customer from "./pages/Customer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Success from "./pages/Success";
import Cart from "./pages/Cart";

/* ADMIN */
import Admin from "./pages/Admin";
import AdminDashboard from "./pages/AdminDashboard";

import CartProvider from "./context/CartContext";

function App() {

  return (

    <CartProvider>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/flights" element={<Flights />} />

        <Route path="/booking" element={<Booking />} />

        <Route path="/about" element={<About />} />

        <Route path="/bank" element={<Bank />} />

        <Route path="/privacy" element={<Privacy />} />

        <Route path="/terms" element={<Terms />} />

        <Route path="/customer" element={<Customer />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/success" element={<Success />} />

        <Route path="/cart" element={<Cart />} />

        {/* ADMIN LOGIN */}
        <Route path="/admin" element={<Admin />} />

        {/* ADMIN DASHBOARD */}
        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />

      </Routes>

      <Footer />

    </CartProvider>

  );

}

export default App;