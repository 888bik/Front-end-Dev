const express = require("express");

const app = express();

app.get("/login", (req, res, next) => {
  console.log("/login");
  next();
});
app.post("/home", (req, res, next) => {
  console.log("/home");
  next();
});
app.use((req, res, next) => {
  console.log("normal middleware");
});
app.listen(6000, () => {});
