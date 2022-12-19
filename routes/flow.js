var express = require("express");
var router = express.Router();
const flowModel = require("../Models/flow.model");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Flows will be here!");
});

router.post("/", async (req, res, next) => {
  const flow = await flowModel.create({ data: req.body.newData.localStorage });
  res.send(flow);
});

module.exports = router;
