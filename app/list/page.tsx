"use client";

import { useState } from "react";

function List() {
  let products = ["Tomatoes", "Pasta", "Coconut"];

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {products.map((product, i) => (
        <ListItem name={product} index={i} key={product} />
      ))}
    </div>
  );
}

export default List;

function ListItem({ name, index }: { name: string; index: number }) {
  const [count, setCount] = useState(0);

  const onClickBtn = (num: number) => () => {
    setCount((prev) => prev + num);
  };

  return (
    <div className="food">
      <img src={`/food${index}.png`} className="food-img" />
      <h4>{name} $40</h4>
      <span> 상품 수량 : {count}</span>
      <button onClick={onClickBtn(-1)}> - </button>
      <button onClick={onClickBtn(1)}> + </button>
    </div>
  );
}
