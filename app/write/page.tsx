import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import React from "react";

async function Write() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return <div>로그인이 필요합니다.</div>;
  }
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
