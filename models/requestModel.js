"use strict";

const mongoose = require("mongoose");
const { requestSchema } = require("./../schema/requestSchema");

const Request = mongoose.model("User", requestSchema);

module.exports = Request;
