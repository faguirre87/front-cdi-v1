const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { verifyToken } = require("./server/middlewares/authentication");

app.use(function(req, res, next) {
  console.log(`${req.method} - ${req.path}`);
  next();
});

// Point static path to public
app.use(express.static(path.join(__dirname, "public")));

// Parsers for POST data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
// Set our api routes
app.use("/api/auth", require("./server/routes/auth.router"));
app.use("/api/user", require("./server/routes/user.router"));
app.use("/api/children", require("./server/routes/children.router"));
app.use("/api/survey", require("./server/routes/survey.router"));
app.use("/api/result", require("./server/routes/result.router"));

// Catch all other routes and return the index file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/home", verifyToken,(req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/mostrar-datos", verifyToken,(req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/resultados", verifyToken,(req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/resultado-padre", verifyToken,(req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/carga", verifyToken,(req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/a01", verifyToken,(req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/a02", verifyToken,(req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/a03", verifyToken,(req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/a04", verifyToken,(req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/a05", verifyToken,(req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/a06", verifyToken,(req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/a07", verifyToken,(req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/a08", verifyToken,(req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/a09", verifyToken,(req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/a10", verifyToken,(req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/a11", verifyToken,(req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/a12", verifyToken,(req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/a13", verifyToken,(req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/a14", verifyToken,(req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/a15", verifyToken,(req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/a16", verifyToken,(req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/a17", verifyToken,(req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/a18", verifyToken,(req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/a19", verifyToken,(req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/a20", verifyToken,(req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/a21", verifyToken,(req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/a22", verifyToken,(req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/a23", verifyToken,(req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(process.env.PORT || 3000, () => {
  if (!process.env.NODE_ENV) {
    console.log(`SERVER STARTED IN http://localhost:3000`);
  }
});
