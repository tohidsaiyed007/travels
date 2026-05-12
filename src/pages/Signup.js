// // Signup.js

// import React from "react";
// import "./Signup.css";

// import {
//   FaUser,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaLock,
//   FaTimes,
// } from "react-icons/fa";

// function Signup() {

//   return (
//     <div className="signup-page">

//       <div className="signup-box">

//         {/* CLOSE BUTTON */}

//         <div className="close-btn">
//           <FaTimes />
//         </div>

//         {/* TITLE */}

//         <h1 className="signup-title">
//           Register
//         </h1>

//         {/* RADIO BUTTONS */}

//         <div className="radio-box">

//           <label>
//             <input
//               type="radio"
//               name="user"
//               defaultChecked
//             />
//             Customer
//           </label>

//           <label>
//             <input
//               type="radio"
//               name="user"
//             />
//             Agent
//           </label>

//         </div>

//         {/* FORM */}

//         <form className="signup-form">

//           {/* NAME */}

//           <div className="input-group">

//             <FaUser className="input-icon" />

//             <div className="input-field">
//               <label>Name *</label>

//               <input
//                 type="text"
//               />
//             </div>

//           </div>

//           {/* PHONE */}

//           <div className="input-group">

//             <FaPhoneAlt className="input-icon" />

//             <div className="input-field">
//               <label>Whatsapp No. *</label>

//               <input
//                 type="number"
//               />
//             </div>

//           </div>

//           {/* EMAIL */}

//           <div className="input-group">

//             <FaEnvelope className="input-icon" />

//             <div className="input-field">
//               <label>Email *</label>

//               <input
//                 type="email"
//               />
//             </div>

//           </div>

//           {/* PASSWORD */}

//           <div className="password-row">

//             <div className="input-group small">

//               <FaLock className="input-icon" />

//               <div className="input-field">
//                 <label>Password *</label>

//                 <input
//                   type="password"
//                 />
//               </div>

//             </div>

//             <div className="input-group small">

//               <FaLock className="input-icon" />

//               <div className="input-field">
//                 <label>Confirm Password *</label>

//                 <input
//                   type="password"
//                 />
//               </div>

//             </div>

//           </div>

//           {/* BUTTON */}

//           <button className="register-btn">
//             Register
//           </button>

//           {/* LOGIN */}

//           <div className="login-btn">
//             login
//           </div>

//         </form>

//       </div>
//     </div>
//   );
// }

// export default Signup;






// AgentSignup.js

// Signup.js

import React, { useState } from "react";
import "./Signup.css";

import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaLock,
  FaBuilding,
  FaMapMarkerAlt,
  FaCity,
  FaKey,
  FaHome,
  FaIdCard,
  FaTimes,
} from "react-icons/fa";

function Signup() {

  const [userType, setUserType] = useState("customer");

  return (
    <div className="signup-page">

      <div className="signup-box">

        {/* CLOSE BUTTON */}

        <div className="close-btn">
          <FaTimes />
        </div>

        {/* TITLE */}

        <h1 className="signup-title">
          Register
        </h1>

        {/* RADIO */}

        <div className="radio-box">

          <label>
            <input
              type="radio"
              name="user"
              checked={userType === "customer"}
              onChange={() => setUserType("customer")}
            />
            Customer
          </label>

          <label>
            <input
              type="radio"
              name="user"
              checked={userType === "agent"}
              onChange={() => setUserType("agent")}
            />
            Agent
          </label>

        </div>

        {/* FORM */}

        <form className="signup-form">

          {/* NAME */}

          <div className="input-group">

            <FaUser className="input-icon" />

            <div className="input-field">
              <label>Name *</label>
              <input type="text" />
            </div>

          </div>

          {/* PHONE */}

          <div className="input-group">

            <FaPhoneAlt className="input-icon" />

            <div className="input-field">
              <label>Whatsapp No. *</label>
              <input type="number" />
            </div>

          </div>

          {/* EMAIL */}

          <div className="input-group">

            <FaEnvelope className="input-icon" />

            <div className="input-field">
              <label>Email *</label>
              <input type="email" />
            </div>

          </div>

          {/* PASSWORD */}

          <div className="double-row">

            <div className="input-group small">

              <FaLock className="input-icon" />

              <div className="input-field">
                <label>Password *</label>
                <input type="password" />
              </div>

            </div>

            <div className="input-group small">

              <FaLock className="input-icon" />

              <div className="input-field">
                <label>Confirm Password *</label>
                <input type="password" />
              </div>

            </div>

          </div>

          {/* AGENT FIELDS */}

          {
            userType === "agent" && (

              <>

                {/* COMPANY */}

                <div className="input-group">

                  <FaBuilding className="input-icon" />

                  <div className="input-field">
                    <label>Company Name *</label>
                    <input type="text" />
                  </div>

                </div>

                {/* STATE */}

                <div className="input-group">

                  <FaMapMarkerAlt className="input-icon" />

                  <div className="input-field">

                    <label>Select State *</label>

                    <select>
                      <option>Rajasthan</option>
                      <option>Delhi</option>
                      <option>Gujarat</option>
                      <option>Maharashtra</option>
                    </select>

                  </div>

                </div>

                {/* CITY + PINCODE */}

                <div className="double-row">

                  <div className="input-group small">

                    <FaCity className="input-icon" />

                    <div className="input-field">
                      <label>City *</label>
                      <input type="text" />
                    </div>

                  </div>

                  <div className="input-group small">

                    <FaKey className="input-icon" />

                    <div className="input-field">
                      <label>Pincode *</label>
                      <input type="number" />
                    </div>

                  </div>

                </div>

                {/* ADDRESS */}

                <div className="input-group">

                  <FaHome className="input-icon" />

                  <div className="input-field">
                    <label>Address *</label>

                    <textarea rows="3"></textarea>

                  </div>

                </div>

                {/* AADHAR */}

                <div className="input-group">

                  <FaIdCard className="input-icon" />

                  <div className="input-field">
                    <label>Aadhar No.</label>
                    <input type="number" />
                  </div>

                </div>

                {/* PAN */}

                <div className="input-group">

                  <FaIdCard className="input-icon" />

                  <div className="input-field">
                    <label>PAN No.</label>
                    <input type="text" />
                  </div>

                </div>

                {/* GST */}

                <div className="input-group">

                  <FaIdCard className="input-icon" />

                  <div className="input-field">
                    <label>GST No.</label>
                    <input type="text" />
                  </div>

                </div>

              </>

            )
          }

          {/* BUTTON */}

          <button className="register-btn">
            Register
          </button>

          {/* LOGIN */}

          {/* <div className="login-btn">
            login
          </div> */}

          {/* LOGIN */}

<div className="login-btn">
  <a href="/"> Login</a>
</div>

        </form>

      </div>
    </div>
  );
}

export default Signup;