const express = require("express");
const {readFile} = require("../services/AwsService.js");
const sharp = require("sharp");
const router = express.Router();

router.get("/:imageId", async (req,res)=>{

    const imageByteArray = await readFile("abc.png");

    const result = await sharp(imageByteArray)
                    .toBuffer();

    res.setHeader("Content-Type","image/png");
    res.send(result);

});

router.get("/", async (req,res)=>{
    
    res.send("Working...");

});

module.exports = router;