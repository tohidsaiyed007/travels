
import "./Booking.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Booking() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    from: "Ahmedabad",

    to: "Dubai",

    name: "",

    phone: "",

    passengers: 1

  });

  const [screenshot, setScreenshot] =
    useState(null);

  // SAVE BOOKING

  const saveBooking = async () => {

    try {

      const bookingData = new FormData();

      bookingData.append(
        "from",
        formData.from
      );

      bookingData.append(
        "to",
        formData.to
      );

      bookingData.append(
        "name",
        formData.name
      );

      bookingData.append(
        "phone",
        formData.phone
      );

      bookingData.append(
        "passengers",
        formData.passengers
      );

      if (screenshot) {

        bookingData.append(
          "screenshot",
          screenshot
        );

      }

      const response = await fetch(
        "https://travels-tuvk.onrender.com/booking",
        {

          method: "POST",

          body: bookingData

        }
      );

      const data = await response.json();

      console.log(data);

      if (response.ok) {

        alert(
          "Booking Saved Successfully ✅"
        );

        navigate("/bank");

      } else {

        alert(
          data.message ||
          "Booking Failed ❌"
        );

      }

    } catch (error) {

      console.log(error);

      alert("Server Error ❌");

    }

  };

  return (

    <div className="booking-page">

      {/* TOP */}

      <div className="booking-top">

        <div className="flight-review">

          <h2>
            Review Your Flight
          </h2>

          <div className="review-box">

            <div>
              <p>From</p>
              <h3>{formData.from}</h3>
            </div>

            <div>
              <p>To</p>
              <h3>{formData.to}</h3>
            </div>

            <div>
              <p>Fare</p>
              <h3>₹18,999</h3>
            </div>

          </div>

        </div>

      </div>

      {/* TRAVELLER DETAILS */}

      <div className="form-section">

        <h2>
          Traveller Details
        </h2>

        <div className="form-grid">

          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={(e) =>
              setFormData({
                ...formData,
                phone: e.target.value
              })
            }
          />

        </div>

        {/* SCREENSHOT */}

        <div
          style={{
            marginTop: "20px"
          }}
        >

          <p>
            Upload Payment Screenshot
          </p>

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setScreenshot(
                e.target.files[0]
              )
            }
          />

        </div>

      </div>

      {/* BUTTON */}

      <div className="booking-btn-box">

        <button
          className="continue-btn"
          onClick={saveBooking}
        >
          Continue To Payment
        </button>

      </div>

    </div>

  );

}

export default Booking;