const express = require("express");

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "payment-service up" });
});

app.post("/payments", (req, res) => {
  res.json({ paymentId: 1, status: "SUCCESS" });
});

module.exports = app;
