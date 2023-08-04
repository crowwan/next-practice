import { connectDB } from "@/util/database";
import Link from "next/link";
import ListItem from "./ListItem";

import { Board } from "@/types/dataType";

async function List() {
  const db = (await connectDB).db("board");
  const result = await db.collection("board").find().toArray();

  return (
    <div className="list-bg">
      <ListItem result={result as Board[]} />
    </div>
  );
}

export default List;
