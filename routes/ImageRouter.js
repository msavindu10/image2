const express = require("express");
const {readFile} = require("../services/AwsService.js");
const sharp = require("sharp");
const sizeOf = require("image-size");
const router = express.Router();

router.get("/:imageId", async (req,res)=>{

    const width = req.query.s;

    const imageByteArray = await readFile("abc.png");

    //get image size
    var originalImageWidth = 0;
    var originalImageHeight = 0;
    const dimentions = await sizeOf(imageByteArray);
    originalImageWidth = dimentions.width;
    originalImageHeight = dimentions.height;

    const w = width;
    const h = originalImageHeight / (originalImageWidth/w);
    const result = await sharp(imageByteArray)
                    .resize(parseInt(w),parseInt(h))
                    .toBuffer();

    res.setHeader("Content-Type","image/png");
    res.send(result);

});

router.get("/", async (req,res)=>{
    
    res.send("Working...");

});

module.exports = router;