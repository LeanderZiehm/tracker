import {
  S3,
  S3Client,
  ListBucketsCommand,
  type S3ClientConfig,
} from "@aws-sdk/client-s3";

const CF_R2_ENDPOINT = process.env.CF_R2_ENDPOINT;
const CF_AWS_ACCESS_KEY_ID = process.env.CF_AWS_ACCESS_KEY_ID || "";
const CF_AWS_SECRET_ACCESS_KEY = process.env.CF_AWS_SECRET_ACCESS_KEY || "";
const BUCKET_NAME = process.env.R2_BUCKET_NAME;

function get_s3() {
  const conf: S3ClientConfig = {
    region: "auto",
    endpoint: CF_R2_ENDPOINT,
    credentials: {
      accessKeyId: CF_AWS_ACCESS_KEY_ID,
      secretAccessKey: CF_AWS_SECRET_ACCESS_KEY,
    },
  };

  const s3 = new S3Client(conf);
}

// const params = {
//   /** input parameters */
// };
// const command = new ListBucketsCommand(params);

// // async/await.
// try {
//   const data = await client.send(command);
//   // process data.
// } catch (error) {
// 	const { requestId, cfId, extendedRequestId } = error.$metadata;
//   console.log({ requestId, cfId, extendedRequestId });
//   // error handling.
// } finally {
//   // finally.
// }

// const client = new S3Client({ region: "REGION" });
// const s3 = new S3({
//   endpoint: `https://${CF_ACCOUNT_ID}.r2.cloudflarestorage.com`,
//   accessKeyId: `${CF_ACCESS_KEY_ID}`,
//   secretAccessKey: `${CF_SECRET_ACCESS_KEY}`,
//   signatureVersion: "v4",
// });

// console.log(await s3.listBuckets().promise());
// console.log(await s3.listObjects({ Bucket: "my-bucket" }).promise());
