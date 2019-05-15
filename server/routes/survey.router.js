const express = require("express");
const router = express.Router();
const SurveyLib = require("../libs/survey");
const Survey = new SurveyLib();

router.post("/post/:id", (req, res) => {
  Survey.postSurvey(req.params.id, req.body)
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.json(err);
  });
});

router.post("/update/:nameSurvey/:id", (req, res) => {
  Survey.updateSurvey(req.params.id, req.params.nameSurvey, req.body)
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.json(err);
  });
});

router.put("/put/:nameSurvey/:id", (req, res) => {
  Survey.putSurvey(req.params.id, req.params.nameSurvey, req.body)
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.json(err);
  });
});

router.get("/get/:id", (req, res) => {
  Survey.getSurvey(req.params.id)
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.send(err.status);
  });
});

module.exports = router;
