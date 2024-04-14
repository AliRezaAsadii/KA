"use strict";

const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A request most have name"],
  },
  title: {
    type: String,
    required: [true, "A request most have title"],
  },
  description: {
    type: String,
    required: [true, "A request most have title"],
  },
  requestDate: {
    type: Date,
  },
  checkDate: {
    type: Date,
  },
  status : {
    type : Boolean,
    default : false,
  }
});

exports.requestSchema = requestSchema