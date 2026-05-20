



import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./AdminDashboard.css";

function AdminDashboard() {

  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);

  const [flights, setFlights] = useState([]);

  const [editingId, setEditingId] =
    useState(null);

  const [flight, setFlight] = useState({
    from: "",
    to: "",
    date: "",
    airline: "",
    departureTime: "",
    arrivalTime: "",
    price: "",
    seats: ""
  });

  useEffect(() => {

    fetch("https://travels-tuvk.onrender.com/admin/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));

    fetch("https://saiyed-travels-backend-1.onrender.com/api/flights")
      .then((res) => res.json())
      .then((data) => setFlights(data));

  }, []);

  // LOGOUT

  const logoutAdmin = () => {

    localStorage.removeItem("token");

    alert("Logged Out ✅");

    navigate("/admin");

  };

  // HANDLE INPUT

  const handleChange = (e) => {

    setFlight({
      ...flight,
      [e.target.name]: e.target.value
    });

  };

  // ADD FLIGHT

  const addFlight = async () => {

    try {

      const response = await fetch(
        "https://saiyed-travels-backend-1.onrender.com/api/flights/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(flight)
        }
      );

      const data = await response.json();

      if (response.ok) {

        alert("Flight Added ✅");

        fetch("https://saiyed-travels-backend-1.onrender.com/api/flights")
          .then((res) => res.json())
          .then((data) => setFlights(data));

      } else {

        alert(data.message);

      }

    } catch (error) {

      console.log(error);

      alert("Server Error");

    }

  };

  // EDIT FLIGHT

  const editFlight = (flightData) => {

    setFlight({
      from: flightData.from,
      to: flightData.to,
      date: flightData.date,
      airline: flightData.airline,
      departureTime:
        flightData.departureTime,
      arrivalTime:
        flightData.arrivalTime,
      price: flightData.price,
      seats: flightData.seats
    });

    setEditingId(flightData._id);

  };

  // UPDATE FLIGHT

  const updateFlight = async () => {

    try {

      const response = await fetch(
        `https://saiyed-travels-backend-1.onrender.com/api/flights/${editingId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json"
          },
          body: JSON.stringify(flight)
        }
      );

      const data =
        await response.json();

      if (response.ok) {

        alert("Flight Updated ✅");

        fetch("https://saiyed-travels-backend-1.onrender.com/api/flights")
          .then((res) => res.json())
          .then((data) => setFlights(data));

      } else {

        alert(data.message);

      }

    } catch (error) {

      console.log(error);

      alert("Update Failed ❌");

    }

  };

  // DELETE BOOKING

  const deleteBooking = async (id) => {

    try {

      await fetch(
        `https://travels-tuvk.onrender.com/admin/booking/${id}`,
        {
          method: "DELETE"
        }
      );

      setBookings(
        bookings.filter((b) => b._id !== id)
      );

      alert("Booking Deleted ✅");

    } catch (err) {

      alert("Delete Failed ❌");

    }

  };

  // DELETE FLIGHT

  const deleteFlight = async (id) => {

    try {

      await fetch(
        `https://saiyed-travels-backend-1.onrender.com/api/flights/${id}`,
        {
          method: "DELETE"
        }
      );

      setFlights(
        flights.filter((f) => f._id !== id)
      );

      alert("Flight Deleted ✅");

    } catch (error) {

      alert("Delete Failed ❌");

    }

  };

  return (

    <div className="admin-page">

      <div className="admin-top">

        <div>

          <h1>
            Admin Dashboard 🚀
          </h1>

          <button
            className="logout-btn"
            onClick={logoutAdmin}
          >
            Logout
          </button>

        </div>

        <div className="stats-box">

          <div className="stat-card">
            <h2>{bookings.length}</h2>
            <p>Total Bookings</p>
          </div>

          <div className="stat-card">
            <h2>{flights.length}</h2>
            <p>Total Flights</p>
          </div>

        </div>

      </div>

      {/* ADD FLIGHT */}

      <div className="add-flight-box">

        <h2>
          {
            editingId
              ? "Update Flight ✈️"
              : "Add Flight ✈️"
          }
        </h2>

        <input
          type="text"
          name="from"
          placeholder="From"
          value={flight.from}
          onChange={handleChange}
        />

        <input
          type="text"
          name="to"
          placeholder="To"
          value={flight.to}
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          value={flight.date}
          onChange={handleChange}
        />

        <input
          type="text"
          name="airline"
          placeholder="Airline"
          value={flight.airline}
          onChange={handleChange}
        />

        <input
          type="time"
          name="departureTime"
          value={flight.departureTime}
          onChange={handleChange}
        />

        <input
          type="time"
          name="arrivalTime"
          value={flight.arrivalTime}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={flight.price}
          onChange={handleChange}
        />

        <input
          type="number"
          name="seats"
          placeholder="Seats"
          value={flight.seats}
          onChange={handleChange}
        />

        <button
          onClick={
            editingId
              ? updateFlight
              : addFlight
          }
        >
          {
            editingId
              ? "Update Flight"
              : "Add Flight"
          }
        </button>

      </div>

      {/* ALL FLIGHTS */}

      <div className="flight-list">

        <h2 className="flight-title">
          All Flights ✈️
        </h2>

        {flights.length === 0 ? (

          <p className="no-booking">
            No Flights Added
          </p>

        ) : (

          flights.map((f) => (

            <div
              className="booking-card"
              key={f._id}
            >

              <div className="booking-info">

                <h2>
                  {f.from} ✈️ {f.to}
                </h2>

                <p>
                  Airline:
                  <strong>
                    {" "}
                    {f.airline}
                  </strong>
                </p>

                <p>
                  Date:
                  <strong>
                    {" "}
                    {f.date}
                  </strong>
                </p>

                <p>
                  Price:
                  <strong>
                    {" "}
                    ₹{f.price}
                  </strong>
                </p>

                <p>
                  Seats:
                  <strong>
                    {" "}
                    {f.seats}
                  </strong>
                </p>

              </div>

              <button
                className="edit-btn"
                onClick={() =>
                  editFlight(f)
                }
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() =>
                  deleteFlight(f._id)
                }
              >
                Delete
              </button>

            </div>

          ))

        )}

      </div>

      {/* BOOKINGS */}

      <div className="booking-list">

        {bookings.length === 0 ? (

          <p className="no-booking">
            No bookings found
          </p>

        ) : (

          bookings.map((b) => (

            <div
              className="booking-card"
              key={b._id}
            >

              <div className="booking-info">

                <h2>
                  {b.from} ✈️ {b.to}
                </h2>

                <p>
                  Passenger:
                  <strong> {b.name}</strong>
                </p>

                <p>
                  Phone:
                  <strong> {b.phone}</strong>
                </p>

                <p>
                  Travellers:
                  <strong> {b.passengers}</strong>
                </p>

                <p>
                  Booking Date:
                  <strong>
                    {" "}
                    {b.bookingDate
                      ? new Date(
                          b.bookingDate
                        ).toLocaleString()
                      : "No Date"}
                  </strong>
                </p>

              </div>

              <button
                className="delete-btn"
                onClick={() =>
                  deleteBooking(b._id)
                }
              >
                Delete
              </button>

            </div>

          ))

        )}

      </div>

    </div>

  );

}

export default AdminDashboard;