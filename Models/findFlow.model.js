// backend logic for flow database
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flowSchema = mongoose.Schema({
  flow: { type: Schema.Types.ObjectId, ref: "flow" },
});

// console.log(flowSchema);

const findFlowModel = mongoose.model("findflow", flowSchema);

// console.log(flow);

module.exports = findFlowModel;
