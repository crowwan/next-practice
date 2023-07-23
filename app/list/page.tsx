function List() {
  let products = ["Tomatoes", "Pasta", "Coconut"];
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {products.map((product) => (
        <div className="food">
          <h4>{product} $40</h4>
        </div>
      ))}
    </div>
  );
}

export default List;
