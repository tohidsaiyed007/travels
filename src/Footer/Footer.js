
import "./Footer.css";

import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaShieldAlt,
  FaPlaneDeparture
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}

        <div className="footer-box">

          <h2 className="footer-logo">

            Saiyed Travels ✈️

          </h2>

          <p className="footer-text">

            Trusted travel partner for domestic and
            international flight bookings with the
            best deals and smooth booking experience.

          </p>

          {/* SOCIAL */}

          <div className="social-icons">

            <a href="/">
              <FaInstagram />
            </a>

            <a href="/">
              <FaFacebookF />
            </a>

            {/* <a href="/">
              <FaWhatsapp />
            </a> */}
<a
  href="https://wa.me/919928222512"
  target="_blank"
  rel="noreferrer"
>
  <FaWhatsapp />
</a>
          </div>

        </div>

        {/* QUICK LINKS */}

        <div className="footer-box">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/about">
            About Us
          </Link>

          <Link to="/bank">
            Bank Details
          </Link>

          <Link to="/cart">
            Bookings
          </Link>

          <Link to="/customer">
            Contact
          </Link>

        </div>

        {/* SERVICES */}

        <div className="footer-box">

          <h3>Our Services</h3>

          <p>
            <FaPlaneDeparture />
            Flight Booking
          </p>

          <p>
            <FaPlaneDeparture />
            International Flights
          </p>

          <p>
            <FaPlaneDeparture />
            Group Booking
          </p>

          <p>
            <FaPlaneDeparture />
            Charter Flights
          </p>

          <p>
            <FaPlaneDeparture />
            Travel Assistance
          </p>

        </div>

        {/* CONTACT */}

        <div className="footer-box">

          <h3>Contact Us</h3>

          <p>

            <FaMapMarkerAlt />

            Mohalla Kaziwara,
            Near Madina Masjid,
            Jhunjhunu,
            Rajasthan - 333001

          </p>

          <p>

            <FaPhone />

            +91 9928222512

          </p>

          <p>

            <FaPhone />

            +91 9660497018

          </p>

          <p>

            <FaPhone />

            +91 9414080277

          </p>

          <p>

            <FaEnvelope />
 tayub.saiyed786@gmail.com 
            

          </p>

            <p>

            <FaEnvelope />

           saiyedtravels786@gmail.com

          </p>

        </div>

      </div>

      {/* TRUST BAR */}

      <div className="trust-bar">

        <div>

          <FaShieldAlt />

          Secure Booking

        </div>

        <div>

          ✈️ Trusted Travel Agency

        </div>

        <div>

          24/7 Customer Support

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        © 2026 Saiyed Travels • All Rights Reserved

      </div>

    </footer>

  );

}

export default Footer;