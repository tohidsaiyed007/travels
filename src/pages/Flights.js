// import "./Flights.css";

// function Flights() {

//   const flights = [
//     { from: "Delhi", to: "Mumbai", price: "₹4,999", time: "08:00 AM - 10:30 AM" },
//     { from: "Jaipur", to: "Bangalore", price: "₹6,499", time: "11:00 AM - 02:00 PM" },
//     { from: "Jodhpur", to: "Dubai", price: "₹18,999", time: "06:00 AM - 10:00 AM" },
//     { from: "Ahmedabad", to: "Goa", price: "₹5,499", time: "09:30 AM - 11:30 AM" },
//     { from: "Mumbai", to: "Kolkata", price: "₹7,299", time: "01:00 PM - 03:30 PM" },
//     { from: "Delhi", to: "Hyderabad", price: "₹6,999", time: "07:00 PM - 09:30 PM" }
//   ];

//   return (
//     <div className="card-section">
//       {flights.map((item, index) => (
//         <div className="flight-card" key={index}>
          
//           <div className="route">
//             <h3>{item.from} → {item.to}</h3>
//             <p>{item.time}</p>
//           </div>

//           <div className="price">
//             <h2>{item.price}</h2>
//             <button>Book Now</button>
//           </div>

//         </div>
//       ))}
//     </div>
//   );
// }

// export default Flights;



import "./Flights.css";

function Flights() {

  const flights = [
    {
      from: "Jhunjhu",
      to: "oman",
      price: "₹4,999",
      time: "08:00 AM - 10:30 AM"
    },

    {
      from: "Jaipur",
      to: "Bangalore",
      price: "₹6,499",
      time: "11:00 AM - 02:00 PM"
    },

    {
      from: "Jodhpur",
      to: "Dubai",
      price: "₹18,999",
      time: "06:00 AM - 10:00 AM"
    },

    {
      from: "Ahmedabad",
      to: "Goa",
      price: "₹5,499",
      time: "09:30 AM - 11:30 AM"
    },

    {
      from: "Mumbai",
      to: "Kolkata",
      price: "₹7,299",
      time: "01:00 PM - 03:30 PM"
    },

    {
      from: "Delhi",
      to: "Hyderabad",
      price: "₹6,999",
      time: "07:00 PM - 09:30 PM"
    }
  ];

  return (

    <div className="card-section">

      {flights.map((item, index) => (

        <div className="flight-card" key={index}>

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

          <div className="flight-middle">
            <div className="line"></div>
          </div>

          <div className="flight-bottom">

            <div className="time-box">
              <p>Flight Time</p>
              <h3>{item.time}</h3>
            </div>

            <div className="price-box">
              <h2>{item.price}</h2>
              <button>Book Now</button>
            </div>

          </div>

        </div>

      ))}

    </div>

  );
}

export default Flights;
