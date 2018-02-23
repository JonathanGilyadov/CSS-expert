const express = require('express')
const app = express()
const PORT = 8080
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


app.use(express.static('client'))
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("customers");
  dbo.collection("customers").find({}).toArray(function(err, res) {
    if (err) throw err;
    console.log(res);
    db.close();
  });
});

app.post("/signUp", function(req, res) {
  let body = "";
  req.on("data", function(data) {
    body += data
  })
  req.on(`end`, function(){
    let jsObject = JSON.parse(body)
    console.log(jsObject.username)
    console.log(typeof(jsObject));
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("customers");
      dbo.collection("customers").insertOne(jsObject, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    });

  })
})

app.post("/signIn", function(req, res) {
  let body = "";
  req.on("data", function(data) {
    body += data
  })
  req.on(`end`, function(){
    let jsObject = JSON.parse(body)
    console.log(jsObject.username)
    console.log(typeof(jsObject));
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("customers");
      dbo.collection("customers").find({username: jsObject.username, password: jsObject.password}).toArray(function(err, result) {
        if (err) throw err;
        if (result.length === 0) {
          res.send({bool: false})
        } else {
          res.send({bool: true})
        }
        db.close();
      });
    });

  })
})

app.listen(PORT, function() {
  console.log("Server is running on port" + PORT)
})
