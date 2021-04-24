let mongoose = require("mongoose");

let user = require("./../models/user.js");

function getusers(req, res) {
  //Query the DB and if no errors, send all the users
  let query = user.find({});
  query.exec((err, users) => {
    if (err) res.send(err);
    //If no errors, send them back to the client
    res.json(users);
  });
}

/*
 * POST /user to save a new user.
 */
function postuser(req, res) {
  //Creates a new user
  var newuser = new user(req.body);
  //Save it into the DB.
  newuser.save((err, user) => {
    if (err) {
      res.send(err);
    } else {
      //If no errors, send it back to the client
      res.json({ message: "user successfully added!", user });
    }
  });
}
module.exports = { getusers, postuser };
