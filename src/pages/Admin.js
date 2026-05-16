// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // function Admin() {

// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const navigate = useNavigate();

// //   const handleLogin = async () => {

// //     try {

// //       const response = await fetch(
// //         "http://localhost:5000/admin/login",
// //         {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json"
// //           },
// //           body: JSON.stringify({
// //             email,
// //             password
// //           })
// //         }
// //       );

// //       const data = await response.json();

// //       if (data.success) {

// //         localStorage.setItem("token", data.token);

// //         alert("Login Successful ✅");

// //         navigate("/admin/dashboard");

// //       } else {

// //         alert(data.message);

// //       }

// //     } catch (err) {

// //       console.log(err);

// //       alert("Server Error");

// //     }

// //   };

// //   return (

// //     <div
// //       style={{
// //         minHeight: "100vh",
// //         display: "flex",
// //         justifyContent: "center",
// //         alignItems: "center"
// //       }}
// //     >

// //       <div
// //         style={{
// //           width: "350px",
// //           padding: "30px",
// //           background: "#fff",
// //           borderRadius: "10px",
// //           boxShadow: "0 0 10px rgba(0,0,0,0.1)"
// //         }}
// //       >

// //         <h2>Admin Login</h2>

// //         <input
// //           type="email"
// //           placeholder="Enter Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           style={{
// //             width: "100%",
// //             padding: "10px",
// //             marginTop: "15px"
// //           }}
// //         />

// //         <input
// //           type="password"
// //           placeholder="Enter Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           style={{
// //             width: "100%",
// //             padding: "10px",
// //             marginTop: "15px"
// //           }}
// //         />

// //         <button
// //           onClick={handleLogin}
// //           style={{
// //             width: "100%",
// //             padding: "12px",
// //             marginTop: "20px",
// //             background: "black",
// //             color: "white",
// //             border: "none"
// //           }}
// //         >
// //           Login
// //         </button>

// //       </div>

// //     </div>

// //   );

// // }

// // export default Admin;















// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function Admin() {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   // AUTO LOGIN CHECK

//   useEffect(() => {

//     const token = localStorage.getItem("token");

//     if (token) {

//       navigate("/admin/dashboard");

//     }

//   }, [navigate]);

//   const handleLogin = async () => {

//     try {

//       const response = await fetch(
//         "http://localhost:5000/admin/login",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify({
//             email,
//             password
//           })
//         }
//       );

//       const data = await response.json();

//       if (data.success) {

//         localStorage.setItem(
//           "token",
//           data.token
//         );

//         alert("Login Successful ✅");

//         navigate("/admin/dashboard");

//       } else {

//         alert(data.message);

//       }

//     } catch (err) {

//       console.log(err);

//       alert("Server Error");

//     }

//   };

//   return (

//     <div
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "#0f172a"
//       }}
//     >

//       <div
//         style={{
//           width: "350px",
//           padding: "30px",
//           background: "#1e293b",
//           borderRadius: "15px",
//           boxShadow: "0 0 20px rgba(0,0,0,0.3)"
//         }}
//       >

//         <h2
//           style={{
//             color: "white",
//             textAlign: "center"
//           }}
//         >
//           Admin Login
//         </h2>

//         <input
//           type="email"
//           placeholder="Enter Email"
//           value={email}
//           onChange={(e) =>
//             setEmail(e.target.value)
//           }
//           style={{
//             width: "100%",
//             padding: "12px",
//             marginTop: "20px",
//             borderRadius: "10px",
//             border: "none"
//           }}
//         />

//         <input
//           type="password"
//           placeholder="Enter Password"
//           value={password}
//           onChange={(e) =>
//             setPassword(e.target.value)
//           }
//           style={{
//             width: "100%",
//             padding: "12px",
//             marginTop: "15px",
//             borderRadius: "10px",
//             border: "none"
//           }}
//         />

//         <button
//           onClick={handleLogin}
//           style={{
//             width: "100%",
//             padding: "12px",
//             marginTop: "20px",
//             background: "#38bdf8",
//             color: "white",
//             border: "none",
//             borderRadius: "10px",
//             cursor: "pointer",
//             fontSize: "16px"
//           }}
//         >
//           Login
//         </button>

//       </div>

//     </div>

//   );

// }

// export default Admin;












import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // AUTO LOGIN CHECK

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (token) {

      navigate("/admin/dashboard");

    }

  }, [navigate]);

  const handleLogin = async () => {

    try {

      const response = await fetch(
        "https://travels-tuvk.onrender.com/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            password
          })
        }
      );

      const data = await response.json();

      if (data.success) {

        localStorage.setItem(
          "token",
          data.token
        );

        alert("Login Successful ✅");

        navigate("/admin/dashboard");

      } else {

        alert(data.message);

      }

    } catch (err) {

      console.log(err);

      alert("Server Error");

    }

  };

  return (

    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a"
      }}
    >

      <div
        style={{
          width: "350px",
          padding: "30px",
          background: "#1e293b",
          borderRadius: "15px",
          boxShadow: "0 0 20px rgba(0,0,0,0.3)"
        }}
      >

        <h2
          style={{
            color: "white",
            textAlign: "center"
          }}
        >
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            borderRadius: "10px",
            border: "none"
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
            borderRadius: "10px",
            border: "none"
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            background: "#38bdf8",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Login
        </button>

      </div>

    </div>

  );

}

export default Admin;