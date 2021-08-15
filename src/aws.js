const aws = require("aws-sdk");

const config = {
  bucketName: "bookmypg-photos",
  region: "us-east-2",
  accessKeyId: "AKIAQBHIL4ZTAYRVKU7M",
  secretAccessKey: "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"
}

export async function getImages() {
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
        Bucket: config.bucketName,
        // Key: "property-photos/610524e745e8de3ac8d1aa5b/House-pic1.jpg",
      })
      .promise();
    return {
      data: file.Body,
      mimetype: file.ContentType,
    };
  } catch (ex) {}
}

export async function uploadImage(file, dirName) {
    aws.config.setPromisesDependency();
    aws.config.update({
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey,
      region: config.region,
    });

    const s3 = new aws.S3();

    const params = {
      Bucket: config.bucketName,
      ACL: "public-read",
      Key: `${dirName}${file.name}`,
      ContentType: file.type,
      Body: file,
    };
    const responseKey = params.Key;
    s3.upload(params, (err,data)=>{
      if(err) 
        return err
      else {
        return data;
      }
    })
    return responseKey;
}
