const express = require("express");
const dotenv = require("dotenv");
const ImageRouter = require("./routes/ImageRouter.js");

const app = express();
dotenv.config();

app.use("/image",ImageRouter);

const PORT = 5000 || process.env.PORT;
app.listen(5000,()=>{
    console.log(`Image service is running on ${PORT}`);
});