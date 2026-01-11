const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "payment-service up" });
});

app.post("/payments", (req, res) => {
  res.json({ paymentId: 1, status: "SUCCESS" });
});

app.listen(3000, () => console.log("Payment service running"));
