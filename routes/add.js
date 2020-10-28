const express = require("express");

const router = express.Router();
const Data = require("../models/data");

//get all the datas
router.get("/", async (req, res) => {
    try {
        const datas = await Data.find();
        res.json(datas);
    } catch (err) {
        res.json(err);
    }
});

//submit a data
router.post("/", async (req,res) => {
    console.log(req.body); //check data

    const newData = new Data({
        title: req.body.title,
        description: req.body.description,
        latitude: req.body.latitude,
        longtitude: req.body.longtitude
    });

    try{
        const savedData = await newData.save();
        res.json(savedData);
    }catch{
        res.json({message: err});
    }
});

//find specific post
router.get("/:title", async  (req, res) => {
    try {
        const data = await Data.findById(req.params.title);
        res.json(data);
    }catch{
        res.json({message: err});
    }
});

//delete post
router.delete("/:title", async  (req, res) => {
    try{
        const removedData = await Data.remove({title: req.params.title});
        res.json(removedData);
    }catch{
        res.json({message: err});
    }
});

//update post
router.patch("/:title", async (req, res) => {
    try{
        const updatedData = await Data.updateOne(
            {title: req.params.title},
            {$set: {title: req.body.title}}
        );
        res.json(updatedData);
    }catch{
        res.json({message: err});
    }
});





module.exports = router;