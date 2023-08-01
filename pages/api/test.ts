import { connectDB } from "@/util/database";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const db = (await connectDB).db("board");
    const board = db.collection("board");

    board.insertOne(req.body);
    return res.status(201).json("ok");
  }
  return res.status(200).json("done");
}
