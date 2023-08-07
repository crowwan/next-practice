import { connectDB } from "@/util/database";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    if (req.body.email === "" || req.body.password === "")
      return res.status(500).json("empty request body");
    try {
      const db = (await connectDB).db("board");

      const users = db.collection("user");
      const user = await users.findOne({
        email: req.body.email,
      });

      if (user) return res.status(401).json("user already exists");

      users.insertOne({
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
      });

      return res.redirect(302, "/");
    } catch {
      return res.status(501).json("database error");
    }
  }
}
