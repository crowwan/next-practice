import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import React from "react";

async function Edit({ params }: { params: { id: string } }) {
  const db = (await connectDB).db("board");
  const board = await db
    .collection("board")
    .findOne({ _id: new ObjectId(params.id) });

  return (
    <div>
      <h4>수정 페이지</h4>
      <form action="/api/edit" method="POST">
        <input type="text" name="title" defaultValue={board?.title} />
        <textarea
          name="content"
          cols={30}
          rows={10}
          defaultValue={board?.content}
        />
        <input type="text" name="id" defaultValue={board?._id.toString()} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Edit;
