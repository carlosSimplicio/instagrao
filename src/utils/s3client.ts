import { S3Client } from "@aws-sdk/client-s3";

const REGION = "us-east-1";

export const s3client = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY || "",
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || "",
  },
});
