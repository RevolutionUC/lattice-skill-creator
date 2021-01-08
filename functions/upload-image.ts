import S3 from 'aws-s3';
 
const config = {
    bucketName: 'myBucket',
    dirName: 'icons',
    region: 'eu-west-1',
    accessKeyId: 'keyId',
    secretAccessKey: 'secret',
    s3Url: 'https://my-s3-url.com/',
}
 
const S3Client = new S3(config);
 
export default (iconPath: string) => {
  const newName = 'filename';
  
  S3Client
      .uploadFile(iconPath, newName)
      .then(data => console.log(data))
      .catch(err => console.error(err))
  
    /* {
      Response: {
        bucket: "bucket-name",
        key: "icons/icon.svg",
        location: "https://bucket.s3.amazonaws.com/icons/icon.svg"
      }
    } */
};