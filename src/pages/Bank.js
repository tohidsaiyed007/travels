
import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./Bank.css";

function Bank() {

  const upiLink = "upi://pay?pa=saiyed@okaxis&pn=SaiyedTravels&am=4999&cu=INR";

  return (
    <div className="bank-container">

      {/* TOP TITLE */}
      <h2 className="title">SAIYED TRAVELS</h2>
      <p className="sub">JHUNJHUNU - RAJASTHAN</p>

      <div className="main-box">

        {/* LEFT QR */}
        <div className="qr-section">
          <QRCodeCanvas value={upiLink} size={230} />
        </div>

        {/* CENTER QR */}
        <div className="qr-section">
          <QRCodeCanvas value={upiLink} size={180} />
        </div>

        {/* RIGHT DETAILS */}
        <div className="details-card">
          <h3>Bank Details</h3>
          <p><b>Name:</b> SAIYED TRAVELS</p>
          <p><b>Bank:</b> HDFC BANK</p>
          <p><b>AC No:</b> 00000000000</p>
          <p><b>Branch:</b> JHUNJHUNU </p>
          <p><b>IFSC:</b> ICICI0000000</p>
        </div>

      </div>

      {/* BOTTOM CARD */}
      <div className="details-card bottom">
        <h3>Bank Details</h3>
          <p><b>Name:</b> SAIYED TRAVELS</p>
          <p><b>Bank:</b> HDFC BANK</p>
          <p><b>AC No:</b> 00000000000</p>
          <p><b>Branch:</b> JHUNJHUNU </p>
          <p><b>IFSC:</b> ICICI0000000</p>
      </div>

    </div>
  );
}

export default Bank;