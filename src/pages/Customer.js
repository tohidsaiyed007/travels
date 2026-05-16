
import React from "react";
import "./Customer.css";
import {
  FaHome,
  FaPhoneAlt,
  FaEnvelope,
  FaLink,
} from "react-icons/fa";

function Customer() {
  return (
    <div className="customer-page">

      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch and let us know how we can help</p>
      </div>

      {/* Address Box */}
      <div className="big-card">
        <div className="icon-circle">
          <FaHome />
        </div>

        <h2>Address :</h2>

        <p>
         Near Madina Masjid, Mohalla Kaziwara, JhunJhunu-333001
        </p>
      </div>

      {/* Bottom Cards */}
      <div className="card-container">

        <div className="small-card">
          <div className="icon-circle">
            <FaPhoneAlt />
          </div>

          <a href="tel:+919928222512">
            <h2 className="contact">M.Ayub.Saiyed +91 9414080277</h2>
            <h2 className="contact">M.Tayyub.Saiyed +91 9928222512</h2>
            <h2 className="contact">Abdul.Wahid +91 96604 97018 </h2>
          </a>
        </div>

        <div className="small-card">
          <div className="icon-circle">
            <FaEnvelope />
          </div>

          <a href="mailto:tickets@vinfly.in">
            tickets@vinfly.in
          </a>
        </div>

        <div className="small-card">
          <div className="icon-circle">
            <FaLink />
          </div>

          {/* <a
            href="https://www.vinfly.in"
            target="_blank"
            rel="noreferrer"
          >
            www.vinfly.in
          </a> */}
        </div>

      </div>
    </div>
  );
}

export default Customer;