var express = require("express");
var router = express.Router();
var cron = require("node-cron");
var shell = require("shelljs");
const flowModel = require("../Models/flow.model");
// const findFlowModel = require("../Models/findFlow.model");
const workflowModel = require("../Models/workflow.model");

const delay = (delay = 0) => {
  return delay;
};

const sendMessage = (email) => {
  console.log("Message Sent to:", email);
};

const ignore = (time) => {
  setTimeout(() => {
    console.log("ignored");
  }, time * 1000);
};
/* GET users listing. */
router.get("/", async (req, res, next) => {
  const flow = await workflowModel.find({ userID: 1 });

  const workflow = flow[0].workflow;

  let length = 0;
  while (length < flow.length) {
    workflow.map((item) => {
      if (item.type === "delay") {
        delay(item.value);
      } else if (item.type === "message") {
        if (delay() >= 6) {
          sendMessage(item.email);
        } else {
          ignore(5);
        }
      }
    });
    length++;
  }
  res.send(workflow);
});

router.post("/", async (req, res, next) => {
  const flow = await workflowModel.create(req.body);
  res.send(flow);
});

module.exports = router;
