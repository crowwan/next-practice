import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import React from "react";

async function Detail({ params }: { params: { id: string } }) {
  const db = (await connectDB).db("board");
  const board = await db
    .collection("board")
    .findOne({ _id: new ObjectId(params.id) });

  return (
    <div>
      <h4>상세 페이지</h4>
      <h4>{board?.title}</h4>
      <p>{board?.content}</p>
    </div>
  );
}

export default Detail;
