import ProjectModel from "@/models/project";
import type { NextApiRequest, NextApiResponse } from 'next';
const { default: connectToDB } = require("@/utils/db");

const handler = async (req: NextApiRequest,
  res: NextApiResponse) => {
  connectToDB();
  if (req.method === "GET") {
    console.log(req.query);
      const messages = await ProjectModel.find({});
      return res.json(messages);
  }
};
export default handler;
