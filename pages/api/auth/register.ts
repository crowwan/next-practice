import { connectDB } from "@/util/database";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    if (req.body.id === "" || req.body.password === "")
      return res.status(500).json("empty request body");
    try {
      const db = (await connectDB).db("board");
      console.log(req.body);
      const users = await db.collection("user");
      const user = await users.findOne({
        id: req.body.id,
        password: req.body.password,
      });

      if (user) return res.status(401).json("user already exists");

      users.insertOne({ id: req.body.id, password: req.body.password });

      return res.status(201).json("ok");
    } catch {
      return res.status(501).json("database error");
    }
  }
}
