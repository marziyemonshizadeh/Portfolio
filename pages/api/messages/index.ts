import MessageModel from "@/models/message.js";
import type { NextApiRequest, NextApiResponse } from 'next';
const { default: connectToDB } = require("@/utils/db");

type Data = {
  name: string,
  email: string,
  subject: string,
  body: string,
  message: string,
}

const handler = async (req: NextApiRequest,
  res: NextApiResponse) => {
  connectToDB();
  if (req.method === "GET") {
    console.log(req.query);
    // if (req.query.q) {
    //   const { q } = req.query;
    //   const messages = await MessageModel.find({ name: { $regex: q } });
    //   res.json(messages);
    // } else {
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
