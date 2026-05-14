import React from "react";
import "./Privacy.css";

const Privacy = () => {
  return (
    <div className="privacy-page">
      <div className="privacy-overlay">
        <div className="privacy-container">

          <div className="privacy-header">
            <h1>Privacy Policy</h1>

            <p>
              Your privacy is important to us at
              <span> SAIYED TRAVELS.COM</span>
            </p>
          </div>

          <section className="privacy-section">
            <h2>1. Company  Owner</h2>

            <p>
              We may collect personal and travel-related information from users
              while using our website and services.
            </p>

            <ul>
              <li>Mo Ayub Saiyed</li>
              <li>saiyedtravels786@gmail.com</li>
              <li>9414080277</li>
              {/* <li>Passport Information</li>
              <li>Visa Documents</li>
              <li>Travel Booking Details</li>
              <li>Payment Information</li> */}
            </ul>
          </section>

          <section className="privacy-section">
            <h2>2. How We Use Your Information</h2>

            <ul>
              <li>Flight Booking</li>
              <li>Visa Services</li>
              <li>Passport & Immigration Services</li>
              <li>Document Attestation</li>
              <li>Customer Support</li>
              <li>Booking Confirmation</li>
              <li>WhatsApp Notifications</li>
              <li>Promotional Offers & Updates</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>3. Payment Security</h2>

            <p>
              We support secure payment methods including UPI, Cards,
              Net Banking, Wallets, and Online Transfers.
            </p>
          </section>

          <section className="privacy-section">
            <h2>4. Sharing of Information</h2>

            <p>
              We never sell your personal data. Your information may only be
              shared with airlines, hotels, visa authorities, or trusted travel
              partners when required.
            </p>
          </section>

          <section className="privacy-section">
            <h2>5. WhatsApp & Marketing Updates</h2>

            <p>
              By using our services, you agree to receive booking updates,
              offers, and travel notifications through WhatsApp, SMS,
              calls, or email.
            </p>
          </section>

          <section className="privacy-section">
            <h2>6. Cookies</h2>

            <p>
              Our website may use cookies to improve website functionality,
              performance, and user experience.
            </p>
          </section>

          <section className="privacy-section">
            <h2>7. Data Protection</h2>

            <p>
              We maintain proper security systems to protect your personal
              information from unauthorized access or misuse.
            </p>
          </section>

          <section className="privacy-section">
            <h2>8. Contact Information</h2>

            <div className="contact-box">

              <p>
                <strong>SAIYED TRAVELS.COM</strong>
              </p>

              <p>
                Mohalla Kaziwara, Near Madina Masjid,
                Jhunjhunu, Rajasthan - 333001
              </p>

              <p>
                Phone: +91 9928222512, +91 9660497018, +91 9414080277
              </p>

              <p>
                Email: saiyedtravels786@gmail.com
              </p>

              <p>
                Support: tayub.saiyed786@gmail.com
              </p>

            </div>
          </section>

          <div className="privacy-footer">
            <p>Last Updated : May 2026</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Privacy;