import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) return res.status(401).json("Unauthorized");
  if (req.method === "POST") {
    const db = (await connectDB).db("board");

    await db
      .collection("board")
      .insertOne({ ...req.body, author: session?.user?.email });
    return res.redirect(302, "/list");
  }
  if (req.method === "DELETE") {
    try {
      const db = (await connectDB).db("board");

      const found = await db.collection("board").findOne({
        _id: new ObjectId(req.query.id as string),
      });

      if (found?.author === session?.user?.email) {
        await db
          .collection("board")
          .deleteOne({ _id: new ObjectId(req.query.id as string) });
        return res.status(200).json("ok");
      } else {
        return res.status(500).json("Deletion denied");
      }
    } catch (err) {
      return res.status(500).json("error occured");
    }
  }
  return res.status(200).json("done");
}
