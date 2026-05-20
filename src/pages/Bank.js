
  import React from "react";

import "./Bank.css";

import { useNavigate } from "react-router-dom";

function Bank() {

  const navigate = useNavigate();

  return (

    <div className="bank-container">

      {/* TITLE */}

      <h2 className="title">
        SAIYED TRAVELS
      </h2>

      <p className="sub">
        JHUNJHUNU - RAJASTHAN
      </p>

      {/* TWO BANK CARDS */}

      <div className="bank-grid">

        {/* ICICI CARD */}

        <div className="bank-card">

          <h3 className="bank-name">
            ICICI BANK LTD
          </h3>

          {/* QR */}

          <div className="qr-box">

            <img
              src="/newicici.jpeg"
              alt="ICICI QR"
              className="qr-image"
            />

          </div>

          <div className="details-card">

            <p>
              <b>Account Name:</b>
              {" "}
              SAIYED TRAVELS
            </p>

            <p>
              <b>Bank:</b>
              {" "}
              ICICI BANK LTD
            </p>

            <p>
              <b>AC No:</b>
              {" "}
              079905001743
            </p>

            <p>
              <b>City:</b>
              {" "}
              JHUNJHUNU
            </p>

            <p>
              <b>IFSC:</b>
              {" "}
              ICIC0000799
            </p>

          </div>

        </div>

        {/* BOB CARD */}

        <div className="bank-card">

          <h3 className="bank-name">
            BANK OF BARODA
          </h3>

          <div className="qr-box">

            <img
              src="/bob.jpeg"
              alt="BOB QR"
              className="qr-image"
            />

          </div>

          <div className="details-card">

            <p>
              <b>Account Name:</b>
              {" "}
              SAIYED TRAVELS
            </p>

            <p>
              <b>Bank:</b>
              {" "}
              BANK OF BARODA
            </p>

            <p>
              <b>AC No:</b>
              {" "}
              16870200000107
            </p>

            <p>
              <b>City:</b>
              {" "}
              JHUNJHUNU
            </p>

            <p>
              <b>IFSC:</b>
              {" "}
              BARB0MOHJHU
            </p>

          </div>

        </div>

      </div>

      {/* PAYMENT FORM */}

      <div className="payment-form">

        <h2>
          Payment Confirmation
        </h2>

        <input
          type="text"
          placeholder="Enter UTR Number"
        />

        <input
          type="file"
        />

        <button
          className="payment-btn"
          onClick={() => navigate("/success")}
        >
          Confirm Payment
        </button>

      </div>

    </div>

  );
}

export default Bank;