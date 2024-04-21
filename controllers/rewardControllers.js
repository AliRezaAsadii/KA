"use strict";

const Reward = require("./../models/rewardModel");

exports.getAllReward = async (req, res) => {};

exports.getReward = async (req, res) => {};

exports.createReward = async (req, res) => {
  const newReward = await Reward.create(req.body);

  try {
    res.status(201).json({
      status: "success",
      data: {
        user: newReward,
      },
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateReward = async (req, res) => {};

exports.deleteReward = async (req, res) => {};
