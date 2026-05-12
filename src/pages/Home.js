


// import { useState } from "react";
// import "./Home.css";
// import { FaSearch, FaUserFriends } from "react-icons/fa";
// import { MdFlightTakeoff, MdFlightLand } from "react-icons/md";


// function Home() {

//   const [tripType, setTripType] = useState("oneway");
//   const [showPassenger, setShowPassenger] = useState(false);

//   const [passenger, setPassenger] = useState({
//     adult: 1,
//     child: 0,
//     infant: 0
//   });

//   const total = passenger.adult + passenger.child + passenger.infant;

//   const handleChange = (type, value) => {
//     setPassenger({
//       ...passenger,
//       [type]: Math.max(0, passenger[type] + value)
//     });
//   };

//   return (
//     <div className="home">

//       <div className="overlay"></div>

//       {/* 🔥 HERO TEXT */}
//       <div className="hero-text">
//         <h1>Saiyed Travels ᯓ ✈︎</h1>
//         <p>Book flights at best prices & explore the world</p>
//       </div>

//       {/* 🔥 MAIN SEARCH BOX */}
//       <div className="search-container">

//         {/* Tabs */}
//         <div className="tabs">
//           <button 
//             className={tripType === "oneway" ? "active" : ""}
//             onClick={() => setTripType("oneway")}
//           >
//             One Way
//           </button>

//           <button 
//             className={tripType === "round" ? "active" : ""}
//             onClick={() => setTripType("round")}
//           >
//             Round Trip
//           </button>

//           <button>Multi City</button>
//         </div>

//         {/* Inputs Row */}
//         <div className="inputs">

//           <div className="input-box">
//             <MdFlightTakeoff className="icon" />
//             <input type="text" placeholder="From (Departure)" />
//           </div>

//           <div className="input-box">
//             <MdFlightLand className="icon" />
//             <input type="text" placeholder="To (Arrival)" />
//           </div>

//           <div className="input-box">
//             <input type="date" />
//           </div>

//           {tripType === "round" && (
//             <div className="input-box">
//               <input type="date" />
//             </div>
//           )}

//         </div>

//         {/* Passenger */}
//         <div 
//           className="passenger-box"
//           onClick={() => setShowPassenger(!showPassenger)}
//         >
//           <FaUserFriends /> {total} Travellers
//         </div>

//         {/* Dropdown */}
//         {showPassenger && (
//           <div className="dropdown">
//             {["adult","child","infant"].map((type, i) => (
//               <div className="row" key={i}>
//                 <span>
//                   {type === "adult" && "Adult"}
//                   {type === "child" && "Child"}
//                   {type === "infant" && "Infant"}
//                 </span>

//                 <div className="counter">
//                   <button onClick={() => handleChange(type, -1)}>-</button>
//                   <span>{passenger[type]}</span>
//                   <button onClick={() => handleChange(type, 1)}>+</button>
//                 </div>
//               </div>
//             ))}

//             <button 
//               className="apply-btn"
//               onClick={() => setShowPassenger(false)}
//             >
//               Apply
//             </button>
//           </div>
//         )}
  

//         {/* Search Button */}
//         <button className="search-btn">
//           <FaSearch />
//           Search Flights
//         </button>
        
//       </div>
//     </div>
  

  

//   );
// }

// export default Home;
















import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 add
import "./Home.css";
import { FaSearch, FaUserFriends } from "react-icons/fa";
import { MdFlightTakeoff, MdFlightLand } from "react-icons/md";

function Home() {

  const navigate = useNavigate(); // 👈 navigation

  const [tripType, setTripType] = useState("oneway");
  const [showPassenger, setShowPassenger] = useState(false);

  const [passenger, setPassenger] = useState({
    adult: 1,
    child: 0,
    infant: 0
  });

  const total = passenger.adult + passenger.child + passenger.infant;

  const handleChange = (type, value) => {
    setPassenger({
      ...passenger,
      [type]: Math.max(0, passenger[type] + value)
    });
  };

  // 🔥 button click → Flights page
  const handleSearchClick = () => {
    navigate("/flights");
  };

  return (
    <div className="home">

      <div className="overlay"></div>

      {/* HERO */}
      <div className="hero-text">
        <h1 className="Flighat-colur">Saiyed Travels ᯓ ✈︎</h1>
        <p>Book flights at best prices & explore the world</p>
      </div>

      {/* SEARCH BOX */}
      <div className="search-container">

        <div className="tabs">
          <button 
            className={tripType === "oneway" ? "active" : ""}
            onClick={() => setTripType("oneway")}
          >
            One Way
          </button>

          <button 
            className={tripType === "round" ? "active" : ""}
            onClick={() => setTripType("round")}
          >
            Round Trip
          </button>

          <button>Multi City</button>
        </div>

        <div className="inputs">

          <div className="input-box">
            <MdFlightTakeoff className="icon" />
            <input type="text" placeholder="From (Departure)" />
          </div>

          <div className="input-box">
            <MdFlightLand className="icon" />
            <input type="text" placeholder="To (Arrival)" />
          </div>

          <div className="input-box">
            <input type="date" />
          </div>

          {tripType === "round" && (
            <div className="input-box">
              <input type="date" />
            </div>
          )}

        </div>

        <div 
          className="passenger-box"
          onClick={() => setShowPassenger(!showPassenger)}
        >
          <FaUserFriends /> {total} Travellers
        </div>

        {showPassenger && (
          <div className="dropdown">
            {["adult","child","infant"].map((type, i) => (
              <div className="row" key={i}>
                <span>
                  {type === "adult" && "Adult"}
                  {type === "child" && "Child"}
                  {type === "infant" && "Infant"}
                </span>

                <div className="counter">
                  <button onClick={() => handleChange(type, -1)}>-</button>
                  <span>{passenger[type]}</span>
                  <button onClick={() => handleChange(type, 1)}>+</button>
                </div>
              </div>
            ))}

            <button 
              className="apply-btn"
              onClick={() => setShowPassenger(false)}
            >
              Apply
            </button>
          </div>
        )}

        {/* 🔥 UPDATED BUTTON */}
        <button className="search-btn" onClick={handleSearchClick}>
          <FaSearch />
          Search Flights
        </button>

      </div>
    </div>
  );
}

export default Home;