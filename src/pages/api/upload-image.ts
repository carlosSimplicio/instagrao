import { s3client } from "@/utils/s3client";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { NextApiRequest, NextApiResponse } from "next";
import multiparty from "multiparty";
import * as fs from "fs/promises";

const BUCKET = "instagrao-bucket";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const form = new multiparty.Form({
    autoFiles: false,
  });

  form.parse(req, async (err, _, files) => {
    const fileBuffer = await fs.readFile(files.file[0].path);
    const data = await s3client.send(
      new PutObjectCommand({
        Bucket: BUCKET,
        Key: files.file[0].originalFilename,
        Body: fileBuffer,
      })
    );
    console.log(data);
    res.status(200).json("Olá meu querido");
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
