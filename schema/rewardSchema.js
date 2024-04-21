"use strict";

const mongoose = require("mongoose");

const rewardSchema = new mongoose.Schema({
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
  paidToken: {
    type: Number,
    required: [true],
  },
  requestDate: {
    type: Date,
  },
  checkDate: {
    type: Date,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

exports.rewardSchema = rewardSchema;
