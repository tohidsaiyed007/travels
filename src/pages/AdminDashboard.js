
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import "./AdminDashboard.css";

// function AdminDashboard() {

//   const navigate = useNavigate();

//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {

//     fetch("http://localhost:5000/admin/bookings")
//       .then((res) => res.json())
//       .then((data) => setBookings(data));

//   }, []);

//   // LOGOUT

//   const logoutAdmin = () => {

//     localStorage.removeItem("token");

//     alert("Logged Out ✅");

//     navigate("/admin");

//   };

//   // DELETE BOOKING

//   const deleteBooking = async (id) => {

//     try {

//       await fetch(
//         `http://localhost:5000/admin/booking/${id}`,
//         {
//           method: "DELETE"
//         }
//       );

//       setBookings(
//         bookings.filter((b) => b._id !== id)
//       );

//       alert("Booking Deleted ✅");

//     } catch (err) {

//       alert("Delete Failed ❌");

//     }

//   };

//   return (

//     <div className="admin-page">

//       <div className="admin-top">

//         <div>

//           <h1>
//             Admin Dashboard 🚀
//           </h1>

//           <button
//             className="logout-btn"
//             onClick={logoutAdmin}
//           >
//             Logout
//           </button>

//         </div>

//         <div className="stats-box">

//           <div className="stat-card">
//             <h2>{bookings.length}</h2>
//             <p>Total Bookings</p>
//           </div>

//         </div>

//       </div>

//       <div className="booking-list">

//         {bookings.length === 0 ? (

//           <p className="no-booking">
//             No bookings found
//           </p>

//         ) : (

//           bookings.map((b) => (

//             <div
//               className="booking-card"
//               key={b._id}
//             >

//               <div className="booking-info">

//                 <h2>
//                   {b.from} ✈ {b.to}
//                 </h2>

//                 <p>
//                   Passenger:
//                   <strong> {b.name}</strong>
//                 </p>

//                 <p>
//                   Phone:
//                   <strong> {b.phone}</strong>
//                 </p>

//                 <p>
//                   Travellers:
//                   <strong> {b.passengers}</strong>
//                 </p>

//                 <p>
//                   Booking Date:
//                   <strong>
//                     {" "}
//                     {b.bookingDate
//                       ? new Date(
//                           b.bookingDate
//                         ).toLocaleString()
//                       : "No Date"}
//                   </strong>
//                 </p>

//               </div>

//               <button
//                 className="delete-btn"
//                 onClick={() =>
//                   deleteBooking(b._id)
//                 }
//               >
//                 Delete
//               </button>

//             </div>

//           ))

//         )}

//       </div>

//     </div>

//   );

// }

// export default AdminDashboard;









import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./AdminDashboard.css";

function AdminDashboard() {

  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);

  useEffect(() => {

    fetch("https://travels-tuvk.onrender.com/admin/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));

  }, []);

  // LOGOUT

  const logoutAdmin = () => {

    localStorage.removeItem("token");

    alert("Logged Out ✅");

    navigate("/admin");

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

        </div>

      </div>

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
                  {b.from} ✈ {b.to}
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
