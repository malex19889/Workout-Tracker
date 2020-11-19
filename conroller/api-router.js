const db = require("../models");

module.exports = function (app) {

  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(data => {
      // console.log(data)
      res.status(200).json(data);
    })
      .catch(err => {
        res.status(400).json(err);
      });
  })

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find().then((data) => {
      res.status(200).json(data);
    }).catch(err => {
      res.status(400).json(err);
    });
  });

  app.post("/api/workouts/", ({ body }, res) => {
    db.Workout.create({ body })
      .then((data) => {
        res.status(200).json(data);
      }).catch(err => {
        res.status(400).json(err);
      });
  });

  app.put("/api/workouts/:id", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(
      { _id: params.id }, { exercises: body }
    ).then((data) => {
      res.status(200).json(data);
    }).catch(err => {
      res.status(400).json(err);
    });
  });
};