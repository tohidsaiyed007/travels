
// console.log("🔥 THIS SERVER IS RUNNING FILE:", __filename);

// require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const bookingRoutes = require("./routes/bookingRoutes");
// const adminRoutes = require("./routes/adminRoutes");

// const app = express();

// /* CORS */
// app.use(cors({
//   origin: "http://localhost:3000",
//   methods: ["GET", "POST", "DELETE"],
//   credentials: true
// }));

// app.use(express.json());

// /* ROUTES */
// app.use("/", bookingRoutes);
// app.use("/admin", adminRoutes);

// /* TEST ROUTE */
// app.get("/test", (req, res) => {
//   res.json({
//     ok: true,
//     message: "Backend Working 🚀"
//   });
// });

// /* HOME ROUTE */
// app.get("/", (req, res) => {
//   res.send("Backend Running 🚀");
// });

// /* START SERVER AFTER DB CONNECT */
// mongoose.connect(process.env.MONGO_URI)
// .then(() => {

//   console.log("MongoDB Connected ✅");

//   app.listen(5000, () => {
//     console.log("Server Started On Port 5000");
//   });

// })
// .catch((err) => {
//   console.log("❌ MongoDB Error:", err.message);
// });












console.log("🔥 THIS SERVER IS RUNNING FILE:", __filename);

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const bookingRoutes = require("./routes/bookingRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

/* CORS */
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "DELETE"],
  credentials: true
}));

/* BODY PARSER */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* UPLOADS FOLDER */
app.use(
  "/uploads",
  express.static("uploads")
);

/* ROUTES */
app.use("/", bookingRoutes);
app.use("/admin", adminRoutes);

/* TEST ROUTE */
app.get("/test", (req, res) => {

  res.json({
    ok: true,
    message: "Backend Working 🚀"
  });

});

/* HOME ROUTE */
app.get("/", (req, res) => {

  res.send("Backend Running 🚀");

});

/* START SERVER AFTER DB CONNECT */

mongoose.connect(process.env.MONGO_URI)

.then(() => {

  console.log("MongoDB Connected ✅");

  app.listen(5000, () => {

    console.log(
      "Server Started On Port 5000"
    );

  });

})

.catch((err) => {

  console.log(
    "❌ MongoDB Error:",
    err.message
  );

});