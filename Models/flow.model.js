// backend logic for flow database
const mongoose = require("mongoose");

const flowSchema = mongoose.Schema({
  data: Object,
});

const flowModel = mongoose.model("flow", flowSchema);

module.exports = flowModel;
