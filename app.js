const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

let date = new Date();

let options = {
    weekday: "short",
    day: "numeric",
    month: "long"
};

let today = date.toLocaleDateString("en-US", options);

app.get("/", function(req, res){
    
    res.render('list', {nameOfDay:today, newItems:items});
    
});

let items = [];

app.post("/", function(req, res) {
    let item = req.body.newItems;
    items.push(item);
    res.redirect("/");
});


app.listen(3000, function() {
    console.log("server up and running...")
});