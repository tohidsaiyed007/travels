


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./Navbar/Navbar";
// import Footer from "./Footer/Footer";

// import Home from "./pages/Home";
// import Flights from "./pages/Flights";
// import About from "./pages/About";
// import Bank from "./pages/Bank";
// import Privacy from "./pages/Privacy";
// import Terms from "./pages/Terms";
// import Customer from "./pages/Customer";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

// function App() {
//   return (
//     <BrowserRouter>

//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/flights" element={<Flights />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/bank" element={<Bank />} />
//         <Route path="/privacy" element={<Privacy />} />
//         <Route path="/terms" element={<Terms />} />
//         <Route path="/customer" element={<Customer />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>

//     </BrowserRouter>
//   );
// }

// export default App;



















// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./Navbar/Navbar";
// import Footer from "./Footer/Footer";

// import Home from "./pages/Home";
// import Flights from "./pages/Flights";
// import About from "./pages/About";
// import Bank from "./pages/Bank";
// import Privacy from "./pages/Privacy";
// import Terms from "./pages/Terms";
// import Customer from "./pages/Customer";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

// function App() {
//   return (
//     <BrowserRouter>

//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/flights" element={<Flights />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/bank" element={<Bank />} />
//         <Route path="/privacy" element={<Privacy />} />
//         <Route path="/terms" element={<Terms />} />
//         <Route path="/customer" element={<Customer />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>

//       <Footer /> {/* 👈 Footer add */}

//     </BrowserRouter>
//   );
// }

// export default App;












import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

import Home from "./pages/Home";
import Flights from "./pages/Flights";
import About from "./pages/About";
import Bank from "./pages/Bank";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Customer from "./pages/Customer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Success from "./pages/Success"; // 👈 ADD THIS

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/about" element={<About />} />
        <Route path="/bank" element={<Bank />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* ✅ NEW SUCCESS ROUTE */}
        <Route path="/success" element={<Success />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;