const express = require("express");
const router = express.Router();
const UserLib = require("../libs/user");
const User = new UserLib();
const jwt = require("jsonwebtoken");
// router.post("/register", (req, res) => {
//   User.registerUser(req.body)
//     .then(data => {
//       res.json(data);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

router.get("/get", (req, res) => {
    let cookies = req.headers.cookie;
    let token = parseCookies(cookies).SESSIONID;

    jwt.verify(token, "lalalala", (err, decoded) => {
      if (err) {
        return res.redirect("/");
      }

      User.getUser(decoded.user.username)
      .then(data => res.json(data))
      .catch(err => res.json(err))
    });
});


function parseCookies(cookies) {
  let list = {};
  cookies &&
  cookies.split(";").forEach(function(cookie) {
    let parts = cookie.split("=");
    list[parts.shift().trim()] = decodeURI(parts.join("="));
  });

  return list;
}

module.exports = router;
