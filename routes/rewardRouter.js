"use strict";

const express = require("express");
const router = express.Router();

const rewardController = require("./../controllers/rewardControllers");

router
  .route("/")
  .get(rewardController.getAllReward)
  .post(rewardController.createReward);

router
  .route("/:id")
  .get(rewardController.getReward)
  .patch(rewardController.updateReward)
  .delete(rewardController.deleteReward);

module.exports = router;
