import React from "react";

function Write() {
  return (
    <div>
      <h4>글 작성</h4>
      <form action="/api/test" method="POST">
        <input type="text" name="title" />
        <textarea name="content" cols={30} rows={10} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Write;
