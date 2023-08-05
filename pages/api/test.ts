import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const db = (await connectDB).db("board");

    await db.collection("board").insertOne(req.body);
    return res.redirect(302, "/list");
  }
  if (req.method === "DELETE") {
    try {
      const db = (await connectDB).db("board");

      await db
        .collection("board")
        .deleteOne({ _id: new ObjectId(req.query.id as string) });

      return res.status(200).json("ok");
    } catch (err) {
      return res.status(500).json("error occured");
    }
  }
  return res.status(200).json("done");
}
