"use strict";

const express = require("express");

const userRouter = require("./routes/userRouter");
const requestRouter = require("./routes/requestRouter");

const app = express();

//* Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log("Hello from the middleware!");
  next();
});

app.use(express.json());

app.use("/ka/users", userRouter);
app.use("/ka/request", requestRouter);

module.exports = app;
