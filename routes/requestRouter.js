"use strict";

const express = require("express");
const router = express.Router();

const requestController = require("./../controllers/requestControllers");

router
  .route("/")
  .get(requestController.getAllRequest)
  .post(requestController.createRequest);

router
  .route("/:id")
  .get(requestController.getRequest)
  .patch(requestController.updateRequest)
  .delete(requestController.deleteRequest);

module.exports = router;
