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
      // res.send(flows[0].flow.data);
      var newObj = {};
      const obj = flows[0].flow.data;
      
      for (var i in obj) {
        newObj[i] = obj[i].replaceAll('\\"', "").replaceAll('"', "");
      }

      const keys = Object.keys(newObj);
      const values = Object.values(newObj);
      const newArray = [...keys, ...values];
      // console.log(Object.values(newObj));

      const flag = 0;
      let delayAmount = 0;
      // cron.schedule("* * * * * *", function () {

      // cron.schedule("* * * * * *", function () {
      //   console.log("running cron");
      // });

      let cronCnt = 0;
      var task = cron.schedule(
        "* * * * * *",
        () => {
          values.forEach(function (item, index) {
            if (index === values.length - 1) {
              task.stop();
              return;
            }
            setTimeout(
              () => {
                console.log(index, item);
              },
              isNaN(parseInt) ? 1000 : parseInt(item) * 1000
            );
          });
        },
        {
          scheduled: false,
        }
      );

      task.start();

      // });
      // let it = 0;
      // while (true) {
      //   if (it === keys.length) {
      //     break;
      //   }

      //   it++;
      //   if (!isNaN(values[it])) {
      //     const delayTime = parseInt(values[it]);
      //     const index = it;
      //     // console.log(delayTime * 1000);
      //     setInterval(() => {
      //       console.log(delayTime + " seconds");
      //     }, delayTime * 1000);
      //   }
      // }

      // console.log(newObj);
      res.send(newObj);
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
