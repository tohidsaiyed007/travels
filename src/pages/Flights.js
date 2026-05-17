

// // // // import "./Flights.css";

// // // // import { useCart } from "../context/CartContext";

// // // // import {
// // // //   useNavigate,
// // // //   useLocation
// // // // } from "react-router-dom";

// // // // function Flights() {

// // // //   const { addToCart } = useCart();

// // // //   const navigate = useNavigate();

// // // //   const location = useLocation();

// // // //   const { from, to } = location.state || {};

// // // //   const flights = [

// // // //     {
// // // //       from: from || "Ahmedabad",
// // // //       to: to || "Dubai",
// // // //       price: "₹4,999",
// // // //       time: "08:00 AM - 10:30 AM"
// // // //     },

// // // //     {
// // // //       from: from || "Jaipur",
// // // //       to: to || "Bangalore",
// // // //       price: "₹6,499",
// // // //       time: "11:00 AM - 02:00 PM"
// // // //     },

// // // //     {
// // // //       from: from || "Jodhpur",
// // // //       to: to || "Dubai",
// // // //       price: "₹18,999",
// // // //       time: "06:00 AM - 10:00 AM"
// // // //     },

// // // //     {
// // // //       from: from || "Ahmedabad",
// // // //       to: to || "Goa",
// // // //       price: "₹5,499",
// // // //       time: "09:30 AM - 11:30 AM"
// // // //     },

// // // //     {
// // // //       from: from || "Mumbai",
// // // //       to: to || "Kolkata",
// // // //       price: "₹7,299",
// // // //       time: "01:00 PM - 03:30 PM"
// // // //     },

// // // //     {
// // // //       from: from || "Delhi",
// // // //       to: to || "Hyderabad",
// // // //       price: "₹6,999",
// // // //       time: "07:00 PM - 09:30 PM"
// // // //     }

// // // //   ];

// // // //   return (

// // // //     <div className="card-section">

// // // //       {

// // // //         flights.map((item, index) => (

// // // //           <div
// // // //             className="flight-card"
// // // //             key={index}
// // // //           >

// // // //             {/* TOP */}

// // // //             <div className="flight-top">

// // // //               <div className="city-box">

// // // //                 <p>From</p>

// // // //                 <h2>{item.from}</h2>

// // // //               </div>

// // // //               <div className="flight-icon">

// // // //                 ✈️

// // // //               </div>

// // // //               <div className="city-box">

// // // //                 <p>To</p>

// // // //                 <h2>{item.to}</h2>

// // // //               </div>

// // // //             </div>

// // // //             {/* LINE */}

// // // //             <div className="flight-middle">

// // // //               <div className="line"></div>

// // // //             </div>

// // // //             {/* BOTTOM */}

// // // //             <div className="flight-bottom">

// // // //               <div className="time-box">

// // // //                 <p>Flight Time</p>

// // // //                 <h3>{item.time}</h3>

// // // //               </div>

// // // //               <div className="price-box">

// // // //                 <h2>{item.price}</h2>

// // // //                 <button

// // // //                   onClick={() => {

// // // //                     addToCart(item);

// // // //                     navigate("/cart");

// // // //                   }}

// // // //                 >

// // // //                   Book Now

// // // //                 </button>

// // // //               </div>

// // // //             </div>

// // // //           </div>

// // // //         ))

// // // //       }

// // // //     </div>

// // // //   );
// // // // }

// // // // export default Flights;










// // // import "./Flights.css";

// // // import { useCart } from "../context/CartContext";

// // // import {
// // //   useNavigate,
// // //   useLocation
// // // } from "react-router-dom";

// // // function Flights() {

// // //   const { addToCart } = useCart();

// // //   const navigate = useNavigate();

// // //   const location = useLocation();

// // //   const { from, to } = location.state || {};

// // //   const flights = [

// // //     {
// // //       from: from || "Ahmedabad",
// // //       to: to || "Dubai",
// // //       price: "₹4,999",
// // //       time: "08:00 AM - 10:30 AM"
// // //     },

// // //     {
// // //       from: from || "Jaipur",
// // //       to: to || "Bangalore",
// // //       price: "₹6,499",
// // //       time: "11:00 AM - 02:00 PM"
// // //     },

// // //     {
// // //       from: from || "Jodhpur",
// // //       to: to || "Dubai",
// // //       price: "₹18,999",
// // //       time: "06:00 AM - 10:00 AM"
// // //     },

// // //     {
// // //       from: from || "Ahmedabad",
// // //       to: to || "Goa",
// // //       price: "₹5,499",
// // //       time: "09:30 AM - 11:30 AM"
// // //     },

// // //     {
// // //       from: from || "Mumbai",
// // //       to: to || "Kolkata",
// // //       price: "₹7,299",
// // //       time: "01:00 PM - 03:30 PM"
// // //     },

// // //     {
// // //       from: from || "Delhi",
// // //       to: to || "Hyderabad",
// // //       price: "₹6,999",
// // //       time: "07:00 PM - 09:30 PM"
// // //     }

// // //   ];

// // //   return (

// // //     <div className="card-section">

// // //       {

// // //         flights.map((item, index) => (

// // //           <div
// // //             className="flight-card"
// // //             key={index}
// // //           >

// // //             {/* TOP */}

// // //             <div className="flight-top">

// // //               <div className="city-box">

// // //                 <p>From</p>

// // //                 <h2>{item.from}</h2>

// // //               </div>

// // //               <div className="flight-icon">

// // //                 ✈️

// // //               </div>

// // //               <div className="city-box">

// // //                 <p>To</p>

// // //                 <h2>{item.to}</h2>

// // //               </div>

// // //             </div>

// // //             {/* LINE */}

// // //             <div className="flight-middle">

// // //               <div className="line"></div>

// // //             </div>

// // //             {/* BOTTOM */}

// // //             <div className="flight-bottom">

// // //               <div className="time-box">

// // //                 <p>Flight Time</p>

// // //                 <h3>{item.time}</h3>

// // //               </div>

// // //               <div className="price-box">

// // //                 <h2>{item.price}</h2>

// // //                 <button

// // //                   onClick={() => {

// // //                     addToCart(item);

// // //                     navigate("/booking");

// // //                   }}

// // //                 >

// // //                   Book Now

// // //                 </button>

// // //               </div>

// // //             </div>

// // //           </div>

// // //         ))

// // //       }

// // //     </div>

// // //   );
// // // }

// // // export default Flights;













// // import "./Flights.css";

// // import { useCart } from "../context/CartContext";

// // import {
// //   useNavigate,
// //   useLocation
// // } from "react-router-dom";

// // function Flights() {

// //   const { addToCart } = useCart();

// //   const navigate = useNavigate();

// //   const location = useLocation();

// //   const { from, to } = location.state || {};

// //   const flights = [

// //     {
// //       from: "Ahmedabad (AMD)",
// //       to: "Dubai (DXB)",
// //       price: "₹18,999",
// //       time: "06:00 AM - 10:00 AM"
// //     },

// //     {
// //       from: "Delhi (DEL)",
// //       to: "Mumbai (BOM)",
// //       price: "₹4,999",
// //       time: "08:00 AM - 10:30 AM"
// //     },

// //     {
// //       from: "Mumbai (BOM)",
// //       to: "Kolkata (CCU)",
// //       price: "₹7,299",
// //       time: "01:00 PM - 03:30 PM"
// //     },

// //     {
// //       from: "Ahmedabad (AMD)",
// //       to: "Goa",
// //       price: "₹5,499",
// //       time: "09:30 AM - 11:30 AM"
// //     },

// //     {
// //       from: "Delhi (DEL)",
// //       to: "Hyderabad (HYD)",
// //       price: "₹6,999",
// //       time: "07:00 PM - 09:30 PM"
// //     }

// //   ];

// //   // FILTER FLIGHTS

// //   const filteredFlights = flights.filter((item) => {

// //     return (

// //       item.from.toLowerCase() === from?.toLowerCase() &&

// //       item.to.toLowerCase() === to?.toLowerCase()

// //     );

// //   });

// //   return (

// //     <div className="card-section">

// //       {

// //         filteredFlights.length > 0 ? (

// //           filteredFlights.map((item, index) => (

// //             <div
// //               className="flight-card"
// //               key={index}
// //             >

// //               {/* TOP */}

// //               <div className="flight-top">

// //                 <div className="city-box">

// //                   <p>From</p>

// //                   <h2>{item.from}</h2>

// //                 </div>

// //                 <div className="flight-icon">

// //                   ✈️

// //                 </div>

// //                 <div className="city-box">

// //                   <p>To</p>

// //                   <h2>{item.to}</h2>

// //                 </div>

// //               </div>

// //               {/* LINE */}

// //               <div className="flight-middle">

// //                 <div className="line"></div>

// //               </div>

// //               {/* BOTTOM */}

// //               <div className="flight-bottom">

// //                 <div className="time-box">

// //                   <p>Flight Time</p>

// //                   <h3>{item.time}</h3>

// //                 </div>

// //                 <div className="price-box">

// //                   <h2>{item.price}</h2>

// //                   <button

// //                     onClick={() => {

// //                       addToCart(item);

// //                       navigate("/booking");

// //                     }}

// //                   >

// //                     Book Now

// //                   </button>

// //                 </div>

// //               </div>

// //             </div>

// //           ))

// //         ) : (

// //           <h2
// //             style={{
// //               textAlign: "center",
// //               marginTop: "100px"
// //             }}
// //           >
// //             No Flights Available
// //           </h2>

// //         )

// //       }

// //     </div>

// //   );
// // }

// // export default Flights;









// import "./Flights.css";

// import { useCart } from "../context/CartContext";

// import {
//   useNavigate,
//   useLocation
// } from "react-router-dom";

// import {
//   useEffect,
//   useState
// } from "react";

// function Flights() {

//   const { addToCart } = useCart();

//   const navigate = useNavigate();

//   const location = useLocation();

//   const {
//     from,
//     to,
//     date
//   } = location.state || {};

//   const [flights, setFlights] =
//     useState([]);

//   // FETCH FLIGHTS

//   useEffect(() => {

//     fetch(
//       "http://localhost:5000/api/flights"
//     )
//       .then((res) => res.json())
//       .then((data) => {

//         const filtered =
//           data.filter((item) => {

//             return (

//               item.from
//                 .toLowerCase()
//                 .trim() ===
//                 from?.toLowerCase().trim()

//               &&

//               item.to
//                 .toLowerCase()
//                 .trim() ===
//                 to?.toLowerCase().trim()

//               &&

//               item.date === date

//             );

//           });

//         setFlights(filtered);

//       });

//   }, [from, to, date]);

//   return (

//     <div className="card-section">

//       {

//         flights.length > 0 ? (

//           flights.map((item) => (

//             <div
//               className="flight-card"
//               key={item._id}
//             >

//               {/* TOP */}

//               <div className="flight-top">

//                 <div className="city-box">

//                   <p>From</p>

//                   <h2>
//                     {item.from}
//                   </h2>

//                 </div>

//                 <div className="flight-icon">

//                   ✈️

//                 </div>

//                 <div className="city-box">

//                   <p>To</p>

//                   <h2>
//                     {item.to}
//                   </h2>

//                 </div>

//               </div>

//               {/* LINE */}

//               <div className="flight-middle">

//                 <div className="line"></div>

//               </div>

//               {/* BOTTOM */}

//               <div className="flight-bottom">

//                 <div className="time-box">

//                   <p>
//                     Flight Time
//                   </p>

//                   <h3>
//                     {
//                       item.departureTime
//                     }
//                     {" - "}
//                     {
//                       item.arrivalTime
//                     }
//                   </h3>

//                   <p>
//                     Airline:
//                     <strong>
//                       {" "}
//                       {
//                         item.airline
//                       }
//                     </strong>
//                   </p>

//                   <p>
//                     Seats:
//                     <strong>
//                       {" "}
//                       {
//                         item.seats
//                       }
//                     </strong>
//                   </p>

//                 </div>

//                 <div className="price-box">

//                   <h2>
//                     ₹{item.price}
//                   </h2>

//                   <button

//                     onClick={() => {

//                       addToCart(item);

//                       navigate(
//                         "/booking"
//                       );

//                     }}

//                   >

//                     Book Now

//                   </button>

//                 </div>

//               </div>

//             </div>

//           ))

//         ) : (

//           <h2
//             style={{
//               textAlign: "center",
//               marginTop: "100px"
//             }}
//           >

//             No Flights Available

//           </h2>

//         )

//       }

//     </div>

//   );

// }

// export default Flights;


















import "./Flights.css";

import {
  useNavigate,
  useLocation
} from "react-router-dom";

import {
  useEffect,
  useState
} from "react";

import { useCart } from "../context/CartContext";

function Flights() {

  const navigate = useNavigate();

  const location = useLocation();

  const { addToCart } = useCart();

  const { from, to, date } =
    location.state || {};

  const [flights, setFlights] =
    useState([]);

  // FETCH FLIGHTS

  useEffect(() => {

    fetch(
      "http://localhost:5000/api/flights"
    )

      .then((res) => res.json())

      .then((data) => {

        console.log(data);

        setFlights(data);

      })

      .catch((err) =>
        console.log(err)
      );

  }, []);

  // FILTER FLIGHTS

  const filteredFlights =
    flights.filter((item) => {

      return (


        item.from?.trim().toLowerCase() === 
        from?.trim().toLowerCase() &&
        item.to?.trim().toLowerCase() === to?.trim().
        toLowerCase()&&
        

        

        item.date?.slice(0,10) === date

      );

    });

  return (

    <div className="card-section">

      {

        filteredFlights.length > 0 ? (

          filteredFlights.map((item) => (

            <div
              className="flight-card"
              key={item._id}
            >

              {/* TOP */}

              <div className="flight-top">

                <div className="city-box">

                  <p>From</p>

                  <h2>{item.from}</h2>

                </div>

                <div className="flight-icon">
                  ✈️
                </div>

                <div className="city-box">

                  <p>To</p>

                  <h2>{item.to}</h2>

                </div>

              </div>

              {/* LINE */}

              <div className="flight-middle">

                <div className="line"></div>

              </div>

              {/* BOTTOM */}

              <div className="flight-bottom">

                <div className="time-box">

                  <p>Flight Time</p>

                  <h3>
                    {item.departureTime}
                    {" - "}
                    {item.arrivalTime}
                  </h3>

                  <p>
                    {item.airline}
                  </p>

                </div>

                <div className="price-box">

                  <h2>
                    ₹{item.price}
                  </h2>

                  <button

                    onClick={() => {

                      addToCart(item);

                      navigate("/booking");

                    }}

                  >

                    Book Now

                  </button>

                </div>

              </div>

            </div>

          ))

        ) : (

          <h2
            style={{
              textAlign: "center",
              marginTop: "100px"
            }}
          >

            No Flights Available

          </h2>

        )

      }

    </div>

  );

}

export default Flights;