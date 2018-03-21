var express=require("express");
var bodyParser=require("body-parser");
var app=express();
var PORT=process.env.PORT || 8080;

// changing extended to true to fix the issue.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT,function(){
    console.log("http://localhost:"+PORT);
    console.log("https://lit-anchorage-89788.herokuapp.com/");
});