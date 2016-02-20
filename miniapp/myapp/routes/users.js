var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var userSchema = mongoose.Schema({
  name: String
});

/* User ----> users */
var User = mongoose.model('User', userSchema);


/* GET users listing. */
router.get('/', function(req, res, next) {
  /* db.users.find( {} )*/
  /* MODELO.find({}  , FUNCTION (ERROR, COLLECTION) )*/

  User.find({}, function(err, users) {
    var user_array = [];
    /*  user_array.push() */
    users.forEach(function(user) {
      user_array.push( user);
    });

    res.send(user_array);
  });

  //res.send('respond with a resource');
});

module.exports = router;
