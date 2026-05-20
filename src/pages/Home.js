import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

import {
  FaSearch,
  FaUserFriends
} from "react-icons/fa";

import {
  MdFlightTakeoff,
  MdFlightLand
} from "react-icons/md";

function Home() {

  const navigate = useNavigate();

  const airports = [
    "Ahmedabad (AMD)",
    "Amritsar (ATQ)",
    "Bangalore (BLR)",
    "Delhi (DEL)",
    "Mumbai (BOM)",
    "Hyderabad (HYD)",
    "Chennai (MAA)",
    "Kolkata (CCU)",
    "Dubai (DXB)",
    "Muscat (MCT)",
    "Doha (DOH)",
    "Sharjah (SHJ)"
  ];

  const [tripType, setTripType] =
    useState("oneway");

  const [showPassenger, setShowPassenger] =
    useState(false);

  const [from, setFrom] = useState("");

  const [to, setTo] = useState("");

  const [date, setDate] =
    useState("");

  const [showFrom, setShowFrom] =
    useState(false);

  const [showTo, setShowTo] =
    useState(false);

  const [passenger, setPassenger] =
    useState({
      adult: 1,
      child: 0,
      infant: 0
    });

  const total =
    passenger.adult +
    passenger.child +
    passenger.infant;

  const handleChange = (type, value) => {

    setPassenger({
      ...passenger,
      [type]: Math.max(
        0,
        passenger[type] + value
      )
    });

  };

  const handleSearchClick = () => {

    navigate("/flights", {

      state: {
        from,
        to,
        date
      }

    });

  };

  const filteredFrom = airports.filter(
    (item) =>
      item.toLowerCase().includes(
        from.toLowerCase()
      )
  );

  const filteredTo = airports.filter(
    (item) =>
      item.toLowerCase().includes(
        to.toLowerCase()
      )
  );

  return (

    <div className="home">

      <div className="overlay"></div>

      {/* HERO */}

      <div className="hero-text">

        <h1 className="Flighat-colur">
          SAIYED TRAVELS ᯓ ✈︎
        </h1>

        <p>
          Book flights at best prices &
          explore the world
        </p>

      </div>

      {/* SEARCH BOX */}

      <div className="search-container">

        <div className="tabs">

          <button
            className={
              tripType === "oneway"
                ? "active"
                : ""
            }
            onClick={() =>
              setTripType("oneway")
            }
          >
            One Way
          </button>

          <button
            className={
              tripType === "round"
                ? "active"
                : ""
            }
            onClick={() =>
              setTripType("round")
            }
          >
            Round Trip
          </button>

          <button>
            Multi City
          </button>

        </div>

        <div className="inputs">

          {/* FROM */}

          <div className="input-box airport-box">

            <MdFlightTakeoff className="icon" />

            <input
              type="text"
              placeholder="From (Departure)"
              value={from}
              onChange={(e) => {

                setFrom(e.target.value);

                setShowFrom(true);

              }}
              onClick={() =>
                setShowFrom(!showFrom)
              }
            />

            {showFrom && (

              <div className="airport-dropdown">

                {filteredFrom.map(
                  (item, index) => (

                    <div
                      key={index}
                      className="airport-item"
                      onClick={() => {

                        setFrom(item);

                        setShowFrom(false);

                      }}
                    >
                      {item}
                    </div>

                  )
                )}

              </div>

            )}

          </div>

          {/* TO */}

          <div className="input-box airport-box">

            <MdFlightLand className="icon" />

            <input
              type="text"
              placeholder="To (Arrival)"
              value={to}
              onChange={(e) => {

                setTo(e.target.value);

                setShowTo(true);

              }}
              onClick={() =>
                setShowTo(!showTo)
              }
            />

            {showTo && (

              <div className="airport-dropdown">

                {filteredTo.map(
                  (item, index) => (

                    <div
                      key={index}
                      className="airport-item"
                      onClick={() => {

                        setTo(item);

                        setShowTo(false);

                      }}
                    >
                      {item}
                    </div>

                  )
                )}

              </div>

            )}

          </div>

          {/* DATE */}

          <div className="input-box">

            <input
              type="date"
              value={date}
              onChange={(e) =>
                setDate(e.target.value)
              }
            />

          </div>

          {/* ROUND DATE */}

          {tripType === "round" && (

            <div className="input-box">

              <input type="date" />

            </div>

          )}

        </div>

        {/* PASSENGER */}

        <div
          className="passenger-box"
          onClick={() =>
            setShowPassenger(
              !showPassenger
            )
          }
        >

          <FaUserFriends />

          {total} Travellers

        </div>

        {/* PASSENGER DROPDOWN */}

        {showPassenger && (

          <div className="dropdown">

            {[
              "adult",
              "child",
              "infant"
            ].map((type, i) => (

              <div
                className="row"
                key={i}
              >

                <span>

                  {type === "adult" &&
                    "Adult"}

                  {type === "child" &&
                    "Child"}

                  {type === "infant" &&
                    "Infant"}

                </span>

                <div className="counter">

                  <button
                    onClick={() =>
                      handleChange(
                        type,
                        -1
                      )
                    }
                  >
                    -
                  </button>

                  <span>
                    {passenger[type]}
                  </span>

                  <button
                    onClick={() =>
                      handleChange(
                        type,
                        1
                      )
                    }
                  >
                    +
                  </button>

                </div>

              </div>

            ))}

            <button
              className="apply-btn"
              onClick={() =>
                setShowPassenger(false)
              }
            >
              Apply
            </button>

          </div>

        )}

        {/* SEARCH BUTTON */}

        <button
          className="search-btn"
          onClick={handleSearchClick}
        >

          <FaSearch />

          Search Flights

        </button>

      </div>

      {/* SERVICES SECTION */}

      <div className="services-section">

        <div className="service-card">

          <div className="service-icon">
            ✈︎
          </div>

          <h3>Flight Tickets</h3>

          <p>
            Book domestic &
            international flights
            at best prices.
          </p>

          <button>
            Book Now
          </button>

        </div>

        <div className="service-card">

          <div className="service-icon">
            👥
          </div>

          <h3>Group Booking</h3>

          <p>
            Special discounts
            available for group
            travel booking.
          </p>

          <button>
            Explore
          </button>

        </div>

        <div className="service-card">

          <div className="service-icon">
            🏨
          </div>

          <h3>Hotel Booking</h3>

          <p>
            Affordable hotels and
            luxury stays worldwide.
          </p>

          <button>
            View Hotels
          </button>

        </div>

        <div className="service-card">

          <div className="service-icon">
            🛡️
          </div>

          <h3>Travel Insurance</h3>

          <p>
            Secure your trip with
            trusted travel insurance.
          </p>

          <button>
            Get Insurance
          </button>

        </div>

      </div>

      {/* IATA SECTION */}

      <div className="iata-section">

        <img
          src="/saiyed.png"
          alt="IATAA Logo"
          className="iata-logo"
        />

      </div>

    </div>

  );

}

export default Home;