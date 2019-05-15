const express = require("express");
const router = express.Router();
const ChildrenLib = require("../libs/children");
const Children = new ChildrenLib();

router.post("/create/:id", (req, res) => {
  Children.create(req.params.id, req.body)
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.json(err);
  });
});

router.get("/get/:id", (req, res) => {
  Children.get(req.params.id)
      .then(data => {
        res.json(data);
  })
      .catch(err => {
        res.send(err.status);
  });
});

module.exports = router;


