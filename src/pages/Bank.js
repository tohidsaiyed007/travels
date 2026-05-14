
import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./Bank.css";

function Bank() {

  // ICICI QR
  const iciciUPI =
    "upi://pay?pa=icici@okaxis&pn=SaiyedTravels&am=4999&cu=INR";

  // BANK OF BARODA QR
  const bobUPI =
    "upi://pay?pa=bob@okaxis&pn=SaiyedTravels&am=4999&cu=INR";

  return (
    <div className="bank-container">

      {/* TITLE */}
      <h2 className="title">SAIYED TRAVELS</h2>
      <p className="sub">JHUNJHUNU - RAJASTHAN</p>

      {/* TWO BANK CARDS */}
      <div className="bank-grid">

        {/* ICICI CARD */}
        <div className="bank-card">

          <h3 className="bank-name">ICICI BANK LTD</h3>

          <div className="qr-box">
            <QRCodeCanvas value={iciciUPI} size={220} />
          </div>

          <div className="details-card">
            <p><b>Account Name:</b> SAIYED TRAVELS</p>
            <p><b>Bank:</b> ICICI BANK LTD</p>
            <p><b>AC No:</b> 079905001743</p>
            <p><b>City:</b> JHUNJHUNU</p>
            <p><b>IFSC:</b> ICIC0000799</p>
          </div>

        </div>

        {/* BANK OF BARODA CARD */}
        <div className="bank-card">

          <h3 className="bank-name">BANK OF BARODA</h3>

          <div className="qr-box">
            <QRCodeCanvas value={bobUPI} size={220} />
          </div>

          <div className="details-card">
            <p><b>Account Name:</b> SAIYED TRAVELS</p>
            <p><b>Bank:</b> BANK OF BARODA</p>
            <p><b>AC No:</b> 16870200000107</p>
            <p><b>City:</b> JHUNJHUNU</p>
            <p><b>IFSC:</b> BARB0MOHJHU</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Bank;