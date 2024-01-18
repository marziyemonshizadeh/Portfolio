import ProjectModel from "@/models/project";
import type { NextApiRequest, NextApiResponse } from 'next';
const { default: connectToDB } = require("@/utils/db");

const handler = async (req: NextApiRequest,
  res: NextApiResponse) => {
  connectToDB();
  if (req.method === "GET") {
      const projects = await ProjectModel.find({});
      return res.json(projects);
  }
};
export default handler;
