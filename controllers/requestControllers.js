"use strict";

const Request = require("./../models/requestModel");

exports.getAllRequest = async (req, res) => {
  try {
    const requests = await Request.find();

    res.status(200).json({
      status: "success",
      result: requests.length,
      data: { requests },
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.getRequest = async (req, res) => {
  try {
    const request = await Request.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: request,
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.createRequest = async (req, res) => {
  const newRequest = await Request.create(req.body);

  try {
    res.status(201).json({
      status: "success",
      data: {
        user: newRequest,
      },
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateRequest = async (req, res) => {
  try {
    const request = await Request.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      requestAt: req.requestTime,
      data: {
        request,
      },
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteRequest = async (req, res) => {
  try {
    await Request.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      requestAt: req.requestTime,
      massage: "successful",
    });
  } catch {
    res.status(400).send(err);
  }
};
