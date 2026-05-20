// import "./Flights.css";

// import {
//   useNavigate,
//   useLocation
// } from "react-router-dom";

// import {
//   useEffect,
//   useState
// } from "react";

// import { useCart } from "../context/CartContext";

// function Flights() {

//   const navigate = useNavigate();

//   const location = useLocation();

//   const { addToCart } = useCart();

//   const { from, to, date } =
//     location.state || {};

//   const [flights, setFlights] =
//     useState([]);

//   // FETCH FLIGHTS

//   useEffect(() => {

//     fetch(
//       "https://saiyed-travels-backend-1.onrender.com/api/flights"
//     )

//       .then((res) => res.json())

//       .then((data) => {

//         console.log(data);

//         setFlights(data);

//       })

//       .catch((err) =>
//         console.log(err)
//       );

//   }, []);

//   // FILTER FLIGHTS

//   const filteredFlights =
//     flights.filter((item) => {

//       return (


//         item.from?.trim().toLowerCase() === 
//         from?.trim().toLowerCase() &&
//         item.to?.trim().toLowerCase() === to?.trim().
//         toLowerCase()&&
        

        

//         item.date?.slice(0,10) === date

//       );

//     });

//   return (

//     <div className="card-section">

//       {

//         filteredFlights.length > 0 ? (

//           filteredFlights.map((item) => (

//             <div
//               className="flight-card"
//               key={item._id}
//             >

//               {/* TOP */}

//               <div className="flight-top">

//                 <div className="city-box">

//                   <p>From</p>

//                   <h2>{item.from}</h2>

//                 </div>

//                 <div className="flight-icon">
//                   ✈️
//                 </div>

//                 <div className="city-box">

//                   <p>To</p>

//                   <h2>{item.to}</h2>

//                 </div>

//               </div>

//               {/* LINE */}

//               <div className="flight-middle">

//                 <div className="line"></div>

//               </div>

//               {/* BOTTOM */}

//               <div className="flight-bottom">

//                 <div className="time-box">

//                   <p>Flight Time</p>

//                   <h3>
//                     {item.departureTime}
//                     {" - "}
//                     {item.arrivalTime}
//                   </h3>

//                   <p>
//                     {item.airline}
//                   </p>

//                 </div>

//                 <div className="price-box">

//                   <h2>
//                     ₹{item.price}
//                   </h2>

//                   <button

//                     onClick={() => {

//                       addToCart(item);

//                       navigate("/booking");

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
      "https://saiyed-travels-backend-1.onrender.com/api/flights"
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

        item.to?.trim().toLowerCase() ===
        to?.trim().toLowerCase() &&

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

                      navigate("/booking", {
                        state: item
                      });

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