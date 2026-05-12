// import "./Footer.css";

// function Footer() {
//   return (
//     <footer className="footer">

//       <div className="footer-container">

//         <div className="footer-left">
//           <h2>Saiyed Travels ✈️</h2>
//           <p>Book flights easily & explore the world</p>
//         </div>

//         <div className="footer-links">
//           <h4>Quick Links</h4>
//           <p>Home</p>
//           <p>Flights</p>
//           <p>About</p>
//           <p>Contact</p>
//         </div>

//         <div className="footer-links">
//           <h4>Support</h4>
//           <p>Privacy Policy</p>
//           <p>Terms & Conditions</p>
//           <p>Customer Care</p>
//         </div>

//       </div>

//       <div className="footer-bottom">
//         © 2026 Saiyed Travels | All Rights Reserved
//       </div>

//     </footer>
//   );
// }

// export default Footer;









import "./Footer.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-box">
          <h2 className="logoo">SAIYED TRAVELSᯓ ✈︎ </h2>
          <p>
            Saiyed Travels provides easy flight booking, best deals,
            and travel services across the world.
          </p>
        </div>

        {/* HELP */}
        <div className="footer-box">
          <h3>Help</h3>
          <Link to="/">Home</Link>
          {/* <Link to="/flights">Flights</Link> */}
          <Link to="/about">About Us</Link>
          <Link to="/bank">Bank Details</Link>
          <Link to="/customer">Contact</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms</Link>
        </div>

        {/* SERVICES */}
        <div className="footer-box">
          <h3>What We Offer</h3>
          <p>Flight Tickets</p>
          <p>Airline Deals</p>
          <p>Group Booking</p>
          <p>Charter Flights</p>
          <p>Best Offers</p>
        </div>

        {/* CONTACT */}
        <div className="footer-box">
          <h3>Contact</h3>
          <p className="add"><FaMapMarkerAlt /> Mohalla Kaziwara Near Madina Masjid JhunJhunu Raj. 333001</p>
          <p><FaPhone /> 9928222512 (Tayyub Saiyed)</p>
          <p><FaPhone /> 9660497018 (Abdul Wahid)</p>
          <p><FaEnvelope /> saiyedtravels786@gmail.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Saiyed Travels | All Rights Reserved
      </div>

    </footer>
  );
}

export default Footer;