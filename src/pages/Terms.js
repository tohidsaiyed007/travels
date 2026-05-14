import React from "react";
import "./Terms.css";

const Terms = () => {
  return (
    <div className="terms-page">
      <div className="terms-container">

        <div className="terms-header">
          <h1>Terms & Conditions</h1>

          <p>
            Welcome to <span>SAIYED TRAVELS.COM</span>
          </p>
        </div>

        <section className="terms-section">
          <h2>1. Acceptance of Terms</h2>

          <p>
            By accessing and using our website, you agree to follow all
            terms, conditions, and policies mentioned on this website.
          </p>
        </section>

        <section className="terms-section">
          <h2>2. Services</h2>

          <ul>
            <li>Flight Booking</li>
            <li>Visa Services</li>
            <li>Passport Immigration</li>
            <li>Document Attestation</li>
            <li>Hotel Booking</li>
            <li>Travel Consultation</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>3. Booking & Payment</h2>

          <p>
            Customers must provide correct details while booking.
          </p>

          <p>
            We accept UPI, Cards, Net Banking, Wallets,
            and Bank Transfers.
          </p>
        </section>

        <section className="terms-section">
          <h2>4. Cancellation & Refund</h2>

          <p>
            Refunds and cancellations depend on airline,
            hotel, visa, and third-party policies.
          </p>
        </section>

        <section className="terms-section">
          <h2>5. User Responsibilities</h2>

          <ul>
            <li>Provide correct information</li>
            <li>Carry valid documents</li>
            <li>Follow travel rules</li>
            <li>Use website legally</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>6. Privacy Policy</h2>

          <p>
            User information is protected according to our Privacy Policy.
          </p>
        </section>

        <section className="terms-section">
          <h2>7. Contact Information</h2>

          <div className="contact-box">

            <p>
              <strong>SAIYED TRAVELS.COM</strong>
            </p>

            <p>
              Mohalla Kaziwara, Near Madina Masjid,
              Jhunjhunu, Rajasthan - 333001
            </p>

            <p>
              Phone: +91 9928222512, +91 9660497018
            </p>

            <p>
              Email: saiyedtravels786@gmail.com
            </p>

          </div>
        </section>

        <div className="terms-footer">
          <p>Last Updated : May 2026</p>
        </div>

      </div>
    </div>
  );
};

export default Terms;