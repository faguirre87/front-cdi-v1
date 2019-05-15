const jwt = require("jsonwebtoken");

//
//
//

let verifyToken = (req, res, next) => {
  let cookies = req.headers.cookie;
  let token = parseCookies(cookies).SESSIONID;

  jwt.verify(token, "lalalala", (err, decoded) => {
    if (err) {
      return res.redirect("/");
    }

    req.user = decoded.user;
    next();
  });
};

function parseCookies(cookies) {
  var list = {};
  cookies &&
    cookies.split(";").forEach(function(cookie) {
      var parts = cookie.split("=");
      list[parts.shift().trim()] = decodeURI(parts.join("="));
    });

  return list;
}

module.exports = { verifyToken };
