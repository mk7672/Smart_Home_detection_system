const s3 = require("../config/s3");
const fs = require("fs");

const uploadToS3 = async (filePath, fileName) => {
  const fileContent = fs.readFileSync(filePath);

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: fileName,
    Body: fileContent,
    ContentType: "image/jpeg",
  };

  const data = await s3.upload(params).promise();

  return data; // contains Location (URL)
};

module.exports = uploadToS3;