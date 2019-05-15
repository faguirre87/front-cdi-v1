const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const ResultLib = require("../libs/result");
const Result = new ResultLib();

router.get("/resultPadre/:id", (req, res) => {
  Result.getResultPadre(req.params.id)
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.send(err.status);
  });
});

router.get("/result", (req, res) => {
  Result.getResult(req.params.id)
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.send(err.status);
  });
});

module.exports = router;
