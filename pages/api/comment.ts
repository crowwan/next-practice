import { connectDB } from "@/util/database";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (!session?.user) return res.status(401).json("UnAuthorized");
  if (req.method === "POST") {
    const db = (await connectDB).db("board");
    const data = {
      ...JSON.parse(req.body),
      author: session?.user?.email,
    };
    await db.collection("comment").insertOne(data);
    return res.status(201).json("created");
  }
}
