var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hello World. Jenkins is great!");
});

app.listen(process.env.PORT || 3001);
module.exports = app;