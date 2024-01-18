import MessageModel from "@/models/message";
import type { NextApiRequest, NextApiResponse } from 'next';
const { default: connectToDB } = require("@/utils/db");

const handler = async (req: NextApiRequest,
  res: NextApiResponse) => {
  connectToDB();
  if (req.method === "GET") {
      const messages = await MessageModel.find({});
      return res.json(messages);
    // }
  } else if (req.method === "POST") {
    try {
      const { name, email, subject, body } = req.body;
      await MessageModel.create({ name, email, subject, body });
      return res.status(201).json({ message: "message created successfully" });
    } catch (err) {
      return res.status(500).json({ message: "internal server error !!!" });
    }
  }
};
export default handler;
