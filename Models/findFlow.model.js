// backend logic for flow database
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flowSchema = mongoose.Schema({
  flow: { type: Schema.Types.ObjectId, ref: "flow" },
});

const findFlowModel = mongoose.model("findflow", flowSchema);

module.exports = findFlowModel;
