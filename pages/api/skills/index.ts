import SkillsModel from "@/models/skill";
import type { NextApiRequest, NextApiResponse } from 'next';
const { default: connectToDB } = require("@/utils/db");

const handler = async (req: NextApiRequest,
  res: NextApiResponse) => {
  connectToDB();
  if (req.method === "GET") {
      const skills = await SkillsModel.find({});
      return res.json(skills);
  }
};
export default handler;
