"use strict";

const mongoose = require("mongoose");
const { requestSchema } = require("./../schema/requestSchema");

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;
