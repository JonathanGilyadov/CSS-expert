const express = require('express')
const app = express()
const PORT = 8080


app.use(express.static('client'))

app.post("/", function(req, res) {
  let body = "";
  req.on("data", function(data) {
    body += data
  })
  req.on(`end`, function(){
    let jsObject = JSON.parse(body)
    console.log(jsObject.username)
    console.log(typeof(jsObject));
  })
})

app.listen(PORT, function() {
  console.log("Server is running on port" + PORT)
})
