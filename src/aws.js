const aws = require("aws-sdk");

export async function getImages() {
  try {
    aws.config.setPromisesDependency();
    aws.config.update({
      accessKeyId: process.env.accessKeyId,
      secretAccessKey: process.env.secretAccessKey,
      region: process.env.region,
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
  } catch (ex) {}
}

export async function uploadImage(file, dirName) {
    aws.config.setPromisesDependency();
    aws.config.update({
      accessKeyId: process.env.accessKeyId,
      secretAccessKey: process.env.secretAccessKey,
      region: process.env.region,
    });

    const s3 = new aws.S3();

    const params = {
      Bucket: "bookmypg-photos",
      ACL: "public-read",
      Key: `${dirName}${file.name}`,
      ContentType: file.type,
      Body: file,
    };
    const responseKey = params.Key;
    s3.upload(params, (err,data)=>{
      if(err) return err
      return data;
    })
    return responseKey;
}
