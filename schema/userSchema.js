"use strict";

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  username: {
    type: String,
    required: [true, "A user most have username"],
    unique: true,
  },
  grade: {
    type: String,
  },
  rule: {
    type: String,
  },
  apples: {
    type: String,
  },
  rewards: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "A user most have email address"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: Number,
    trim: true,
  },
  dateOfBirth: {
    type: Number,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  token: {
    type: Number,
    default: 0,
  },
});

exports.userSchema = userSchema;
