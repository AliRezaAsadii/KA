"use strict";

const express = require("express");

const app = express();

//* Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log("Hello from the middleware!");
  next();
});
module.exports = app;
