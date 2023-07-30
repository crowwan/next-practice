import { connectDB } from "@/util/database";

function List() {
  (async () => {
    const db = (await connectDB).db("board");
    const result = await db.collection("board").find().toArray();
    console.log(result);
  })();

  return (
    <div className="list-bg">
      <div className="list-item">
        <h4>글제목</h4>
        <p>1월 1일</p>
      </div>
      <div className="list-item">
        <h4>글제목</h4>
        <p>1월 1일</p>
      </div>
      <div className="list-item">
        <h4>글제목</h4>
        <p>1월 1일</p>
      </div>
    </div>
  );
}

export default List;
