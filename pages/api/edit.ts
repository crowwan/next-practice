import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    if (req.body.title === "") return res.status(500).json("title required");
    try {
      const db = (await connectDB).db("board");
      await db
        .collection("board")
        .updateOne(
          { _id: new ObjectId(req.body.id) },
          { $set: { title: req.body.title, content: req.body.content } }
        );
      res.redirect(302, "/list");
    } catch (err) {
      console.error(err);
      return res.status(500).json("database error");
    }
  }
}
