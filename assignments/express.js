var express = require('express')
  , app = express()
  , morgan = require('morgan')
  , MongoClient = require('mongodb').MongoClient
  , assert = require('assert')
  , url = 'mongodb://localhost:27017/myproject'
;
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  var contacts = db.collection('contacts');
  var entries = [
      {
        first_name: 'Dominic',
        Last_name: 'Summers',
        email: '123@gmail.com',
        phone: '555-555-5555'
      }
    ];

console.log(
  contacts.insert(entries)
);

  db.close();
});


//Routes
//These make things easier
app.get('/', function (req, res) {
  res.send('hello world')
})

//Fallback middleware
app.use(function (req, res) {
  res.send(404, '404 Not Found. :( \n')
  // ^ this is different from connect
})

//Server
var server = app.listen(8000, function() {
  console.log('I am running on port 8000 ...')
})
