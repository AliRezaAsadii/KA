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

exports.updateReward = async (req, res) => {
  try {
    const reward = await Reward.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    console.log(reward);

    res.status(200).json({
      status: "success",
      requestAt: req.requestTime,
      data: {
        reward,
      },
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteReward = async (req, res) => {
  try {
    await Reward.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      requestAt: req.requestTime,
      massage: "successful",
    });
  } catch {
    res.status(400).send(err);
  }
};
