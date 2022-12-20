var express = require("express");
var router = express.Router();
var cron = require("node-cron");
var shell = require("shelljs");
const flowModel = require("../Models/flow.model");
const findFlowModel = require("../Models/findFlow.model");

/* GET users listing. */
router.get("/", (req, res, next) => {
  // retrive from mongoose database
  // const flow = await flowModel.find().exec((err, data) => {
  //   if (err) return console.error(err);

  //   console.log(data);
  // });

  findFlowModel
    .find()
    .populate("flow")
    .exec(function (err, flows) {
      if (err) return next(err);
      res.status(200).json(flows);
    });

  // cron.schedule("* * * * * *", function () {
  //   console.log("running cron");
  // });
  // res.send("Flows will be here!");
});

router.post("/", async (req, res, next) => {
  const flow = await flowModel.create({ data: req.body.newData.localStorage });
  res.send(flow);
});

module.exports = router;
