import { connectDB } from "@/util/database";

import ListItem from "./ListItem";

import { Board } from "@/types/dataType";

export const dynamic = "force-dynamic";

async function List() {
  const db = (await connectDB).db("board");
  const result = (await db.collection("board").find().toArray()).map((a) => ({
    ...a,
    _id: a._id.toString(),
  }));

  return (
    <div className="list-bg">
      <ListItem result={result as Board[]} />
    </div>
  );
}

export default List;
