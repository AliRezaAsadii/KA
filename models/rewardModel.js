"use strict";

const mongoose = require("mongoose");
const { rewardSchema } = require("./../schema/rewardSchema");

const Reward = mongoose.model("Reward", rewardSchema);

module.exports = Reward;
