// backend logic for flow database
const mongoose = require("mongoose");

const flowSchema = mongoose.Schema({
  data: {},
});

// console.log(flowSchema);

const flowModel = mongoose.model("flow", flowSchema);

// console.log(flow);

module.exports = flowModel;
