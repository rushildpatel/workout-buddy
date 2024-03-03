require("dotenv").config();
const express = require("express");

//express app
const app = express();

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.get("/", (re, res) => {
  res.json({ msg: "welcome to app" });
});

//listen for requests
app.listen(process.env.PORT, () => {
  console.log("server started on port: ", process.env.PORT);
});
