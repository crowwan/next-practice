import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const currentDate = new Date().getDate();
    const currentTime = new Date().getTime();

    return res.status(200).json({ currentDate, currentTime });
  }
}
