import LibrariesModel from "@/models/library";
import type { NextApiRequest, NextApiResponse } from 'next';
const { default: connectToDB } = require("@/utils/db");

const handler = async (req: NextApiRequest,
  res: NextApiResponse) => {
  connectToDB();
  if (req.method === "GET") {
      const libraries = await LibrariesModel.find({});
      return res.json(libraries);
  }
};
export default handler;
