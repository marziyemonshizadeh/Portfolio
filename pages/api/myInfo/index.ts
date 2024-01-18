import MyInfoModel from "@/models/myInfo";
import type { NextApiRequest, NextApiResponse } from 'next';
const { default: connectToDB } = require("@/utils/db");

const handler = async (req: NextApiRequest,
  res: NextApiResponse) => {
  connectToDB();
  if (req.method === "GET") {
      const myInfo = await MyInfoModel.find({});
      return res.json(myInfo);
  }
};
export default handler;
