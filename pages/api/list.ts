import { connectDB } from "@/util/database";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const db = (await connectDB).db("board");
    const result = await db.collection("board").find().toArray();

    return res.status(200).json(result);
  }
}
