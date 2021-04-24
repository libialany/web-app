var express = require("express");
var path = require("path");
var fs = require("fs");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var user = require("./routes/user.route.js");
var app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
mongoose
  .connect("mongodb://localhost/user", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
app.use(bodyParser.json());
app.get("/", res.sendFile(path.join(__dirname, "index.html")));
app.get("/profile-picture", (req, res) => {
  var img = fs.readFileSync("logo2.jpg");
  res.writeHead(200, { "Content-Type": "image/jpg" });
  res.end(img, "binary");
});
app.route("/get-profile").get(user.getusers);
app.route("/update-profile").post(user.postuser);

app.listen(3030);
