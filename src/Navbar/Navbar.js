
// // import { useState, useEffect } from "react";
// // import { NavLink } from "react-router-dom";
// // import "./Navbar.css";

// // import { MdFlight } from "react-icons/md";
// // import { FaBars, FaTimes } from "react-icons/fa";

// // function Navbar() {

// //   const [menuOpen, setMenuOpen] = useState(false);

// //   const [scrolled, setScrolled] = useState(false);

// //   /* SCROLL EFFECT */

// //   useEffect(() => {

// //     const handleScroll = () => {

// //       if(window.scrollY > 20){
// //         setScrolled(true);
// //       }
// //       else{
// //         setScrolled(false);
// //       }

// //       /* AUTO CLOSE MENU */

// //       if(menuOpen){
// //         setMenuOpen(false);
// //       }

// //     };

// //     window.addEventListener("scroll", handleScroll);

// //     return () => {
// //       window.removeEventListener("scroll", handleScroll);
// //     };

// //   }, [menuOpen]);

// //   /* BODY SCROLL LOCK */

// //   useEffect(() => {

// //     if(menuOpen){
// //       document.body.style.overflow = "hidden";
// //     }
// //     else{
// //       document.body.style.overflow = "auto";
// //     }

// //   }, [menuOpen]);

// //   /* ESC CLOSE */

// //   useEffect(() => {

// //     const handleKey = (e) => {

// //       if(e.key === "Escape"){
// //         setMenuOpen(false);
// //       }

// //     };

// //     window.addEventListener("keydown", handleKey);

// //     return () => {
// //       window.removeEventListener("keydown", handleKey);
// //     };

// //   }, []);

// //   return (

// //     <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

// //       {/* LOGO */}

// //       <NavLink
// //         to="/"
// //         className="logo"
// //         onClick={() => setMenuOpen(false)}
// //       >

// //         Saiyed Travel

// //         <MdFlight className="fl" />

// //       </NavLink>

// //       {/* TOGGLE */}

// //       <button
// //         className="menu-toggle"
// //         onClick={() => setMenuOpen(!menuOpen)}
// //         aria-label="Toggle Menu"
// //       >

// //         {menuOpen ? <FaTimes /> : <FaBars />}

// //       </button>

// //       {/* NAV LINKS */}

// //       <div className={`nav-links ${menuOpen ? "show" : ""}`}>

// //         <NavLink
// //           to="/"
// //           onClick={() => setMenuOpen(false)}
// //           className={({isActive}) => isActive ? "active-link" : ""}
// //         >
// //           Home
// //         </NavLink>

// //         <NavLink
// //           to="/about"
// //           onClick={() => setMenuOpen(false)}
// //           className={({isActive}) => isActive ? "active-link" : ""}
// //         >
// //           About
// //         </NavLink>

// //         <NavLink
// //           to="/bank"
// //           onClick={() => setMenuOpen(false)}
// //           className={({isActive}) => isActive ? "active-link" : ""}
// //         >
// //           Bank
// //         </NavLink>

// //         <NavLink
// //           to="/privacy"
// //           onClick={() => setMenuOpen(false)}
// //           className={({isActive}) => isActive ? "active-link" : ""}
// //         >
// //           Privacy
// //         </NavLink>

// //         <NavLink
// //           to="/terms"
// //           onClick={() => setMenuOpen(false)}
// //           className={({isActive}) => isActive ? "active-link" : ""}
// //         >
// //           Terms
// //         </NavLink>

// //         <NavLink
// //           to="/customer"
// //           onClick={() => setMenuOpen(false)}
// //           className={({isActive}) => isActive ? "active-link" : ""}
// //         >
// //           Contact
// //         </NavLink>

// //         <NavLink
// //           to="/login"
// //           className="btn"
// //           onClick={() => setMenuOpen(false)}
// //         >
// //           Login
// //         </NavLink>

// //         <NavLink
// //           to="/signup"
// //           className="btn signup"
// //           onClick={() => setMenuOpen(false)}
// //         >
// //           Signup
// //         </NavLink>

// //       </div>

// //     </nav>

// //   );
// // }

// // export default Navbar;










// // import { useState, useEffect } from "react";
// // import { NavLink } from "react-router-dom";
// // import "./Navbar.css";

// // import { MdFlight } from "react-icons/md";
// // import { FaBars, FaTimes } from "react-icons/fa";

// // function Navbar() {

// //   const [menuOpen, setMenuOpen] = useState(false);

// //   const [scrolled, setScrolled] = useState(false);

// //   /* SCROLL EFFECT */

// //   useEffect(() => {

// //     const handleScroll = () => {

// //       if(window.scrollY > 20){
// //         setScrolled(true);
// //       }
// //       else{
// //         setScrolled(false);
// //       }

// //       /* AUTO CLOSE MENU ONLY ON MOBILE */

// //       if(window.innerWidth <= 768 && menuOpen){
// //         setMenuOpen(false);
// //       }

// //     };

// //     window.addEventListener("scroll", handleScroll);

// //     return () => {
// //       window.removeEventListener("scroll", handleScroll);
// //     };

// //   }, [menuOpen]);

// //   /* BODY SCROLL LOCK */

// //   useEffect(() => {

// //     if(menuOpen){
// //       document.body.style.overflow = "hidden";
// //     }
// //     else{
// //       document.body.style.overflow = "auto";
// //     }

// //     return () => {
// //       document.body.style.overflow = "auto";
// //     };

// //   }, [menuOpen]);

// //   /* ESC CLOSE */

// //   useEffect(() => {

// //     const handleKey = (e) => {

// //       if(e.key === "Escape"){
// //         setMenuOpen(false);
// //       }

// //     };

// //     window.addEventListener("keydown", handleKey);

// //     return () => {
// //       window.removeEventListener("keydown", handleKey);
// //     };

// //   }, []);

// //   return (

// //     <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

// //       {/* LOGO */}

// //       <NavLink
// //         to="/"
// //         className="logo"
// //         onClick={() => setMenuOpen(false)}
// //       >

// //         Saiyed Travel

// //         <MdFlight className="fl" />

// //       </NavLink>

// //       {/* TOGGLE */}

// //       <button
// //         className="menu-toggle"
// //         onClick={() => setMenuOpen(!menuOpen)}
// //         aria-label="Toggle Menu"
// //         aria-expanded={menuOpen}
// //       >

// //         {menuOpen ? <FaTimes /> : <FaBars />}

// //       </button>

// //       {/* NAV LINKS */}

// //       <div className={`nav-links ${menuOpen ? "show" : ""}`}>

// //         <NavLink
// //           to="/"
// //           onClick={() => setMenuOpen(false)}
// //           className={({isActive}) => isActive ? "active-link" : ""}
// //         >
// //           Home
// //         </NavLink>

// //         <NavLink
// //           to="/about"
// //           onClick={() => setMenuOpen(false)}
// //           className={({isActive}) => isActive ? "active-link" : ""}
// //         >
// //           About
// //         </NavLink>

// //         <NavLink
// //           to="/bank"
// //           onClick={() => setMenuOpen(false)}
// //           className={({isActive}) => isActive ? "active-link" : ""}
// //         >
// //           Bank
// //         </NavLink>

// //         <NavLink
// //           to="/privacy"
// //           onClick={() => setMenuOpen(false)}
// //           className={({isActive}) => isActive ? "active-link" : ""}
// //         >
// //           Privacy
// //         </NavLink>

// //         <NavLink
// //           to="/terms"
// //           onClick={() => setMenuOpen(false)}
// //           className={({isActive}) => isActive ? "active-link" : ""}
// //         >
// //           Terms
// //         </NavLink>

// //         <NavLink
// //           to="/customer"
// //           onClick={() => setMenuOpen(false)}
// //           className={({isActive}) => isActive ? "active-link" : ""}
// //         >
// //           Contact
// //         </NavLink>

// //         {/* LOGIN */}

// //         <NavLink
// //           to="/login"
// //           onClick={() => setMenuOpen(false)}
// //           className={({isActive}) =>
// //             isActive ? "btn active-btn" : "btn"
// //           }
// //         >
// //           Login
// //         </NavLink>

// //         {/* SIGNUP */}

// //         <NavLink
// //           to="/signup"
// //           onClick={() => setMenuOpen(false)}
// //           className={({isActive}) =>
// //             isActive
// //               ? "btn signup active-signup"
// //               : "btn signup"
// //           }
// //         >
// //           Signup
// //         </NavLink>

// //       </div>

// //     </nav>

// //   );
// // }

// // export default Navbar;























// import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import "./Navbar.css";

// import { MdFlight } from "react-icons/md";

// import {
//   FaBars,
//   FaTimes,
//   FaShoppingCart
// } from "react-icons/fa";

// import { useCart } from "../context/CartContext";

// function Navbar() {

//   const [menuOpen, setMenuOpen] = useState(false);

//   const [scrolled, setScrolled] = useState(false);

//   const { cartItems } = useCart();

//   const totalItems = cartItems.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );

//   /* SCROLL EFFECT */

//   useEffect(() => {

//     const handleScroll = () => {

//       if(window.scrollY > 20){
//         setScrolled(true);
//       }
//       else{
//         setScrolled(false);
//       }

//       if(window.innerWidth <= 768 && menuOpen){
//         setMenuOpen(false);
//       }

//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };

//   }, [menuOpen]);

//   /* BODY LOCK */

//   useEffect(() => {

//     if(menuOpen){
//       document.body.style.overflow = "hidden";
//     }
//     else{
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//     };

//   }, [menuOpen]);

//   return (

//     <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

//       {/* LOGO */}

//       <NavLink
//         to="/"
//         className="logo"
//       >

//         Saiyed Travel

//         <MdFlight className="fl" />

//       </NavLink>

//       {/* RIGHT SIDE */}

//       <div className="nav-right">

//         {/* CART */}

//         <NavLink
//           to="/cart"
//           className="cart-icon"
//         >

//           <FaShoppingCart />

//           <span>{totalItems}</span>

//         </NavLink>

//         {/* TOGGLE */}

//         <button
//           className="menu-toggle"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >

//           {menuOpen ? <FaTimes /> : <FaBars />}

//         </button>

//       </div>

//       {/* NAV LINKS */}

//       <div className={`nav-links ${menuOpen ? "show" : ""}`}>

//         <NavLink
//           to="/"
//           onClick={() => setMenuOpen(false)}
//           className={({isActive}) =>
//             isActive ? "active-link" : ""
//           }
//         >
//           Home
//         </NavLink>

//         <NavLink
//           to="/about"
//           onClick={() => setMenuOpen(false)}
//           className={({isActive}) =>
//             isActive ? "active-link" : ""
//           }
//         >
//           About
//         </NavLink>

//         <NavLink
//           to="/bank"
//           onClick={() => setMenuOpen(false)}
//           className={({isActive}) =>
//             isActive ? "active-link" : ""
//           }
//         >
//           Bank
//         </NavLink>

//         <NavLink
//           to="/privacy"
//           onClick={() => setMenuOpen(false)}
//           className={({isActive}) =>
//             isActive ? "active-link" : ""
//           }
//         >
//           Privacy
//         </NavLink>

//         <NavLink
//           to="/terms"
//           onClick={() => setMenuOpen(false)}
//           className={({isActive}) =>
//             isActive ? "active-link" : ""
//           }
//         >
//           Terms
//         </NavLink>

//         <NavLink
//           to="/customer"
//           onClick={() => setMenuOpen(false)}
//           className={({isActive}) =>
//             isActive ? "active-link" : ""
//           }
//         >
//           Contact
//         </NavLink>

//         <NavLink
//           to="/login"
//           onClick={() => setMenuOpen(false)}
//           className={({isActive}) =>
//             isActive ? "btn active-btn" : "btn"
//           }
//         >
//           Login
//         </NavLink>

//         <NavLink
//           to="/signup"
//           onClick={() => setMenuOpen(false)}
//           className={({isActive}) =>
//             isActive
//               ? "btn signup active-signup"
//               : "btn signup"
//           }
//         >
//           Signup
//         </NavLink>

//       </div>

//     </nav>

//   );
// }

// export default Navbar;




















import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import { MdFlight } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  /* SCROLL EFFECT */

  useEffect(() => {

    const handleScroll = () => {

      if(window.scrollY > 20){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }

      if(window.innerWidth <= 768 && menuOpen){
        setMenuOpen(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [menuOpen]);

  /* BODY LOCK */

  useEffect(() => {

    if(menuOpen){
      document.body.style.overflow = "hidden";
    }
    else{
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };

  }, [menuOpen]);

  return (

    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

      {/* LOGO */}

      <NavLink
        to="/"
        className="logo"
      >

        Saiyed Travel

        <MdFlight className="fl" />

      </NavLink>

      {/* TOGGLE */}

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >

        {menuOpen ? <FaTimes /> : <FaBars />}

      </button>

      {/* NAV LINKS */}

      <div className={`nav-links ${menuOpen ? "show" : ""}`}>

        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className={({isActive}) =>
            isActive ? "active-link" : ""
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          onClick={() => setMenuOpen(false)}
          className={({isActive}) =>
            isActive ? "active-link" : ""
          }
        >
          About
        </NavLink>

        <NavLink
          to="/bank"
          onClick={() => setMenuOpen(false)}
          className={({isActive}) =>
            isActive ? "active-link" : ""
          }
        >
          Bank
        </NavLink>

        {/* BOOKINGS */}

        <NavLink
          to="/cart"
          onClick={() => setMenuOpen(false)}
          className={({isActive}) =>
            isActive ? "active-link" : ""
          }
        >
          Bookings
        </NavLink>

        <NavLink
          to="/privacy"
          onClick={() => setMenuOpen(false)}
          className={({isActive}) =>
            isActive ? "active-link" : ""
          }
        >
          Privacy
        </NavLink>

        <NavLink
          to="/terms"
          onClick={() => setMenuOpen(false)}
          className={({isActive}) =>
            isActive ? "active-link" : ""
          }
        >
          Terms
        </NavLink>

        <NavLink
          to="/customer"
          onClick={() => setMenuOpen(false)}
          className={({isActive}) =>
            isActive ? "active-link" : ""
          }
        >
          Contact
        </NavLink>

        <NavLink
          to="/login"
          onClick={() => setMenuOpen(false)}
          className={({isActive}) =>
            isActive ? "btn active-btn" : "btn"
          }
        >
          Login
        </NavLink>

        <NavLink
          to="/signup"
          onClick={() => setMenuOpen(false)}
          className={({isActive}) =>
            isActive
              ? "btn signup active-signup"
              : "btn signup"
          }
        >
          Signup
        </NavLink>

      </div>

    </nav>

  );
}

export default Navbar;