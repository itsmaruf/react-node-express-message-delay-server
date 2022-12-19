// backend logic for flow database
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flowSchema = mongoose.Schema({
  data: {},
});

// console.log(flowSchema);

const flowModel = mongoose.model("flow", flowSchema);

// console.log(flow);

module.exports = flowModel;
