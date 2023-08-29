import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import React from "react";
import Comment from "./Comment";
import Header from "./Header";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

async function Detail({ params }: { params: { id: string } }) {
  const db = (await connectDB).db("board");
  const session = await getServerSession(authOptions);
  const board = await db
    .collection("board")
    .findOne({ _id: new ObjectId(params.id) });
  const likeCount = await db
    .collection("like")
    .countDocuments({ boardId: params.id });

  return (
    <div className="board">
      <h4>상세 페이지</h4>
      <Header
        title={board?.title}
        session={session}
        boardId={params.id}
        likeCount={likeCount}
      />
      <p>{board?.content}</p>
      <Comment parentId={params.id} />
    </div>
  );
}

export default Detail;
