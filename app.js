
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

//middlewares
app.use(bodyParser.json());
app.use(cors());

//Import Routes
const addRoute = require("./routes/add");

app.use("/add", addRoute);

//ROUTES
app.get("/", (req, res) => {
    res.send("we r one home");
});

app.get("/posts", (req, res) => {
    res.send("we r one posts");
});

//connect to db
mongoose.connect("mongodb+srv://admin:1234@10dayproject.jvfoq.mongodb.net/HotSpot?retryWrites=true&w=majority",
    { useNewUrlParser: true },
    () => console.log("Connect to DB!")
 );


//Listening
app.listen(3000);