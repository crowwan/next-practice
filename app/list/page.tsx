import { connectDB } from "@/util/database";
import Link from "next/link";

async function List() {
  const db = (await connectDB).db("board");
  const result = await db.collection("board").find().toArray();

  return (
    <div className="list-bg">
      {result.map((item) => (
        <Link href={`/detail/${item._id}`}>
          <div className="list-item" key={JSON.stringify(item._id)}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default List;
