var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hello young developer. Jenkins is great!");
});

app.listen(process.env.PORT || 3001);
module.exports = app;