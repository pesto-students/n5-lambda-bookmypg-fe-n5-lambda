// import s3_bucket from "./config";
const aws = require("aws-sdk");
const config = require("./config.json");
export default async function getImages() {
  try {
    aws.config.setPromisesDependency();
    aws.config.update({
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey,
      region: config.region,
    });

    const s3 = new aws.S3();
    const file = await s3
      .listObjects({
        Bucket: "bookmypg-photos",
        // Key: "property-photos/610524e745e8de3ac8d1aa5b/House-pic1.jpg",
      })
      .promise();
    return {
      data: file.Body,
      mimetype: file.ContentType,
    };
  } catch (ex) {
    console.log("Error loading images from s3", ex);
  }
}
