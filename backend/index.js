const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Node backend 👋");
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
