"use strict";

const Reward = require("./../models/rewardModel");

exports.getAllReward = async (req, res) => {
  try {
    const reward = await Reward.find();

    res.status(200).json({
      status: "success",
      result: reward.length,
      data: { reward },
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.getReward = async (req, res) => {
  try {
    const reward = await Reward.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: reward,
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

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
