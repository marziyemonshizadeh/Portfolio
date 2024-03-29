import connectToDB from "@/utils/db";

const handler = (req, res) => {
  connectToDB();
  res.json({ message: "welcome to portfoli api /index.js page" });
};

export default handler;
