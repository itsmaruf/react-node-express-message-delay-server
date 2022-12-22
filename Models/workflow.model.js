// backend logic for workflow database
const mongoose = require("mongoose");

const workflowSchema = mongoose.Schema({
  userId: Number,
  workflow: [],
  status: {
    type: Boolean,
    default: false,
  },
});

const workflowModel = mongoose.model("workflow", workflowSchema);

module.exports = workflowModel;
