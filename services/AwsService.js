const { S3Client,GetObjectCommand } = require("@aws-sdk/client-s3");
const { NodeHttpHandler } = require("@aws-sdk/node-http-handler");

const s3 = new S3Client({
    region:process.env.AWS_REGION,
    requestHandler: new NodeHttpHandler({
        connectionTimeout: 10000,
        socketTimeout: 30000,
    })
});

const readFile = async (key) =>{
    
    try{

        const { Body } = await s3.send(new GetObjectCommand({
            Bucket: process.env.AWS_BUCKET,
            Key: key
        }));

        const response = await Body.transformToByteArray();

        return response;
    }catch(error){
        console.log("AWS Read Error - "+error);
        return null;
    }

}

module.exports = {readFile};