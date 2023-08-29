import { connectDB } from "@/util/database";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    return res.status(200).json("ok");
  }
  if (req.method === "POST") {
    const db = (await connectDB).db("board");

    await db.collection("like").insertOne(JSON.parse(req.body));

    return res.status(201).json("created");
  }
}
