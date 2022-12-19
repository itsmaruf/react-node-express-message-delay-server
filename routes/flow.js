var express = require("express");
var router = express.Router();
const flowModel = require("../Models/flow.model");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Flows will be here!");
});

router.post("/", async (req, res, next) => {
  // console.log(req.body);
  const flow = req.body.newData;
  // let newflowData = new flowModel(req.body);
  const newFlowData = new flowModel(flow);

  console.log(flow);

  // save data into database using mongoose schema
  newFlowData.save(function (err, newFlow) {
    if (err) {
      return next(err);
    } else {
      res.send({
        status: "200",
        message: "flow info saved successfully",
        flowObj: newFlow,
        success: true,
      });
    }
  });
});

module.exports = router;
