import { Board } from "@/types/dataType";
import Link from "next/link";
import React from "react";

function ListItem({ result }: { result: Board[] }) {
  return (
    <>
      {result.map((item) => (
        <div className="list-item" key={JSON.stringify(item._id)}>
          <h4>
            <Link href={`/detail/${item._id}`}>{item.title}</Link>
          </h4>
          <p>{item.content}</p>
          <Link href={`/edit/${item._id}`}>✏️ edit</Link>
          <button
            onClick={() => {
              fetch("/api/test", { method: "DELETE" }).then((_) =>
                console.log("done")
              );
            }}
          >
            🗑️ delete
          </button>
        </div>
      ))}
    </>
  );
}

export default ListItem;
