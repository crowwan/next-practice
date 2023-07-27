import { connectDB } from "@/util/database";

export default function Home() {
  (async () => {
    const client = await connectDB;
    const db = client.db("board");
    const result = await db.collection("board").find().toArray();
    console.log(result);
  })();

  return (
    <div>
      <h4 className="title">애플 후래시</h4>
      <p className="title-sub">by dev</p>
    </div>
  );
}
