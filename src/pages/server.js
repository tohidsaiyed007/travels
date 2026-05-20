
const express = require("express");
const cors = require("cors");
const Razorpay = require("razorpay");
const crypto = require("crypto"); // 👈 ADD THIS

const app = express();

app.use(cors());
app.use(express.json());

// 🔑 Razorpay instance
const razorpay = new Razorpay({
  key_id: "rzp_test_abc123xyz",
  key_secret: "testsecret123456",
});

// 🧾 Order create API
app.post("/create-order", async (req, res) => {
  try {
    const options = {
      amount: req.body.amount * 100,
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error creating order");
  }
});


// ✅ 🔥 VERIFY API (यह missing था)
app.post("/verify", (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const sign = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSign = crypto
    .createHmac("sha256", "testsecret123456") // 👈 same secret
    .update(sign.toString())
    .digest("hex");

  if (expectedSign === razorpay_signature) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});


// टेस्ट route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});