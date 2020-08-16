const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

if (process.env.NODE_ENV !== "production") require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log("server is running on pport" + port);
});

app.post("/payment", async (req, res) => {
  try {
    const { amount } = req.body;
    // Psst. For production-ready applications we recommend not using the
    // amount directly from the client without verifying it first. This is to
    // prevent bad actors from changing the total amount on the client before
    // it gets sent to the server. A good approach is to send the quantity of
    // a uniquely identifiable product and calculate the total price server-side.
    // Then, you would only fulfill orders using the quantity you charged for.

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
    });

    res.status(200).send(paymentIntent.client_secret);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
});
