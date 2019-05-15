const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const UserLib = require("../libs/user");
const User = new UserLib();

router.post("/login", (req, res) => {
  const username = req.body.username,
    secretWord = req.body.secretWord;

  User.validateEmailAndPassword({ username, secretWord })
    .then(user => {
      const jwtBearerToken = jwt.sign(
        {
          user
        },
        "lalalala",
        { expiresIn: 60 * 60 }
      );

      res.cookie("SESSIONID", jwtBearerToken, {
        httpOnly: false,
        secure: false
      });
      res.json({ ok: true, user });
    })
    .catch(err => {
      res.status(500).json({ ok: false, err });
    });
});

module.exports = router;
