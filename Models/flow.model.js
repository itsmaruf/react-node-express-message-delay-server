// backend logic for flow database
const mongoose = require("mongoose");

const flowSchema = mongoose.Schema({
  message: String,
  delay: Number,
});

const flowModel = mongoose.model("flow", flowSchema);

module.exports = flowModel;
