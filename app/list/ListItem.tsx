"use client";

import { Board } from "@/types/dataType";
import Link from "next/link";
import React, { useState } from "react";

function ListItem({ result }: { result: Board[] }) {
  return (
    <>
      {result.map((item) => (
        <Item item={item} key={item._id} />
      ))}
    </>
  );
}

function Item({ item }: { item: Board }) {
  const [animate, setAnimate] = useState("");
  return (
    <div className={`list-item ${animate}`}>
      <h4>
        <Link href={`/detail/${item._id}`}>{item.title}</Link>
      </h4>
      <p>{item.content}</p>
      <Link href={`/edit/${item._id}`}>✏️ edit</Link>
      <button
        onClick={(e) => {
          fetch(`/api/test?id=${item._id}`, {
            method: "DELETE",
          })
            .then((res) => {
              if (res.status === 200) {
                return res.json();
              } else {
                return Promise.reject("error occurred");
              }
            })
            .then(() => {
              setAnimate("hide");
              setTimeout(() => {
                setAnimate("none");
              }, 510);
            })
            .catch((err) => {
              console.error(err);
            });
        }}
      >
        🗑️ delete
      </button>
    </div>
  );
}

export default ListItem;
